/* ============================================================
   WWII RESEARCH PATHFINDER — STYLESHEET
   WPA / OWI Poster Aesthetic
   Fonts: Bebas Neue (display), Libre Franklin (UI), 
          Lora (body), Courier Prime (card mono)
   ============================================================ */

/* === GOOGLE FONTS IMPORT === */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Franklin:wght@400;600;700;900&family=Lora:ital,wght@0,400;0,600;1,400&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');

/* === CSS VARIABLES === */
:root {
  --navy:       #1B2B4B;
  --navy-dark:  #111D33;
  --cream:      #F5EDD6;
  --tan:        #E4D4AC;
  --red:        #C0392B;
  --red-dark:   #96281B;
  --olive:      #7B7A4D;
  --gold:       #C9A84C;
  --ink:        #1A1A1A;
  --ink-light:  #3A3A3A;
  --muted:      #6B6B5A;

  /* Source type colors */
  --c-primary:  #C0392B;
  --c-secondary:#1B2B4B;
  --c-curated:  #7B7A4D;
  --c-longform: #C9A84C;
  --c-reference:#5B4A8A;

  --font-display: 'Bebas Neue', 'Arial Narrow', sans-serif;
  --font-ui:      'Libre Franklin', 'Franklin Gothic Medium', sans-serif;
  --font-body:    'Lora', Georgia, serif;
  --font-mono:    'Courier Prime', 'Courier New', monospace;

  --card-h:    440px;
  --gap:       1.5rem;
  --radius:    2px;
  --flip-dur:  0.55s;
  --ease:      cubic-bezier(0.4, 0, 0.2, 1);
}

/* === RESET & BASE === */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--cream);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--red-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
}

a:hover { color: var(--red); }

ul { list-style: none; }

/* ============================================================
   SITE HEADER
   ============================================================ */
.site-header {
  background-color: var(--navy);
  color: var(--cream);
  position: relative;
  overflow: hidden;
  padding: 3rem 2rem 2.5rem;
  text-align: center;

  /* Halftone dot texture */
  background-image:
    radial-gradient(circle, rgba(245,237,214,0.12) 1.5px, transparent 1.5px);
  background-size: 8px 8px;
}

.header-inner {
  position: relative;
  z-index: 2;
  max-width: 860px;
  margin: 0 auto;
}

/* Classification stamp line */
.header-classification {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.25rem;
  border: 1px solid var(--gold);
  display: inline-block;
  padding: 0.2em 1em;
}

.site-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.92;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--cream);
  margin-bottom: 0.4rem;
}

.site-subtitle {
  display: block;
  font-family: var(--font-ui);
  font-size: clamp(0.75rem, 2vw, 0.95rem);
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--tan);
  margin-top: 0.5rem;
}

.header-rule {
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--red), var(--cream), var(--red), transparent);
  margin: 1.25rem auto;
  max-width: 500px;
}

.header-intro {
  font-family: var(--font-body);
  font-size: 0.98rem;
  color: var(--tan);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.7;
  font-style: italic;
}

/* WPA geometric decorators */
.header-geo {
  position: absolute;
  width: 90px;
  height: 90px;
  z-index: 1;
  pointer-events: none;
}

.geo-left {
  bottom: 24px;
  left: 24px;
  border: 3px solid var(--red);
  opacity: 0.5;
  transform: rotate(15deg);
}

.geo-left::before {
  content: '';
  position: absolute;
  inset: 6px;
  border: 1px solid var(--red);
}

.geo-right {
  top: 24px;
  right: 24px;
  border: 3px solid var(--cream);
  opacity: 0.15;
  transform: rotate(45deg);
}

/* ============================================================
   TOPIC NAVIGATION
   ============================================================ */
.topic-nav {
  background-color: var(--navy-dark);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 3px solid var(--red);
}

.nav-inner {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-inner::-webkit-scrollbar { display: none; }

.nav-tab {
  flex: 1 0 auto;
  min-width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  border-right: 1px solid rgba(245,237,214,0.08);
  color: rgba(245,237,214,0.6);
  cursor: pointer;
  transition: background var(--flip-dur) var(--ease),
              color var(--flip-dur) var(--ease);
  font-family: var(--font-ui);
}

.nav-tab:last-child { border-right: none; }

.nav-tab:hover {
  background: rgba(192,57,43,0.15);
  color: var(--cream);
}

.nav-tab.active {
  background: var(--red);
  color: var(--cream);
}

.tab-num {
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  line-height: 1;
}

.tab-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
}

/* ============================================================
   MAIN CONTENT AREA
   ============================================================ */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
}

/* ============================================================
   TOPIC PANELS (show/hide)
   ============================================================ */
.topic-panel {
  display: none;
  animation: fadeIn 0.35s ease;
}

.topic-panel.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ============================================================
   TOPIC HEADER
   ============================================================ */
.topic-header {
  text-align: center;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--tan);
  position: relative;
}

.topic-number {
  font-family: var(--font-display);
  font-size: clamp(5rem, 12vw, 9rem);
  line-height: 0.85;
  color: var(--navy);
  opacity: 0.06;
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  pointer-events: none;
  letter-spacing: -0.02em;
}

.topic-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--navy);
  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
}

.topic-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--red);
  margin: 0.6rem auto 0;
}

.topic-intro {
  font-size: 0.97rem;
  color: var(--ink-light);
  max-width: 760px;
  margin: 0 auto;
  line-height: 1.75;
  text-align: left;
}

/* ============================================================
   START HERE CARD
   ============================================================ */
.start-here-card {
  background-color: var(--navy);
  color: var(--cream);
  border-radius: var(--radius);
  padding: 2rem 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  border-left: 6px solid var(--red);

  background-image:
    radial-gradient(circle, rgba(245,237,214,0.08) 1.5px, transparent 1.5px);
  background-size: 8px 8px;
}

.start-here-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  background: var(--red);
  color: var(--cream);
  padding: 0.25em 0.8em;
  margin-bottom: 1rem;
  border-radius: var(--radius);
}

.start-here-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}

.source-institution {
  font-family: var(--font-ui);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--tan);
  text-transform: uppercase;
}

.start-here-title {
  font-family: var(--font-ui);
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--cream);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.start-here-summary {
  font-size: 0.95rem;
  color: var(--tan);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.start-here-uses {
  font-family: var(--font-mono);
  font-size: 0.83rem;
  color: rgba(245,237,214,0.75);
  border-top: 1px solid rgba(245,237,214,0.15);
  padding-top: 0.85rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.start-here-link {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cream);
  background: var(--red);
  padding: 0.55em 1.2em;
  border-radius: var(--radius);
  text-decoration: none;
  transition: background 0.2s ease;
}

.start-here-link:hover {
  background: var(--red-dark);
  color: var(--cream);
}

/* ============================================================
   SECTION LABEL
   ============================================================ */
.section-label {
  font-family: var(--font-ui);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
  border-bottom: 1px solid var(--tan);
  padding-bottom: 0.4rem;
}

/* ============================================================
   CARDS GRID
   ============================================================ */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--gap);
  margin-bottom: 3rem;
}

.cards-grid--general {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* ============================================================
   FLIP CARDS
   ============================================================ */
.flip-card {
  height: var(--card-h);
  perspective: 1200px;
  cursor: pointer;
  outline: none;
}

.flip-card:focus-visible .flip-inner {
  box-shadow: 0 0 0 3px var(--red), 0 0 0 5px var(--cream);
}

.flip-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform var(--flip-dur) var(--ease);
}

.flip-card.flipped .flip-inner {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  background-color: var(--cream);
  border-radius: var(--radius);
  border: 1px solid var(--tan);
  overflow: hidden;
  box-shadow: 2px 3px 12px rgba(27,43,75,0.10);
}

.card-back {
  transform: rotateY(180deg);
  background-color: #FEFAF2;
}

/* Colored top bar by source type */
.card-type-bar {
  height: 5px;
  width: 100%;
  flex-shrink: 0;
}

[data-type="primary"]    .card-type-bar { background: var(--c-primary); }
[data-type="secondary"]  .card-type-bar { background: var(--c-secondary); }
[data-type="curated"]    .card-type-bar { background: var(--c-curated); }
[data-type="longform"]   .card-type-bar { background: var(--c-longform); }
[data-type="reference"]  .card-type-bar { background: var(--c-reference); }

.card-content {
  padding: 1.1rem 1.25rem 1rem;
  height: calc(100% - 5px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  scrollbar-width: thin;
  scrollbar-color: var(--tan) transparent;
}

.card-content::-webkit-scrollbar { width: 4px; }
.card-content::-webkit-scrollbar-thumb {
  background: var(--tan);
  border-radius: 2px;
}

.card-title {
  font-family: var(--font-ui);
  font-size: 0.98rem;
  font-weight: 900;
  color: var(--navy);
  line-height: 1.3;
}

.card-institution {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.03em;
}

.card-summary {
  font-size: 0.85rem;
  color: var(--ink-light);
  line-height: 1.65;
  flex: 1;
}

.card-flip-hint {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 0.5rem;
  border-top: 1px dashed var(--tan);
  margin-top: auto;
}

/* Card back sections */
.back-section {
  margin-bottom: 0.75rem;
}

.back-heading {
  font-family: var(--font-display);
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--navy);
  margin-bottom: 0.4rem;
}

.back-list {
  font-size: 0.8rem;
  color: var(--ink-light);
  line-height: 1.55;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.back-list li {
  padding-left: 1em;
  position: relative;
}

.back-list li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--red);
}

.back-list.intel li::before {
  content: '?';
  font-weight: 700;
  color: var(--olive);
}

.card-link {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cream);
  background: var(--navy);
  padding: 0.45em 1em;
  border-radius: var(--radius);
  text-decoration: none;
  margin-top: auto;
  align-self: flex-start;
  transition: background 0.2s ease;
}

.card-link:hover {
  background: var(--red);
  color: var(--cream);
}

/* ============================================================
   SOURCE TAGS / BADGES
   ============================================================ */
.source-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2em 0.65em;
  border-radius: var(--radius);
  line-height: 1.4;
  white-space: nowrap;
}

.tag-primary   { background: rgba(192,57,43,0.12);  color: var(--red-dark); }
.tag-secondary { background: rgba(27,43,75,0.1);    color: var(--navy); }
.tag-curated   { background: rgba(123,122,77,0.12); color: var(--olive); }
.tag-longform  { background: rgba(201,168,76,0.15); color: #8B6914; }
.tag-reference { background: rgba(91,74,138,0.12);  color: #5B4A8A; }

/* ============================================================
   DATABASES PANEL
   ============================================================ */
.databases-panel {
  background: var(--navy);
  border-radius: var(--radius);
  padding: 2rem 2.5rem;
  margin-top: 1rem;

  background-image:
    radial-gradient(circle, rgba(245,237,214,0.07) 1.5px, transparent 1.5px);
  background-size: 8px 8px;
}

.databases-heading {
  font-family: var(--font-display);
  font-size: 1.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cream);
  text-align: center;
  margin-bottom: 0.5rem;
}

.databases-heading::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: var(--red);
  margin: 0.4rem auto 0;
}

.databases-intro {
  font-size: 0.85rem;
  color: rgba(245,237,214,0.65);
  text-align: center;
  font-style: italic;
  margin-bottom: 1.5rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.db-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.db-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background: rgba(245,237,214,0.07);
  border: 1px solid rgba(245,237,214,0.12);
  border-radius: var(--radius);
  padding: 1rem 1.1rem;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
}

.db-card:hover {
  background: rgba(192,57,43,0.25);
  border-color: var(--red);
}

.db-name {
  font-family: var(--font-ui);
  font-size: 0.88rem;
  font-weight: 900;
  color: var(--cream);
  line-height: 1.2;
}

.db-vendor {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
}

.db-note {
  font-size: 0.78rem;
  color: rgba(245,237,214,0.6);
  line-height: 1.5;
  margin-top: 0.2rem;
}

/* ============================================================
   FOOTER
   ============================================================ */
.site-footer {
  background: var(--navy-dark);
  color: rgba(245,237,214,0.5);
  text-align: center;
  padding: 2rem 1.5rem;
  margin-top: 4rem;
}

.footer-inner {
  max-width: 700px;
  margin: 0 auto;
}

.footer-rule {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin-bottom: 1.25rem;
  opacity: 0.4;
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  line-height: 1.6;
  margin-bottom: 0.4rem;
}

.footer-small {
  font-size: 0.7rem;
  opacity: 0.7;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 768px) {
  .site-header { padding: 2rem 1.25rem 2rem; }

  .header-geo { display: none; }

  .topic-nav { position: relative; }

  .nav-tab { min-width: 110px; padding: 0.6rem 0.75rem; }

  main { padding: 1.75rem 1rem 3rem; }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .flip-card { height: auto; min-height: var(--card-h); }

  .start-here-card { padding: 1.5rem; }

  .databases-panel { padding: 1.5rem; }

  .db-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .db-grid { grid-template-columns: 1fr; }

  .nav-tab { min-width: 95px; }

  .tab-label { font-size: 0.6rem; }
}

/* ============================================================
   HEADER CONNECTIONS PARAGRAPH
   ============================================================ */
.header-connections {
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: rgba(245,237,214,0.72);
  max-width: 700px;
  margin: 1rem auto 0;
  line-height: 1.75;
  border-top: 1px solid rgba(245,237,214,0.15);
  padding-top: 1rem;
}

/* ============================================================
   SOURCE-TYPE LEGEND BLOCK
   ============================================================ */
.legend-block {
  background: #FEFAF2;
  border: 1px solid var(--tan);
  border-left: 5px solid var(--navy);
  border-radius: var(--radius);
  padding: 1.75rem 2rem;
  margin-bottom: 2.5rem;
}

.legend-heading {
  font-family: var(--font-display);
  font-size: 1.3rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.legend-intro {
  font-size: 0.88rem;
  color: var(--ink-light);
  margin-bottom: 1.25rem;
  font-style: italic;
  line-height: 1.6;
}

.legend-grid {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.legend-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.legend-swatch {
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  margin-top: 0.3rem;
}

.legend-text {
  font-size: 0.83rem;
  color: var(--ink-light);
  line-height: 1.6;
}

.legend-text strong {
  font-family: var(--font-ui);
  font-weight: 700;
  color: var(--navy);
}

/* ============================================================
   CROSS-REFERENCE NOTES
   ============================================================ */
.cross-ref {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: rgba(245,237,214,0.65);
  border-top: 1px solid rgba(245,237,214,0.12);
  padding-top: 0.85rem;
  margin-top: 1.25rem;
  line-height: 1.6;
}

.cross-ref strong {
  color: var(--gold);
}

/* ============================================================
   FLIP CARD: MIN-HEIGHT FALLBACK
   Prevents layout collapse before fonts resolve
   ============================================================ */
.flip-card {
  min-height: var(--card-h);
}

/* ============================================================
   FLIP CARD: FIRST-CARD WIGGLE
   Runs once on load to signal the flip interaction;
   targets the first card in the first topic panel only
   ============================================================ */
@keyframes wiggle {
  0%   { transform: rotateY(0deg); }
  15%  { transform: rotateY(-8deg); }
  30%  { transform: rotateY(6deg); }
  45%  { transform: rotateY(-4deg); }
  60%  { transform: rotateY(2deg); }
  75%  { transform: rotateY(-1deg); }
  100% { transform: rotateY(0deg); }
}

.topic-panel.active .flip-card:first-of-type .flip-inner {
  animation: wiggle 1.1s cubic-bezier(0.4, 0, 0.2, 1) 1.2s 1 both;
}

/* Suppress the animation once the card has been flipped
   (JS adds .flipped; the animation no longer matters then) */
.flip-card.flipped .flip-inner {
  animation: none;
}

/* ============================================================
   START HERE CARD: READING PROMPT ITALIC
   ============================================================ */
.start-here-summary em {
  display: block;
  margin-top: 0.6rem;
  color: rgba(245,237,214,0.6);
  font-style: italic;
  font-size: 0.88rem;
  line-height: 1.6;
}

/* ============================================================
   HEADER BYLINE
   ============================================================ */
.header-byline {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: var(--gold);
  margin-top: 0.5rem;
  opacity: 0.85;
}

/* ============================================================
   PERSISTENT LEGEND STRIP
   Lives between nav and main; visible on all tabs.
   ============================================================ */
.legend-strip {
  background: var(--navy-dark);
  border-bottom: 1px solid rgba(245,237,214,0.08);
}

.legend-strip-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.55rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.legend-strip-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(245,237,214,0.45);
  white-space: nowrap;
}

.legend-strip-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-ui);
  font-size: 0.72rem;
  font-weight: 600;
  color: rgba(245,237,214,0.7);
  white-space: nowrap;
}

.legend-pip {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 2px;
  flex-shrink: 0;
}

.legend-strip-toggle {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold);
  background: none;
  border: 1px solid rgba(201,168,76,0.35);
  border-radius: var(--radius);
  padding: 0.25em 0.75em;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease;
}

.legend-strip-toggle:hover,
.legend-strip-toggle[aria-expanded="true"] {
  background: rgba(201,168,76,0.12);
  color: #e8c55a;
}

.legend-strip-detail {
  border-top: 1px solid rgba(245,237,214,0.06);
  padding: 1rem 1.5rem 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* hidden attribute handled by JS; this ensures transition */
.legend-strip-detail[hidden] {
  display: none;
}

.legend-strip-definitions {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.85rem;
}

.legend-def-item {
  display: flex;
  gap: 0.65rem;
  align-items: flex-start;
}

.legend-def-item .legend-pip {
  margin-top: 0.3rem;
  flex-shrink: 0;
}

.legend-def-item div {
  font-size: 0.78rem;
  color: rgba(245,237,214,0.6);
  line-height: 1.55;
}

.legend-def-item strong {
  font-family: var(--font-ui);
  font-weight: 700;
  color: rgba(245,237,214,0.85);
  display: block;
  margin-bottom: 0.15rem;
}

/* ============================================================
   CITATION PROMPT — CARD BACKS
   ============================================================ */
.cite-prompt {
  border-top: 1px dashed var(--tan);
  margin-top: 0.6rem;
  padding-top: 0.7rem;
}

.cite-heading {
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--olive);
  margin-bottom: 0.3rem;
}

.cite-text {
  font-size: 0.76rem;
  color: var(--muted);
  line-height: 1.55;
  font-family: var(--font-mono);
}
