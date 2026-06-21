import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Github, Linkedin, Mail, Phone, Download, ExternalLink, Code2, ArrowDown,
  Database, Cloud, Send, ArrowRight, ArrowUpRight, FileText,
  GraduationCap, Award, Trophy, Briefcase, Sparkles, Cpu, Layers, Globe,
  Menu, X,

} from "lucide-react";

/**
 * ==========================================
 * MAMINDLA JEEVAN — PORTFOLIO WEBSITE CODE
 * ==========================================
 * 
 * This file contains the main user interface layout and interactive
 * elements of the portfolio. It is divided into clear sections:
 * - Data: Contains profile data (skills, projects, education, etc.)
 * - Primitives: Helper UI animations (Framer Motion)
 * - Navigation: Header navigation links
 * - Main Sections: Hero, About, Skills, Projects, Internships, Resume, Links, Contact, Footer
 */

/* ---------- Data / Content Configuration ---------- */

const NAV = ["Home", "About", "Skills", "Projects", "Internships", "Resume", "Links", "Contact"];

const SKILLS = {
  Backend: ["Python", "Django", "Flask"],
  Frontend: ["JavaScript", "HTML", "CSS"],
  Database: ["MySQL", "MongoDB"],
  "AI / Libraries": ["TensorFlow", "OpenCV", "NumPy", "Pandas"],
} as const;

const CATEGORY_ICONS = {
  Backend: Cpu,
  Frontend: Code2,
  Database: Database,
  "AI / Libraries": Layers,
} as const;

// --- Selected Projects List ---
// To add new projects, simply append a new object to this array with:
// title, desc, stack (array of strings), gradient class, github URL, and live demo URL.
const PROJECTS = [
  {
    title: "Multi-Culture Sign Language Detection and Recognition Using Fine-Tuned CNN",
    desc: "AI-powered sign language detection system using a Hybrid CNN with YOLOv8 for real-time gesture recognition. Built a web interface and created a custom dataset with preprocessing and augmentation techniques.",
    stack: ["Python", "TensorFlow", "OpenCV", "YOLOv8", "HTML", "CSS", "NumPy", "Pandas", "Matplotlib"],
    gradient: "from-[#A3FF12]/30 via-[#A3FF12]/10 to-transparent",
    github: "https://github.com/jeevan56011/Project1",
    demo: "https://jeevan56011-signlanguage.hf.space",
  },
];

const INTERNSHIPS = [
  {
    role: "Google Cloud Generative AI Intern",
    org: "SmartInternz, India · Online",
    period: "Sep 2024 — Oct 2024",
    points: [
      "Virtual internship focused on Google Cloud Generative AI.",
      "Enhanced understanding of AI concepts and modern GenAI tooling.",
      "Completed hands-on assignments and practical sessions to solidify learning.",
    ],
  },
  {
    role: "Python Development Intern",
    org: "Cognifyz Technologies, India",
    period: "Nov 2024 — Dec 2024",
    points: [
      "Demonstrated strong problem-solving, coordination and communication while delivering assigned projects.",
      "Built Python modules and applied core concepts to real-world tasks with attention to detail.",
    ],
  },
];

const EDUCATION = [
  { school: "B.Tech — Computer Science and Engineering, JNTUH (2022–26)", body: "Guru Nanak Institutions Technical Campus, Ibrahimpatnam. CGPA: 8.61." },
  { school: "Intermediate — MPC, TGBIE (2020–22)", body: "SR Junior College, Hanumakonda." },
  { school: "Tenth Class — CBSE (2019–20)", body: "JSM High School, Hanumakonda." },
];

const CERTIFICATIONS = [
  "Google Cloud Generative AI Internship Certificate",
  "AI Data Scientist Certification",
  "AWS Cloud Computing Essentials",
  "Python Development Certification",
  "GitHub Hands-On Workshop Certificate",
];

const ACHIEVEMENTS = [
  "Achieved 8.61 CGPA in Computer Science Engineering.",
  "Developed an AI-based Sign Language Detection System using CNN and YOLOv8.",
  "Completed industry-focused internships in Generative AI and Python Development.",
  "Earned certifications in AI, Cloud Computing, Python, and GitHub.",
];


const LINKS = [
  { name: "LinkedIn", hint: "in/jeevan-mamindla", icon: Linkedin, href: "https://www.linkedin.com/in/jeevan-mamindla-6ba4a9338/" },
  { name: "GitHub", hint: "@jeevan56011", icon: Github, href: "https://github.com/jeevan56011" },
  { name: "Salesforce", hint: "Trailblazer profile", icon: Sparkles, href: "https://www.salesforce.com/trailblazer/rywico3t11p0abqnpr" },
  { name: "Email", hint: "jeevan56011@gmail.com", icon: Mail, href: "mailto:jeevan56011@gmail.com" },
];

/* ---------- Primitives ---------- */

function SectionHeading({ kicker, title, subtitle, id }: { kicker: string; title: string; subtitle?: string; id?: string }) {
  return (
    <div id={id} className="mb-14 scroll-mt-24">
      <div className="text-xs font-mono uppercase tracking-[0.2em] text-lime mb-4">{kicker}</div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight gradient-text">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-[15px] text-[#D1D5DB] max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function FadeIn({ children, delay = 0, y = 16 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Navbar ---------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`max-w-6xl mx-auto px-4`}>
        <div className="flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 glass-nav">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="w-7 h-7 rounded-md bg-lime text-black font-bold flex items-center justify-center text-sm">J</span>
            <span className="text-white">Jeevan</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="text-sm text-[#D1D5DB] hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/5"
              >
                {n}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-black bg-lime hover:opacity-90 transition rounded-full px-4 py-1.5"
            >
              Hire me <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-nav rounded-2xl p-2 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm text-[#D1D5DB] hover:text-white px-4 py-2.5 rounded-xl transition-colors hover:bg-white/5"
              >
                {n}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}


/* ---------- Hero ---------- */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Ambient lime glow */}
      <div className="ambient-orb w-[600px] h-[600px] bg-[#A3FF12]/20 -top-40 left-1/2 -translate-x-1/2" />
      <div className="ambient-orb w-[500px] h-[500px] bg-white/5 bottom-0 right-0" />

      <motion.div style={{ y, opacity }} className="relative max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 mb-8 text-xs text-[#D1D5DB]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] gradient-text"
        >
          Mamindla Jeevan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-[#D1D5DB] font-medium"
        >
          Python Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-5 max-w-2xl mx-auto text-[15px] md:text-base text-[#D1D5DB]/80 leading-relaxed"
        >
          Building scalable web applications, modern digital experiences, and intelligent software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-2.5 hover:bg-white/90 transition"
          >
            Let's Connect <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-2.5 hover:bg-white/90 transition"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] text-white font-medium text-sm px-5 py-2.5 hover:bg-white/[0.08] transition"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Floating profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.7 }}
          className="float-anim mt-16 mx-auto max-w-sm surface p-5 flex items-center gap-4 text-left"
        >
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#A3FF12] to-white/80 flex items-center justify-center text-black font-bold text-lg">
              MJ
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-lime border-2 border-[#121212]" />
          </div>
          <div className="flex-1">
            <div className="text-white font-medium text-sm">Mamindla Jeevan</div>
            <div className="text-[#D1D5DB]/70 text-xs">Python Full Stack Developer · India</div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#D1D5DB]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- About ---------- */

const ABOUT_CARDS = [
  {
    label: "Introduction",
    body: "Aspiring Software Developer and Computer Science student with strong skills in Python, SQL, and full-stack web development. Passionate about building scalable applications, analyzing data-driven insights, and contributing to innovative technology solutions.",
  },
  {
    label: "Career Summary",
    body: "Aspiring Software Developer with expertise in Python, MySQL, and web development, passionate about building innovative solutions.",
  },
  {
    label: "Development Philosophy",
    body: "I believe in building simple, efficient, and user-focused solutions while continuously learning new technologies to create reliable and scalable applications.",
  },
  {
    label: "Personal Mission",
    body: "To continuously learn and apply emerging technologies to solve real-world challenges, and contribute to innovative software solutions while growing as a skilled and responsible technology professional.",
  },
];

function About() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
      <FadeIn>
        <SectionHeading id="about" kicker="About" title="A developer who values craft and clarity." subtitle="Computer Science student. Python full-stack builder. Focused on simple, reliable, well-crafted software." />
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-5">
        {ABOUT_CARDS.map((c, i) => (
          <FadeIn key={c.label} delay={i * 0.06}>
            <div className="surface surface-hover p-7 h-full">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-lime mb-3">{c.label}</div>
              <p className="text-[15px] leading-relaxed text-[#D1D5DB]">{c.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */

function Skills() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
      <FadeIn>
        <SectionHeading id="skills" kicker="Skills" title="Tools I use to ship great software." subtitle="A focused, practical stack — chosen for reliability, scalability and developer experience." />
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(SKILLS).map(([cat, items], i) => {
          const Icon = CATEGORY_ICONS[cat as keyof typeof CATEGORY_ICONS];
          return (
            <FadeIn key={cat} delay={i * 0.06}>
              <div className="surface surface-hover p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-lime" />
                  </div>
                  <div className="text-sm font-medium text-white">{cat}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="text-xs text-[#D1D5DB] bg-white/[0.04] border border-white/10 rounded-full px-3 py-1 hover:border-lime/40 hover:text-white transition">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

function Projects() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
      <FadeIn>
        <SectionHeading id="projects" kicker="Projects" title="Selected work." subtitle="A few things I've designed, built and shipped." />
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group surface surface-hover block overflow-hidden"
            >
              <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-semibold tracking-tight gradient-text opacity-80 group-hover:scale-110 transition-transform duration-700">
                    {p.title.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[14px] text-[#D1D5DB] leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-mono text-[#D1D5DB] bg-white/[0.04] border border-white/10 rounded-full px-2.5 py-0.5">{s}</span>
                  ))}
                </div>
                {(p.github || p.demo) && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[13px] font-medium rounded-full px-4 py-2 bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.12] transition"
                      >
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[13px] font-medium rounded-full px-4 py-2 bg-white text-black hover:bg-white/90 transition"
                      >
                        <ExternalLink className="w-4 h-4" /> Open Project
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- Internships ---------- */

function Internships() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
      <FadeIn>
        <SectionHeading id="internships" kicker="Internships" title="Hands-on experience." subtitle="Practical exposure through industry-led internships in AI and Python development." />
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-5">
        {INTERNSHIPS.map((it, i) => (
          <FadeIn key={it.role} delay={i * 0.08}>
            <div className="surface surface-hover p-7 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-lime/10 border border-lime/30 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-lime" />
                </div>
                <div>
                  <div className="text-white font-medium text-[15px]">{it.role}</div>
                  <div className="text-xs text-[#D1D5DB]/70">{it.org}</div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {it.points.map((p) => (
                  <li key={p} className="text-[13px] text-[#D1D5DB] leading-relaxed flex items-start gap-2">
                    <span className="text-lime mt-1">›</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- Resume ---------- */

function Resume() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
      <FadeIn>
        <SectionHeading id="resume" kicker="Resume" title="Experience, education and a few wins." />
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Resume preview card */}
        <FadeIn>
          <div className="surface p-7 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-md bg-lime/10 border border-lime/30 flex items-center justify-center">
                <FileText className="w-5 h-5 text-lime" />
              </div>
              <div>
                <div className="text-white font-medium">Mamindla-Jeevan-Resume.pdf</div>
                <div className="text-xs text-[#D1D5DB]/70">Updated 2026</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="hairline" />
              <div className="hairline" />
              <div className="hairline" />
              <div className="hairline" />
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a href="/Mamindla-Jeevan-Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black text-sm font-medium px-4 py-2.5 hover:bg-white/90 transition">
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <button
                type="button"
                onClick={() => window.open("/Mamindla-Jeevan-Resume.pdf", "_blank", "noopener,noreferrer")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] text-white text-sm font-medium px-4 py-2.5 hover:bg-white/[0.08] transition"
              >
                <ExternalLink className="w-4 h-4" /> Open Full Resume
              </button>
            </div>
          </div>
        </FadeIn>



        {/* Education + Certs */}
        <FadeIn delay={0.16}>
          <div className="space-y-5 h-full">
            <div className="surface p-7">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="w-4 h-4 text-lime" />
                <div className="text-sm font-medium text-white">Education</div>
              </div>
              <div className="space-y-4">
                {EDUCATION.map((e) => (
                  <div key={e.school}>
                    <div className="text-sm font-medium text-white">{e.school}</div>
                    <p className="text-[13px] text-[#D1D5DB] mt-1 leading-relaxed">{e.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="surface p-7">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-lime" />
                <div className="text-sm font-medium text-white">Certifications</div>
              </div>
              <ul className="space-y-2">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="text-[13px] text-[#D1D5DB] flex items-start gap-2">
                    <span className="text-lime mt-1">•</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Achievements row */}
      <FadeIn delay={0.1}>
        <div className="mt-6 surface p-7">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-lime" />
            <div className="text-sm font-medium text-white">Achievements</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((a) => (
              <div key={a} className="text-[13px] text-[#D1D5DB] flex items-start gap-2">
                <span className="text-lime mt-1">›</span> {a}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ---------- Links ---------- */

function Links() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
      <FadeIn>
        <SectionHeading id="links" kicker="Links" title="Find me online." subtitle="Connect, collaborate or just say hello." />
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LINKS.map((l, i) => (
          <FadeIn key={l.name} delay={i * 0.06}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group surface surface-hover p-6 flex items-center gap-4 block"
            >
              <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-lime/10 group-hover:border-lime/30 transition">
                <l.icon className="w-5 h-5 text-white group-hover:text-lime transition" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">{l.name}</div>
                <div className="text-xs text-[#D1D5DB]/70 truncate">{l.hint}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#D1D5DB]/60 group-hover:text-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-36">
      <FadeIn>
        <SectionHeading id="contact" kicker="Contact" title="Let's build something great." subtitle="Open to internships, freelance work and full-time opportunities." />
      </FadeIn>

      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2">
        <FadeIn>
          <div className="surface p-7 lg:col-span-2 h-full flex flex-col gap-5">
            <a href="mailto:jeevan56011@gmail.com" className="group flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-lime/40 transition">
                <Mail className="w-5 h-5 text-lime" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#D1D5DB]/60">Email</div>
                <div className="text-sm text-white font-medium"><span>jeevan56011@gmail.com</span></div>
              </div>
            </a>
            <a href="tel:+918688014670" className="group flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-lime/40 transition">
                <Phone className="w-5 h-5 text-lime" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#D1D5DB]/60">Phone</div>
                <div className="text-sm text-white font-medium"><span>+91 86880 14670</span></div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-lime" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#D1D5DB]/60">Location</div>
                <div className="text-sm text-white font-medium">India · Remote friendly</div>
              </div>
            </div>
            <div className="hairline mt-2" />
            <p className="text-[13px] text-[#D1D5DB] leading-relaxed">
              Replies usually within 24 hours. Prefer email for project inquiries and collaborations.
            </p>
          </div>
        </FadeIn>
        </div>

        <div className="lg:col-span-3">
        <FadeIn delay={0.08}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = String(data.get("name") || "").trim();
              const email = String(data.get("email") || "").trim();
              const message = String(data.get("message") || "").trim();
              const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:jeevan56011@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
              setTimeout(() => setSent(false), 3500);
            }}
            className="surface p-7 lg:col-span-3 h-full flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#D1D5DB]/70">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project…"
                className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#D1D5DB]/40 outline-none focus:border-lime/40 focus:bg-white/[0.05] transition resize-none"
              />
            </div>

            <div className="flex items-center justify-between gap-4 mt-1">
              <div className="text-xs text-[#D1D5DB]/60">{sent ? "Message sent — thank you." : "I'll get back to you shortly."}</div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-lime text-black font-medium text-sm px-5 py-2.5 hover:opacity-90 transition"
              >
                {sent ? "Sent ✓" : (<>Send <Send className="w-4 h-4" /></>)}
              </motion.button>
            </div>
          </form>
        </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-[#D1D5DB]/70">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#D1D5DB]/40 outline-none focus:border-lime/40 focus:bg-white/[0.05] transition"
      />
    </div>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#D1D5DB]">
          <span className="w-6 h-6 rounded-md bg-lime text-black font-bold flex items-center justify-center text-xs">J</span>
          Mamindla Jeevan
        </div>
        <div className="text-xs text-[#D1D5DB]/60">© {new Date().getFullYear()} — Designed and built with care.</div>
        <div className="flex items-center gap-3">
          {LINKS.slice(0, 3).map((l) => (
            <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="text-[#D1D5DB]/70 hover:text-lime transition">
              <l.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Resume />
      <Links />
      <Contact />
      <Footer />
    </div>
  );
}
