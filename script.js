// Toggle Mobile Menu
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
});

// Animate Skills Bars When in View
const progressBars = document.querySelectorAll('.progress');

function animateProgressBars() {
  progressBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
    if (isVisible) {
      bar.style.width = bar.getAttribute('data-skill-percent');
    }
  });
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);
