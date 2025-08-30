// GSAP Animations and Interactions
document.addEventListener("DOMContentLoaded", () => {
  // Declare particlesJS variable
  const particlesJS = window.particlesJS

  // Initialize Particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#ff1493", "#ff69b4", "#da70d6", "#9370db"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ff69b4",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  })

  // Declare gsap and ScrollTrigger variables
  const gsap = window.gsap
  const ScrollTrigger = window.gsap.ScrollTrigger

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger)

  // Hero Animation
  gsap
    .timeline()
    .from(".hero-name", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out",
    })
    .from(
      ".hero-title",
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .from(
      ".hero-contact",
      {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .from(
      ".btn-download",
      {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: "back.out(1.7)",
      },
      "-=0.3",
    )

  // Section Animations
  const sections = document.querySelectorAll(".section")
  sections.forEach((section) => {
    gsap.from(section.querySelector(".section-title"), {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    })

    const cards = section.querySelectorAll(
      ".about-card, .experience-card, .education-card, .project-card, .skill-card, .certification-card, .languages-section, .activities-section",
    )
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 80,
        opacity: 0,
        delay: index * 0.2,
        ease: "power3.out",
      })
    })
  })
 
  // Navbar Scroll Effect
  const navbar = document.getElementById("navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile Navigation
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Card Hover Animations
  const cards = document.querySelectorAll(".education-card, .project-card, .skill-card, .certification-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      })
    })
  })

  // Social Links Animation
  const socialLinks = document.querySelectorAll(".social-link")
  socialLinks.forEach((link, index) => {
    gsap.from(link, {
      scrollTrigger: {
        trigger: ".social-links",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      scale: 0,
      rotation: 360,
      delay: index * 0.1,
      ease: "back.out(1.7)",
    })
  })

  // Floating Button Animation
  gsap.from(".floating-contact", {
    duration: 1,
    scale: 0,
    rotation: 360,
    delay: 2,
    ease: "back.out(1.7)",
  })

  // Logo Animation
  gsap.from(".logo-text", {
    duration: 1.5,
    rotation: 360,
    scale: 0,
    ease: "back.out(1.7)",
    delay: 0.5,
  })

  // Active Navigation Link Highlighting
  const navLinks = document.querySelectorAll(".nav-link")
  const sections_nav = document.querySelectorAll("section[id]")

  function highlightNavLink() {
    let current = ""
    sections_nav.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.clientHeight
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)

  // Add active class styles
  const style = document.createElement("style")
  style.textContent = `
        .nav-link.active {
            color: #ff69b4 !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `
  document.head.appendChild(style)
})
 // Download Resume Function
  function downloadResume() {
      const link = document.createElement('a');
      link.href = 'https://raw.githubusercontent.com/Nammu-02/nammu-02/main/Namrata-Naik-Resume.pdf'; // Corrected RAW GitHub URL
      link.download = 'Namrata-Naik-Resume.pdf';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
