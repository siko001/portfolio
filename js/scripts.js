/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', (event) => {
	// Function to toggle section visibility

	function toggleSection(sectionId) {
		const section = document.getElementById(sectionId);
		const sectionTitle = document.querySelector(`[data-section="${sectionId}"]`);
		const arrowDown = sectionTitle.querySelector('.fa-arrow-down');
		const arrowUp = sectionTitle.querySelector('.fa-arrow-up');

		if (section.style.display === 'none' || section.style.display === '') {
			section.style.display = 'block';
			arrowDown.style.display = 'inline';
			arrowUp.style.display = 'none';
		} else {
			section.style.display = 'none';
			arrowDown.style.display = 'none';
			arrowUp.style.display = 'inline';
		}
	}

	// Initial setup: Hide all portfolio sections
	const portfolioSections = document.querySelectorAll('.portfolio-section');
	portfolioSections.forEach(function (section) {
		section.style.display = 'none';
	});
	const sectionTitles = document.querySelectorAll('.section-title');
	sectionTitles.forEach(function (title) {
		title.addEventListener('click', function () {
			const sectionId = title.getAttribute('data-section');

			// Toggle the section
			toggleSection(sectionId);

			// Remove 'active' class from all section titles
			sectionTitles.forEach(function (otherTitle) {
				if (otherTitle !== title) {
					otherTitle.classList.remove('active');
				}
			});

			// Add 'active' class to the clicked section title
			title.classList.toggle('active');
		});
	});
	// Add hover effect for section titles
	sectionTitles.forEach(function (title) {
		title.addEventListener('mouseenter', function () {
			const sectionId = title.getAttribute('data-section');
			const section = document.getElementById(sectionId);
			if (section.style.display === 'none' || section.style.display === '') {
				const arrowDown = title.querySelector('.fa-arrow-down');
				arrowDown.style.display = 'inline';
				const arrowUp = title.querySelector('.fa-arrow-up');
				arrowUp.style.display = 'none';
			}
		});

		title.addEventListener('mouseleave', function () {
			const sectionId = title.getAttribute('data-section');
			const section = document.getElementById(sectionId);
			if (section.style.display === 'none' || section.style.display === '') {
				const arrowDown = title.querySelector('.fa-arrow-down');
				arrowDown.style.display = 'none';
				const arrowUp = title.querySelector('.fa-arrow-up');
				arrowUp.style.display = 'inline';
			}
		});
	});
	// Navbar shrink function
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav');
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink');
		} else {
			navbarCollapsible.classList.add('navbar-shrink');
		}
	};

	// Shrink the navbar
	navbarShrink();

	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink);

	// Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector('#mainNav');
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#mainNav',
			rootMargin: '0px 0px -40%',
		});
	}

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});
});
