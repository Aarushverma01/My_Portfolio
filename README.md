# Aarush Verma — Personal Portfolio Website

A fast, minimalist, and bold personal portfolio website built with semantic HTML5, pure CSS3 (CSS Grid & Flexbox), and vanilla JavaScript. Designed specifically for a **Machine Learning Engineer & Data Analyst**.

---

## ⚡ Quick Start: How to Run

Because this project uses zero frameworks, build tools, or package managers:

1. **Option A (Instant - Double Click):**
   - Double-click `index.html` in your file explorer. It will immediately open in your default browser.
2. **Option B (Local Dev Server - Recommended):**
   - If you have Python installed, open terminal in this folder and run:
     ```bash
     python -m http.server 8000
     ```
   - Open [http://localhost:8000](http://localhost:8000) in your browser.
   - Alternatively, if you use VS Code, right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 File Structure

```text
portfolio/
├── index.html           # Semantic single-page portfolio structure
├── styles.css           # Clean CSS with variables, grid, responsive styles, & dark/light theme
├── script.js            # Vanilla JS for theme switching, mobile drawer, & scroll reveals
├── assets/
│   ├── profile.jpg      # Placeholder portrait (replace with your personal photo)
│   └── resume.pdf       # Placeholder PDF (replace with your real resume file)
└── README.md            # Documentation, customization guide, & deployment instructions
```

---

## 📸 How to Swap Your Photo

1. Prepare your portrait / headshot in `.jpg` or `.png` format.
2. Name the file **`profile.jpg`**.
3. Place it inside the **`assets/`** folder (replacing the current placeholder `assets/profile.jpg`).
4. *Tip:* The site uses `object-fit: cover` with rounded borders, so square, portrait, or landscape headshots will automatically format cleanly.

---

## 📄 How to Swap Your Resume

1. Export your latest resume as a PDF.
2. Name the file **`resume.pdf`**.
3. Place it inside the **`assets/`** folder (replacing `assets/resume.pdf`).
4. The **"Download resume"** button in the hero section is already pre-wired to download `assets/resume.pdf` as `Aarush_Verma_Resume.pdf`.

---

## 🎨 How to Change the Accent Color

The portfolio uses **ONE sharp accent color** suited for algorithmic and ML work (Electric Emerald by default).

To change it, open **`styles.css`** and find the color variables around line 35:

```css
/* In styles.css */
[data-theme="dark"] {
  --accent: #10b981;        /* Change this hex code */
  --accent-rgb: 16, 185, 129;
  --accent-hover: #34d399;
}

[data-theme="light"] {
  --accent: #059669;        /* Change this hex code */
  --accent-rgb: 5, 150, 105;
  --accent-hover: #047857;
}
```

### Recommended Curated Palettes for Data / ML:

- **Electric Emerald (Active Default):**
  - Dark: `#10b981` | Light: `#059669`
  - *Vibe: Terminal status, matrix nodes, active training run.*
- **Electric Cyan / Mint:**
  - Dark: `#06b6d4` | Light: `#0891b2`
  - *Vibe: High-throughput telemetry, data pipelines, modern AI.*
- **Precision Cobalt Blue:**
  - Dark: `#3b82f6` | Light: `#2563eb`
  - *Vibe: Enterprise cloud systems, PyTorch / TensorFlow blue.*
- **Deep Violet / Iris:**
  - Dark: `#8b5cf6` | Light: `#7c3aed`
  - *Vibe: Modern research lab, LLM intelligence.*
- **Terminal Amber:**
  - Dark: `#f59e0b` | Light: `#d97706`
  - *Vibe: High contrast, computational engineering.*

---

## 📝 List of All TODO Items

In accordance with strict content rules, facts and links not present in your resume were **not** invented. The following TODO placeholders remain for you to customize:

1. **LinkedIn Profile URL:**
   - **File:** `index.html` (Contact section)
   - **Current Value:** `https://www.linkedin.com/in/TODO_LINKEDIN_PROFILE`
   - **Action:** Replace with your actual LinkedIn profile handle (e.g., `https://linkedin.com/in/aarush-verma`).
2. **Web Technologies (Skills):**
   - **File:** `index.html` (Skills section - Category 03)
   - **Current Value:** Placeholder tag `[TODO: Web Frameworks - e.g. FastAPI, Flask, HTML5]`
   - **Action:** The prompt requested a "Web" category; your resume did not list web frameworks. Add any web frameworks you use (such as FastAPI, Flask, Django, Streamlit, or Gradio).
3. **Database Technologies (Skills):**
   - **File:** `index.html` (Skills section - Category 04)
   - **Current Value:** Placeholder tag `[TODO: Databases - e.g. PostgreSQL, MySQL, SQLite]`
   - **Action:** The prompt requested a "Databases" category; your resume did not list database engines. Add any databases you use (such as PostgreSQL, MySQL, SQLite, MongoDB, or Redis).
4. **Additional Projects (Optional Template):**
   - **File:** `index.html` (Projects section)
   - **Current Value:** A commented placeholder project card for future projects.
   - **Action:** When you build your next data science or ML project, fill in the title, description, tags, and repo link.
5. **Personal Profile Headshot:**
   - **File:** `assets/profile.jpg`
   - **Action:** Drop your actual photo into `assets/profile.jpg`.
6. **Official Resume Document:**
   - **File:** `assets/resume.pdf`
   - **Action:** Drop your real resume PDF into `assets/resume.pdf`.

*(Note: Your GitHub profile is now connected to `https://github.com/Aarushverma01` across the top navigation, contact channels, Open Graph meta tags, and project links).*

---

## 🚀 Free Deployment Guide

### Option 1: GitHub Pages (Free, 2 minutes)

1. Create a new public GitHub repository on your account (`Aarushverma01`), named **`My_Portfolio`**.
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/Aarushverma01/My_Portfolio.git
   git push -u origin main
   ```
3. Go to your repository on GitHub.
4. Click **Settings** > **Pages** (in the left sidebar).
5. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
6. In about 60 seconds, your site will be live at `https://<your-username>.github.io/<your-repo-name>/`!

---

### Option 2: Netlify (Free, Drag-and-Drop or Git)

1. Go to [app.netlify.com](https://app.netlify.com) and log in (or sign up with GitHub).
2. **Instant Drag-and-Drop method:**
   - Navigate to the **Sites** tab.
   - Drag and drop this entire `portfolio/` folder into the Netlify drop zone.
   - Netlify will instantly deploy it and provide a live URL (e.g. `https://aarush-verma-portfolio.netlify.app`).
3. **Git Continuous Deployment method:**
   - Click **Add new site** > **Import an existing project**.
   - Choose your GitHub repository.
   - Leave the build command and publish directory empty (since there is no build step).
   - Click **Deploy site**.
   - Any time you push a git commit, Netlify will automatically update your site!

