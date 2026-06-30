// ============================================================
// Phishing Awareness Training — Content Data
// All training content, quiz questions, and case studies
// ============================================================

window.appData = {

  // ── SECTION 1: What is Phishing ───────────────────────────
  phishingDefinition: {
    title: "What is Phishing?",
    analogy: "Imagine a fisherman casting a baited hook into the water — the bait looks like real food, but there's a hidden hook inside. Phishing works the same way: attackers send messages that look legitimate, but they're designed to hook you into giving up passwords, credit card numbers, or personal data.",
    description: "Phishing is a type of cyber attack where criminals impersonate trusted organizations or people through emails, text messages, or phone calls. Their goal is to trick you into clicking malicious links, downloading malware, or revealing sensitive information. It's the most common form of cyber attack, accounting for over 80% of reported security incidents."
  },

  phishingTypes: [
    {
      type: "Email Phishing",
      emoji: "📧",
      description: "Fraudulent emails designed to look like they come from legitimate companies. They often contain urgent requests, fake links, and attachments loaded with malware."
    },
    {
      type: "Smishing (SMS)",
      emoji: "📱",
      description: "Phishing via text messages. Attackers send SMS with fake delivery alerts, bank warnings, or prize notifications to trick you into clicking malicious links."
    },
    {
      type: "Vishing (Voice)",
      emoji: "📞",
      description: "Voice-based phishing through phone calls. Scammers impersonate banks, government agencies, or tech support to pressure you into sharing sensitive data over the phone."
    }
  ],

  // ── SECTION 2: Fake Email Mockup ──────────────────────────
  fakeEmail: {
    from: "security@paypa1-support.com",
    fromDisplay: "PayPal Security Team",
    to: "you@email.com",
    subject: "⚠️ Urgent: Your Account Has Been Compromised!",
    date: "Mon, Jun 9, 2025, 3:42 AM",
    body: "Dear Customer,\n\nWe have detected suspicious activity on your PayPal account. Your account will be permanently suspended within 24 hours unless you verify your identity immediately.\n\nClick here to verify your account: http://paypa1-secure.com/verify\n\nIf you do not respond within 24 hours, your account and all funds will be permanently locked.\n\nSincerely,\nPayPall Security Team"
  },

  emailRedFlags: [
    {
      id: "sender",
      label: "Suspicious Sender Address",
      explanation: "The sender address 'paypa1-support.com' uses a '1' (number one) instead of 'l' (letter L). Real PayPal emails always come from @paypal.com. Always inspect the actual email address, not just the display name.",
      markerNumber: 1
    },
    {
      id: "urgency",
      label: "Urgency Language",
      explanation: "'Your account will be permanently suspended within 24 hours' — Phishers create a false sense of urgency to make you act without thinking. Legitimate companies give you reasonable time to respond and won't threaten immediate account closure.",
      markerNumber: 2
    },
    {
      id: "link",
      label: "Fake Link",
      explanation: "The link goes to 'paypa1-secure.com' — a completely fake domain. Always hover over links to see the real URL before clicking. Better yet, navigate directly to the company's website by typing the URL yourself.",
      markerNumber: 3
    },
    {
      id: "spelling",
      label: "Spelling Mistakes",
      explanation: "'PayPall' is spelled with a double L — legitimate companies proofread their official communications carefully. Typos and grammatical errors are a major red flag in professional-looking emails.",
      markerNumber: 4
    },
    {
      id: "greeting",
      label: "Generic Greeting",
      explanation: "'Dear Customer' instead of your actual name — real services that have your account will usually address you by your registered name. Generic greetings suggest a mass-sent phishing email.",
      markerNumber: 5
    }
  ],

  // ── SECTION 3: Fake Website ───────────────────────────────
  fakeWebsite: {
    url: "http://paypa1.com/signin/verify-account",
    title: "PayPal Login",
    logoText: "PayPa1"
  },

  websiteRedFlags: [
    {
      id: "no-https",
      label: "No HTTPS / Padlock",
      tip: "The URL starts with 'http://' instead of 'https://'. Legitimate login pages always use HTTPS encryption to protect your data. Look for the padlock icon in your browser's address bar — if it's missing or shows a warning, do not enter any credentials.",
      markerNumber: 1
    },
    {
      id: "misspelled-domain",
      label: "Misspelled Domain",
      tip: "'paypa1.com' uses a number '1' instead of the letter 'l'. This is called typosquatting — attackers register domains that look almost identical to real ones. Always read URLs character by character before logging in.",
      markerNumber: 2
    },
    {
      id: "poor-design",
      label: "Poor Design / Logo Mismatch",
      tip: "The logo shows 'PayPa1' instead of 'PayPal'. Fake sites often have subtle branding differences — wrong colors, blurry logos, or mismatched fonts. Compare with the official site if something feels off.",
      markerNumber: 3
    },
    {
      id: "unusual-url",
      label: "Unusual URL Structure",
      tip: "The URL path '/signin/verify-account' is unusually specific. Legitimate sites use simpler paths like '/login'. Overly complex URLs with extra directories, random strings, or query parameters can indicate a phishing page.",
      markerNumber: 4
    }
  ],

  // ── SECTION 4: Social Engineering Tactics ─────────────────
  socialTactics: [
    {
      title: "Urgency & Fear",
      icon: "⏰",
      description: "Creating panic to bypass your rational thinking.",
      example: "Act now or lose access! Your account will be deleted in 24 hours unless you verify immediately!",
      defense: "Pause and breathe. Legitimate organizations give you reasonable time to respond. Contact the company directly through their official website or phone number — never through links in the message. If it were truly urgent, they'd reach you through multiple channels."
    },
    {
      title: "Authority",
      icon: "🏛️",
      description: "Impersonating trusted figures or institutions.",
      example: "This is your bank's fraud department. We've detected unauthorized access. We need your PIN and account number to secure your account immediately.",
      defense: "Banks and authorities will never ask for passwords, PINs, or full account numbers over the phone or email. Hang up and call the official number printed on your card or bank statement to verify any claims."
    },
    {
      title: "Familiarity",
      icon: "🤝",
      description: "Pretending to be someone you know or trust.",
      example: "Hi, it's John from the IT department. We're doing system maintenance and need your login credentials to migrate your account to the new server.",
      defense: "Verify requests through a separate communication channel. Walk over to IT, call them on a known number, or message them on your company's official chat. Real IT staff never need your password — they have admin access already."
    },
    {
      title: "Scarcity",
      icon: "🎯",
      description: "Creating FOMO with limited-time offers or exclusive deals.",
      example: "Congratulations! You've won a $500 Amazon gift card — only 1 left! Claim within 10 minutes before it expires!",
      defense: "If it sounds too good to be true, it probably is. Legitimate prizes don't require you to pay fees, share personal information, or act within minutes. Delete the message and move on."
    }
  ],

  // ── SECTION 5: Best Practices Checklist ───────────────────
  bestPractices: [
    {
      id: "bp-1",
      text: "Never click links in unexpected emails",
      detail: "Always navigate to websites directly by typing the URL in your browser"
    },
    {
      id: "bp-2",
      text: "Verify sender email addresses carefully",
      detail: "Check for subtle misspellings, number substitutions, and unusual domains"
    },
    {
      id: "bp-3",
      text: "Always check for HTTPS before logging in",
      detail: "Look for the padlock icon in your browser's address bar"
    },
    {
      id: "bp-4",
      text: "Never share passwords over email or phone",
      detail: "No legitimate service will ever ask for your password"
    },
    {
      id: "bp-5",
      text: "Enable Two-Factor Authentication (2FA)",
      detail: "Adds an extra security layer even if your password is compromised"
    },
    {
      id: "bp-6",
      text: "Report suspicious emails to IT/security",
      detail: "Reporting helps protect your entire organization from attacks"
    }
  ],

  // ── QUIZ: 8 Multiple Choice Questions ─────────────────────
  quizQuestions: [
    {
      question: "Which of these email addresses looks suspicious?",
      options: [
        "support@amazon.com",
        "billing@amaz0n-support.net",
        "orders@amazon.co.uk",
        "help@amazon.com"
      ],
      correct: 1,
      explanation: "'amaz0n-support.net' uses a zero instead of the letter 'o' and has a non-standard domain. Always check for subtle character substitutions in email addresses."
    },
    {
      question: "An email says your account will be deleted in 24 hours. What should you do?",
      options: [
        "Click the link immediately to save your account",
        "Reply to the email asking for more time",
        "Contact the company directly through their official website",
        "Forward it to all your contacts to warn them"
      ],
      correct: 2,
      explanation: "Never click links in urgent emails. Go directly to the company's official website or call their verified customer service number to check if the claim is real."
    },
    {
      question: "What does HTTPS in a URL indicate?",
      options: [
        "The website is government-approved",
        "The connection is encrypted and more secure",
        "The website has no viruses",
        "The website loads faster"
      ],
      correct: 1,
      explanation: "HTTPS means the connection between your browser and the website is encrypted. While it doesn't guarantee a site is legitimate, its absence on a login page is a major red flag."
    },
    {
      question: "You receive a text: 'Your package couldn't be delivered. Click here to reschedule.' What's the best action?",
      options: [
        "Click the link to reschedule delivery",
        "Reply with your address",
        "Check the tracking number on the official courier website",
        "Ignore it — only emails can be phishing"
      ],
      correct: 2,
      explanation: "This is a common smishing (SMS phishing) attack. Go directly to the courier's official website and enter your tracking number there. Phishing can happen via text messages too, not just email."
    },
    {
      question: "Someone calls claiming to be from your bank and asks for your PIN. What should you do?",
      options: [
        "Give them the PIN — banks need it for verification",
        "Give them only the last 2 digits for safety",
        "Hang up and call your bank using the number on your card",
        "Ask them security questions first, then provide it"
      ],
      correct: 2,
      explanation: "Banks will NEVER ask for your full PIN or password over the phone. This is a vishing (voice phishing) attack. Always hang up and call back using the official number on your bank card or statement."
    },
    {
      question: "Which of the following is a sign of a phishing website?",
      options: [
        "It has a modern, professional design",
        "The URL contains misspellings like 'g00gle.com'",
        "It loads quickly on your browser",
        "It has a 'Contact Us' page"
      ],
      correct: 1,
      explanation: "Misspelled URLs (typosquatting) are a classic sign of phishing websites. Always carefully read the full URL before entering any credentials — attackers rely on you not looking closely."
    },
    {
      question: "What is Two-Factor Authentication (2FA)?",
      options: [
        "Using two different passwords for one account",
        "Logging in from two different devices",
        "A second verification step beyond your password",
        "Having two separate email accounts"
      ],
      correct: 2,
      explanation: "2FA requires a second form of verification (like a code sent to your phone or a biometric scan) in addition to your password, making it much harder for attackers to access your accounts even if they steal your password."
    },
    {
      question: "A colleague emails asking you to urgently wire money to a new vendor. The email looks legitimate. What should you do?",
      options: [
        "Process the payment quickly since it's urgent",
        "Reply to the email asking to confirm the details",
        "Verify the request by calling your colleague directly",
        "Check if the vendor exists on Google"
      ],
      correct: 2,
      explanation: "This is a Business Email Compromise (BEC) attack where criminals impersonate colleagues. Always verify unusual financial requests through a separate communication channel like a phone call or face-to-face conversation — never by replying to the suspicious email."
    }
  ],

  // ── Score Feedback ────────────────────────────────────────
  scoreFeedback: {
    excellent: {
      min: 7,
      label: "Phishing Expert! 🛡️",
      message: "Outstanding! You have excellent phishing awareness skills. Keep staying vigilant and help educate others in your organization.",
      badge: "🏆"
    },
    good: {
      min: 5,
      label: "Well Prepared! ✅",
      message: "Good job! You can spot most phishing attempts. Review the questions you missed to strengthen your remaining weak spots.",
      badge: "🥈"
    },
    needsWork: {
      min: 0,
      label: "Keep Learning! 📚",
      message: "You're building awareness, but there's room to grow. Consider reviewing the training materials again and practice being extra cautious with unexpected messages.",
      badge: "📖"
    }
  },

  // ── CASE STUDIES: 3 Famous Phishing Incidents ─────────────
  caseStudies: [
    {
      title: "Google & Facebook Invoice Scam",
      year: "2013–2015",
      loss: "$100 Million",
      icon: "💰",
      whatHappened: "A Lithuanian man named Evaldas Rimasauskas impersonated Quanta Computer, a real Taiwanese hardware manufacturer that both Google and Facebook did business with, and sent fraudulent invoices over two years.",
      howItWorked: "He registered a company in Latvia with the exact same name as Quanta Computer, forged invoices, contracts, and corporate stamps, then emailed them to accounts payable departments at both tech giants. Employees processed the payments to bank accounts he controlled in Latvia, Cyprus, and other countries.",
      prevention: "Always verify vendor changes and new banking details through established, separate channels. Implement multi-person approval for large payments. Cross-reference invoice details with existing contracts and known contact information before processing."
    },
    {
      title: "Twitter Bitcoin Scam",
      year: "July 2020",
      loss: "$120,000+ in Bitcoin, massive reputational damage",
      icon: "🐦",
      whatHappened: "Hackers compromised high-profile verified Twitter accounts including Barack Obama, Elon Musk, Bill Gates, Apple, and Uber. They posted tweets promoting a Bitcoin scam: 'Send $1,000 and I'll send back $2,000.'",
      howItWorked: "A 17-year-old attacker and accomplices used phone-based spear phishing (vishing) to target Twitter employees, tricking them into revealing credentials for internal admin tools. With these tools, they bypassed all security and took over 130 accounts, tweeting the scam from 45 of them.",
      prevention: "Train all employees to recognize social engineering over the phone. Restrict access to administrative tools with strict role-based access controls. Use hardware security keys (like YubiKey) for internal systems instead of SMS-based 2FA, which can be intercepted."
    },
    {
      title: "COVID-19 Vaccine Phishing",
      year: "2021",
      loss: "Thousands of personal records compromised",
      icon: "🦠",
      whatHappened: "Scammers sent emails impersonating the UK's National Health Service (NHS), inviting recipients to 'register for their COVID-19 vaccine' through a convincing fake website during the height of the pandemic.",
      howItWorked: "The phishing emails closely mimicked official NHS branding — correct logos, colors, and formatting. They directed users to a fake website that looked identical to the real NHS portal, which collected names, addresses, dates of birth, and even bank details (claiming a 'refundable deposit' was needed to secure the appointment).",
      prevention: "Official health services never ask for bank details for a free vaccine or any free public health service. Always verify health-related communications through official government websites (like nhs.uk). Be especially cautious during crises — scammers exploit widespread fear and urgency to launch targeted campaigns."
    }
  ]
};
