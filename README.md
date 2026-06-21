# Mamindla Jeevan — Cyberpunk Portfolio Website

A premium, interactive, and fully responsive cyberpunk-themed developer portfolio website built for **Mamindla Jeevan** (Python Full Stack Developer). 

This website is designed with a sleek dark aesthetic, neon accents (lime/green), ambient glows, particles, customized cursor interactions, and fluid micro-animations.

---

## 🚀 Tech Stack

*   **Framework:** React 19 + TanStack Start (TS-first, server-side routing & rendering framework)
*   **Styling:** TailwindCSS + Custom CSS tokens (glassmorphism, floating keyframes, neon gradients)
*   **Animations:** Framer Motion (smooth scroll-triggered entrance animations)
*   **Icons:** Lucide React
*   **Editor & Deployment:** Lovable.dev (auto-builds, compiles, and hosts the application)

---

## 📁 Key File Structure

The project has a standard TanStack Start folder structure:

```text
├── .lovable/               # Lovable build-system metadata
├── public/                 # Static assets
│   ├── favicon.ico
│   └── Mamindla-Jeevan-Resume.pdf  # Downloadable resume file
├── src/
│   ├── components/
│   │   ├── Portfolio.tsx   # 主 Core portfolio layout, sections & profile data
│   │   ├── Particles.tsx   # Interactive background particle network
│   │   ├── MouseGlow.tsx    # Radial neon glow following mouse pointer
│   │   └── CyberCursor.tsx  # Customized animated cyberpunk cursor
│   ├── routes/
│   │   ├── __root.tsx      # Main layout wrapper, HTML head config, styling imports
│   │   └── index.tsx       # Root home page mapping to components
│   └── styles.css          # Core custom styles, keyframe animations, glass effects
├── package.json            # Node/npm dependency details
└── vite.config.ts          # Vite bundler configuration
```

---

## 🛠️ How to Edit & Customize

To update content, open [src/components/Portfolio.tsx](file:///src/components/Portfolio.tsx). All personal information is configured in clean, human-readable TypeScript data constants at the top of the file:

*   **`NAV`**: The navigation header items.
*   **`SKILLS`**: Grouped skills list (Backend, Frontend, Databases, AI/Libraries).
*   **`PROJECTS`**: Edit or append items here to show projects. Each project supports standard links to GitHub and live deployments.
*   **`INTERNSHIPS`**: Roles, organizations, periods, and key achievements.
*   **`EDUCATION`**: School names, boards, dates, and CGPA.
*   **`CERTIFICATIONS`**: Academic and technical certifications.
*   **`ACHIEVEMENTS`**: Key wins and personal highlights.
*   **`LINKS`**: Social media profiles (LinkedIn, GitHub, Salesforce, Email).

---

## 💻 Local Development Setup

To run this application locally, you will need **Node.js** and **npm** (or **Bun**) installed.

1.  **Clone the Repository:**
    ```bash
    git clone <your-repository-url>
    cd portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or if you use Bun:
    bun install
    ```

3.  **Start the Local Dev Server:**
    ```bash
    npm run dev
    # or:
    bun run dev
    ```
    Open `http://localhost:3000` in your web browser.

4.  **Build for Production:**
    ```bash
    npm run build
    # or:
    bun run build
    ```

---

## ☁️ Lovable.dev Synchronization

If you connected this repository to **Lovable.dev**:
*   Every commit pushed to the connected branch on GitHub will automatically trigger a deployment on Lovable.
*   You can edit the layout visually or via prompts on Lovable.dev, and pull those changes back into GitHub anytime.
