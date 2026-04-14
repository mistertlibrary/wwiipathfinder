/* ============================================================
   WWII RESEARCH PATHFINDER — SCRIPT
   Handles: topic tab navigation, flip card toggle
   ============================================================ */

(function () {
  'use strict';

  /* --- TAB NAVIGATION --- */
  const tabs   = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.topic-panel');

  function activateTopic(targetTopic) {
    tabs.forEach(tab => {
      const isActive = tab.dataset.topic === targetTopic;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive);
    });

    panels.forEach(panel => {
      const isActive = panel.dataset.topic === targetTopic;
      panel.classList.toggle('active', isActive);
    });

    // Scroll to top of main content on topic switch
    const main = document.getElementById('main-content');
    if (main) {
      main.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTopic(tab.dataset.topic));
  });


  /* --- FLIP CARDS --- */
  const cards = document.querySelectorAll('.flip-card');

  function toggleCard(card) {
    const isFlipped = card.classList.contains('flipped');
    card.classList.toggle('flipped', !isFlipped);
    card.setAttribute('aria-pressed', String(!isFlipped));
  }

  cards.forEach(card => {
    // Set initial ARIA state
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');

    card.addEventListener('click', () => toggleCard(card));

    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card);
      }
    });
  });


  /* --- EQUALIZE CARD HEIGHTS WITHIN EACH GRID --- */
  // Runs after fonts load to prevent mis-measurement
  function equalizeCards() {
    const grids = document.querySelectorAll('.cards-grid');
    grids.forEach(grid => {
      // Reset heights first
      grid.querySelectorAll('.flip-card').forEach(c => {
        c.style.height = '';
      });

      // On single-column layouts, skip equalization
      const cols = Math.round(grid.offsetWidth /
        (grid.querySelector('.flip-card')?.offsetWidth || 1));
      if (cols < 2) return;

      // Measure and apply max height
      let maxH = 0;
      grid.querySelectorAll('.flip-card').forEach(c => {
        maxH = Math.max(maxH, c.offsetHeight);
      });

      grid.querySelectorAll('.flip-card').forEach(c => {
        c.style.height = maxH + 'px';
      });
    });
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(equalizeCards);
  } else {
    window.addEventListener('load', equalizeCards);
  }

  window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(equalizeCards, 150);
  });


  /* --- LEGEND STRIP TOGGLE --- */
  const legendToggle = document.querySelector('.legend-strip-toggle');
  const legendDetail = document.getElementById('legend-strip-detail');

  if (legendToggle && legendDetail) {
    legendToggle.addEventListener('click', () => {
      const isOpen = legendToggle.getAttribute('aria-expanded') === 'true';
      legendToggle.setAttribute('aria-expanded', String(!isOpen));
      legendDetail.hidden = isOpen;
      legendToggle.textContent = isOpen ? 'What do these mean?' : 'Close';
    });
  }

})();
