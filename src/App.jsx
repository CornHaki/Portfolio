import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, 
  ExternalLink, Download, Menu, X, Clock, 
  Terminal, Sparkles, ArrowRight, Briefcase, 
  GraduationCap, Cloud, Award, Database, Wrench, Layout,
  ChevronRight
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

const SKILL_CATEGORIES = [
  { 
    title: 'Frontend & Design', 
    icon: <Layout size={20} />, 
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Figma', 'Google Stitch'] 
  },
  { 
    title: 'Backend & Data', 
    icon: <Database size={20} />, 
    skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'SQL'] 
  },
  { 
    title: 'Core Languages', 
    icon: <Terminal size={20} />, 
    skills: ['C', 'C++', 'Java', 'Go'] 
  },
  { 
    title: 'Cloud & DevOps', 
    icon: <Cloud size={20} />, 
    skills: ['Docker', 'AWS', 'CI/CD', 'Linux'] 
  },
  { 
    title: 'Development & Tools', 
    icon: <Wrench size={20} />, 
    skills: ['Git/GitHub', 'VS Code', 'Windsurf', 'Postman', 'REST APIs', 'Antigravity'] 
  }
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
          blur: isForeground ? Math.random() * 2 + 1 : 0 // Depth of field effect
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
      // Cinematic motion blur
      ctx.fillStyle = 'rgba(2, 2, 4, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Ultra-smooth mouse interpolation (lerping)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.03;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.03;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      particles.forEach(p => {
        // Deep parallax scroll injection
        p.z -= 0.8 + (scrollY.current * 0.001);
        if (p.z < 1) {
          p.z = 2500;
          p.x = (Math.random() - 0.5) * 3500;
          p.y = (Math.random() - 0.5) * 3500;
        }

        const cosY = Math.cos(mouseRef.current.x);
        const sinY = Math.sin(mouseRef.current.x);
        const cosX = Math.cos(mouseRef.current.y);
        const sinX = Math.sin(mouseRef.current.y);

        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        const fov = 600;
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
    
    // Smooth, constrained rotation limits for a premium feel
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
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
      className={`relative transition-transform duration-200 ease-out transform-gpu will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glare effect overlay */}
      <div 
        className="absolute inset-0 z-50 pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.08) 0%, transparent 60%)`
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
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4; // Magnetic strength
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = `translate(0px, 0px)`;
  };

  const classes = `relative inline-flex items-center justify-center transition-transform duration-300 ease-out will-change-transform ${className}`;
  
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
        setTypingSpeed(50); // Faster when deleting
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100); // Normal typing speed
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Pause at the end of the word
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500); // Pause before typing the next word
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

// 5. Cinematic Terminal Preloader (Premium Version)
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
    
    // Smooth typewriter
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
        // Logarithmic easing for progress bar
        p += (100 - p) * 0.08 + 0.5; 
        
        if (p >= 100) {
          p = 100;
          clearInterval(loading);
          setTimeout(() => setPhase(2), 200); // Highlight phase
          setTimeout(() => onComplete(), 1000); // Trigger exit
        }
        
        setProgress(Math.min(p, 100));

        // Sync logs to progress percentage
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
      ${isLoaded ? 'opacity-0 pointer-events-none backdrop-blur-sm' : 'opacity-100 backdrop-blur-none'}`}
    >
      {/* Premium Glass Terminal Window */}
      <div 
        className={`w-full max-w-2xl mx-4 rounded-xl bg-[#08080c]/90 border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-2xl overflow-hidden font-mono transform transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isLoaded ? 'scale-110 opacity-0 translate-y-8' : 'scale-100 opacity-100 translate-y-0'}
        ${phase === 0 ? 'translate-y-4 opacity-0 animate-[slideUpFade_0.8s_ease-out_forwards]' : ''}`}
      >
        
        {/* Terminal Header */}
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
          {/* Typing Sequence */}
          <div className="text-lg md:text-2xl mb-8 flex items-center text-white/90">
            <span className="text-cyan-400 font-bold mr-3 shadow-cyan-400/50 drop-shadow-md">guest@dimpal:~$</span>
            <span className="tracking-wide">{text}</span>
            <span className="ml-[2px] w-[10px] h-[1.2em] bg-cyan-400 animate-blink inline-block align-middle shadow-[0_0_8px_#22d3ee]"></span>
          </div>

          {/* Progress Sequence */}
          <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
            <div className="flex justify-between text-xs md:text-sm text-cyan-400/60 mb-3 tracking-widest uppercase font-semibold">
              <span className={phase === 2 ? 'text-cyan-300 transition-colors' : ''}>
                {phase === 2 ? 'System Ready' : 'Initializing Architecture...'}
              </span>
              <span className={phase === 2 ? 'text-cyan-300' : ''}>{Math.floor(progress)}%</span>
            </div>
            
            {/* Ultra-thin premium progress bar */}
            <div className="w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Cinematic Logs */}
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
  const scrollY = useRef(0);
  const scrollProgressRef = useRef(null);

  // Initialize Intersection Observer for GSAP-like reveals
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      if (scrollProgressRef.current) {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollProgressRef.current.style.transform = `scaleX(${totalScroll / windowHeight})`;
      }

      // Deep Parallax Math & Hero Fade Fix
      document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${window.scrollY * speed}px)`;

        // Fix for Hero overlapping the next section: Fade out completely as user scrolls down
        if (layer.classList.contains('hero-content')) {
          const opacity = Math.max(0, 1 - (window.scrollY / 450));
          layer.style.opacity = opacity;
          // Disable pointer events when faded out to prevent ghost clicks
          layer.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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

  return (
    <div className="relative min-h-screen bg-[#030305] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* INITIAL CINEMATIC TERMINAL LOADER */}
      <TerminalPreloader isLoaded={isLoaded} onComplete={() => setIsLoaded(true)} />

      {/* GLOBAL CSS FOR CINEMATIC EFFECTS */}
      <style>{`
        .cubic-bezier-out { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
        
        /* GSAP-style Reveal Classes */
        .cine-reveal {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          filter: blur(10px);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 1.2s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform, filter;
        }
        .cine-reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0px);
        }

        /* Stagger Delays */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }

        /* Blinking Cursor */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        /* Premium Glassmorphism */
        .glass-panel {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }

        /* Glow Text */
        .glow-text {
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(139, 92, 246, 0.4);
        }

        /* Ambient Glow Orbs */
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
      `}</style>

      {/* --- INFRASTRUCTURE --- */}
      <Canvas3DBackground scrollY={scrollY} />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[150] bg-white/5 pointer-events-none">
        <div ref={scrollProgressRef} className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 origin-left scale-x-0 transition-transform duration-100 ease-out will-change-transform"></div>
      </div>

      {/* Floating Ambient Orbs (Parallax Layer) */}
      <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none mix-blend-screen">
        <div className="orb bg-cyan-800/40 w-[50vw] h-[50vw] top-[-20%] left-[-10%] parallax-layer" data-speed="0.05"></div>
        <div className="orb bg-violet-900/20 w-[60vw] h-[60vw] bottom-[-30%] right-[-20%] parallax-layer" style={{animationDelay: '-5s'}} data-speed="-0.08"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-6 w-full max-w-6xl left-1/2 -translate-x-1/2 px-6 z-[100] transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-black transition-transform duration-500 group-hover:rotate-180">D</div>
            <span className="block text-sm sm:text-base">Dimpal<span className="text-cyan-400">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-white/60">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <MagneticButton key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-cyan-400 transition-colors">
                {item}
              </MagneticButton>
            ))}
          </div>

          <div className="md:hidden">
            <MagneticButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MagneticButton>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`absolute top-24 left-6 right-6 glass-panel rounded-3xl p-8 flex flex-col gap-6 transition-all duration-500 md:hidden origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-xl font-bold text-left hover:text-cyan-400 transition-colors">
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 pt-32 flex flex-col items-center">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center px-6 perspective-[1000px]">
          {/* Added 'hero-content' class for targeted fade out to fix scroll overlap */}
          <div className="max-w-5xl mx-auto text-center w-full transform-gpu parallax-layer hero-content" data-speed="0.4">
            
            <div className={`overflow-hidden mb-8 flex justify-center transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="glass-panel inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/30 text-xs font-bold tracking-[0.2em] uppercase text-cyan-300">
                <Sparkles size={14} className="animate-pulse" />
                Engineering Immersive Realities
              </div>
            </div>
            
            <h1 className="text-6xl sm:text-8xl md:text-[8rem] font-black tracking-tighter mb-8 leading-[0.9] overflow-hidden">
              <div className={`transform transition-all duration-1000 cubic-bezier-out delay-[800ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                DIGITAL
              </div>
              <div className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-violet-300 to-cyan-300 bg-[length:200%_auto] text-gradient animate-[gradient_8s_linear_infinite] transform transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1200ms] pb-4 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
                ARCHITECT
              </div>
            </h1>
            
            <div className={`text-xl sm:text-2xl md:text-3xl font-mono text-cyan-400 mb-8 h-10 flex justify-center items-center transform transition-all duration-1000 cubic-bezier-out delay-[950ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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

            <p className={`text-xl sm:text-2xl md:text-3xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-16 transform transition-all duration-1000 cubic-bezier-out delay-[1000ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              I blend analytical physics principles with modern web technologies to forge <strong className="text-white">high-performance, cinematic</strong> digital experiences.
            </p>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 transform transition-all duration-1000 cubic-bezier-out delay-[1100ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <MagneticButton onClick={() => scrollTo('experience')} className="px-10 py-5 rounded-full bg-white text-black font-bold tracking-widest uppercase hover:bg-cyan-400 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Enter Experience
              </MagneticButton>
              <div className="flex gap-4">
                <MagneticButton href="https://github.com/CornHaki" target="_blank" className="p-4 rounded-full glass-panel hover:bg-white/10 transition-colors">
                  <Github size={24} />
                </MagneticButton>
                <MagneticButton href="https://www.linkedin.com/in/dimpal-baishya-a008a1249" target="_blank" className="p-4 rounded-full glass-panel hover:bg-white/10 transition-colors">
                  <Linkedin size={24} />
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT --- */}
        <section id="about" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">THE CORE.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="cine-reveal delay-100 text-2xl md:text-3xl font-light text-white/70 leading-snug">
              Driven by a relentless pursuit of optimization. 
              <br/><br/>
              <span className="text-white font-medium">From dissecting quantum mechanics to constructing scalable web architectures,</span> I bring a unique analytical depth to software development. Currently pursuing my MCA to refine my technical edge.
            </div>
            
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                // Parent div handles the scroll reveal, child TiltCard handles the hover physics.
                <div key={idx} className={`cine-reveal delay-${(idx%4)*100}`}>
                  <TiltCard className="w-full">
                    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-violet-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                          <p className="text-cyan-400 font-mono text-sm tracking-wider uppercase">{edu.school}</p>

                          {edu.details && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 mt-2">
                              <span className="w-1 h-1 rounded-full bg-violet-400"></span>
                              <span className="text-white/60 font-mono text-xs">{edu.details}</span>
                            </div>
                          )}
                        </div>
                        <span className="text-white/40 font-mono text-sm whitespace-nowrap">{edu.period}</span>
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
          <div className="cine-reveal flex items-end gap-6 mb-24 flex-row-reverse">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-right">TIMELINE.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3"></div>
          </div>

          <div className="relative">
            {/* Timeline track */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent transform md:-translate-x-1/2"></div>
            
            <div className="space-y-32">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between cine-reveal delay-100 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Center Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content Card Isolated Tilt */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <TiltCard className="w-full">
                      <div className="glass-panel p-10 rounded-3xl hover:border-cyan-500/30 transition-colors duration-500">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">{exp.period}</span>
                        <h3 className="text-3xl font-bold text-white mb-2">{exp.role}</h3>
                        <p className="text-white/50 text-lg mb-8 font-medium">{exp.company}</p>
                        <ul className="space-y-4">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-4 text-white/70">
                              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2.5 flex-shrink-0"></div>
                              <p className="font-light leading-relaxed">{highlight}</p>
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

        {/* --- PROJECTS --- */}
        <section id="projects" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">ARCHIVE.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3"></div>
          </div>
          
          {/* New Premium Editorial Layout for Projects */}
          <div className="space-y-32 md:space-y-40">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 cine-reveal delay-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Immersive Image Side */}
                <div className="w-full lg:w-[55%]">
                  <TiltCard className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full relative rounded-[2rem] overflow-hidden glass-panel border border-white/5 hover:border-violet-500/50 transition-colors duration-500 group shadow-2xl shadow-black/50">
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#030305]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 cubic-bezier-out opacity-80 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                            <ExternalLink size={28} />
                          </div>
                        </div>
                      </div>
                    </a>
                  </TiltCard>
                </div>

                {/* Content Side with Massive Background Index */}
                <div className="w-full lg:w-[45%] relative z-10 pt-8 lg:pt-0">
                  {/* Huge Background Number */}
                  <div className="absolute -top-10 -left-6 md:-top-20 md:-left-12 text-[8rem] md:text-[14rem] font-black text-white/5 select-none pointer-events-none z-[-1] leading-none">
                    0{idx + 1}
                  </div>
                  
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-cyan-300 font-mono text-xs tracking-widest uppercase border border-white/10 mb-8 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    {project.category}
                  </span>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 font-light leading-relaxed text-lg mb-10 max-w-xl">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 text-xs font-semibold text-violet-300 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    
                    {/* Live Project Button */}
                    {project.link && (
                      <MagneticButton href={project.link} target="_blank" className="flex items-center justify-center px-8 py-4 rounded-full border border-white/10 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 group shadow-lg">
                        View Live <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </MagneticButton>
                    )}

                    {/* GitHub Repo Button */}
                    {project.github && (
                      <MagneticButton href={project.github} target="_blank" className="flex items-center justify-center px-8 py-4 rounded-full border border-white/10 text-white font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-300 group shadow-lg">
                        <Github size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" /> Source Code
                      </MagneticButton>
                    )}
                    
                  </div>
                  
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS & ARSENAL --- */}
        <section id="skills" className="py-32 px-6 w-full max-w-7xl relative z-10">
          <div className="cine-reveal flex items-end gap-6 mb-24 flex-row-reverse">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-right">ARSENAL.</h2>
            <div className="h-px flex-grow bg-white/10 mb-3"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category, index) => (
              // Parent div handles the scroll reveal, child TiltCard handles the hover physics.
              <div key={index} className={`cine-reveal delay-${(index%4)*100} h-full`}>
                <TiltCard className="h-full">
                  <div className="glass-panel p-8 rounded-3xl h-full hover:bg-white/5 transition-colors duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-cyan-400 mb-8 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{category.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-sm font-medium text-white/60">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT / END SCENE --- */}
        <section id="contact" className="min-h-screen w-full flex items-center justify-center relative z-10 px-6 py-32">
          <div className="max-w-4xl w-full text-center">
            <div className="cine-reveal mb-12">
              <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none glow-text">
                INITIATE
                <br/>CONTACT
              </h2>
            </div>
            
            <p className="cine-reveal delay-100 text-xl text-white/50 font-light mb-16 max-w-2xl mx-auto">
              Ready to construct the next digital frontier? Drop a message.
            </p>
            
            <div className="cine-reveal delay-200 flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
              <MagneticButton href="mailto:baishyadimpal31@gmail.com" className="w-full sm:w-auto px-10 py-5 rounded-full bg-cyan-500 text-black font-bold tracking-widest uppercase hover:bg-white transition-colors shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                Send Transmission
              </MagneticButton>
              <MagneticButton href="Dimpal_Baishya_Resume.pdf" download="Dimpal_Baishya_Resume.pdf" className="w-full sm:w-auto px-10 py-5 rounded-full glass-panel text-white font-bold tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center gap-3 justify-center">
                <Download size={18} /> Extract Data
              </MagneticButton>
            </div>

            <div className="cine-reveal delay-300 flex justify-center gap-8 border-t border-white/10 pt-12">
              <a href="https://github.com/CornHaki" className="text-white/50 hover:text-cyan-400 transition-colors">GITHUB</a>
              <a href="https://www.linkedin.com/in/dimpal-baishya-a008a1249" className="text-white/50 hover:text-cyan-400 transition-colors">LINKEDIN</a>
              <a href="tel:+918473074892" className="text-white/50 hover:text-cyan-400 transition-colors">+91 8473074892</a>
            </div>
            <div className="cine-reveal delay-400 mt-12 text-white/30 text-xs tracking-[0.3em] font-mono">
              SYSTEM ONLINE // {new Date().getFullYear()} // DIMPAL BAISHYA
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}