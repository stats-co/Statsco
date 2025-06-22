document.addEventListener('DOMContentLoaded', () => {
  const matchFeed = document.getElementById('matchFeed');

  // Simulated match data (replace with API later)
  const matches = [
    {
      players: 'Djokovic vs Alcaraz',
      score: '6–3, 3–4',
      serve: 'Alcaraz',
      stats: ['1st Serve: 74%', 'Winners: 22', 'UE: 13'],
      momentum: [60, 40],
      odds: 'Djokovic 1.65 | Alcaraz 2.25'
    },
    {
      players: 'Swiatek vs Gauff',
      score: '7–6, 1–2',
      serve: 'Swiatek',
      stats: ['1st Serve: 68%', 'Winners: 15', 'UE: 11'],
      momentum: [45, 55],
      odds: 'Swiatek 1.80 | Gauff 2.10'
    }
  ];

  function renderMatches() {
    matchFeed.innerHTML = ''; // Clear existing cards
    matches.forEach(match => {
      const card = document.createElement('article');
      card.className = 'match-card';
      card.innerHTML = `
        <header>
          <div class="match-title">🎾 ${match.players}</div>
          <div class="match-meta">Score: ${match.score} • Next: ${match.serve}</div>
        </header>
        <div class="momentum-bar">
          <div class="momentum home" style="width: ${match.momentum[0]}%;"></div>
          <div class="momentum away" style="width: ${match.momentum[1]}%;"></div>
        </div>
        <div class="key-stats">
          <span>${match.stats[0]}</span>
          <span>${match.stats[1]}</span>
          <span>${match.stats[2]}</span>
        </div>
        <div class="odds-bar">💸 ${match.odds}</div>
      `;
      matchFeed.appendChild(card);
    });
  }

  renderMatches();

  // Simulate live updates every 10s
  setInterval(() => {
    matches.forEach(m => {
      m.momentum = [
        Math.floor(Math.random() * 100),
        100 - m.momentum[0]
      ];
    });
    renderMatches();
  }, 10000);
});
