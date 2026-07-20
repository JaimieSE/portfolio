const portfolio = {
  name: "Jaimie Ngu",
  summary:
    "I am an Electrical Engineering undergraduate with interests in automation, robotics and embedded systems.",
  statistics: [
    {
      value: 4,
      label: "Robotic Projects",
      detail: "DalLegs, The Hive, Arcadia and Antenna Design"
    },
    {
      value: 10,
      label: "Project Presentations",
      detail: "Design reviews, demos, and showcases"
    },
    {
      value: 3,
      label: "Investors Pitched To",
      detail: "ST Engineering, Venture Capitalists and Baby Shark"
    },
    {
      value: 3,
      label: "Clubs Involved In",
      detail: "SUTD Organisation of Autonomous Robotics, Space Rocketry Club, and Basketball"
    }
  ],
  qualifications: [
    {
      title: "Bachelor of Engineering",
      detail:
        "Engineering Product Development, specialising in Electrical Engineering with a minor in Artificial Intelligence"
    }
  ],
  skills: [
    { name: "MATLAB", image: "assets/matlab.png", projects: ["The Hive"] },
    { name: "Arduino", image: "assets/arduino.png", projects: ["DalLegs", "The Hive"] },
    { name: "PyTorch", image: "assets/pytorch.png", projects: ["DalLegs"] },
    { name: "Python", image: "assets/python.png", projects: ["DalLegs", "The Hive"] },
    { name: "VSCode", image: "assets/VSC.png", projects: ["DalLegs", "The Hive"] },
    { name: "C++", image: "assets/c++.png", projects: ["DalLegs", "The Hive"] },
    { name: "Excel", image: "assets/excel.png", projects: ["DalLegs"] },
    { name: "Fusion 360", image: "assets/fusion.png", projects: ["DalLegs", "The Hive"] },
    { name: "CST", image: "assets/cst.png", projects: ["Colonoscopy Antenna Design"] },
    { name: "Marlin", image: "assets/marlin.png", projects: ["DalLegs"] },
    { name: "HTML/CSS/JS", image: "assets/htmlcssjs.png", projects: ["DalLegs"] }
  ],
  experience: [
    {
      company: "Innowave Tech Pte Ltd",
      period: "Aug 2025 - Jan 2025",
      responsibilities: [
        "Assisted with system testing.",
        "Supported troubleshooting of hardware and wiring issues.",
        "Prepared technical reports and updated project logistics.",
        "Prepared 3D models and engineering drawings for part manufacturing.",
        "Liaised with major stakeholders and handled meetings to discuss project progress and requirements.",
        "Documented Root Cause Analysis (RCA) for system failures and proposed solutions."
      ]
    },
    {
      company: "VEXU Robotics Team, SOAR",
      period: "June 2024 - Dec 2024",
      responsibilities: [
        "3D print farm manager.",
        "Ensured proper maintenance and operation of 3D printers.",
        "Experimented with filament types and printing parameters for break resistance.",
        "Prepared 3D models for prototyping and part manufacturing.",
        "Recycled failed prints with an in-house filament recycler."
      ]
    }
  ],
  projects: [
    {
      id: "dallegs",
      name: "DalLegs",
      meta: "SUTD Engineering Design Innovation, 30.007",
      description:
        "A wall cleaning robot to automate the cleaning process in hard-to-reach areas of HDB flats.",
      fullDescription:
        "DalLegs is an innovative wall-climbing robot designed to clean hard-to-reach areas in HDB flats. It uses advanced adhesion technology and automated navigation to efficiently cover vertical surfaces.",
      images: [
        "assets/DalLegsModel.png",
        "assets/DallegsBody.png",
        "assets/DallegsBrush.png",
        "assets/DallegsArm.png",
        "assets/Web Interface.png",
        "assets/circuitmng.jpg",
        "assets/showcase.jpg"
      ],
      explodedView: "assets/DallegsBody.png",
      imageDescriptions: [
        "Main DalLegs Robot Model - The complete assembled robot showing the integrated adhesion system and cleaning mechanism",
        "Robot Body - The main chassis of the robot, designed to house the microcontroller and other electronic components",
        "Motorized Brush Assembly - The cleaning mechanism that includes high-speed brushes and split nozzles for effective cleaning",
        "Articulated Arm - The robotic arm that allows the brushes to reach different angles and surfaces with two positional degrees of freedom",
        "Web Interface - The user interface for controlling and monitoring the robot's operations remotely",
        "Circuit Management System - Brief view of the microcontroller unit and electrical connections that power the robot",
        "Live Demonstration - The robot in action during testing on vertical surfaces"
      ],
      poster: "assets/POSTER.pdf",
      paperLink: "assets/30.007 paper.pdf",
      canvaLink: "https://canva.link/projectview",
      technologies: {
        languages: ["C++", "Arduino", "Python", "HTML", "CSS", "JavaScript", "G-code"],
        software: ["CFD", "Fusion 360", "Arduino IDE", "VS Code", "Computer Vision"],
        firmware: ["GRBL", "Marlin", "ESP32", "Raspberry Pi"]
      },
      components: [
        {
          name: "Computer Vision",
          description:
            "Using YOLOv8 and OpenCV to detect the severity of dirt, the robot can adjust pressure and cleaning speed accordingly."
        },
        {
          name: "Microcontroller Unit",
          description: "ESP32-based control system that manages motor coordination."
        },
        {
          name: "Motorized Brushes",
          description:
            "High-speed brushes powered by DC motors for effective cleaning action on various wall surfaces."
        },
        {
          name: "Navigation System",
          description:
            "Using a central Raspberry Pi system to communicate with the ESP32 on the testing rig, the robot can navigate planar surfaces using G-code with the help of NEMA 32 stepper motors."
        }
      ]
    },
    {
      id: "thehive",
      name: "The Hive",
      meta: "SUTD 3D Project, with ST Engineering",
      description:
        "A prototype of a self deploying solar farm using swarm system to provide energy to remote areas.",
      fullDescription:
        "The Hive is a swarm robotics project that deploys solar panels autonomously. Each unit communicates with others to optimize coverage and energy generation in remote areas.",
      images: [
        "assets/Solar.png",
        "assets/Origami.png",
        "assets/Opening Mechanism.png",
        "assets/3dbooth.jpg"
      ],
      explodedView: "assets/explodesolar.png",
      imageDescriptions: [
        "Solar Array Configuration - The deployed solar panel modules arranged for optimal energy generation",
        "Origami Mechanism - Innovative folding design that allows compact storage and autonomous deployment of the units",
        "Opening Mechanism - From the book of moving mechanisms, we were inspired by mechanism 224 and added our twist on it.",
        "Presentation Booth - The project showcased to stakeholders, i.e ST Engineering, presenting proof of concept to be adopted."
      ],
      poster: "assets/3dposter.pdf",
      canvaLink: "",
      paperLink: "",
      technologies: {
        languages: ["Python", "C++"],
        software: ["Fusion 360", "MATLAB", "Arduino", "VS Code"]
      },
      components: [
        {
          name: "Solar Panel Module",
          description:
            "Lightweight solar panels with integrated mounting brackets for autonomous deployment and optimal angle positioning."
        },
        {
          name: "Swarm Communication System",
          description:
            "Wireless mesh network that enables multiple units to coordinate positions, share data, and optimize collective energy generation."
        },
        {
          name: "Autonomous Movement Mechanism",
          description:
            "Motorized tracks and navigation system that allows each unit to move independently and locate optimal placement areas."
        },
        {
          name: "Energy Management Controller",
          description:
            "MPPT-based charge controller that maximizes energy harvesting and distributes power among networked units."
        }
      ]
    },
    {
      id: "colonoscopy-antenna",
      name: "Colonoscopy Antenna Design",
      meta: "Electromagnetism & Applications",
      description:
        "A miniaturised antenna designed to fit within a swallowable pill for colonoscopy applications.",
      fullDescription:
        "This project explores the electromagnetic design and miniaturisation of an ingestible antenna. The antenna is dimensioned to fit within a pill-sized capsule while supporting wireless communication from inside the human body.",
      images: ["assets/CST.png"],
      explodedView: "assets/CST.png",
      imageDescriptions: [
        "CST Studio Suite was used to model and evaluate the miniaturised ingestible antenna design."
      ],
      poster: "",
      canvaLink: "",
      paperLink: "",
      technologies: {
        languages: [],
        software: ["CST Studio Suite", "Electromagnetic Simulation"]
      },
      components: [
        {
          name: "Miniaturised Antenna",
          description: "A compact radiating element constrained by the dimensions of a swallowable capsule."
        },
        {
          name: "In-body Communication",
          description: "The design considers transmission through biological tissue for capsule-colonoscopy telemetry."
        }
      ]
    }
  ]
};

document.documentElement.style.setProperty("--mx", "50%");
document.documentElement.style.setProperty("--my", "50%");
const cadCursor = document.querySelector(".cad-cursor");

window.addEventListener("pointermove", (event) => {
  if (cadCursor) {
    cadCursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    cadCursor.classList.toggle("is-interactive", Boolean(event.target.closest("a, button, .featured-image-container")));
    cadCursor.classList.add("is-active");
  }
});

document.documentElement.addEventListener("pointerleave", () => {
  cadCursor?.classList.remove("is-active");
});

document.getElementById("name").textContent = portfolio.name;
document.getElementById("summary").textContent = portfolio.summary;

const statsDashboard = document.getElementById("stats-dashboard");
portfolio.statistics.forEach((stat, index) => {
  const card = document.createElement("div");
  card.className = "stat-card";
  card.innerHTML = `
    <span class="stat-value" data-target="${stat.value}">0</span>
    <span class="stat-label">${stat.label}</span>
    <div class="stat-detail">${stat.detail}</div>
  `;
  statsDashboard.appendChild(card);

  setTimeout(() => {
    const valueEl = card.querySelector(".stat-value");
    const target = Number(valueEl.dataset.target);
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      valueEl.textContent = current;

      if (current >= target) {
        clearInterval(interval);
        valueEl.textContent = target;
      }
    }, 90 + index * 35);
  }, 250 + index * 120);
});

const qualificationsList = document.getElementById("qualifications-list");
portfolio.qualifications.forEach((item) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.detail}</p>
  `;
  qualificationsList.appendChild(card);
});

const skillsCloud = document.getElementById("skills-cloud");
portfolio.skills.forEach((skill, index) => {
  const bubble = document.createElement("button");
  bubble.type = "button";
  bubble.className = "skill-bubble";
  bubble.innerHTML = `<img src="${skill.image}" alt="${skill.name}" /><span>${skill.name}</span>`;
  bubble.style.left = `${15 + Math.random() * 70}%`;
  bubble.style.top = `${18 + Math.random() * 64}%`;
  bubble.style.setProperty("--delay", `${(index % 4) * 0.2}s`);
  bubble.dataset.skillIndex = index;
  bubble.title = `${skill.name} used in: ${skill.projects.join(", ")}`;
  skillsCloud.appendChild(bubble);
});

const skillDetailPanel = document.createElement("aside");
skillDetailPanel.className = "skill-detail-panel";
skillDetailPanel.setAttribute("aria-live", "polite");
skillsCloud.appendChild(skillDetailPanel);

function showSkillProjects(skillIndex) {
  const skill = portfolio.skills[skillIndex];
  if (!skill) return;

  skillsCloud.querySelectorAll(".skill-bubble").forEach((bubble) => {
    bubble.classList.toggle("is-selected", Number(bubble.dataset.skillIndex) === skillIndex);
  });

  skillDetailPanel.innerHTML = `
    <button type="button" class="skill-detail-close" aria-label="Close skill details">&times;</button>
    <h3>${skill.name}</h3>
    <p class="skill-detail-kicker">Used in</p>
    <ul>${skill.projects.map((project) => `<li>${project}</li>`).join("")}</ul>
  `;
  skillDetailPanel.classList.add("is-visible");

  skillDetailPanel.querySelector(".skill-detail-close").addEventListener("click", () => {
    skillDetailPanel.classList.remove("is-visible");
    skillsCloud.querySelectorAll(".skill-bubble").forEach((bubble) => bubble.classList.remove("is-selected"));
  });
}

let activeBubble = null;
let bubbleDragStart = null;
let bubbleWasDragged = false;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function setBubblePosition(bubble, xPercent, yPercent) {
  bubble.style.left = `${clamp(xPercent, 12, 88)}%`;
  bubble.style.top = `${clamp(yPercent, 18, 82)}%`;
}

function resolveBubbleCollisions(draggedBubble) {
  const cloudRect = skillsCloud.getBoundingClientRect();
  const bubbles = [...skillsCloud.querySelectorAll(".skill-bubble")];

  for (let pass = 0; pass < 3; pass += 1) {
    bubbles.forEach((bubble) => {
      if (bubble === draggedBubble) {
        return;
      }

      const draggedRect = draggedBubble.getBoundingClientRect();
      const bubbleRect = bubble.getBoundingClientRect();
      const draggedX = draggedRect.left + draggedRect.width / 2;
      const draggedY = draggedRect.top + draggedRect.height / 2;
      const bubbleX = bubbleRect.left + bubbleRect.width / 2;
      const bubbleY = bubbleRect.top + bubbleRect.height / 2;
      const deltaX = bubbleX - draggedX;
      const deltaY = bubbleY - draggedY;
      const overlapX = (draggedRect.width + bubbleRect.width) / 2 - Math.abs(deltaX);
      const overlapY = (draggedRect.height + bubbleRect.height) / 2 - Math.abs(deltaY);

      if (overlapX <= 0 || overlapY <= 0) {
        return;
      }

      const pushHorizontally = overlapX < overlapY;
      const pushedX = pushHorizontally
        ? bubbleX + (deltaX >= 0 ? overlapX + 4 : -overlapX - 4)
        : bubbleX;
      const pushedY = pushHorizontally
        ? bubbleY
        : bubbleY + (deltaY >= 0 ? overlapY + 4 : -overlapY - 4);
      const xPercent = ((pushedX - cloudRect.left) / cloudRect.width) * 100;
      const yPercent = ((pushedY - cloudRect.top) / cloudRect.height) * 100;

      setBubblePosition(bubble, xPercent, yPercent);
      bubble.classList.add("was-bumped");
      window.setTimeout(() => bubble.classList.remove("was-bumped"), 260);
    });
  }
}

skillsCloud.addEventListener("pointerdown", (event) => {
  const bubble = event.target.closest(".skill-bubble");
  if (!bubble) {
    return;
  }

  event.preventDefault();
  bubble.classList.add("is-dragging");
  activeBubble = bubble;
  bubbleDragStart = { x: event.clientX, y: event.clientY };
  bubbleWasDragged = false;
  bubble.setPointerCapture(event.pointerId);
});

skillsCloud.addEventListener("pointermove", (event) => {
  if (!activeBubble) {
    return;
  }

  if (bubbleDragStart && Math.hypot(event.clientX - bubbleDragStart.x, event.clientY - bubbleDragStart.y) > 6) {
    bubbleWasDragged = true;
  }

  const rect = skillsCloud.getBoundingClientRect();
  const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
  const yPercent = ((event.clientY - rect.top) / rect.height) * 100;
  setBubblePosition(activeBubble, xPercent, yPercent);
  resolveBubbleCollisions(activeBubble);
});

function releaseBubble(event) {
  if (!activeBubble) {
    return;
  }

  const releasedBubble = activeBubble;
  releasedBubble.classList.remove("is-dragging");
  releasedBubble.releasePointerCapture(event.pointerId);
  activeBubble = null;
  bubbleDragStart = null;

  if (!bubbleWasDragged && event.type === "pointerup") {
    showSkillProjects(Number(releasedBubble.dataset.skillIndex));
  }
}

skillsCloud.addEventListener("pointerup", releaseBubble);
skillsCloud.addEventListener("pointercancel", releaseBubble);

const revealSections = document.querySelectorAll(".reveal-section");
const exposureHeading = document.querySelector(".experience-hero h2[data-typewriter]");
let lastScrollY = window.scrollY;
let ticking = false;

function updateExposureTypewriter() {
  if (!exposureHeading) {
    return;
  }

  const fullText = exposureHeading.dataset.typewriter;
  const hero = exposureHeading.closest(".experience-hero");
  const rect = hero.getBoundingClientRect();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    exposureHeading.textContent = fullText;
    exposureHeading.style.setProperty("--type-progress", "1");
    return;
  }

  const startLine = window.innerHeight * 0.82;
  const endLine = window.innerHeight * 0.4;
  const progress = clamp((startLine - rect.top) / (startLine - endLine), 0, 1);
  const visibleCharacters = Math.round(progress * fullText.length);

  exposureHeading.textContent = fullText.slice(0, visibleCharacters);
  exposureHeading.style.setProperty("--type-progress", progress.toFixed(3));
}

function updateRevealSections() {
  const currentScrollY = window.scrollY;
  const direction = currentScrollY > lastScrollY ? "down" : currentScrollY < lastScrollY ? "up" : "down";
  lastScrollY = currentScrollY;

  revealSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

    if (isInViewport && !section.classList.contains("is-visible")) {
      section.classList.toggle("reveal-from-top", direction === "up");
      section.classList.toggle("reveal-from-bottom", direction === "down");
      section.classList.add("is-visible");
    }
  });

  updateExposureTypewriter();
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateRevealSections();
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

updateRevealSections();

const contentArea = document.getElementById("content-area");
const tabs = document.querySelectorAll(".tab");

function renderExperience() {
  contentArea.innerHTML = '<div class="content-list experience-list"></div>';
  const list = contentArea.querySelector(".content-list");

  portfolio.experience.forEach((item) => {
    const bullets = item.responsibilities.map((point) => `<li>${point}</li>`).join("");

    const card = document.createElement("article");
    card.className = "card showcase-card experience-card";
    card.innerHTML = `
      <span class="showcase-index">${String(list.children.length + 1).padStart(2, "0")}</span>
      <h3>${item.company}</h3>
      <p class="meta">${item.period}</p>
      <ul>${bullets}</ul>
    `;
    list.appendChild(card);
  });
}

function renderProjects() {
  contentArea.innerHTML = '<div class="content-list projects-list"></div>';
  const list = contentArea.querySelector(".content-list");

  portfolio.projects.forEach((project) => {
    const mainImage = project.images[0];
    const hoverImage = project.explodedView || mainImage;
    const posterButton = project.poster
      ? `<a href="${project.poster}" target="_blank" rel="noopener noreferrer" class="pdf-button">Download Poster</a>`
      : "";
    const paperButton = project.paperLink
      ? `<a href="${project.paperLink}" target="_blank" rel="noopener noreferrer" class="pdf-button">Download Paper</a>`
      : "";
    const canvaButton = project.canvaLink
      ? `<a href="${project.canvaLink}" target="_blank" rel="noopener noreferrer" class="pdf-button">View Presentation</a>`
      : "";

    const card = document.createElement("article");
    card.className = "card showcase-card project-card";
    card.innerHTML = `
      <span class="showcase-index">${String(list.children.length + 1).padStart(2, "0")}</span>
      <h3>${project.name}</h3>
      <p class="meta">${project.meta}</p>
      <p>${project.description}</p>

      <div class="featured-image-container">
        <img src="${mainImage}" alt="${project.name} - Main Model" class="featured-image" data-project-id="${project.id}" data-default-image="${mainImage}" data-hover-image="${hoverImage}" />
        <div class="featured-overlay">View project <span aria-hidden="true">&nearr;</span></div>
      </div>

      <div class="project-actions">
        ${posterButton}
        ${canvaButton}
        ${paperButton}
      </div>
    `;
    list.appendChild(card);
  });

  document.querySelectorAll(".featured-image").forEach((img) => {
    const defaultImage = img.dataset.defaultImage;
    const hoverImage = img.dataset.hoverImage || defaultImage;

    img.addEventListener("mouseenter", () => {
      img.src = hoverImage;
    });

    img.addEventListener("mouseleave", () => {
      img.src = defaultImage;
    });

    img.addEventListener("click", () => {
      const projectId = img.dataset.projectId;
      const project = portfolio.projects.find((p) => p.id === projectId);
      if (project) {
        showProjectModal(project);
      }
    });
  });
}

function showProjectModal(project) {
  const modal = document.createElement("div");
  modal.className = "project-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", `${project.name} project details`);

  let technologiesHTML = "";
  if (project.technologies) {
    const languages = project.technologies.languages
      .map((lang) => `<span class="tech-tag">${lang}</span>`)
      .join("");
    const software = project.technologies.software
      .map((soft) => `<span class="tech-tag">${soft}</span>`)
      .join("");

    technologiesHTML = `
      <div class="technologies-section">
        <h3>Technologies Used</h3>
        <div class="tech-category">
          <h4>Languages</h4>
          <div class="tech-tags">${languages}</div>
        </div>
        <div class="tech-category">
          <h4>Software & Tools</h4>
          <div class="tech-tags">${software}</div>
        </div>
      </div>
    `;
  }

  let componentsHTML = "";
  if (project.components) {
    const componentsCards = project.components
      .map(
        (comp) => `
          <div class="component-card">
            <h4>${comp.name}</h4>
            <p>${comp.description}</p>
          </div>
        `
      )
      .join("");

    componentsHTML = `
      <div class="components-section">
        <h3>Key Components</h3>
        <div class="components-grid">${componentsCards}</div>
      </div>
    `;
  }

  let galleryHTML = "";
  if (project.images.length > 1) {
    const thumbnails = project.images
      .slice(1)
      .map(
        (image, index) => `
          <a href="${image}" target="_blank" data-image-index="${index + 1}" class="thumbnail-link">
            <img src="${image}" alt="${project.name}" class="modal-thumbnail" />
          </a>
        `
      )
      .join("");

    galleryHTML = `
      <div class="gallery-section">
        <h3>Gallery</h3>
        <div class="modal-gallery">${thumbnails}</div>
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" aria-label="Close project details">&times;</button>
      <h2>${project.name}</h2>
      <p class="modal-meta">${project.meta}</p>
      <img src="${project.images[0]}" alt="${project.name}" class="modal-image" />
      <div class="modal-details">
        <p><strong>Overview:</strong> ${project.description}</p>
        <p>${project.fullDescription}</p>
      </div>
      ${technologiesHTML}
      ${componentsHTML}
      ${galleryHTML}
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add("project-site-open");

  window.requestAnimationFrame(() => {
    modal.classList.add("active");
  });

  function closeProjectModal() {
    modal.classList.remove("active");
    document.removeEventListener("keydown", handleProjectKeydown);
    window.setTimeout(() => {
      modal.remove();
      document.body.classList.remove("project-site-open");
    }, 500);
  }

  function handleProjectKeydown(event) {
    if (event.key === "Escape" && !document.querySelector(".image-viewer-modal")) {
      closeProjectModal();
    }
  }

  document.addEventListener("keydown", handleProjectKeydown);

  modal.querySelector(".modal-close").addEventListener("click", () => {
    closeProjectModal();
  });

  modal.querySelectorAll(".thumbnail-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const imageIndex = parseInt(link.dataset.imageIndex, 10);

      if (project.imageDescriptions && project.imageDescriptions[imageIndex]) {
        showImageViewer(project.images[imageIndex], project.imageDescriptions[imageIndex]);
      }
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeProjectModal();
    }
  });
}

function showImageViewer(imageSrc, description) {
  const viewer = document.createElement("div");
  viewer.className = "image-viewer-modal";

  viewer.innerHTML = `
    <div class="image-viewer-content">
      <button class="viewer-close">×</button>
      <div class="viewer-image-container">
        <img src="${imageSrc}" alt="Gallery image" class="viewer-image" />
      </div>
      <div class="viewer-description-panel">
        <h4>Image Details</h4>
        <p>${description}</p>
        <a href="${imageSrc}" target="_blank" class="view-full-link">View Full Size →</a>
      </div>
    </div>
  `;

  document.body.appendChild(viewer);

  setTimeout(() => {
    viewer.classList.add("active");
  }, 10);

  viewer.querySelector(".viewer-close").addEventListener("click", () => {
    viewer.classList.remove("active");
    setTimeout(() => viewer.remove(), 400);
  });

  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
      viewer.classList.remove("active");
      setTimeout(() => viewer.remove(), 400);
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");

    if (tab.dataset.section === "experience") {
      renderExperience();
    } else {
      renderProjects();
    }
  });
});

renderExperience();
