import React, { useState, useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Brain,
  Terminal,
  Cpu,
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Image as ImageIcon,
  X,
  ShieldCheck
} from "lucide-react";

const Portfolio = () => {
  // --- STATE FOR MODAL & SCROLLING ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const projectsRef = useRef(null);

  // --- STATE FOR SIH SLIDESHOW ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- SIH PHOTOS DATA ---
  const sihPhotos = [
    "/sih-photos/sih0.jpg",
    "/sih-photos/sih1.jpg",
    "/sih-photos/sih2.jpg",
    "/sih-photos/sih3.jpg",
    "/sih-photos/sih5.jpg",
    "/sih-photos/sih6.jpg",
    "/sih-photos/sih7.jpg",

  ];

  // --- AUTO SLIDE EFFECT ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sihPhotos.length - 1 ? 0 : prev + 1));
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(timer);
  }, [sihPhotos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sihPhotos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sihPhotos.length - 1 : prev - 1));
  };

  // --- HANDLERS ---
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  /* =======================
       PERSONAL INFORMATION
  ======================= */
  const personalInfo = {
    name: "Sushant Markad",
    role: "Full-Stack Developer | AI Integration",
    summary:
      "I am a second-year Information Technology engineering student and Smart India Hackathon 2025 1st Runner-up. I specialize in building scalable full-stack applications using React.js, Node.js, and Generative AI technologies to solve complex, real-world challenges across various domains.",
    shortBio: "SIH 2025 1st Runner-up & Tech Enthusiast",
    email: "sushantmarkad1@gmail.com",
    linkedin: "clea",
    github: "https://github.com/sushantmarkad",
    profilePhoto: "/profile.jpg"
  };

  /* =======================
       SKILLS
  ======================= */
  const skills = [
    {
      category: "Frontend Development",
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
      icon: <Code size={24} />,
    },
    {
      category: "Backend & Cloud",
      items: [
        "Node.js",
        "Firebase Authentication",
        "Firestore & Realtime Database",
        "REST APIs",
        "MySQL",
        "MongoDB",
      ],
      icon: <Database size={24} />,
    },
    {
      category: "AI & Tools",
      items: [
        "Generative AI APIs (Open AI / Groq)",
        "Prompt Engineering",
        "Python",
        "Git & GitHub",
        "Postman (API Testing)",
      ],
      icon: <Brain size={24} />,
    },
    {
      category: "Security & System Design",
      items: [
        "JWT Authentication",
        "Two-Factor Authentication (2FA)",
        "Secure API Design",
        "Input Validation",
        "Session Management"
      ],
      icon: <ShieldCheck size={24} />,
    }
  ];

  /* =======================
       PROJECTS
  ======================= */
  const projects = [
    {
      title: "AcadeX – AI-Powered Academic Management Platform",
      tag: "🏆 SIH 2025 | 1st Runner-up",
      description:
        "AcadeX is an AI-driven academic platform developed during Smart India Hackathon 2025 to address inefficiencies in attendance tracking and student academic monitoring. The system automates attendance and integrates an AI-powered chatbot that assists students with doubt-solving.",
      tech: [
        "React.js",
        "Node.js",
        "Firebase Auth",
        "Firestore",
        "Generative AI",
        "Render",
        "Groq API",
      ],
      link: "https://acadexonline.in/",
      screenshots: [
        "/project-images/acadex0.png",
        "/project-images/acadex1.png",
        "/project-images/acadex2.png",
        "/project-images/acadex3.png",
        "/project-images/acadex4.png",
        "/project-images/acadex5.png",
        "/project-images/acadex6.png",
        "/project-images/acadex7.png",
        "/project-images/acadex8.png"

      ]
    },
    {
      title: "Secure Chat – Real-Time Encrypted Messaging App",
      tag: "🛡️ Privacy-Focused Web Application",
      description:
        "Secure Chat is a real-time messaging web application designed to provide fast and private communication. It supports instant messaging using WebSockets and implements end-to-end encryption to ensure message confidentiality.",
      tech: [
        "React.js",
        "Node.js",
        "Socket.io",
        "Firebase",
        "JWT Auth",
      ],
      link: "https://my-chats-8ee7a.web.app/",
      screenshots: [
        "/project-images/chat1.png",
        "/project-images/chat2.png",
        "/project-images/chat3.png",
        "/project-images/chat4.png",
        "/project-images/chat5.png"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans overflow-x-hidden relative selection:bg-cyan-500 selection:text-white">

      {/* --- BACKGROUND GLOW ANIMATION --- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* =======================
          NAVBAR
      ======================= */ }
      <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text cursor-pointer hover:opacity-80 transition-opacity">
            Sushant<span className="text-slate-500"> Markad</span>
          </h1>
          <div className="flex gap-6">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors hover:scale-110 transform">
              <Mail size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors hover:scale-110 transform">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors hover:scale-110 transform">
              <Github size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* =======================
          HERO SECTION
      ======================= */ }
      <header className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* LEFT SIDE: Text & Buttons */}
          <div className="flex-1 space-y-8 animate-fade-in-up text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-cyan-500/30 text-cyan-300 rounded-full bg-cyan-950/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] mx-auto md:mx-0">
              <Terminal size={14} />
              <span>Open to Internship & Development Roles</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Building practical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-gradient-x">
                digital solutions.
              </span>
            </h1>

            <p className="text-slate-400 text-xl leading-relaxed border-l-0 md:border-l-4 border-slate-700 pl-0 md:pl-6 max-w-2xl">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-white hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(8,145,178,0.3)] flex items-center gap-2"
              >
                View Projects <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>

              <a
                href="/resume.pdf"
                download="Sushant_Markad_CV.pdf"
                className="group px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Photo & Profile Card */}
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in-up delay-200">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse"></div>
              <div className="relative bg-[#1e293b] border border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center shadow-2xl max-w-xs">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-800 shadow-inner mb-4 relative z-10">
                  <img
                    src={personalInfo.profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/300?text=Sushant"
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{personalInfo.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{personalInfo.shortBio}</p>
                <div className="flex gap-4 mt-4 pt-4 border-t border-slate-700 w-full justify-center">
                  <a href={personalInfo.linkedin} className="text-slate-400 hover:text-white"><Linkedin size={18} /></a>
                  <a href={personalInfo.github} className="text-slate-400 hover:text-white"><Github size={18} /></a>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white"><Mail size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =======================
          SKILLS
      ======================= */ }
      <section className="py-20 bg-slate-900/50 border-y border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Cpu size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 bg-[#162032] border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group hover:-translate-y-1"
              >
                <div className="mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300 inline-block">{skill.icon}</div>
                <h3 className="text-lg font-bold text-white mb-4">{skill.category}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-400 group-hover:text-slate-200 transition-colors text-sm">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          PROJECTS
      ======================= */ }
      <section ref={projectsRef} className="py-28 px-6 max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Globe size={24} />
          </div>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#162032] border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/10 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-cyan-300 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                  {project.tag}
                </span>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <ExternalLink className="text-slate-500 hover:text-white transition-colors" size={20} />
                </a>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="group-hover:text-cyan-400 transition-colors block">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              </a>
              <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>
              <div className="flex justify-between items-end border-t border-slate-700 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1.5 rounded border border-slate-700">{t}</span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="ml-4 p-2 text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
                  title="View Screenshots"
                >
                  <ImageIcon size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================
          SIH SLIDESHOW (Updated for Portrait Photos)
      ======================= */ }
      <section className="py-24 px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Hackathon Memories</h2>
          <p className="text-slate-400">Winning Moments from Smart India Hackathon 2025</p>
        </div>

        {/* Changed aspect-video to h-[500px] to give portrait photos more room */}
        <div className="relative group rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[500px] bg-[#162032]">
          {/* Images */}
          {sihPhotos.map((photo, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* 1. BLURRED BACKGROUND (Fills the gaps) */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 scale-110"
                style={{ backgroundImage: `url(${photo})` }}
              ></div>

              {/* 2. MAIN PHOTO (Shows fully in center) */}
              <img
                src={photo}
                alt={`SIH Memory ${idx + 1}`}
                className="relative w-full h-full object-contain z-10 drop-shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/800x450?text=Photo+Not+Found";
                }}
              />
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-cyan-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-cyan-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {sihPhotos.map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-lg ${idx === currentSlide ? 'bg-cyan-400 w-8' : 'bg-slate-400/50'}`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          IMAGE MODAL
      ======================= */ }
      {isModalOpen && activeProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in-up">
          <div className="bg-[#1e293b] w-full max-w-5xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-700 flex justify-between items-center bg-[#0f172a] shrink-0">
              <div>
                <h3 className="text-xl font-bold text-white">{activeProject.title}</h3>
                <p className="text-sm text-slate-400">Project Gallery</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-colors text-slate-400"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 bg-[#0f172a] overflow-y-auto">
              <div className="grid grid-cols-1 gap-8">
                {activeProject.screenshots.map((screen, idx) => (
                  <div key={idx} className="space-y-2 group">
                    <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg group-hover:border-cyan-500/50 transition-all duration-300 relative">
                      <img
                        src={screen}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-slate-700 bg-[#0f172a] flex justify-end gap-3 shrink-0">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-400 hover:text-white transition-colors">Close</button>
              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
              >
                Visit Live Site
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =======================
          FOOTER
      ======================= */}
      <footer className="py-10 text-center border-t border-slate-800 bg-[#0f172a] relative z-10">
        <p className="text-slate-500 text-sm">
          Designed & Developed by{" "}
          <span className="text-slate-300">Sushant Markad</span> © 2025
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;