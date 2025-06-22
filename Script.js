// Simple page navigation logic (can be expanded for dynamic content)
document.addEventListener('DOMContentLoaded', function () {
  console.log("STATSCO site loaded.");

  // Example: Highlight current page in nav
  const links = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.textDecoration = 'underline';
    }
  });

  // Placeholder for future API logic:
  // fetch('https
