# Context Crew — Team Portfolio

A modern, responsive portfolio website for **Context Crew**, a team of B.Tech Computer Science Engineering students at GITAM University, Hyderabad.

🌐 **Live Site**: [contextcrew.github.io](https://contextcrew.github.io) *(update after deploying)*

---

## 👥 Team Members

| Name | Role | Email |
|------|------|-------|
| Yagneshwar Gangoni | Frontend Developer | gangoniyagneshwar03@gmail.com |
| Chatla Varshith | ML & Cybersecurity | varshith9f.vhs@gmail.com |
| Hakshith Veerath | AI / Cloud Engineer | — |

---

## 📁 Project Structure

```
context-crew/
├── index.html          ← Main HTML (all sections)
├── css/
│   └── style.css       ← All styles (dark editorial theme)
├── js/
│   └── main.js         ← Animations, nav, form logic
└── README.md           ← This file
```

---

## 🎨 Features

- **Dark editorial aesthetic** with electric amber accents
- **Fully responsive** — mobile, tablet, and desktop
- **6 sections**: Hero · About · Team · Skills · Projects · Contact
- Smooth scroll-reveal animations
- Animated skill progress bars
- Mobile hamburger navigation
- Interactive contact form (static, no backend needed)
- Cursor glow effect on desktop
- Animated stat counters

---

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `context-crew` (or `<your-username>.github.io` for a root site)
3. Set it to **Public**
4. Click **Create repository**

### Step 2: Push the files

```bash
# In your local project folder:
git init
git add .
git commit -m "Initial commit: Context Crew portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/context-crew.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `main` branch, `/ (root)` folder
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/context-crew/`

---

## 🛠 Customization

### Update real GitHub & LinkedIn links
In `index.html`, search for `href="#"` under each `.member-links` section and replace with actual URLs.

### Add member photos
Replace the initials avatars (`.member-avatar`) with `<img>` tags pointing to photos in an `assets/` folder.

### Connect contact form to a backend
Currently the form is static. To make it functional, integrate with:
- [Formspree](https://formspree.io) — free, no backend needed
- [EmailJS](https://www.emailjs.com) — send emails directly from JS

For Formspree: change `<form class="contact-form" id="contactForm">` to:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
And remove the JS form submission handler.

---

## 📝 Tech Stack

Built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no build tools. Works on GitHub Pages out of the box.

- Fonts: [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts CDN)
- Icons: Unicode glyphs (no icon library dependencies)

---

*© 2026 Context Crew · GITAM University, Hyderabad*
