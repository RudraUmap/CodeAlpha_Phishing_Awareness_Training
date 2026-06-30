<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Interactive Phishing Awareness Training — Learn to identify phishing emails, fake websites, and social engineering attacks with hands-on exercises and a knowledge quiz.">
  <title>Phishing Awareness Training</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛡️</text></svg>">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- ═══ Progress Bar (fixed top, hidden on landing) ═══ -->
  <div id="progress-bar" style="display:none">
    <div id="progress-fill"></div>
  </div>

  <!-- ═══ Landing Screen ═══ -->
  <div id="landing-screen">
    <div class="landing-content">
      <div class="landing-icon">🛡️</div>
      <h1 class="landing-title">Phishing Awareness Training</h1>
      <p class="landing-subtitle">Learn to spot scams before they catch you</p>
      <div class="input-group">
        <label for="name-input">Enter your name for the completion certificate</label>
        <input type="text" id="name-input" placeholder="Your full name" autocomplete="name">
      </div>
      <button id="start-btn">Start Training →</button>
    </div>
  </div>

  <!-- ═══ Training Container (hidden initially) ═══ -->
  <div id="training-container" style="display:none">
    <div class="container">
      <div id="progress-text"></div>

      <!-- ── Section 1: What is Phishing ── -->
      <div class="slide" id="section-1">
        <h2 class="section-title">🎣 What is Phishing?</h2>
        <div class="analogy-box" id="analogy-content"></div>
        <p class="section-description" id="phishing-description"></p>
        <h3 style="font-size:1.1rem; margin-bottom:16px; color:var(--text-secondary); font-weight:600;">Three Main Types of Phishing</h3>
        <div class="types-grid" id="types-grid"></div>
      </div>

      <!-- ── Section 2: Spot a Phishing Email ── -->
      <div class="slide" id="section-2">
        <h2 class="section-title">📧 How to Spot a Phishing Email</h2>
        <p class="section-subtitle">Click the <span class="marker-hint">numbered markers</span> to reveal the red flags hidden in this suspicious email.</p>
        <div class="email-mockup" id="email-mockup"></div>
      </div>

      <!-- ── Section 3: Fake Website Red Flags ── -->
      <div class="slide" id="section-3">
        <h2 class="section-title">🌐 Fake Website Red Flags</h2>
        <p class="section-subtitle">This login page looks real — but it's a trap. Click each marker below to learn what's wrong.</p>
        <div class="website-mockup" id="website-mockup"></div>
        <div class="website-markers-list" id="website-markers-list"></div>
      </div>

      <!-- ── Section 4: Social Engineering ── -->
      <div class="slide" id="section-4">
        <h2 class="section-title">🎭 Social Engineering Tactics</h2>
        <p class="section-subtitle">Scammers manipulate human psychology. Click each card to flip it and reveal how to defend yourself.</p>
        <div class="tactics-grid" id="tactics-grid"></div>
        <p class="flip-hint">💡 Click any card to flip it and see the defense tip</p>
      </div>

      <!-- ── Section 5: Best Practices Checklist ── -->
      <div class="slide" id="section-5">
        <h2 class="section-title">✅ Best Practices Checklist</h2>
        <p class="section-subtitle">Commit to these security habits. Check off each item as you pledge to follow it.</p>
        <div class="checklist" id="checklist"></div>
        <div class="completion-bar-container">
          <div class="completion-bar">
            <div class="completion-fill" id="completion-fill"></div>
          </div>
          <p class="completion-text" id="completion-text">0% Complete</p>
        </div>
        <div class="badge-container" id="badge-container">
          <div class="badge">🛡️ You're Phishing-Aware!</div>
        </div>
      </div>

      <!-- ── Quiz Section ── -->
      <div class="slide" id="quiz-section">
        <h2 class="section-title">📝 Knowledge Check</h2>
        <p class="section-subtitle">Test what you've learned. Choose the best answer for each question.</p>
        <p class="quiz-progress" id="quiz-progress"></p>
        <div class="quiz-question-container">
          <p class="quiz-question" id="quiz-question"></p>
          <div class="quiz-options" id="quiz-options"></div>
          <div class="quiz-feedback" id="quiz-feedback"></div>
          <button class="nav-btn primary quiz-next-btn" id="quiz-next-btn" style="display:none">Next Question →</button>
        </div>
      </div>

      <!-- ── Results Section ── -->
      <div class="slide" id="results-section">
        <!-- Score Card -->
        <div class="results-card">
          <div class="results-badge" id="results-badge"></div>
          <div class="results-score" id="results-score"></div>
          <p class="results-label" id="results-label"></p>
          <p class="results-message" id="results-message"></p>
        </div>

        <!-- Case Studies -->
        <h2 class="section-title" style="margin-top:48px;">📰 Real-World Phishing Attacks</h2>
        <p class="section-subtitle">These aren't hypothetical — they really happened.</p>
        <div class="timeline" id="case-studies-timeline"></div>

        <!-- Certificate -->
        <h2 class="section-title" style="margin-top:48px;">🎓 Your Certificate</h2>
        <div class="certificate" id="certificate">
          <div class="cert-badge">🏆</div>
          <h3 class="cert-title">Certificate of Completion</h3>
          <p class="cert-body">This certifies that</p>
          <p class="cert-name" id="cert-name"></p>
          <p class="cert-body">has successfully completed the<br><strong>Phishing Awareness Training</strong></p>
          <p class="cert-date" id="cert-date"></p>
        </div>

        <!-- Final Actions -->
        <div class="final-actions">
          <button class="nav-btn primary" id="print-btn">🖨️ Print / Save Certificate</button>
          <button class="nav-btn" id="restart-btn">🔄 Restart Training</button>
        </div>
      </div>

      <!-- ── Navigation Buttons ── -->
      <div class="nav-buttons" id="nav-buttons">
        <button class="nav-btn" id="prev-btn">← Back</button>
        <button class="nav-btn primary" id="next-btn">Next →</button>
      </div>

    </div>
  </div>

  <!-- Scripts: data first, then app logic -->
  <script src="data.js"></script>
  <script src="app.js"></script>
</body>
</html>
