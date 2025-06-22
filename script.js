document.addEventListener("DOMContentLoaded", () => {
  console.log("STATSCO Dashboard loaded.");

  // Highlight active nav link (basic placeholder logic)
  const navLinks = document.querySelectorAll('.sidebar nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      e.preventDefault();
    });
  });

  // Sample Chart.js line chart (requires Chart.js to be included in index.html)
  const ctx = document.getElementById('performanceChart');
  if (ctx && window.Chart) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Set 1', 'Set 2', 'Set 3', 'Set 4', 'Set 5'],
        datasets: [{
          label: 'Serve Accuracy (%)',
          data: [72, 85, 78, 90, 83],
          borderColor: '#1e2a60',
          backgroundColor: 'rgba(30, 42, 96, 0.1)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'Match Performance Overview'
          }
        }
      }
    });
  } else {
    console.warn("Chart.js is not loaded or canvas not found.");
  }
});
