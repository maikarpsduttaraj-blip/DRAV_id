* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #0a1020;
  --bg-soft: #121c2f;
  --panel: #16233d;
  --panel-2: #1d2d4d;
  --text: #edf3ff;
  --muted: #b9c7e2;
  --primary: #7c9cff;
  --primary-strong: #5e7cff;
  --accent: #74f0d3;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: 0 20px 45px rgba(13, 18, 32, 0.35);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 6rem 0;
}

.alt-bg {
  background: rgba(255, 255, 255, 0.015);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(10, 16, 32, 0.7);
  border-bottom: 1px solid var(--line);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
}

.brand {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: var(--accent);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-menu a {
  color: var(--muted);
  transition: color 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a:focus-visible {
  color: var(--text);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 5px 0;
  border-radius: 99px;
}

.hero {
  padding: 5rem 0 4rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  align-items: center;
  gap: 3rem;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.hero-text h1 {
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
  margin-bottom: 0.6rem;
}

.hero-text h2 {
  font-size: clamp(1.2rem, 2vw, 2rem);
  color: var(--muted);
  font-weight: 500;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 620px;
  margin-bottom: 1.8rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  box-shadow: 0 12px 24px rgba(94, 124, 255, 0.35);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: var(--muted);
}

.socials a {
  position: relative;
}

.socials a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.socials a:hover::after,
.socials a:focus-visible::after {
  transform: scaleX(1);
}

.hero-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 2rem;
  box-shadow: var(--shadow);
}

.profile-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(116, 240, 211, 0.08);
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(116, 240, 211, 0.22);
  border-radius: 999px;
}

.profile-visual {
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
}

.avatar {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 2.6rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: var(--bg);
  box-shadow: 0 18px 36px rgba(124, 156, 255, 0.35);
}

.hero-card ul {
  list-style: none;
  display: grid;
  gap: 0.9rem;
}

.hero-card li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.hero-card li strong {
  color: var(--text);
}

.section-heading {
  margin-bottom: 2.2rem;
}

.section-heading h3 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.05em;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2rem;
}

.about-card,
.about-stats,
.skill-card,
.project-card,
.timeline-item,
.contact-box {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--line);
  border-radius: 22px;
}

.about-card {
  padding: 2rem;
  color: var(--muted);
  font-size: 1.02rem;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.about-stats div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 130px;
  border-radius: 18px;
  background: rgba(255,255,255,0.025);
}

.about-stats strong {
  display: block;
  font-size: 1.7rem;
  margin-bottom: 0.2rem;
}

.about-stats span {
  color: var(--muted);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.skill-card {
  min-height: 120px;
  display: grid;
  place-items: center;
  font-weight: 600;
  color: var(--text);
  background: linear-gradient(180deg, rgba(124, 156, 255, 0.08), rgba(255,255,255,0.02));
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.project-card {
  overflow: hidden;
}

.project-image {
  height: 220px;
  background-size: cover;
  background-position: center;
}

.project-one {
  background: linear-gradient(135deg, rgba(124,156,255,0.75), rgba(116,240,211,0.6));
}

.project-two {
  background: linear-gradient(135deg, rgba(255,159,67,0.75), rgba(255,92,123,0.7));
}

.project-three {
  background: linear-gradient(135deg, rgba(114, 216, 255, 0.8), rgba(139, 92, 246, 0.7));
}

.project-body {
  padding: 1.5rem;
}

.project-body h4 {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.project-body p {
  color: var(--muted);
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.tags span {
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  color: var(--muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
  font-size: 0.75rem;
}

.timeline {
  display: grid;
  gap: 1.2rem;
}

.timeline-item {
  position: relative;
  padding: 1.6rem 1.5rem 1.5rem 3.2rem;
}

.timeline-dot {
  position: absolute;
  left: 1.2rem;
  top: 1.65rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 6px rgba(116, 240, 211, 0.12);
}

.timeline-content h4 {
  margin-bottom: 0.35rem;
}

.time {
  display: inline-block;
  margin-bottom: 0.5rem;
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.timeline-content p {
  color: var(--muted);
}

.contact-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.contact-links {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.contact-links a {
  color: var(--muted);
  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 1.2rem 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: center;
  color: var(--muted);
}

@media (max-width: 900px) {
  .hero-content,
  .about-grid,
  .projects-grid,
  .contact-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-box {
    align-items: flex-start;
  }
}

@media (max-width: 700px) {
  .nav-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 74px;
    right: 1rem;
    left: 1rem;
    display: none;
    flex-direction: column;
    padding: 1rem;
    background: rgba(18, 28, 47, 0.96);
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: var(--shadow);
  }

  .nav-menu.open {
    display: flex;
  }

  .skills-grid,
  .about-stats {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 3rem;
  }

  .section {
    padding: 4.5rem 0;
  }
}
