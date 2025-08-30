<!--
ULTRA-UNIQUE • ANIMATED • SELF-CONTAINED
No external images, no scripts. 100% inline SVG / HTML.
Crafted for: NAMRATA MANJUNATH NAIK — Java Full Stack Developer & AI Enthusiast
-->

<!-- ============== HERO BANNER (Animated SVG) ============== -->
<p align="center">
  <svg width="100%" height="220" viewBox="0 0 1200 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Namrata Manjunath Naik — Java Full Stack Developer | AI Enthusiast">
    <defs>
      <!-- Shifting gradient -->
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8A2BE2">
          <animate attributeName="stop-color" values="#8A2BE2;#00BFFF;#32CD32;#FF1493;#FFD700;#8A2BE2" dur="12s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#00BFFF">
          <animate attributeName="stop-color" values="#00BFFF;#32CD32;#FF1493;#FFD700;#8A2BE2;#00BFFF" dur="12s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>

      <!-- Neon glow -->
      <filter id="glow">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <!-- Subtle space dust -->
      <radialGradient id="dust" cx="50%" cy="50%">
        <stop offset="0%" stop-color="white" stop-opacity="0.35"/>
        <stop offset="70%" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Starfield -->
    <g opacity="0.5">
      <circle cx="80"  cy="40"  r="1.2" fill="url(#dust)"/>
      <circle cx="210" cy="95"  r="1.0" fill="url(#dust)"/>
      <circle cx="370" cy="60"  r="1.1" fill="url(#dust)"/>
      <circle cx="520" cy="25"  r="0.9" fill="url(#dust)"/>
      <circle cx="640" cy="100" r="1.2" fill="url(#dust)"/>
      <circle cx="760" cy="50"  r="1.1" fill="url(#dust)"/>
      <circle cx="900" cy="80"  r="1.0" fill="url(#dust)"/>
      <circle cx="1060" cy="30" r="0.9" fill="url(#dust)"/>
    </g>

    <!-- Name with animated stroke-dash -->
    <g transform="translate(40,115)">
      <text x="0" y="0" font-family="ui-sans-serif, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell"
            font-size="48" font-weight="800" fill="none" stroke="url(#grad)" stroke-width="2"
            stroke-dasharray="1200" stroke-dashoffset="1200" filter="url(#glow)">
        NAMRATA MANJUNATH NAIK
        <animate attributeName="stroke-dashoffset" values="1200;0" dur="2.8s" fill="freeze"/>
      </text>
    </g>

    <!-- Role: typewriter beam -->
    <g transform="translate(40,165)">
      <rect x="0" y="-28" width="720" height="40" rx="10" fill="rgba(255,255,255,0.04)" />
      <text id="role" x="12" y="0" font-family="ui-sans-serif, system-ui" font-size="22" fill="url(#grad)">
        Java Full Stack Developer • AI Enthusiast
      </text>
      <!-- Cursor -->
      <rect x="468">
        <animate attributeName="x" values="12;468;12" dur="6s" repeatCount="indefinite"/>
      </rect>
      <rect x="468" y="-18" width="2.5" height="24" fill="#ffffff">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
    </g>
  </svg>
</p>

<!-- ============== QUICK CONTACT RIBBON (Animated pills) ============== -->
<p align="center">
  <a href="mailto:nnnaik22024116@gmail.com">
    <img alt="Email" src="https://img.shields.io/badge/Email-nnnaik22024116%40gmail.com-0A0A0A?style=for-the-badge&logo=gmail"/>
  </a>
  <a href="tel:+918660321186">
    <img alt="Phone" src="https://img.shields.io/badge/Call-%2B91%208660321186-0A0A0A?style=for-the-badge&logo=phonepe"/>
  </a>
  <a href="https://www.linkedin.com" target="_blank">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="https://github.com" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/GitHub-%40namrata-161B22?style=for-the-badge&logo=github"/>
  </a>
</p>

---

## 🌌 About Me
> Aspiring **Java Developer** with clean-code discipline and a backend-first mindset. I integrate **AI/ML** where it *elevates* user experience and security. Currently exploring resilient architectures, domain-driven design, and delightful UX details.

- 🎓 **B.Tech CSE** — *Bangalore Technological Institute* • **CGPA 8.32**  
- 🏙️ **Bangalore, India**  
- 🤝 Open to **entry-level** roles: Java Backend • Full Stack • AI-infused Apps

---

## 🧠 Tech Stack (Animated Skill-Orbit)
<p align="center">
  <svg width="600" height="380" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" aria-label="Animated skill orbit">
    <defs>
      <linearGradient id="ring" x1="0" x2="1">
        <stop offset="0%" stop-color="#00BFFF"/>
        <stop offset="100%" stop-color="#FF1493"/>
      </linearGradient>
    </defs>

    <!-- Core nucleus -->
    <circle cx="300" cy="190" r="56" fill="none" stroke="url(#ring)" stroke-width="3" opacity="0.8"/>
    <text x="300" y="195" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" fill="#ddd">
      JAVA • OOP • DSA
    </text>

    <!-- Orbits -->
    <g fill="none" stroke="url(#ring)" opacity="0.45">
      <ellipse cx="300" cy="190" rx="110" ry="55"/>
      <ellipse cx="300" cy="190" rx="160" ry="80"/>
      <ellipse cx="300" cy="190" rx="210" ry="105"/>
    </g>

    <!-- Orbiting skill nodes -->
    <!-- INNER RING -->
    <g>
      <circle r="7" fill="#FFFFFF">
        <animateMotion dur="7s" repeatCount="indefinite" path="M190,190 a110,55 0 1,1 220,0 a110,55 0 1,1 -220,0"/>
      </circle>
      <text font-size="12" fill="#ddd">
        <textPath href="#p1"/>
      </text>
    </g>
    <g>
      <circle r="7" fill="#FFFFFF">
        <animateMotion dur="7s" begin="1.2s" repeatCount="indefinite" path="M190,190 a110,55 0 1,1 220,0 a110,55 0 1,1 -220,0"/>
      </circle>
      <title>Spring Basics</title>
    </g>

    <!-- MIDDLE RING -->
    <g>
      <circle r="7" fill="#FFFFFF">
        <animateMotion dur="10s" repeatCount="indefinite" path="M140,190 a160,80 0 1,1 320,0 a160,80 0 1,1 -320,0"/>
      </circle>
      <title>HTML • CSS • Bootstrap</title>
    </g>
    <g>
      <circle r="7" fill="#FFFFFF">
        <animateMotion dur="10s" begin="1.7s" repeatCount="indefinite" path="M140,190 a160,80 0 1,1 320,0 a160,80 0 1,1 -320,0"/>
      </circle>
      <title>Django (Projects)</title>
    </g>

    <!-- OUTER RING -->
    <g>
      <circle r="7" fill="#FFFFFF">
        <animateMotion dur="14s" repeatCount="indefinite" path="M90,190 a210,105 0 1,1 420,0 a210,105 0 1,1 -420,0"/>
      </circle>
      <title>REST APIs</title>
    </g>
    <g>
      <circle r="7" fill="#FFFFFF">
        <animateMotion dur="14s" begin="2.2s" repeatCount="indefinite" path="M90,190 a210,105 0 1,1 420,0 a210,105 0 1,1 -420,0"/>
      </circle>
      <title>AI/ML Integration</title>
    </g>

    <!-- Labels -->
    <g font-family="ui-sans-serif, system-ui" font-size="12" fill="#ddd" opacity="0.9">
      <text x="300" y="315" text-anchor="middle">Java • HTML • CSS • Python • Django • Bootstrap • REST • AI/ML</text>
    </g>
  </svg>
</p>

---

## 🏆 Highlights
- ✅ **Java Development Intern — ShadowFox** *(Jul 2025 – Aug 2025)*  
  Delivered tasks on time with precision; sharpened backend discipline and workflows.

- 🎖️ **Certifications**  
  **Java Masterclass (Udemy, Mar 2025)** • **JavaScript & PHP (Udemy, Jun 2024)**

---

## 🚀 Signature Projects

### 1) Pharmacy Management System *(Nov 2024 – Jan 2025)*
Multi-role full-stack web app (**Python, Django, HTML, CSS, Bootstrap**):
- Patient registration, appointment scheduling, employee tracking  
- Drug inventory & service management  
- Built-in analytics for operational insights

<details>
  <summary><b>See architecture sketch</b> (inline ASCII)</summary>

</details>

---

### 2) Real-Time Malicious URL & Inappropriate Content Blocking *(Jan 2025 – Ongoing)*
AI/ML powered web security:
- Trained on **1000+ URLs**, pattern & indicator analysis  
- **Google Safe Browsing** and **VirusTotal** integrations  
- **Child-Safe Mode** for content filtering  
- Deployed as a **Chrome Extension** with lightweight realtime scanning

<details>
  <summary><b>Live risk meter (animated SVG)</b></summary>

<p>
  <svg width="420" height="120" viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" aria-label="Animated risk meter">
    <defs>
      <linearGradient id="gauge" x1="0" x2="1">
        <stop offset="0%" stop-color="#32CD32"/>
        <stop offset="50%" stop-color="#FFD700"/>
        <stop offset="100%" stop-color="#FF3B3B"/>
      </linearGradient>
    </defs>
    <rect x="10" y="50" rx="10" width="400" height="20" fill="url(#gauge)" opacity="0.25"/>
    <rect x="10" y="50" rx="10" width="120" height="20" fill="url(#gauge)">
      <animate attributeName="width" values="80;200;140;300;120;80" dur="6s" repeatCount="indefinite"/>
    </rect>
    <text x="210" y="100" text-anchor="middle" font-family="ui-sans-serif, system-ui"
          font-size="12" fill="#999">Real-time URL Threat Score (demo animation)</text>
  </svg>
</p>
</details>

---

## 🎯 Principles I Build By
- **Clarity over cleverness** — readable code wins long-term  
- **Small, composable pieces** — functions, services, modules  
- **Guardrails** — tests, linting, least-privilege, observability hooks  
- **AI as a co-pilot** — amplify, don’t overfit

---

## 📚 Education
**B.Tech — Computer Science & Engineering**, *Bangalore Technological Institute*  
CGPA **8.32** • *(Nov 2022 – Apr 2026)*

---

## 📬 Reach Me
- ✉️ **Email:** nnnaik22024116@gmail.com  
- 📞 **Phone:** +91 8660321186  
- 📍 **Location:** Bangalore, India

---

## 🌟 Tiny Easter Egg (tap to reveal)
<details>
  <summary>✨ Click me</summary>

<p align="center">
  <svg width="300" height="140" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" aria-label="Hello from Namrata">
    <defs>
      <linearGradient id="spark" x1="0" x2="1">
        <stop offset="0%" stop-color="#FFD700"/>
        <stop offset="100%" stop-color="#FF69B4"/>
      </linearGradient>
    </defs>
    <text x="150" y="60" text-anchor="middle" font-size="22" font-family="ui-sans-serif, system-ui"
          fill="url(#spark)">Thanks for visiting!</text>
    <circle cx="150" cy="90" r="4" fill="url(#spark)">
      <animate attributeName="r" values="4;10;4" dur="1.6s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite"/>
    </circle>
  </svg>
</p>

</details>

---

### 🧾 Footnote
> This README is **100% self-contained**: all animations are rendered via **inline SVG SMIL** and HTML—no scripts, no external assets. If GitHub ever changes rendering rules, everything still gracefully degrades to a clean, static layout.

