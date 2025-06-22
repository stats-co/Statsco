document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('competitionFeed');

  const competitions = [
    {
      name: 'ATP Rome – Men’s Singles',
      matches: [
        { players: 'Djokovic vs Alcaraz', score: '6–3, 5–4', time: 'Live' },
        { players: 'Sinner vs Tsitsipas', score: '7–6, 2–2', time: '2nd Set' }
      ]
    },
    {
      name: 'WTA Rome – Women’s Singles',
      matches: [
        { players: 'Swiatek vs Gauff', score: '6–4, 3–5', time: 'Live' },
        { players: 'Sabalenka vs Jabeur', score: 'Not started', time: '13:00' }
      ]
    }
  ];

  competitions.forEach(comp => {
    const section = document.createElement('section');
    section.className = 'competition-window';

    section.innerHTML = `
      <div class="section-header">
        <span>${comp.name}</span>
        <span>▼</span>
      </div>
      <div class="section-body">
        ${comp.matches.map(m => `
          <div class="match-row">
            <span>${m.players}</span>
            <span>${m.score} • ${m.time}</span>
          </div>`).join('')}
      </div>
    `;

    container.appendChild(section);
  });

  // Toggle sections
  document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
  });
});
