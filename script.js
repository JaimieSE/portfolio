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
    { name: "AutoCAD", image: "assets/autocad.png" },
    { name: "MATLAB", image: "assets/matlab.png" },
    { name: "Arduino", image: "assets/arduino.png" },
    { name: "Python", image: "assets/python.png" },
    { name: "C++", image: "assets/cpp.png" },
    { name: "Excel", image: "assets/excel.png" },
    { name: "LTspice", image: "assets/ltspice.png" }
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
        "assets/DalLegs Model.png",
        "assets/circuitmng.jpg",
        "assets/showcase.jpg"
      ],
      imageDescriptions: [
        "Main DalLegs Robot Model - The complete assembled robot showing the integrated adhesion system and cleaning mechanism",
        "Circuit Management System - Detailed view of the microcontroller unit and electrical connections that power the robot",
        "Live Demonstration - The robot in action during testing on vertical surfaces"
      ],
      poster: "assets/poster.pdf",
      technologies: {
        languages: ["C++", "Arduino"],
        software: ["AutoCAD", "LTspice", "Arduino IDE"]
      },
      components: [
        {
          name: "Adhesion System",
          description: "Electrostatic adhesion mechanism that allows the robot to grip and climb vertical walls without damaging surfaces."
        },
        {
          name: "Microcontroller Unit",
          description: "Arduino-based control system that manages motor coordination, sensor input processing, and autonomous navigation."
        },
        {
          name: "Motorized Brushes",
          description: "High-speed brushes powered by DC motors for effective cleaning action on various wall surfaces."
        },
        {
          name: "Sensor Array",
          description: "Ultrasonic and proximity sensors for obstacle detection, navigation, and surface analysis."
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
        "assets/showcase.jpg"
      ],
      imageDescriptions: [
        "Solar Array Configuration - The deployed solar panel modules arranged for optimal energy generation",
        "Origami Mechanism - Innovative folding design that allows compact storage and autonomous deployment of the units",
        "Full System Integration - Complete The Hive system with multiple units working together in the field"
      ],
      poster: "assets/A1 3D poster.pdf",
      technologies: {
        languages: ["Python", "C++"],
        software: ["AutoCAD", "MATLAB", "Arduino"]
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

const cloudPositions = [
  { left: "45%", top: "8%" },
  { left: "22%", top: "18%" },
  { left: "66%", top: "20%" },
  { left: "12%", top: "48%" },
  { left: "44%", top: "42%" },
  { left: "76%", top: "50%" },
  { left: "30%", top: "68%" },
  { left: "60%", top: "72%" },
  { left: "8%", top: "10%" },
  { left: "82%", top: "8%" },
  { left: "5%", top: "75%" },
  { left: "86%", top: "78%" }
];

portfolio.skills.forEach((skill, index) => {
  const position = cloudPositions[index % cloudPositions.length];

  skillsCloud.innerHTML += `
    <div 
      class="skill-icon" 
      data-name="${skill.name}"
      style="left: ${position.left}; top: ${position.top};"
    >
      <img src="${skill.image}" alt="${skill.name}" />
    </div>
  `;
});

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
      ? `<a href="${project.poster}" target="_blank" class="pdf-button">📄 View Poster</a>`
      : '';

    list.innerHTML += `
      <article class="card">
        <h3>${project.name}</h3>
        <p class="meta">${project.meta}</p>
        <p>${project.description}</p>

        <div class="featured-image-container">
          <img src="${mainImage}" alt="${project.name} - Main Model" class="featured-image" data-project-id="${project.id}" />
          <div class="featured-overlay">Click to view details</div>
        </div>

        ${posterButton}
      </article>
    `;
  });

  // Add click handlers for featured images
  document.querySelectorAll(".featured-image").forEach((img) => {
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