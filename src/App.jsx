import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, 
  ExternalLink, Download, Menu, X, Clock, 
  Terminal, Sparkles, ArrowRight, Briefcase, 
  GraduationCap, Cloud, Award, Database, Wrench, Layout,
  ChevronRight, Quote, Layers, Server, Code
} from 'lucide-react';

// --- DATA ---
const EXPERIENCE = [
  {
    role: 'Web Developer',
    company: 'Mono Motor Works',
    period: '02/2026 – 04/2026',
    location: 'Guwahati',
    highlights: [
      'Engineered a high-performance, responsive SPA using React.js to build a modern digital footprint.',
      'Improved page loading speed through optimized asset delivery, lazy loading, and efficient architecture.'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Raimona Cargo',
    period: '12/2025 – 02/2026',
    location: 'Guwahati',
    highlights: [
      'Developed a full-stack logistics and cargo management platform from the ground up using React, Node.js, and Python.',
      'Optimized client intake, enabling the business to handle 1,000+ monthly logistic inquiries digitally.',
      'Created a role-based admin dashboard for overseeing active shipments and operational data.'
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'CodSoft',
    period: '11/2024 – 12/2024',
    location: 'Guwahati, IN',
    highlights: [
      'Engineered responsive web pages with HTML, CSS, and JavaScript to enhance user experience.'
    ]
  }
];

const EDUCATION = [
  { degree: 'Master of Computer Applications (MCA)', school: 'Cotton University', period: '08/2025 – Present', location: 'Guwahati' },
  { degree: 'Bachelor of Science in Physics', school: 'Cotton University', period: '09/2022 – 08/2025', location: 'Guwahati', details: 'Score: 6.64 CGPA' },
  { degree: 'Higher Secondary Certificate (Science)', school: 'Ramanujan Academy', period: '06/2019 – 07/2021', location: 'Baihata Chariali', details: 'Score: 94.5%' },
  { degree: 'Secondary School Certificate', school: 'Shankar Ajan Siksha Niketon', period: '01/2008 – 07/2019', location: 'Kamalpur', details: 'Score: 91.5%' }
];

const PROJECTS = [
  {
    title: 'Raimona Cargo',
    category: 'Full-Stack Platform',
    desc: 'A premium logistics application featuring a glassmorphic client portal, automated PDF invoicing, and real-time backend processing via Firebase and Resend.',
    tech: ['React', 'Tailwind', 'Node.js', 'Firebase', 'Resend'],
    link: 'https://www.raimonacargo.in',
    github: 'https://github.com/CornHaki/transport-frontend',
    image: '/raimona.webp'
  },
  {
    title: 'NeuroMemory',
    category: 'AI Engineering',
    desc: 'An intelligent memory layer solving LLM amnesia. Uses LangChain and local vector embeddings for blazing-fast, infinite context retrieval in 1,000+ turn conversations.',
    tech: ['Python', 'Streamlit', 'LangChain', 'Groq'],
    link: '', 
    github: 'https://github.com/CornHaki/NeuroHack',
    image: '/Neurahack.webp'
  },
  {
    title: 'Mono Motor Works',
    category: 'Immersive Frontend',
    desc: 'A high-performance automotive workshop experience featuring interactive Three.js 3D physics, dynamic F1 scroll animations, and a seamless bilingual UI.',
    tech: ['React', 'Three.js', 'Tailwind', 'Vite'],
    link: 'https://www.monomotorworks.com', 
    github: 'https://github.com/CornHaki/mono-motor-works',
    image: '/Mono.webp'
  }
];

const SERVICES = [
  {
    title: 'Frontend Engineering',
    desc: 'Building responsive, high-performance web applications with React.js, Tailwind, and interactive 3D elements for a premium user experience.',
    icon: <Layout size={28} className="text-cyan-400 relative z-10" />
  },
  {
    title: 'Backend Architecture',
    desc: 'Designing robust RESTful APIs and secure database management systems using Node.js, Express, PostgreSQL, and MongoDB.',
    icon: <Server size={28} className="text-violet-400 relative z-10" />
  },
  {
    title: 'Full-Stack Integration',
    desc: 'Connecting intuitive interfaces with powerful backends to deliver end-to-end, scalable digital solutions for businesses and startups.',
    icon: <Layers size={28} className="text-emerald-400 relative z-10" />
  }
];

const TESTIMONIALS = [
  {
    quote: "Dimpal has an exceptional ability to grasp complex technical requirements quickly. The performance and visual polish brought to our digital presence were outstanding for a fresh graduate.",
    author: "Senior Engineer",
    company: "Mono Motor Works"
  },
  {
    quote: "Delivered a complete logistics platform that fundamentally changed how we handle inquiries. The architecture is incredibly robust, and the UI is slick and professional.",
    author: "Operations Lead",
    company: "Raimona Cargo"
  }
];

// Interactive Bento Grid Skill Categories
const ARSENAL_SKILLS = [
  {
    category: 'Frontend & UI',
    icon: <Layout size={24} />,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/20',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Figma']
  },
  {
    category: 'Backend & Data',
    icon: <Database size={24} />,
    color: 'text-violet-400',
    bg: 'bg-violet-500/20',
    skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    category: 'Cloud & Systems',
    icon: <Cloud size={24} />,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/20',
    skills: ['Docker', 'AWS', 'Linux', 'CI/CD', 'Microservices']
  },
  {
    category: 'Core & Tools',
    icon: <Terminal size={24} />,
    color: 'text-amber-400',
    bg: 'bg-amber-500/20',
    skills: ['C++', 'Java', 'Git/GitHub', 'VS Code', 'Windsurf']
  }
];

// --- CINEMATIC COMPONENTS ---

// 1. Interactive 3D Canvas Background (Enhanced Premium Version)
const Canvas3DBackground = ({ scrollY }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < 600; i++) {
        const isForeground = Math.random() > 0.8;
        const colors = [
          `hsla(190, 100%, 75%, ${Math.random() * 0.5 + 0.1})`,
          `hsla(260, 100%, 80%, ${Math.random() * 0.5 + 0.1})`,
          `hsla(0, 0%, 100%, ${Math.random() * 0.3 + 0.05})`
        ];
        
        particles.push({
          x: (Math.random() - 0.5) * 3500,
          y: (Math.random() - 0.5) * 3500,
          z: Math.random() * 2500,
          size: isForeground ? Math.random() * 3 + 1.5 : Math.random() * 1.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          blur: isForeground ? Math.random() * 2 + 1 : 0 
        });
      }
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX - canvas.width / 2) * 0.0003;
      mouseRef.current.targetY = (e.clientY - canvas.height / 2) * 0.0003;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    init();

    const draw = () => {
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
      
      ctx.fillStyle = 'rgba(2, 2, 4, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.03;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.03;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const cosY = Math.cos(mouseRef.current.x);
      const sinY = Math.sin(mouseRef.current.x);
      const cosX = Math.cos(mouseRef.current.y);
      const sinX = Math.sin(mouseRef.current.y);

      particles.forEach(p => {
        p.z -= 0.8 + (scrollY.current * 0.001);
        if (p.z < 1) {
          p.z = 2500;
          p.x = (Math.random() - 0.5) * 3500;
          p.y = (Math.random() - 0.5) * 3500;
        }

        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        const fov = 600;
        
        // 👇 THE FIX: Prevents particles from blowing up to infinity when passing the camera 👇
        if (z2 < -fov + 50) return; 

        const scale = fov / (fov + z2);
        const x2d = x1 * scale + cx;
        const y2d = y1 * scale + cy;

        if (x2d >= 0 && x2d <= canvas.width && y2d >= 0 && y2d <= canvas.height) {
          ctx.beginPath();
          ctx.arc(x2d, y2d, Math.max(0.1, p.size * scale), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          if (p.blur > 0) {
            ctx.shadowBlur = p.blur * scale * 5;
            ctx.shadowColor = p.color;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-80" />;
};

// 2. 3D Tilt Card Component (Isolated)
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    cardRef.current.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
    cardRef.current.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    cardRef.current.style.setProperty('--glare-x', `50%`);
    cardRef.current.style.setProperty('--glare-y', `50%`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out transform-gpu will-change-transform w-full ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="absolute inset-0 z-50 pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.06) 0%, transparent 60%)`
        }}
      />
      {children}
    </div>
  );
};

// 3. Magnetic Button Component
const MagneticButton = ({ children, onClick, className, href, target, download }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3; 
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = `translate(0px, 0px)`;
  };

  const classes = `relative inline-flex items-center justify-center transition-transform duration-300 ease-out will-change-transform active:scale-95 ${className}`;
  
  if (href) {
    return (
      <a ref={btnRef} href={href} target={target} download={download} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button ref={btnRef} onClick={onClick} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={classes}>
      {children}
    </button>
  );
};

// 4. Reusable Typewriter Component
const TypewriterEffect = ({ words }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentWord = words[loopNum % words.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(80); 
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2500); 
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(400); 
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed]);

  return (
    <span className="inline-flex items-center">
      {text}
      <span className="ml-[2px] w-[2px] h-[1.1em] bg-cyan-400 animate-blink"></span>
    </span>
  );
};

// 5. Cinematic Terminal Preloader
const TerminalPreloader = ({ isLoaded, onComplete }) => {
  const [phase, setPhase] = useState(0); 
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState([]);

  const SYSTEM_LOGS = [
    "resolving dependencies...",
    "compiling physics engine [three.js]...",
    "injecting quantum nodes...",
    "synchronizing virtual DOM...",
    "establishing secure connection...",
    "bypassing mainframe security...",
    "rendering interactive canvas...",
    "sequence complete. launching..."
  ];

  useEffect(() => {
    const cmd = "git init";
    let i = 0;
    
    const typeNextChar = () => {
      setText(cmd.substring(0, i + 1));
      i++;
      if (i < cmd.length) {
        setTimeout(typeNextChar, Math.random() * 80 + 30);
      } else {
        setTimeout(() => setPhase(1), 500);
      }
    };
    
    const startTimeout = setTimeout(typeNextChar, 600);
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (phase === 1) {
      let p = 0;
      const totalLogs = SYSTEM_LOGS.length;
      
      const loading = setInterval(() => {
        p += (100 - p) * 0.08 + 0.5; 
        
        if (p >= 100) {
          p = 100;
          clearInterval(loading);
          setTimeout(() => setPhase(2), 200); 
          setTimeout(() => onComplete(), 1000); 
        }
        
        setProgress(Math.min(p, 100));

        const currentLogIndex = Math.min(
          Math.floor((p / 100) * totalLogs), 
          totalLogs - 1
        );
        setVisibleLogs(SYSTEM_LOGS.slice(0, currentLogIndex + 1));

      }, 50);
      return () => clearInterval(loading);
    }
  }, [phase, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-[#010102] flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] 
      ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div 
        className={`w-full max-w-2xl mx-4 rounded-xl bg-[#08080c]/90 border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-2xl overflow-hidden font-mono transform transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isLoaded ? 'scale-110 opacity-0 translate-y-8' : 'scale-100 opacity-100 translate-y-0'}
        ${phase === 0 ? 'translate-y-4 opacity-0 animate-[slideUpFade_0.8s_ease-out_forwards]' : ''}`}
      >
        <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
          </div>
          <div className="flex-1 text-center text-[10px] text-white/30 tracking-widest font-semibold uppercase select-none">
            sys_boot_sequence // v2.0
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="text-lg md:text-2xl mb-8 flex items-center text-white/90">
            <span className="text-cyan-400 font-bold mr-3 shadow-cyan-400/50 drop-shadow-md">guest@dimpal:~$</span>
            <span className="tracking-wide">{text}</span>
            <span className="ml-[2px] w-[10px] h-[1.2em] bg-cyan-400 animate-blink inline-block align-middle shadow-[0_0_8px_#22d3ee]"></span>
          </div>

          <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex justify-between text-xs md:text-sm text-cyan-400/60 mb-3 tracking-widest uppercase font-semibold">
              <span className={phase === 2 ? 'text-cyan-300 transition-colors' : ''}>
                {phase === 2 ? 'System Ready' : 'Initializing Architecture...'}
              </span>
              <span className={phase === 2 ? 'text-cyan-300' : ''}>{Math.floor(progress)}%</span>
            </div>
            
            <div className="w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="mt-8 text-[11px] md:text-xs text-white/40 space-y-2.5 h-[120px] overflow-hidden tracking-wider uppercase font-medium">
              {visibleLogs.map((log, index) => (
                <div 
                  key={index} 
                  className={`animate-[fadeInLeft_0.3s_ease-out_forwards] flex items-center gap-3
                    ${index === visibleLogs.length - 1 && phase === 2 ? 'text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]' : ''}
                  `}
                >
                  <span className="text-cyan-500/50">&gt;</span> {log}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideUpFade {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInLeft {
          0% { transform: translateX(-10px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPreloaderMounted, setIsPreloaderMounted] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const scrollProgressRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsPreloaderMounted(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      if (scrollProgressRef.current) {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollProgressRef.current.style.transform = `scaleX(${totalScroll / windowHeight})`;
      }

      document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;

        if (layer.classList.contains('hero-content')) {
          const opacity = Math.max(0, 1 - (window.scrollY / 450));
          layer.style.opacity = opacity;
          layer.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
        }
      });
    };

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.cine-reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', updateMousePosition);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  // Helper function to map skills to lucide-react icons for the premium marquee
  const getSkillIcon = (skill) => {
    if(['React.js', 'Next.js', 'Tailwind CSS', 'Figma', 'Layout'].includes(skill)) return <Layout size={18} />;
    if(['Node.js', 'Express.js', 'Python', 'C++', 'Java'].includes(skill)) return <Code size={18} />;
    if(['PostgreSQL', 'MongoDB', 'SQL'].includes(skill)) return <Database size={18} />;
    if(['Docker', 'AWS', 'Linux', 'CI/CD'].includes(skill)) return <Cloud size={18} />;
    return <Terminal size={18} />;
  };

  // Render Infinite Marquee Skills - PREMIUM TECH UI UPGRADE
  const renderMarqueeSkills = (skillsArray) => {
    const infiniteArray = [...skillsArray, ...skillsArray, ...skillsArray, ...skillsArray];
    return infiniteArray.map((skill, idx) => (
      <div 
        key={idx} 
        className="flex items-center gap-3 px-6 py-4 mx-3 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.05] hover:border-cyan-400/40 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 flex-shrink-0 group backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] cursor-pointer active:scale-95"
      >
        <div className="text-white/40 group-hover:text-cyan-400 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          {getSkillIcon(skill)}
        </div>
        <span className="text-sm font-medium tracking-widest uppercase text-white/70 group-hover:text-white transition-colors duration-300">{skill}</span>
      </div>
    ));
  };

  return (
    <div className="relative min-h-screen w-full bg-[#030305] text-white font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-50">
      
      {isPreloaderMounted && (
        <TerminalPreloader isLoaded={isLoaded} onComplete={() => setIsLoaded(true)} />
      )}

      {/* Global Mouse Tracker Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 hidden md:block"
        style={{ 
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.03), transparent 80%)` 
        }} 
      />

      {/* GLOBAL CSS FOR CINEMATIC EFFECTS & UI BUG FIXES */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        .cubic-bezier-out { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
        
        .cine-reveal {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          filter: blur(8px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform, filter;
        }
        .cine-reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0px);
        }

        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        .glass-panel {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(139, 92, 246, 0.4);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.5;
          pointer-events: none;
          animation: float 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(10vw, -10vh) scale(1.5); }
        }

        /* Link Underline Hover Effect */
        .hover-underline-animation {
          display: inline-block;
          position: relative;
        }
        .hover-underline-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #22d3ee; /* cyan-400 */
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }
        .hover-underline-animation:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        
        /* Marquee CSS */
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee-ltr {
          animation: marquee-ltr 40s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }
        
        .pause-on-hover:hover {
          animation-play-state: paused;
        }

        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>

      {/* --- INFRASTRUCTURE --- */}
      <Canvas3DBackground scrollY={scrollY} />

      <div className="fixed top-0 left-0 w-full h-1 z-[150] bg-white/5 pointer-events-none">
        <div ref={scrollProgressRef} className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 origin-left scale-x-0 transition-transform duration-100 ease-out will-change-transform"></div>
      </div>

      <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none mix-blend-screen" style={{ transform: 'translate3d(0,0,0)' }}>
        <div className="parallax-layer absolute inset-0 pointer-events-none" data-speed="0.05">
          <div className="orb bg-cyan-800/30 w-[50vw] h-[50vw] top-[-20%] left-[-10%]"></div>
        </div>
        <div className="parallax-layer absolute inset-0 pointer-events-none" data-speed="-0.08">
          <div className="orb bg-violet-900/20 w-[60vw] h-[60vw] bottom-[-30%] right-[-20%]" style={{animationDelay: '-5s'}}></div>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-6 w-full max-w-6xl left-1/2 -translate-x-1/2 px-6 z-[100] transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer active:scale-95 transition-transform" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-black transition-transform duration-500 group-hover:rotate-180">D.</div>
            <span className="block text-sm sm:text-base tracking-tight">Dimpal<span className="text-cyan-400">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-white/50">
            {['About', 'Experience', 'Services', 'Projects', 'Contact'].map((item) => (
              <MagneticButton key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-cyan-400 transition-colors">
                <span className="hover-underline-animation">{item}</span>
              </MagneticButton>
            ))}
          </div>

          <div className="md:hidden">
            <MagneticButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MagneticButton>
          </div>
        </div>

        <div className={`absolute top-24 left-6 right-6 glass-panel rounded-3xl p-8 flex flex-col gap-6 transition-all duration-500 md:hidden origin-top ${isMenuOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          {['About', 'Experience', 'Services', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-xl font-bold tracking-tight text-left hover:text-cyan-400 transition-colors active:scale-95 origin-left">
              {item}
            </button>
          ))}
          
          {/* Action Links duplicated in Mobile Nav Menu for easy access */}
          <div className="flex flex-col gap-4 mt-2 pt-6 border-t border-white/10 relative z-[60] pointer-events-auto">
            <button onClick={() => scrollTo('experience')} className="w-full py-4 rounded-full bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-cyan-50 transition-colors active:scale-95 flex items-center justify-center">
              Enter Experience <ArrowRight size={16} className="ml-2" />
            </button>
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/CornHaki" target="_blank" rel="noreferrer" className="p-4 rounded-full glass-panel hover:bg-white/10 transition-all active:scale-95">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dimpal-baishya-a008a1249" target="_blank" rel="noreferrer" className="p-4 rounded-full glass-panel hover:bg-white/10 transition-all active:scale-95">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 pt-32 flex flex-col items-center">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center px-6">
          <div className="max-w-5xl mx-auto text-center w-full transform-gpu parallax-layer hero-content" data-speed="0.4">
            
            <div className={`overflow-hidden mb-10 flex justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="glass-panel inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/20 text-xs font-bold tracking-[0.2em] uppercase text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-shadow duration-500 cursor-default">
                <Sparkles size={14} className="animate-pulse" />
                Engineering Immersive Realities
              </div>
            </div>
            
            <h1 className="text-6xl sm:text-8xl md:text-[8.5rem] font-black tracking-tighter mb-8 leading-[0.85] overflow-hidden group cursor-default">
              <div className={`transform transition-all duration-1000 cubic-bezier-out delay-[800ms] group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                DIGITAL
              </div>
              <div className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-violet-200 to-cyan-200 bg-[length:200%_auto] text-gradient animate-[gradient_8s_linear_infinite] transform transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1200ms] pb-4 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.2)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                ARCHITECT
              </div>
            </h1>
            
            <div className={`text-xl sm:text-2xl md:text-3xl font-mono text-cyan-400 mb-10 h-10 flex justify-center items-center transform transition-all duration-1000 cubic-bezier-out delay-[950ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-white/30 mr-3">&gt;</span>
              <TypewriterEffect words={[
                "Full Stack Developer",
                "Software Engineer",
                "Systems Architecture",
                "Web Designer",
                "Creative Problem Solver",
                "Open Source Contributor"
              ]} />
            </div>

            <p className={`text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-16 transform transition-all duration-1000 cubic-bezier-out delay-[1000ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              I blend analytical physics principles with modern web technologies to forge <strong className="text-white font-medium hover:text-cyan-300 transition-colors cursor-default">high-performance, cinematic</strong> digital experiences.
            </p>
            
            {/* HERO BUTTONS: Hidden on Desktop, Visible on Mobile with Fixed z-index */}
            <div className={`md:hidden relative z-[70] pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-6 transform transition-all duration-1000 cubic-bezier-out delay-[1100ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <MagneticButton onClick={() => scrollTo('experience')} className="group px-10 py-5 rounded-full bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-cyan-50 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95">
                Enter Experience <ArrowRight size={16} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <div className="flex gap-4">
                <MagneticButton href="https://github.com/CornHaki" target="_blank" className="p-5 rounded-full glass-panel hover:bg-white/10 hover:border-white/20 transition-all group active:scale-95">
                  <Github size={20} className="group-hover:scale-110 group-hover:text-cyan-300 transition-all" />
                </MagneticButton>
                <MagneticButton href="https://www.linkedin.com/in/dimpal-baishya-a008a1249" target="_blank" className="p-5 rounded-full glass-panel hover:bg-white/10 hover:border-white/20 transition-all group active:scale-95">
                  <Linkedin size={20} className="group-hover:scale-110 group-hover:text-[#0077b5] transition-all" />
                </MagneticButton>
              </div>
            </div>
            
          </div>
        </section>

        {/* --- ABOUT --- */}
        <section id="about" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-20 group">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter group-hover:tracking-[0.02em] transition-all duration-500 cursor-default">THE CORE.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="cine-reveal delay-100 text-2xl md:text-3xl font-light text-white/70 leading-snug">
              Driven by a relentless pursuit of optimization. 
              <br/><br/>
              <span className="text-white font-medium hover:text-cyan-300 transition-colors duration-300 cursor-default">From dissecting quantum mechanics to constructing scalable web architectures,</span> I bring a unique analytical depth to software development. Currently pursuing my MCA to refine my technical edge.
            </div>
            
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className={`cine-reveal delay-${(idx%4)*100}`}>
                  <TiltCard className="w-full">
                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500 hover:bg-white/[0.03]">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-violet-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors duration-300">{edu.degree}</h4>
                          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase">{edu.school}</p>

                          {edu.details && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 mt-3 group-hover:border-white/20 transition-colors duration-300">
                              <span className="w-1 h-1 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa] group-hover:scale-150 transition-transform duration-300"></span>
                              <span className="text-white/70 font-mono text-[10px] tracking-wider">{edu.details}</span>
                            </div>
                          )}
                        </div>
                        <span className="text-white/40 font-mono text-xs tracking-widest whitespace-nowrap">{edu.period}</span>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-24 flex-row-reverse group">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-right group-hover:tracking-[0.02em] transition-all duration-500 cursor-default">TIMELINE.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent transform md:-translate-x-1/2"></div>
            
            <div className="space-y-32">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between cine-reveal delay-100 group/row pointer-events-none ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Center Node - Reacts to card hover via group/row */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#030305] border-2 border-cyan-400 shadow-[0_0_15px_#22d3ee] transform -translate-x-1/2 z-10 group-hover/row:scale-150 group-hover/row:bg-cyan-300 group-hover/row:shadow-[0_0_30px_#22d3ee] transition-all duration-500 pointer-events-auto"></div>
                  
                  <div className="w-full md:w-[45%] pl-10 md:pl-0 pointer-events-auto">
                    <TiltCard className="w-full">
                      <div className="glass-panel p-10 rounded-3xl hover:border-cyan-500/40 hover:bg-white/[0.03] transition-all duration-500">
                        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3 block">{exp.period}</span>
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-1 group-hover/row:text-cyan-300 transition-colors duration-300">{exp.role}</h3>
                        <p className="text-white/50 text-base mb-6 font-medium">{exp.company}</p>
                        <ul className="space-y-4">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-4 text-white/70 group/item">
                              <div className="w-2 h-[2px] bg-cyan-400 mt-2.5 flex-shrink-0 shadow-[0_0_8px_#22d3ee] group-hover/item:scale-x-150 transition-transform duration-300 origin-left"></div>
                              <p className="font-light text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">{highlight}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TiltCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SERVICES / OFFERINGS (PREMIUM VERTICAL TIMELINE) --- */}
        <section id="services" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-32 group">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter group-hover:tracking-[0.02em] transition-all duration-500 cursor-default">OFFERINGS.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          </div>
          
          <div className="relative">
            {/* Timeline track */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-24 md:space-y-32">
              {SERVICES.map((service, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between cine-reveal delay-100 group/row pointer-events-none ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Center Node with Icon - Reacts to card hover */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 rounded-full bg-[#030305] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] transform -translate-x-1/2 z-10 flex items-center justify-center group-hover/row:scale-125 group-hover/row:border-cyan-500/50 group-hover/row:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-500 pointer-events-auto">
                    <div className="group-hover/row:rotate-12 group-hover/row:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content Card Isolated Tilt */}
                  <div className="w-full md:w-[45%] pl-24 md:pl-0 pointer-events-auto">
                    <TiltCard className="w-full">
                      <div className="p-10 md:p-12 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-black/40 border border-white/[0.05] hover:border-cyan-500/30 hover:bg-white/[0.02] hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-blur-xl group/card">
                        
                        {/* Glowing orb behind the layout */}
                        <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover/card:bg-cyan-500/20 transition-colors duration-700"></div>

                        {/* Subtle top highlight line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10 tracking-tight group-hover/card:text-cyan-300 transition-colors duration-300">{service.title}</h3>
                        <p className="text-white/50 font-light leading-relaxed flex-grow relative z-10 text-base md:text-lg group-hover/card:text-white/70 transition-colors duration-300">
                          {service.desc}
                        </p>
                      </div>
                    </TiltCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-24 flex-row-reverse group">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-right group-hover:tracking-[0.02em] transition-all duration-500 cursor-default">ARCHIVE.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          </div>
          
          <div className="flex flex-col gap-40 md:gap-56">
            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 cine-reveal delay-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''} transition-all duration-[800ms] ease-out w-full`}
              >
                <div className="w-full lg:w-[55%]">
                  <TiltCard className="w-full">
                    <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" className="block w-full relative rounded-[1.5rem] overflow-hidden glass-panel border border-white/5 hover:border-cyan-500/40 transition-colors duration-500 group shadow-2xl shadow-black/60 cursor-pointer active:scale-[0.98]">
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#030305]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
                        <img 
                          src={project.image} 
                          alt={`Screenshot of ${project.title} - ${project.category}`} 
                          className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 cubic-bezier-out opacity-80 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <ExternalLink size={24} />
                          </div>
                        </div>
                      </div>
                    </a>
                  </TiltCard>
                </div>

                <div className="w-full lg:w-[45%] relative z-10 pt-8 lg:pt-0">
                  <div className="absolute -top-10 -left-6 md:-top-20 md:-left-12 text-[8rem] md:text-[14rem] font-black text-white/[0.05] group-hover:text-white/[0.08] transition-colors duration-500 select-none pointer-events-none z-[-1] leading-none">
                    0{idx + 1}
                  </div>
                  
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 backdrop-blur-md text-cyan-300 font-mono text-[10px] tracking-widest uppercase border border-white/10 mb-6 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 hover:text-cyan-400 transition-colors duration-300 cursor-default">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 font-light leading-relaxed text-base md:text-lg mb-8 max-w-xl">
                    {project.desc}
                  </p>
                  
                  {/* Interactive Tech Pills */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 text-[11px] font-mono tracking-wider text-cyan-100 bg-white/[0.03] border border-white/[0.05] rounded-md backdrop-blur-md shadow-sm hover:bg-white/[0.1] hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(34,211,238,0.2)] hover:text-white transition-all duration-300 cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    
                    {project.link && (
                      <MagneticButton href={project.link} target="_blank" className="group flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95">
                        View Live <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </MagneticButton>
                    )}

                    {project.github && (
                      <MagneticButton href={project.github} target="_blank" className="group flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md active:scale-95">
                        <Github size={14} className="mr-2 group-hover:-translate-y-0.5 transition-transform" /> Source Code
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS & ARSENAL (PREMIUM BENTO GRID) --- */}
        <section id="skills" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-24 group">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter group-hover:tracking-[0.02em] transition-all duration-500 cursor-default">ARSENAL.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARSENAL_SKILLS.map((set, idx) => (
              <div key={idx} className={`cine-reveal delay-${(idx % 4) * 100}`}>
                <TiltCard className="h-full">
                  <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-black/40 border border-white/[0.05] hover:border-white/10 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl group/bento h-full flex flex-col relative overflow-hidden">
                    
                    {/* Indexing Indicator */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 text-5xl md:text-6xl font-black text-white/[0.04] group-hover/bento:text-white/[0.08] transition-colors duration-500 pointer-events-none select-none z-0">
                      0{idx + 1}
                    </div>

                    {/* Dynamic Ambient Glow matching the category color */}
                    <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover/bento:opacity-100 transition-opacity duration-700 ${set.bg} pointer-events-none`}></div>
                    
                    {/* Subtle top highlight line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-700"></div>

                    <div className="flex items-center gap-5 mb-10 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-[#030305] border border-white/10 flex items-center justify-center group-hover/bento:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <span className={`${set.color} group-hover/bento:drop-shadow-[0_0_8px_currentColor] transition-all duration-500`}>{set.icon}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover/bento:text-white/90 transition-colors">{set.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                      {set.skills.map((skill, sIdx) => (
                        <MagneticButton key={sIdx} className="px-5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/20 text-white/70 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 shadow-sm active:scale-95 cursor-default group/skill">
                          <span className="relative z-10 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/skill:bg-cyan-400 group-hover/skill:shadow-[0_0_8px_#22d3ee] transition-all duration-300"></span>
                            {skill}
                          </span>
                        </MagneticButton>
                      ))}
                    </div>

                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section id="testimonials" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-24 flex-row-reverse group">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-right group-hover:tracking-[0.02em] transition-all duration-500 cursor-default">PEER REVIEW.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3 group-hover:bg-cyan-500/50 transition-colors duration-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {TESTIMONIALS.map((testimonial, idx) => (
               <div key={idx} className={`cine-reveal delay-${(idx % 2) * 100} h-full`}>
                 <TiltCard className="h-full">
                   <div className="glass-panel p-10 md:p-12 rounded-3xl h-full flex flex-col relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
                      <Quote size={40} className="text-white/5 absolute top-8 right-8 group-hover:text-cyan-400/20 group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-500" />
                      <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 flex-grow z-10 italic group-hover:text-white transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4 z-10 border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                          <span className="text-base font-bold text-white tracking-wide">{testimonial.author.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-bold tracking-wide group-hover:text-cyan-300 transition-colors duration-300">{testimonial.author}</h4>
                          <p className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase mt-0.5">{testimonial.company}</p>
                        </div>
                      </div>
                   </div>
                 </TiltCard>
               </div>
            ))}
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="pt-40 pb-24 w-full flex flex-col items-center justify-center relative z-10 px-6">
          <div className="max-w-5xl w-full text-center">
            
            <div className="cine-reveal mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-bold tracking-[0.2em] uppercase text-white/50 backdrop-blur-md shadow-sm hover:border-cyan-500/30 transition-colors cursor-default group">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#22d3ee] group-hover:shadow-[0_0_15px_#22d3ee]"></span>
              Available for Opportunities
            </div>

            <div className="cine-reveal delay-100 mb-10">
              <h2 className="text-5xl sm:text-7xl md:text-[7rem] font-black tracking-tighter leading-[0.9] text-white cursor-default group">
                LET'S BUILD
                <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/20 group-hover:from-cyan-300 group-hover:via-violet-300 group-hover:to-cyan-300 transition-all duration-700">TOGETHER.</span>
              </h2>
            </div>
            
            <p className="cine-reveal delay-200 text-lg md:text-xl text-white/40 font-light mb-16 max-w-2xl mx-auto leading-relaxed cursor-default">
              Ready to construct the next digital frontier? Whether you need a full-stack platform or a premium UI, my inbox is open.
            </p>
            
            <div className="cine-reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticButton href="mailto:baishyadimpal31@gmail.com" className="group w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-cyan-50 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95">
                Send Transmission
              </MagneticButton>
              <MagneticButton href="Dimpal_Baishya_Resume.pdf" download="Dimpal_Baishya_Resume.pdf" className="group w-full sm:w-auto px-10 py-5 rounded-full bg-transparent border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:bg-white/5 hover:border-white/40 transition-colors flex items-center gap-3 justify-center backdrop-blur-md active:scale-95">
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" /> Extract Resume
              </MagneticButton>
            </div>

          </div>
        </section>

        {/* --- PREMIUM FOOTER REDESIGN --- */}
        <footer id="contact" className="w-full relative z-10 border-t border-white/[0.05] bg-transparent overflow-hidden pt-24 pb-12">
          {/* Ambient glow in footer */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
              
              {/* Brand & Hook */}
              <div className="lg:w-1/2 group cursor-pointer" onClick={() => scrollTo('home')}>
                 <div className="text-4xl md:text-5xl font-black tracking-tighter flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl font-black group-hover:rotate-180 transition-transform duration-700">D.</div>
                    <span className="text-white tracking-tight">Dimpal<span className="text-cyan-400 group-hover:text-white transition-colors duration-300">.</span></span>
                 </div>
                 <p className="text-sm md:text-base font-light text-white/50 leading-relaxed tracking-wide max-w-sm group-hover:text-white/70 transition-colors duration-300">
                    Engineering immersive realities and high-performance web architectures that push boundaries.
                 </p>
              </div>

              {/* Contacts & Socials Grid */}
              <div className="lg:w-1/2 flex flex-col sm:flex-row gap-12 lg:justify-end">
                 <div>
                    <h4 className="text-white/40 font-mono text-xs tracking-[0.2em] uppercase mb-6">Contact</h4>
                    <div className="space-y-6">
                       <a href="mailto:baishyadimpal31@gmail.com" className="group flex items-center gap-4 text-white hover:text-cyan-400 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] group-hover:border-cyan-500/50 transition-all">
                              <Mail size={16} />
                          </div>
                          <span className="text-sm font-light tracking-wide hover-underline-animation">baishyadimpal31@gmail.com</span>
                       </a>
                       <a href="tel:+918473074892" className="group flex items-center gap-4 text-white hover:text-cyan-400 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] group-hover:border-cyan-500/50 transition-all">
                              <Phone size={16} />
                          </div>
                          <span className="text-sm font-light tracking-wide hover-underline-animation">+91 8473074892</span>
                       </a>
                       <div className="flex items-center gap-4 text-white/50 group cursor-default">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                              <MapPin size={16} className="group-hover:text-white transition-colors"/>
                          </div>
                          <span className="text-sm font-light tracking-wide group-hover:text-white transition-colors">Guwahati, India</span>
                       </div>
                    </div>
                 </div>

                 <div>
                    <h4 className="text-white/40 font-mono text-xs tracking-[0.2em] uppercase mb-6">Socials</h4>
                    <div className="flex flex-col gap-4">
                       <a href="https://github.com/CornHaki" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                              <Github size={18} />
                          </div>
                          <span className="font-medium tracking-widest uppercase text-xs hover-underline-animation">GitHub</span>
                       </a>
                       <a href="https://www.linkedin.com/in/dimpal-baishya-a008a1249" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0077b5] group-hover:border-[#0077b5] group-hover:text-white transition-all">
                              <Linkedin size={18} />
                          </div>
                          <span className="font-medium tracking-widest uppercase text-xs hover-underline-animation">LinkedIn</span>
                       </a>
                    </div>
                 </div>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs tracking-[0.15em] font-mono hover:text-white/50 transition-colors duration-300">
              <span>&copy; {new Date().getFullYear()} DIMPAL BAISHYA. ALL RIGHTS RESERVED.</span>
              <span className="flex items-center gap-3">
                 SYSTEM ONLINE 
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                 </span>
              </span>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
}