const portfolio = {
  name: "Jaimie Ngu",

  summary:
    "I am an Electrical Engineering student with interests in automation, robotics and embedded systems.",

  qualifications: [
    {
      title: "Bachelor of Engineering",
      detail: "Engineering Product Development, specialising in Electrical Engineering with a minor in Artificial Intelligence"
           }
  ],

  skills: [
    { name: "MATLAB", image: "assets/matlab.png", category: "Software", projects: ["The Hive"] },
    { name: "Arduino", image: "assets/arduino.png", category: "Software", projects: ["DalLegs", "The Hive"] },
    { name: "PyTorch", image: "assets/pytorch.png", category: "Software", projects: ["DalLegs"] },
    { name: "Python", image: "assets/python.png", category: "Skills", projects: ["DalLegs", "The Hive"] },
    { name: "VSCode", image: "assets/VSC.png", category: "Skills", projects: ["DalLegs", "The Hive"] },
    { name: "C++", image: "assets/c++.png", category: "Skills", projects: ["DalLegs", "The Hive"] },
    { name: "Excel", image: "assets/excel.png", category: "Skills", projects: ["DalLegs"] },
    { name: "Fusion 360", image: "assets/fusion.png", category: "Software", projects: ["DalLegs", "The Hive"] },
    { name: "CST", image: "assets/cst.png", category: "Software", projects: ["Antenna Design"] },
    { name: "Marlin", image: "assets/marlin.png", category: "Skills", projects: ["DalLegs"] },
    { name: "HTML/CSS/JS", image: "assets/htmlcssjs.png", category: "Skills", projects: ["DalLegs"] }
  ],

  experience: [
    {
      company: "Innowave Tech Pte Ltd",
      period: "Aug 2025 - Jan 2025",
      responsibilities: [
        "Assisted with system testing.",
        "Supported troubleshooting of hardware and wiring issues.",
        "Prepared technical reports and updated project logistics.",
        "Prepared 3D Models and engineering drawings for part manufacturing.",  
        "Liaised with major stakeholders and handled meetings to discuss project progress and requirements.",
        "Documented Root Cause Analysis (RCA) for system failures and proposed solutions.",
      ]
    },
    {
      company: "VEXU Robotics Team, SOAR",
      period: "June 2024 - Dec 2024",
      responsibilities: [
        "3D Print farm manager.",
        "Ensured proper maintenance and operation of 3D printers.",
        "Experimentation of filament types and printing parameters for break resistance.",
        "Prepared 3D Models for prototyping and part manufacturing.",  
        "Recycled failed prints with an inhouse filament recycler.",
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
      fullDescription: "DalLegs is an innovative wall-climbing robot designed to clean hard-to-reach areas in HDB flats. It uses advanced adhesion technology and automated navigation to efficiently cover vertical surfaces.",
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
        languages: ["C++", "Arduino", "Python", "html", "CSS", "JavaScript", "Gcode",],
        software: ["CFD", "Fusion360", "Arduino IDE", "VScode", "Computer Vision",],
        firmware: ["GRBL", "Marlin", "ESP32","Raspberry Pi"]
      },
      components: [
        {
          name: "Computer Vision",
          description: "Using YoloV8 and OpenCV to detect the severity of dirt, the robot can adjust pressure and cleaning speed accordingly"
        },
        {
          name: "Microcontroller Unit",
          description: "ESP32-based control system that manages motor coordination."
        },
        {
          name: "Motorized Brushes",
          description: "High-speed brushes powered by DC motors for effective cleaning action on various wall surfaces."
        },
        {
          name: "Navigation System",
          description: "Using a central RPI system to communicaate with the ESP32 on the testing rig, the robot can navigate planar surfaces using Gcode with the help of Nema32 stepper motors."
        }
      ]
    }

    ,{
      id: "thehive",
      name: "The Hive",
      meta: "SUTD 3D Project, with ST Engineering",
      description:
        "A prototype of a self deploying solar farm using swarm system to provide energy to remote areas.",
      fullDescription: "The Hive is a swarm robotics project that deploys solar panels autonomously. Each unit communicates with others to optimize coverage and energy generation in remote areas.",
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
        "Presentation Booth - The project showcased to stakeholders, i.e ST Engineering, presenting proof of concept to be adopted.",
      ],
      poster: "assets/3dposter.pdf",
      canvaLink: "",
      paperLink: "",
      technologies: {
        languages: ["Python", "C++"],
        software: ["Fusion360", "MATLAB", "Arduino", "VSCode"]
      },
      components: [
        {
          name: "Solar Panel Module",
          description: "Lightweight solar panels with integrated mounting brackets for autonomous deployment and optimal angle positioning."
        },
        {
          name: "Swarm Communication System",
          description: "Wireless mesh network that enables multiple units to coordinate positions, share data, and optimize collective energy generation."
        },
        {
          name: "Autonomous Movement Mechanism",
          description: "Motorized tracks and navigation system that allows each unit to move independently and locate optimal placement areas."
        },
        {
          name: "Energy Management Controller",
          description: "MPPT-based charge controller that maximizes energy harvesting and distributes power among networked units."
        }
      ]
    }
      ]
};

document.documentElement.style.setProperty("--mx", "50%");
document.documentElement.style.setProperty("--my", "50%");

window.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty("--mx", `${x}%`);
  document.documentElement.style.setProperty("--my", `${y}%`);
});

document.getElementById("name").textContent = portfolio.name;
document.getElementById("summary").textContent = portfolio.summary;

const qualificationsList = document.getElementById("qualifications-list");
portfolio.qualifications.forEach((item) => {
  qualificationsList.innerHTML += `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    </article>
  `;
});

const skillsCloud = document.getElementById("skills-cloud");

const groupedSkills = portfolio.skills.reduce((groups, skill) => {
  if (!groups[skill.category]) {
    groups[skill.category] = [];
  }
  groups[skill.category].push(skill);
  return groups;
}, {});

skillsCloud.innerHTML = `
  <p class="skills-hint">Hover over a skill to see the projects it was used in.</p>
  <div class="skills-category-grid">
    ${Object.entries(groupedSkills)
      .map(
        ([category, items]) => `
          <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-list">
              ${items
                .map(
                  (skill) => `
                    <div class="skill-pill" tabindex="0">
                      <img src="${skill.image}" alt="${skill.name}" />
                      <span>${skill.name}</span>
                      <div class="skill-tooltip">
                        <strong>${skill.name}</strong>
                        <span>Used in:</span>
                        <ul>
                          ${skill.projects.map((project) => `<li>${project}</li>`).join("")}
                        </ul>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        `
      )
      .join("")}
  </div>
`;

const contentArea = document.getElementById("content-area");
const tabs = document.querySelectorAll(".tab");

function renderExperience() {
  contentArea.innerHTML = `<div class="content-list"></div>`;
  const list = contentArea.querySelector(".content-list");

  portfolio.experience.forEach((item) => {
    const bullets = item.responsibilities
      .map((point) => `<li>${point}</li>`)
      .join("");

    list.innerHTML += `
      <article class="card">
        <h3>${item.company}</h3>
        <p class="meta">${item.period}</p>
        <ul>${bullets}</ul>
      </article>
    `;
  });
}

function renderProjects() {
  contentArea.innerHTML = `<div class="content-list"></div>`;
  const list = contentArea.querySelector(".content-list");

  portfolio.projects.forEach((project) => {
    const mainImage = project.images[0];
    const thumbnails = project.images
      .slice(1)
      .map(
        (image) => `
          <a href="${image}" target="_blank">
            <img src="${image}" alt="${project.name}" />
          </a>
        `
      )
      .join("");

    const posterButton = project.poster 
      ? `<a href="${project.poster}" target="_blank" rel="noopener noreferrer" class="pdf-button">Download Poster</a>`
      : '';

    const paperButton = (project.paperLink || project.paper)
      ? `<a href="${project.paperLink || project.paper}" target="_blank" rel="noopener noreferrer" class="pdf-button">📄 Download Paper</a>`
      : '';

    const canvaButton = project.canvaLink
      ? `<a href="${project.canvaLink}" target="_blank" rel="noopener noreferrer" class="pdf-button">🎨 View Canva Presentation</a>`
      : '';

    const hoverImage = project.explodedView || mainImage;

    list.innerHTML += `
      <article class="card">
        <h3>${project.name}</h3>
        <p class="meta">${project.meta}</p>
        <p>${project.description}</p>

        <div class="featured-image-container">
          <img src="${mainImage}" alt="${project.name} - Main Model" class="featured-image" data-project-id="${project.id}" data-default-image="${mainImage}" data-hover-image="${hoverImage}" />
          <div class="featured-overlay">Hover for exploded view</div>
        </div>

        <div class="project-actions">
          ${posterButton}
          ${canvaButton}
          ${paperButton}
        </div>
      </article>
    `;
  });

  // Add click handlers for featured images
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
  
  let technologiesHTML = '';
  if (project.technologies) {
    const languages = project.technologies.languages.map(lang => `<span class="tech-tag">${lang}</span>`).join('');
    const software = project.technologies.software.map(soft => `<span class="tech-tag">${soft}</span>`).join('');
    
    technologiesHTML = `
      <div class="technologies-section">
        <h3>Technologies Used</h3>
        <div class="tech-category">
          <h4>Languages</h4>
          <div class="tech-tags">
            ${languages}
          </div>
        </div>
        <div class="tech-category">
          <h4>Software & Tools</h4>
          <div class="tech-tags">
            ${software}
          </div>
        </div>
      </div>
    `;
  }

  let componentsHTML = '';
  if (project.components) {
    const componentsCards = project.components.map(comp => `
      <div class="component-card">
        <h4>${comp.name}</h4>
        <p>${comp.description}</p>
      </div>
    `).join('');

    componentsHTML = `
      <div class="components-section">
        <h3>Key Components</h3>
        <div class="components-grid">
          ${componentsCards}
        </div>
      </div>
    `;
  }

  let galleryHTML = '';
  if (project.images.length > 1) {
    const thumbnails = project.images
      .slice(1)
      .map((image, index) => `
        <a href="${image}" target="_blank" data-image-index="${index + 1}" class="thumbnail-link">
          <img src="${image}" alt="${project.name}" class="modal-thumbnail" />
        </a>
      `)
      .join("");
    
    galleryHTML = `
      <div class="gallery-section">
        <h3>Gallery</h3>
        <div class="modal-gallery">
          ${thumbnails}
        </div>
      </div>
    `;
  }
  
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">×</button>
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
  
  modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.remove();
  });

  // Add click handlers for thumbnails to show image viewer
  modal.querySelectorAll(".thumbnail-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const imageIndex = parseInt(link.dataset.imageIndex);
      
      if (project.imageDescriptions && project.imageDescriptions[imageIndex]) {
        showImageViewer(project.images[imageIndex], project.imageDescriptions[imageIndex]);
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
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
  
  // Trigger animation
  setTimeout(() => {
    viewer.classList.add("active");
  }, 10);
  
  viewer.querySelector(".viewer-close").addEventListener("click", () => {
    viewer.classList.remove("active");
    setTimeout(() => viewer.remove(), 400);
  });

  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
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