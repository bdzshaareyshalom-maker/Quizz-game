Project structure
=================

index.html
  Main page markup. It now loads external CSS and JS files instead of embedding everything in one HTML file.

styles.css
  All styles extracted from the original app.

config.js
  The only file you need to edit to allow or block categories and specific quizzes.
  Set any category or quiz value to false to hide it and prevent it from opening.

app.js
  The original app logic and data, kept intact as much as possible.
  A thin access-control layer was added so blocked items do not render on the home screen and cannot be opened.

What changed
============

1. The original single-file app was split into separate files.
2. An access-control config was added.
3. Home rendering now filters quizzes through the config.
4. Quiz start is guarded so blocked quizzes cannot open even if triggered directly.

What did not change
===================

- Quiz data
- Quiz logic
- Scoring
- Timer behavior
- Reveal / teach / progression flows
- Existing UI structure
