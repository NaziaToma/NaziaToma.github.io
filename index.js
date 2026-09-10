const { createRoot } = ReactDOM;
const { useState, useEffect } = React;

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        width: "100%",
        padding: isMobile ? "0.75rem 1.25rem" : "1rem 2rem",
        backgroundColor: "#455C48",
        position: "relative",
        zIndex: 1000
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: isMobile ? "stretch" : "center",
          position: "relative"
        }}
      >
        {/* Mobile Header Bar Row */}
        {isMobile ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                fontSize: "1.4rem",
                cursor: "pointer",
                padding: "0.25rem 0.5rem"
              }}
            >
              <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <a
                className="navbar-link"
                href="cv.html"
                title="Curriculum Vitae"
                style={{
                  color: "#FFFFFF",
                  fontSize: "1.15rem",
                  display: "inline-flex",
                  alignItems: "center"
                }}
              >
                <i className="fas fa-file-alt"></i>
              </a>
              <a
                className="navbar-link"
                href="https://www.linkedin.com/in/naziatabassumtoma/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                style={{
                  color: "#FFFFFF",
                  fontSize: "1.15rem",
                  display: "inline-flex",
                  alignItems: "center"
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ) : (
          /* Desktop Navigation Right End Icons */
          <div
            style={{
              position: "absolute",
              right: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.85rem"
            }}
          >
            <a
              className="navbar-link"
              href="cv.html"
              title="Curriculum Vitae"
              style={{
                color: "#FFFFFF",
                fontSize: "1.15rem",
                display: "inline-flex",
                alignItems: "center"
              }}
            >
              <i className="fas fa-file-alt"></i>
            </a>
            <a
              className="navbar-link"
              href="https://www.linkedin.com/in/naziatabassumtoma/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              style={{
                color: "#FFFFFF",
                fontSize: "1.15rem",
                display: "inline-flex",
                alignItems: "center"
              }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        )}

        {/* Main Nav Links */}
        {(!isMobile || isOpen) && (
          <ul
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: isMobile ? "1.25rem" : "2.25rem",
              listStyleType: "none",
              padding: isMobile ? "1rem 0 0.5rem 0" : 0,
              margin: isMobile ? "0.75rem 0 0 0" : 0,
              fontSize: "17px",
              width: isMobile ? "100%" : "auto",
              borderTop: isMobile ? "1px solid rgba(255, 255, 255, 0.2)" : "none"
            }}
          >
            <li>
              <a className="font-langar tw-text-4xl navbar-link" href="index.html#about" onClick={() => isMobile && setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a className="font-langar tw-text-4xl navbar-link" href="projects.html" onClick={() => isMobile && setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a className="font-langar tw-text-4xl navbar-link" href="research.html" onClick={() => isMobile && setIsOpen(false)}>
                Research
              </a>
            </li>
            <li>
              <a className="font-langar tw-text-4xl navbar-link" href="blog.html" onClick={() => isMobile && setIsOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a className="font-langar tw-text-4xl navbar-link" href="gallery.html" onClick={() => isMobile && setIsOpen(false)}>
                Gallery
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <div className="container-part-4 text-center" style={{ width: "100%" }}>
      <footer style={{ padding: "1.5rem 0 1rem 0" }}>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: 0, color: "#667067" }}>
          &copy; 2026 Nazia Tabassum Toma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function AboutMe() {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const newsEvents = [
    {
      date: "Sep 2026",
      badge: "🎉 PhD Start",
      text: (
        <>
          Starting my Ph.D. in Computer Science & Engineering at <strong>Santa Clara University</strong>! I will be conducting research in the{" "}
          <a href="https://scuhci.com" target="_blank" rel="noopener noreferrer" style={{ color: "#455C48", textDecoration: "underline", fontWeight: "700" }}>
            HCI Lab,
          </a>{" "}
          advised by{" "}
          <a href="https://kailukoff.com" target="_blank" rel="noopener noreferrer" style={{ color: "#455C48", textDecoration: "underline", fontWeight: "700" }}>
            Dr. Kai Lukoff
          </a>
          .
        </>
      )
    },
    {
      date: "Mar 2026",
      badge: "🎙️ Presentation",
      text: (
        <>
          Presented our research paper on <strong>BG-LLM: Bayesian-Guided LLM Framework for Personalized Learning</strong> at <strong>Princeton University</strong>!
        </>
      )
    },
    {
      date: "Feb 2026",
      badge: "📄 Paper Accepted",
      text: (
        <>
          Our research paper <strong>BG-LLM: Bayesian-Guided LLM Framework for Personalized Learning</strong> was accepted for publication at the <strong>ISEC '26</strong> conference!
        </>
      )
    },
    {
      date: "May 2025",
      badge: "🎓 Graduation",
      text: (
        <>
          Completed my Master of Engineering in Computer Science at the <strong>University of Cincinnati</strong>!
        </>
      )
    }
  ];

  return (
    <div style={{ backgroundColor: "#f2f1ee", minHeight: "calc(100vh - 65px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        {/* Top Hero Banner / About Me */}
        <div style={{ backgroundColor: "#455C48", padding: isMobile ? "2rem 1.25rem" : "2.5rem 1.5rem" }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", maxWidth: "1000px", margin: "0 auto", gap: isMobile ? "1.5rem" : "2rem" }}>
            <div style={{ flex: isMobile ? "0 0 auto" : "0 0 380px", width: isMobile ? "100%" : "380px", display: "flex", justifyContent: "center" }}>
              <img
                src="img/Nazia pp1.jpg"
                className="img-thumbnail img-fluid"
                alt="Nazia Tabassum Toma"
                style={{ borderRadius: "14px", width: "100%", maxWidth: isMobile ? "280px" : "380px", height: "auto", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
              />
            </div>
            <div style={{ color: "#FFFFFF", flex: "1" }}>
              <p className="font-langar tw-text-4xl dancing-text" style={{ fontSize: isMobile ? "1.8rem" : "2.4rem", lineHeight: "1.3", marginBottom: "1rem", textAlign: isMobile ? "center" : "left" }}>
                Hello World!🌼
              </p>
              <p style={{ fontSize: isMobile ? "0.95rem" : "1.05rem", lineHeight: "1.55", marginBottom: "0.75rem", textAlign: isMobile ? "left" : "justify" }}>
                I am Nazia — an incoming Computer Science & Engineering PhD student at Santa Clara University, advised by{" "}
                <a href="https://kailukoff.com" target="_blank" rel="noopener noreferrer" style={{ color: "#b4d8be", textDecoration: "underline", fontWeight: "600" }}>
                  Dr. Kai Lukoff
                </a>{" "}
                in the{" "}
                <a href="https://scuhci.com" target="_blank" rel="noopener noreferrer" style={{ color: "#b4d8be", textDecoration: "underline", fontWeight: "600" }}>
                  HCI Lab
                </a>
                . My research will focus on digital wellbeing and how AI and technology can help us build healthier relationships with the digital world.
              </p>
              <p style={{ fontSize: isMobile ? "0.925rem" : "1rem", lineHeight: "1.55", marginBottom: "0.75rem", textAlign: isMobile ? "left" : "justify" }}>
                I received my Master of Engineering (MEng) in Computer Science from the University of Cincinnati, USA and my Bachelor of Science (BSc) in Computer Science & Engineering from North South University, Dhaka, Bangladesh.
              </p>
              <p style={{ fontSize: isMobile ? "0.925rem" : "1rem", lineHeight: "1.55", marginBottom: "0.75rem", textAlign: isMobile ? "left" : "justify" }}>
                I like building things, asking “what if?” questions, and turning random ideas into research.
              </p>
              <p style={{ fontSize: isMobile ? "0.925rem" : "1rem", lineHeight: "1.55", margin: 0, textAlign: isMobile ? "left" : "justify" }}>
                Outside research, you will usually find me learning about productivity methods, strength training, experimenting with coffee or matcha, taking care of my plants, or trying to convince myself that I can keep them all alive. 🌱
              </p>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div style={{ maxWidth: "1000px", margin: isMobile ? "1.5rem auto 0 auto" : "2.5rem auto 0 auto", padding: isMobile ? "0 1rem" : "0 1.5rem" }}>
          <div style={{ backgroundColor: "#ffffff", borderRadius: "18px", padding: isMobile ? "1.25rem" : "2rem", border: "1px solid rgba(0, 0, 0, 0.08)", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)" }}>
            <h2 className="font-langar" style={{ fontSize: "1.8rem", color: "#455C48", marginTop: 0, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "1.5rem" }}>📌</span> Updates
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {newsEvents.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "flex-start" : "flex-start",
                    gap: isMobile ? "0.5rem" : "1.25rem",
                    paddingBottom: idx === newsEvents.length - 1 ? 0 : "1.25rem",
                    borderBottom: idx === newsEvents.length - 1 ? "none" : "1px solid #f0f0ee"
                  }}
                >
                  {/* Date & Badge */}
                  <div style={{ flex: isMobile ? "0 0 auto" : "0 0 140px", minWidth: isMobile ? "auto" : "140px" }}>
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.825rem", fontWeight: "700", color: "#455C48", backgroundColor: "#E8EFE9", padding: "4px 10px", borderRadius: "12px", display: "inline-block" }}>
                      {item.date}
                    </span>
                  </div>

                  {/* News Content */}
                  <div style={{ flex: 1, fontFamily: "Arial, sans-serif", fontSize: "0.95rem", color: "#2d3436", lineHeight: "1.55" }}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Gallery() {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /*
  const photos = window.galleryPhotos || [];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setLightboxIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);
  */

  return (
    <div style={{ backgroundColor: "#f2f1ee", minHeight: "calc(100vh - 65px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "1.5rem 0.75rem 0 0.75rem" : "3rem 1.5rem 0 1.5rem", textAlign: "center" }}>
      <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: isMobile ? "2rem 1.25rem" : "3rem 2.5rem", maxWidth: "660px", width: "100%", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)", border: "1px solid rgba(0, 0, 0, 0.06)", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Cute Animated Turtle SVG with Camera (matching Blog Page style) */}
        <div style={{ position: "relative", width: "180px", height: "160px", marginBottom: "1.5rem" }}>
          {/* Floating Bubbles */}
          <div className="turtle-bubble bubble-1"></div>
          <div className="turtle-bubble bubble-2"></div>
          <div className="turtle-bubble bubble-3"></div>

          <svg viewBox="0 0 200 180" width="100%" height="100%" className="turtle-svg-float">
            {/* Tail */}
            <path d="M 100 135 L 100 152 L 95 138 Z" fill="#7CA982" className="turtle-tail" />

            {/* Back Flippers */}
            <ellipse cx="60" cy="125" rx="14" ry="24" fill="#6A9770" transform="rotate(-30 60 125)" className="flipper-left" />
            <ellipse cx="140" cy="125" rx="14" ry="24" fill="#6A9770" transform="rotate(30 140 125)" className="flipper-right" />

            {/* Front Flippers */}
            <ellipse cx="45" cy="85" rx="18" ry="32" fill="#7CA982" transform="rotate(-40 45 85)" className="flipper-left" />
            <ellipse cx="155" cy="85" rx="18" ry="32" fill="#7CA982" transform="rotate(40 155 85)" className="flipper-right" />

            {/* Turtle Shell Base & Layers */}
            <ellipse cx="100" cy="100" rx="52" ry="44" fill="#354738" />
            <ellipse cx="100" cy="98" rx="48" ry="40" fill="#455C48" />

            {/* Shell Pattern Hexagons / Spots */}
            <path d="M 100 70 L 115 80 L 115 95 L 100 105 L 85 95 L 85 80 Z" fill="#5A755E" opacity="0.9" />
            <path d="M 70 88 L 83 96 L 83 110 L 70 118 L 57 110 L 57 96 Z" fill="#5A755E" opacity="0.7" />
            <path d="M 130 88 L 143 96 L 143 110 L 130 118 L 117 110 L 117 96 Z" fill="#5A755E" opacity="0.7" />

            {/* Turtle Neck & Head */}
            <circle cx="100" cy="48" r="26" fill="#7CA982" />

            {/* Rosy Cheeks */}
            <circle cx="84" cy="54" r="5" fill="#FFB7B2" opacity="0.8" />
            <circle cx="116" cy="54" r="5" fill="#FFB7B2" opacity="0.8" />

            {/* Eyes */}
            <g className="turtle-eyes">
              <circle cx="88" cy="44" r="4.5" fill="#1C251D" />
              <circle cx="89.5" cy="42.5" r="1.5" fill="#FFFFFF" />

              <circle cx="112" cy="44" r="4.5" fill="#1C251D" />
              <circle cx="113.5" cy="42.5" r="1.5" fill="#FFFFFF" />
            </g>

            {/* Cute Smile */}
            <path d="M 94 54 Q 100 59 106 54" fill="none" stroke="#2D3B2F" strokeWidth="2" strokeLinecap="round" />

            {/* Cute Camera Badge / Accessory */}
            <rect x="83" y="19" width="34" height="22" rx="4" fill="#FFC043" />
            <rect x="94" y="15" width="12" height="5" rx="2" fill="#E5A728" />
            <circle cx="100" cy="30" r="6" fill="#2D3B2F" />
            <circle cx="100" cy="30" r="3.5" fill="#7CA982" />
            <circle cx="110" cy="23" r="1.5" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Message Content */}
        <h2 style={{ fontFamily: "'Langar', cursive, sans-serif", fontSize: isMobile ? "1.6rem" : "2rem", color: "#455C48", margin: "0 0 0.75rem 0", lineHeight: "1.3" }}>
          Gallery In Progress! 📸🐢
        </h2>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: isMobile ? "0.95rem" : "1.05rem", fontWeight: "600", color: "#2D3B2F", margin: "0 0 0.5rem 0" }}>
          Choosing photo is a time consuming task, we are on it!
        </p>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.925rem", color: "#667067", margin: "0 0 2rem 0", maxWidth: "480px", lineHeight: "1.5" }}>
          We are carefully selecting and organizing our favorite photos. Check back soon for updates! ✨
        </p>

      </div>

      <Footer />
    </div>
  );
}

function CV() {
  const pdfPath = "pdf/Nazia_Tabassum_Toma_CV.pdf";
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#f2f1ee", minHeight: "calc(100vh - 65px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "1.5rem 0.75rem 0 0.75rem" : "3rem 1.5rem 0 1.5rem" }}>
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>

        {/* Embedded Viewer Card */}
        <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: isMobile ? "0.5rem" : "1rem", border: "1px solid rgba(0, 0, 0, 0.08)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)" }}>
          <object
            data={pdfPath}
            type="application/pdf"
            width="100%"
            height={isMobile ? "520px" : "850px"}
            style={{ borderRadius: "14px", display: "block" }}
          >
            <iframe
              src={pdfPath}
              title="Nazia Tabassum Toma CV"
              style={{ width: "100%", height: isMobile ? "520px" : "850px", border: "none", borderRadius: "14px" }}
            >
              <div style={{ textAlign: "center", padding: isMobile ? "1.5rem 0.5rem" : "3rem", fontFamily: "Arial, sans-serif" }}>
                <p style={{ fontSize: "1.1rem", color: "#2d3436" }}>Your browser is not embedding PDFs directly.</p>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#455C48",
                    color: "#ffffff",
                    padding: "10px 22px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    display: "inline-block",
                    marginTop: "1rem"
                  }}
                >
                  Click Here to View / Download CV (PDF)
                </a>
              </div>
            </iframe>
          </object>
        </div>

      </div>
      <Footer />
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Efficient Meal & Grocery Planner (Multi-Agent System)",
      image: "img/meal_agent.png",
      description: "An automated meal planning and grocery budgeting system driven by multiple AI agents that leverage large language models and real-time data from grocery websites for cost optimization. Features specialized agents for LLM meal plan generation, real-time price retrieval, budget optimization, async workflows, and Judgeval SDK tracing.",
      tags: "Python | OpenAI API | Multi-Agent Systems | Async Workflows | Judgeval SDK",
      link: "https://github.com/NaziaToma/Meal-and-Grocery-Planner-Agent",
      linkText: "GitHub",
      date: "2026"
    },
    {
      title: "Automated Bug Classification and Resolution Prediction System",
      image: "img/bug_project.png",
      description: "NLP-based BugFix module that intelligently categorizes and anticipates the resolution trajectory of bug reports, which optimizes the software maintenance process for enhanced efficiency and resource allocation",
      tags: "SVM | Naive Bayes | Random Forest | BERT",
      link: "https://github.com/NaziaToma/Automated-Bug-Classification-and-Resolution-Prediction-System",
      linkText: "GitHub",
      date: "Last updated 05-24-2024"
    },

    {
      title: "Desktop Cleaner",
      image: "img/dc.png",
      description: "A practical tool designed to automatically organize files on your desktop into designated folders based on file type, including Python scripts, C++ files, PDFs, images, and executables. This Python-based application simplifies desktop management, enhancing productivity and system efficiency.",
      tags: "Python",
      link: "https://github.com/NaziaToma/desktop-cleaner",
      linkText: "GitHub",
      date: "Last updated 05-24-2024"
    },
    {
      title: "Writer's Hub",
      image: "img/wh.png",
      description: "A universal digital portal tailored for writers, Writer's Hub offers a space where creatives can publish, exchange, and monetize their works on a globally accessible platform. It combines a user-friendly interface with advanced features like category-based searches and a premium content option, all built for optimal responsiveness and user experience.",
      tags: "HTML | CSS | JavaScript | Bootstrap",
      link: "https://github.com/NaziaToma/Writer_Hub-CSE482?tab=readme-ov-file",
      linkText: "GitHub",
      date: "Last updated 05-24-2024"
    },
    {
      title: "Coupon Searching Platform",
      image: "img/cf.png",
      description: "An online platform revolutionizing how users access and utilize discounts, Coupon Finder offers a seamless way to discover, compare, and leverage top deals across various product categories. The platform includes features such as searchable coupon codes, direct shop website redirection, and personalized email notifications.",
      tags: "Python | Django | HTML | CSS | Bootstrap",
      link: "https://github.com/NaziaToma/CSE299-Project-Coupon-Finder?tab=readme-ov-file",
      linkText: "GitHub",
      date: "Last updated 05-24-2024"
    }
  ];

  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);
  const [isTablet, setIsTablet] = useState(typeof window !== "undefined" ? window.innerWidth <= 992 && window.innerWidth > 768 : false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsTablet(w <= 992 && w > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridCols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

  return (
    <div style={{ backgroundColor: "#f2f1ee", padding: isMobile ? "2rem 1rem 0 1rem" : "3.5rem 1.5rem 0 1.5rem", minHeight: "calc(100vh - 65px)", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: gridCols, gap: isMobile ? "1.25rem" : "2rem", alignItems: "stretch" }}>
          {projects.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "18px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#f9f9f8",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px"
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "8px", display: "block" }}
                />
              </div>

              <div style={{ padding: "1.5rem 1.5rem 1.25rem 1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#25282a", marginTop: 0, marginBottom: "0.75rem", lineHeight: "1.35", fontFamily: "Arial, sans-serif" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#4b5257", lineHeight: "1.55", marginBottom: "1.25rem", flexGrow: 1, fontFamily: "Arial, sans-serif" }}>
                  {item.description}
                </p>
                <p style={{ fontSize: "0.825rem", fontWeight: "600", color: "#455C48", marginBottom: "1.25rem", lineHeight: "1.4", fontFamily: "Arial, sans-serif" }}>
                  {item.tags}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#455C48",
                    color: "#ffffff",
                    padding: "8px 18px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    width: "fit-content",
                    fontFamily: "Arial, sans-serif",
                    boxShadow: "0 2px 8px rgba(69, 92, 72, 0.2)"
                  }}
                >
                  {item.linkText} 🔗
                </a>
              </div>

              <div style={{ borderTop: "1px solid #f0f0ee", padding: "0.85rem 1.5rem", backgroundColor: "#ffffff" }}>
                <span style={{ fontSize: "0.75rem", color: "#8a9096", fontFamily: "Arial, sans-serif" }}>
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Blog() {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#f2f1ee", minHeight: "calc(100vh - 65px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "1.5rem 0.75rem 0 0.75rem" : "3rem 1.5rem 0 1.5rem", textAlign: "center" }}>
      <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: isMobile ? "2rem 1.25rem" : "3rem 2.5rem", maxWidth: "660px", width: "100%", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)", border: "1px solid rgba(0, 0, 0, 0.06)", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Cute Animated Turtle SVG */}
        <div style={{ position: "relative", width: "180px", height: "160px", marginBottom: "1.5rem" }}>
          {/* Floating Bubbles */}
          <div className="turtle-bubble bubble-1"></div>
          <div className="turtle-bubble bubble-2"></div>
          <div className="turtle-bubble bubble-3"></div>

          <svg viewBox="0 0 200 180" width="100%" height="100%" className="turtle-svg-float">
            {/* Tail */}
            <path d="M 100 135 L 100 152 L 95 138 Z" fill="#7CA982" className="turtle-tail" />

            {/* Back Flippers */}
            <ellipse cx="60" cy="125" rx="14" ry="24" fill="#6A9770" transform="rotate(-30 60 125)" className="flipper-left" />
            <ellipse cx="140" cy="125" rx="14" ry="24" fill="#6A9770" transform="rotate(30 140 125)" className="flipper-right" />

            {/* Front Flippers */}
            <ellipse cx="45" cy="85" rx="18" ry="32" fill="#7CA982" transform="rotate(-40 45 85)" className="flipper-left" />
            <ellipse cx="155" cy="85" rx="18" ry="32" fill="#7CA982" transform="rotate(40 155 85)" className="flipper-right" />

            {/* Turtle Shell Base & Layers */}
            <ellipse cx="100" cy="100" rx="52" ry="44" fill="#354738" />
            <ellipse cx="100" cy="98" rx="48" ry="40" fill="#455C48" />

            {/* Shell Pattern Hexagons / Spots */}
            <path d="M 100 70 L 115 80 L 115 95 L 100 105 L 85 95 L 85 80 Z" fill="#5A755E" opacity="0.9" />
            <path d="M 70 88 L 83 96 L 83 110 L 70 118 L 57 110 L 57 96 Z" fill="#5A755E" opacity="0.7" />
            <path d="M 130 88 L 143 96 L 143 110 L 130 118 L 117 110 L 117 96 Z" fill="#5A755E" opacity="0.7" />

            {/* Turtle Neck & Head */}
            <circle cx="100" cy="48" r="26" fill="#7CA982" />

            {/* Rosy Cheeks */}
            <circle cx="84" cy="54" r="5" fill="#FFB7B2" opacity="0.8" />
            <circle cx="116" cy="54" r="5" fill="#FFB7B2" opacity="0.8" />

            {/* Eyes */}
            <g className="turtle-eyes">
              <circle cx="88" cy="44" r="4.5" fill="#1C251D" />
              <circle cx="89.5" cy="42.5" r="1.5" fill="#FFFFFF" />

              <circle cx="112" cy="44" r="4.5" fill="#1C251D" />
              <circle cx="113.5" cy="42.5" r="1.5" fill="#FFFFFF" />
            </g>

            {/* Cute Smile */}
            <path d="M 94 54 Q 100 59 106 54" fill="none" stroke="#2D3B2F" strokeWidth="2" strokeLinecap="round" />

            {/* Cute Construction Hardhat */}
            <path d="M 80 34 C 80 18 120 18 120 34 Z" fill="#FFC043" />
            <rect x="74" y="32" width="52" height="5" rx="2.5" fill="#E5A728" />
            <rect x="96" y="20" width="8" height="13" fill="#FFE082" opacity="0.6" rx="2" />
          </svg>
        </div>

        {/* Message Content */}
        <h2 style={{ fontFamily: "'Langar', cursive, sans-serif", fontSize: isMobile ? "1.6rem" : "2rem", color: "#455C48", margin: "0 0 0.75rem 0", lineHeight: "1.3" }}>
          Pardon Our Slowness! 🐢🚧
        </h2>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: isMobile ? "0.95rem" : "1.05rem", fontWeight: "600", color: "#2D3B2F", margin: "0 0 0.5rem 0" }}>
          This page is under construction!
        </p>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.925rem", color: "#667067", margin: "0 0 2rem 0", maxWidth: "480px", lineHeight: "1.5" }}>
          We're paddling as fast as we can! Cute blog posts and stories will be updated soon. ✨
        </p>


      </div>
      <Footer />
    </div>
  );
}

function Research() {
  const researchItems = [
    {
      title: "BG-LLM: Bayesian-Guided LLM Framework for Personalized Learning",
      image: null,
      description: "An intelligent platform designed to generate computer science notes and quizzes tailored to individual user learning styles. Features a Bayesian user modeling framework that dynamically adapts content complexity and conversational style across dialogue turns, paired with a fine-tuned CodeLLaMA-7B-Instruct model for markdown note generation and a RAG pipeline for DSA quiz generation.",
      tags: "Bayesian User Modeling | CodeLLaMA-7B | Mixtral 8x7B | RAG | LangChain | Python | Django & React",
      link: null,
      linkText: "In Press - Publishing Soon 📄",
      date: "In Press (2026)"
    },
    {
      title: "Cross-Content Recommendation between Movie and Book Using Machine Learning",
      image: "img/mb.png",
      description: "This project introduces a novel cross-content recommendation system that suggests books based on movie descriptions and vice versa. It employs natural language processing and machine learning techniques, offering fresh and diverse content recommendations beyond traditional methods.",
      tags: "TF-IDF vectorization | K-means clustering | Hierarchical clustering | Cosine similarity",
      link: "https://ieeexplore.ieee.org/document/9620432",
      linkText: "DOI 🔗",
      date: "IEEE Xplore (2021)"
    }
  ];

  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#f2f1ee", padding: isMobile ? "2rem 1rem 0 1rem" : "3.5rem 1.5rem 0 1.5rem", minHeight: "calc(100vh - 65px)", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {researchItems.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
              overflow: "hidden",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              width: "100%"
            }}
          >
            {/* Left Image / Coming Soon Box */}
            <div
              style={{
                flex: isMobile ? "0 0 200px" : "0 0 360px",
                width: isMobile ? "100%" : "360px",
                height: isMobile ? "200px" : "auto",
                minHeight: isMobile ? "200px" : "240px",
                backgroundColor: item.image ? "#ffffff" : "#f5f6f4",
                borderRight: isMobile ? "none" : "1px solid rgba(0, 0, 0, 0.06)",
                borderBottom: isMobile ? "1px solid rgba(0, 0, 0, 0.06)" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem"
              }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "8px", display: "block" }}
                />
              ) : (
                <div style={{ textAlign: "center", padding: "1rem" }}>
                  <div style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>🖼️</div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "1rem", fontWeight: "700", color: "#455C48", letterSpacing: "0.5px" }}>
                    Image Coming Soon!
                  </div>
                </div>
              )}
            </div>

            {/* Right Details & Description Box */}
            <div style={{ flex: 1, padding: isMobile ? "1.25rem" : "1.75rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: isMobile ? "1.1rem" : "1.25rem", fontWeight: "700", color: "#25282a", marginTop: 0, marginBottom: "0.75rem", lineHeight: "1.35", fontFamily: "Arial, sans-serif" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#4b5257", lineHeight: "1.6", marginBottom: "1.25rem", fontFamily: "Arial, sans-serif" }}>
                  {item.description}
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: "600", color: "#455C48", marginBottom: "1.25rem", lineHeight: "1.4", fontFamily: "Arial, sans-serif" }}>
                  {item.tags}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f0f0ee", paddingTop: "0.85rem", marginTop: "auto" }}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#455C48",
                      color: "#ffffff",
                      padding: "8px 20px",
                      borderRadius: "20px",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "Arial, sans-serif",
                      boxShadow: "0 2px 8px rgba(69, 92, 72, 0.2)"
                    }}
                  >
                    {item.linkText}
                  </a>
                ) : (
                  <span
                    style={{
                      backgroundColor: "#E8EFE9",
                      color: "#2D4030",
                      padding: "8px 18px",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "Arial, sans-serif",
                      border: "1px solid #C8D8CB"
                    }}
                  >
                    {item.linkText}
                  </span>
                )}
                <span style={{ fontSize: "0.75rem", color: "#8a9096", fontFamily: "Arial, sans-serif" }}>
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

// Render components conditionally based on DOM elements available on the current page
const navigationEl = document.getElementById("navigation");
if (navigationEl) {
  createRoot(navigationEl).render(<NavigationBar />);
}

const aboutmeEl = document.getElementById("aboutme");
if (aboutmeEl) {
  createRoot(aboutmeEl).render(<AboutMe />);
}

const projectsEl = document.getElementById("project") || document.getElementById("projects-root");
if (projectsEl) {
  createRoot(projectsEl).render(<Projects />);
}

const researchEl = document.getElementById("research-root") || document.getElementById("research");
if (researchEl) {
  createRoot(researchEl).render(<Research />);
}

const blogEl = document.getElementById("blog-root") || document.getElementById("blog");
if (blogEl) {
  createRoot(blogEl).render(<Blog />);
}

const galleryEl = document.getElementById("gallery-root");
if (galleryEl) {
  createRoot(galleryEl).render(<Gallery />);
}

const cvEl = document.getElementById("cv-root");
if (cvEl) {
  createRoot(cvEl).render(<CV />);
}
