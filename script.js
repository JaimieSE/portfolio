const portfolio = {
  name: "Jaimie Ngu",
  summary:
    "I am an Electrical Engineering undergraduate with interests in automation, robotics and embedded systems.",
  contact: {
    email: "ngujaimie@gmail.com",
    linkedin: "https://www.linkedin.com/in/jaimie-ngu",
    github: "",
    resume: ""
  },
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
      date: "Sep 2023 — May 2027",
      detail:
        'Engineering Product Development, specialising in <span class="education-specialisation">Electrical Engineering</span> with a <span class="education-specialisation education-ai">Minor in AI</span>'
    },
    {
      title: "A Levels",
      date: "Feb 2021 — Dec 2022",
      detail: "Physics, Mathematics, Chemistry and Economics"
    }
  ],
  skills: [
    { name: "ESP32", category: "Embedded & Firmware", projects: ["DalLegs"], appliedTo: ["Motor coordination", "MQTT communication", "Distributed control"] },
    { name: "Raspberry Pi 5", category: "Embedded & Firmware", projects: ["DalLegs"], appliedTo: ["Central control", "Computer vision", "ESP32 coordination"] },
    { name: "FluidNC", category: "Embedded & Firmware", projects: ["DalLegs"], appliedTo: ["YAML configuration", "Two-rope navigation", "Web control"] },
    { name: "MQTT", category: "Embedded & Firmware", projects: ["DalLegs"], appliedTo: ["Raspberry Pi–ESP32 messaging", "Control-system testing"] },
    { name: "G-code", category: "Embedded & Firmware", projects: ["DalLegs"], appliedTo: ["Vertical-plane motion", "Navigation commands"] },
    { name: "Arduino", image: "assets/arduino.png", category: "Embedded & Firmware", projects: ["DalLegs", "The Hive"], appliedTo: ["Sensor integration", "Prototype control", "Ultrasonic navigation"] },
    { name: "C++", image: "assets/C++.png", category: "Embedded & Firmware", projects: ["DalLegs", "The Hive"], appliedTo: ["Embedded control logic", "Hardware integration"] },
    { name: "Marlin", image: "assets/marlin.png", category: "Embedded & Firmware", projects: ["DalLegs"], appliedTo: ["Motion-control firmware", "Stepper coordination"] },

    { name: "CST Studio", image: "assets/CST.png", category: "Electrical & Simulation", projects: ["Colonoscopy Antenna Design"], appliedTo: ["Antenna simulation", "S11 analysis", "Radiation patterns"] },
    { name: "Power Budgeting", category: "Electrical & Simulation", projects: ["DalLegs", "The Hive"], appliedTo: ["Supply sizing", "Motor power planning", "Solar-PV integration"] },
    { name: "Circuit Wiring", category: "Electrical & Simulation", projects: ["DalLegs", "The Hive"], appliedTo: ["System wiring", "Controller integration", "Hardware troubleshooting"] },
    { name: "MATLAB", image: "assets/Matlab.png", category: "Electrical & Simulation", projects: ["The Hive"], appliedTo: ["Engineering calculations", "System analysis"] },
    { name: "FEA / CFD", category: "Electrical & Simulation", projects: ["DalLegs"], appliedTo: ["Structural feasibility", "Stress and strain analysis", "Body integrity"] },

    { name: "Fusion 360", image: "assets/fusion.png", category: "Mechanical & CAD", projects: ["DalLegs", "The Hive"], appliedTo: ["Mechanical CAD", "Engineering drawings", "Prototype assemblies"] },
    { name: "3D Printing", category: "Mechanical & CAD", projects: ["DalLegs", "The Hive"], appliedTo: ["Rapid prototyping", "Replacement parts", "Material testing"] },

    { name: "Python", image: "assets/python.png", category: "AI & Computer Vision", projects: ["DalLegs", "The Hive"], appliedTo: ["Vision pipeline", "Data processing", "Prototype tooling"] },
    { name: "PyTorch", image: "assets/pytorch.png", category: "AI & Computer Vision", projects: ["DalLegs"], appliedTo: ["Model training", "Inference evaluation"] },
    { name: "YOLO / OpenCV", category: "AI & Computer Vision", projects: ["DalLegs"], appliedTo: ["Dirt classification", "Camera inference", "Model validation"] },

    { name: "HTML / CSS / JS", image: "assets/htmlcssjs.png", category: "Web & Data", projects: ["DalLegs"], appliedTo: ["Robot control interface", "Live system feedback"] },
    { name: "VS Code", image: "assets/VSC.png", category: "Web & Data", projects: ["DalLegs", "The Hive"], appliedTo: ["Firmware development", "Web implementation"] },
    { name: "Excel", image: "assets/excel.png", category: "Web & Data", projects: ["DalLegs"], appliedTo: ["Engineering calculations", "Project logistics", "Data organisation"] }
  ],
  experience: [
    {
      company: "Innowave Tech Pte Ltd",
      start: "2025-08",
      role: "Automation Engineer Intern",
      period: "Aug 2025 - Jan 2026",
      tools: ["Fusion 360", "Excel", "Word", "PowerPoint"],
      outcomes: [
        "Developed industry-standard replacement models for outsourced parts approaching end of life.",
        "Worked with semiconductor stakeholders on robotic implementation requirements for cleanroom environments."
      ],
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
      start: "2024-06",
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
  internationalCurriculum: [
    {
      code: "CN / SHA",
      location: "Shanghai, China",
      institution: "Shanghai Jiao Tong University (SJTU)",
      period: "June 2024",
      focus: "Cross-curricular exchange",
      photos: [
        { image: "assets/WUXIgroup.jpg", caption: "Shanghai cross-curricular exchange cohort" },
        { image: "assets/WUXIinterview.jpg", caption: "User interviews with elderly-care staff" },
        { image: "assets/WUXIpresentation.jpg", caption: "Portable MRI design presentation at SJTU" }
      ],
      completed: [
        "Portable MRI design for the elderly",
        "Interviewed elderly locals in Shanghai for user evaluation",
        "Visited private and public elderly care homes to conduct preliminary research"
      ]
    },
    {
      code: "CN / WUX",
      location: "Wuxi, China",
      institution: "VEXU Robotics Competition",
      period: "December 2024",
      focus: "Asia Pacific VEX Robotics Competition",
      photos: [
        { image: "assets/VEXgroup.jpg", caption: "SUTD delegation at the VEX Robotics Asia Open" },
        { image: "assets/VEXvenue.jpg", caption: "Wuxi competition venue" },
        { image: "assets/VEXrobot.jpg", caption: "Competition robot after on-site maintenance" },
        { image: "assets/VEXflag.jpg", caption: "International delegation ceremony" }
      ],
      completed: [
        "3D printed broken parts on site for replacements",
        "Managed part logistics"
      ]
    },
    {
      code: "TW / CGU",
      location: "Taiwan",
      institution: "Chang Gung University",
      period: "Feb 2026 — Jul 2026",
      focus: "International academic exchange",
      photos: [
        { image: "assets/CGUcampus.jpg", caption: "Chang Gung University campus" },
        { image: "assets/ACDCconverter.jpg", caption: "AC/DC converter built during the exchange" }
      ],
      completed: [
        "Power Electronics and Advanced Experiments — created an AC/DC converter",
        "Introduction to Medical Electronics",
        "Machine Learning — completed a project on YOLO versions",
        "Economics (II)"
      ]
    }
  ],
  experienceGallery: [
    {
      image: "assets/WUXIgroup.jpg",
      location: "Shanghai, China",
      caption: "Cross-curricular exchange cohort during the Shanghai field programme."
    },
    {
      image: "assets/WUXIinterview.jpg",
      location: "Shanghai, China",
      caption: "Interviewing local elderly-care staff for user evaluation and preliminary research."
    },
    {
      image: "assets/WUXIpresentation.jpg",
      location: "SJTU, Shanghai",
      caption: "Presenting the portable MRI design developed for elderly users."
    },
    {
      image: "assets/VEXgroup.jpg",
      location: "Wuxi, China",
      caption: "Representing SUTD at the Asia Pacific VEX Robotics Competition."
    },
    {
      image: "assets/VEXvenue.jpg",
      location: "Wuxi, China",
      caption: "Competition floor before the VEX Robotics Asia Open Signature Event."
    },
    {
      image: "assets/VEXrobot.jpg",
      location: "Wuxi, China",
      caption: "The competition robot on the field after on-site maintenance and part replacement."
    },
    {
      image: "assets/VEXflag.jpg",
      location: "Wuxi, China",
      caption: "International delegation ceremony at the VEXU competition venue."
    },
    {
      image: "assets/CGUcampus.jpg",
      location: "Chang Gung University, Taiwan",
      caption: "Campus life during the February–July 2026 academic exchange."
    },
    {
      image: "assets/ACDCconverter.jpg",
      location: "Chang Gung University, Taiwan",
      caption: "AC/DC converter created for Power Electronics and Advanced Experiments."
    }
  ],
  projects: [
    {
      id: "dallegs",
      name: "DalLegs",
      meta: "SUTD Engineering Design Innovation, 30.007",
      description:
        "A wall cleaning robot to automate the cleaning process in hard-to-reach areas of HDB flats.",
      highlights: [
        { value: "26 Nm", label: "Winch torque" },
        { value: "63.6%", label: "AI validation accuracy" },
        { value: "0.511", label: "mAP@50" }
      ],
      skillTags: ["ESP32", "Raspberry Pi 5", "FluidNC", "MQTT", "G-code", "YOLO / OpenCV", "Fusion 360", "Power Budgeting"],
      fullDescription:
        "DalLegs is an innovative wall-climbing robot designed to clean hard-to-reach areas in HDB flats. It uses advanced adhesion technology and automated navigation to efficiently cover vertical surfaces.",
      caseStudy: {
        facts: [
          { value: "8", label: "Team members" },
          { value: "4 months", label: "Project duration" }
        ],
        role: [
          "Owned firmware and electrical integration across the robotic system.",
          "Configured FluidNC using YAML and generated G-code to navigate the robot across a vertical plane using two suspension ropes.",
          "Implemented software control logic on physical hardware and coordinated communication between the Raspberry Pi 5 and ESP32 controllers.",
          "Calculated the system power budget, selected suitable power delivery, and completed the electrical wiring."
        ],
        constraints: [
          "Deliver reliable two-rope navigation across a vertical cleaning plane.",
          "Navigate around façade protrusions of approximately 0.3 m.",
          "Clean a 1 mm layer of peanut-butter test material from a concrete surface.",
          "Limit water use to 5 L/min and clean a 1 m × 1 m area in under 20 minutes.",
          "Reach ledge corners while applying approximately 0.5–5 N of brush pressure.",
          "Retain at least 60% live-feed prediction accuracy for AI-assisted cleaning.",
          "Produce a working prototype suitable for live demonstration to stakeholders.",
          "Validate market demand and commercial viability alongside the engineering proof of concept."
        ],
        decisions: [
          "Used a purpose-built two-rope winch system instead of a conventional gondola, reducing calculated torque demand and projected hardware cost.",
          "Balanced cleaning throughput against water use by limiting flow to 5 L/min while targeting a 1 m × 1 m area in under 20 minutes.",
          "Retained AI-assisted dirt classification to reduce dependence on operator judgement, accepting lower reliability while the training dataset remained limited.",
          "Selected aluminium for water-jetted structural parts, PLA for rapid prototypes, brass standoffs and galvanised-steel winch hooks; nylon or TPU were identified for future tougher printed parts."
        ],
        testing: [
          "Used finite-element analysis to evaluate displacement, stress and strain under calculated cable tension.",
          "Modelled a 20 m anchor spacing, 1.5 m roof-to-winch height and 2 cm spool radius to estimate peak cable tension and motor torque.",
          "Tested brush speed, water pressure and cleaning speed to identify effective operating conditions.",
          "Compared AI-predicted dirt labels against manually assigned labels and calculated precision, recall, F1 and mAP metrics.",
          "Validated navigation through web controls using FluidNC.",
          "Tested MQTT communication between the Raspberry Pi 5 and ESP32 controllers on the rig."
        ],
        results: [
          { value: "~1,300 N", label: "Calculated maximum cable tension" },
          { value: "26 Nm", label: "Calculated winch torque requirement" },
          { value: "SGD 270–810", label: "Estimated DalLegs system cost" },
          { value: "63.6%", label: "Validation accuracy (7 of 11 samples)" },
          { value: "0.835", label: "Highest AI precision" },
          { value: "0.480", label: "Highest AI recall" },
          { value: "0.511", label: "mAP@50 (mean Average Precision at 50% IoU)" },
          { value: "0.332", label: "mAP@50–95" }
        ],
        outcome: [
          "The full-scale feasibility study found that the proposed structure could withstand the calculated cable forces. The custom system required an estimated 26 Nm of winch torque, supported a 5–50 kg operating range, and had a projected cost of SGD 270–810 compared with SGD 4,000–8,000 for a conventional gondola winch.",
          "The integrated prototype was presented in a live stakeholder showcase with navigation, cleaning, embedded control and AI-assisted dirt classification brought together as one system."
        ],
        iterations: [
          "The largest limitation was the AI dataset. With only 11 validation samples and subjective dirt-class labels, the model over-predicted heavy and light classes and achieved 63.6% overall validation accuracy. The next iteration requires more balanced data, clearer labelling criteria and additional real-world samples."
        ],
        learnings: [
          "A mechanically feasible system still requires validation across controls, cleaning performance, perception and communications—not only structural analysis.",
          "The AI model over-predicted heavy and light dirt classes; class balance, larger datasets and more consistent labelling are necessary for reliable deployment.",
          "The medium dirt class produced reliable predictions when detected but suffered low recall, showing why accuracy alone is not sufficient for evaluating the model.",
          "Early quantitative comparison against commercial gondolas helped justify the custom architecture: 26 Nm calculated torque versus 80–200 Nm, and a substantially lower estimated cost."
        ]
      },
      links: { demo: "", repository: "" },
      images: [
        "assets/DalLegsModel.png",
        "assets/DalLegsBody.png",
        "assets/DalLegsBrush.png",
        "assets/DalLegsArm.png",
        "assets/Web Interface.png",
        "assets/Circuitmng.jpg",
        "assets/showcase.jpg"
      ],
      explodedView: "assets/DalLegsBody.png",
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
      highlights: [
        { value: "1 month", label: "Proof-of-concept sprint" },
        { value: "5", label: "Team members" },
        { value: "ST Eng.", label: "Stakeholder showcase" }
      ],
      skillTags: ["Solar PV", "Circuit Wiring", "Arduino", "C++", "Fusion 360", "3D Printing", "Ultrasonic Sensors"],
      fullDescription:
        "The Hive is a swarm robotics project that deploys solar panels autonomously. Each unit communicates with others to optimize coverage and energy generation in remote areas.",
      caseStudy: {
        facts: [
          { value: "5", label: "Team members" },
          { value: "1 month", label: "Project duration" }
        ],
        role: [
          "Led solar-PV integration and system wiring.",
          "Coordinated project delivery across the team and produced supporting media and presentation materials."
        ],
        constraints: [
          "Deliver a functional proof of concept supported by engineering calculations.",
          "Demonstrate compact storage and reliable expansion of the flasher-fold origami mechanism."
        ],
        decisions: [],
        testing: [
          "Tested analogue-controller navigation supported by ultrasonic sensing.",
          "Evaluated mechanism movement and expansion behaviour of the flasher-fold origami structure."
        ],
        results: [],
        learnings: []
      },
      links: { demo: "", repository: "" },
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
      highlights: [
        { value: "907.57 MHz", label: "Measured marker" },
        { value: "−10.05 dB", label: "Measured S11" },
        { value: "1.15 dBi", label: "Simulated gain" }
      ],
      skillTags: ["CST Studio", "Antenna Simulation", "VNA Testing", "S11 Analysis", "Canva"],
      fullDescription:
        "This project explores the electromagnetic design and miniaturisation of an ingestible antenna. The antenna is dimensioned to fit within a pill-sized capsule while supporting wireless communication from inside the human body.",
      caseStudy: {
        facts: [
          { value: "4", label: "Team members" },
          { value: "1 month", label: "Project duration" },
          { value: "26 × 11 mm", label: "Antenna envelope" },
          { value: "900 MHz", label: "Target frequency" }
        ],
        role: [
          "Led antenna design and electromagnetic simulation work.",
          "Produced supporting media and technical presentation materials."
        ],
        constraints: [
          "Fit the antenna within a 26 mm × 11 mm swallowable capsule envelope.",
          "Limit tissue heating while maintaining useful in-body wireless performance.",
          "Target operation around 900 MHz."
        ],
        decisions: [
          "Developed and evaluated a helical antenna curved into a cylindrical form to use the limited capsule volume efficiently."
        ],
        testing: [
          "Simulated antenna gain, return loss and radiation behaviour in CST Studio Suite."
        ],
        results: [
          { value: "−8.1 dB", label: "Simulated S11 / return loss" },
          { value: "15%", label: "Reflected power at the stated S11" },
          { value: "1.15 dBi", label: "Simulated gain" },
          { value: "907.57 MHz", label: "Measured VNA marker frequency" },
          { value: "−10.05 dB", label: "Measured S11 at the marker" }
        ],
        resultImages: [
          {
            image: "assets/Antennameasure.png",
            title: "Measured S11 response",
            caption: "VNA measurement from 100 kHz to 3 GHz, with marker M1 at 907.57 MHz and −10.05 dB."
          }
        ],
        learnings: []
      },
      links: { demo: "", repository: "" },
      images: [
        "assets/Antenna.png",
        "assets/Circularpolarisation.png",
        "assets/Circularpolarisation2.png",
        "assets/Antennameasure.png"
      ],
      imageDescriptions: [
        "CST model of the miniaturised antenna geometry.",
        "Simulated circular-polarisation result from CST Studio Suite.",
        "Additional circular-polarisation simulation used to evaluate antenna behaviour.",
        "Vector-network-analyser S11 measurement with marker M1 at 907.57 MHz and approximately −10.05 dB."
      ],
      poster: "assets/AntennaPoster.pdf",
      technologies: {
        languages: [],
        software: ["CST Studio Suite", "Canva"]
      },
      components: [
        {
          name: "Double Helical Structure",
          description: "A compact radiating element constrained by the dimensions of a swallowable capsule provides circular polarization with low return loss."
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
const cadCoordinateHud = document.querySelector(".cad-coordinate-hud");
const cadSelectionBox = document.querySelector(".cad-selection-box");
let cadSelectionStart = null;
let cadSelectionFadeTimer = null;

function isSelectableCadBackground(target) {
  return target.matches("body, .page-shell, .hero, .glass-section, .experience-hero, .tabs-section, .skills-workspace");
}

function drawCadSelection(clientX, clientY) {
  if (!cadSelectionStart || !cadSelectionBox) return;

  const left = Math.min(cadSelectionStart.x, clientX);
  const top = Math.min(cadSelectionStart.y, clientY);
  const width = Math.abs(clientX - cadSelectionStart.x);
  const height = Math.abs(clientY - cadSelectionStart.y);
  cadSelectionBox.style.setProperty("--selection-left", `${left}px`);
  cadSelectionBox.style.setProperty("--selection-top", `${top}px`);
  cadSelectionBox.style.setProperty("--selection-width", `${width}px`);
  cadSelectionBox.style.setProperty("--selection-height", `${height}px`);
  cadSelectionBox.querySelector("span").textContent = `${Math.round(width)} x ${Math.round(height)}`;
}

window.addEventListener("pointerdown", (event) => {
  if (event.button !== 0 || event.pointerType === "touch" || !cadSelectionBox || !isSelectableCadBackground(event.target)) return;

  window.clearTimeout(cadSelectionFadeTimer);
  cadSelectionStart = { x: event.clientX, y: event.clientY };
  cadSelectionBox.classList.remove("is-complete");
  cadSelectionBox.classList.add("is-active");
  drawCadSelection(event.clientX, event.clientY);
});

window.addEventListener("pointermove", (event) => {
  const snapSize = 24;
  const snappedX = Math.round(event.clientX / snapSize) * snapSize;
  const snappedY = Math.round(event.clientY / snapSize) * snapSize;
  document.documentElement.style.setProperty("--cad-snap-x", `${snappedX}px`);
  document.documentElement.style.setProperty("--cad-snap-y", `${snappedY}px`);

  if (cadCoordinateHud) {
    cadCoordinateHud.children[0].textContent = `X ${String(snappedX).padStart(4, "0")}`;
    cadCoordinateHud.children[1].textContent = `Y ${String(snappedY).padStart(4, "0")}`;
  }

  if (cadCursor) {
    cadCursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    cadCursor.classList.toggle("is-interactive", Boolean(event.target.closest("a, button, .featured-image-container")));
    cadCursor.classList.add("is-active");
  }

  drawCadSelection(event.clientX, event.clientY);
});

function finishCadSelection() {
  if (!cadSelectionStart || !cadSelectionBox) return;

  cadSelectionStart = null;
  cadSelectionBox.classList.remove("is-active");
  cadSelectionBox.classList.add("is-complete");
  cadSelectionFadeTimer = window.setTimeout(() => cadSelectionBox.classList.remove("is-complete"), 420);
}

window.addEventListener("pointerup", finishCadSelection);
window.addEventListener("pointercancel", finishCadSelection);

document.documentElement.addEventListener("pointerleave", () => {
  cadCursor?.classList.remove("is-active");
});

document.getElementById("name").textContent = portfolio.name;
document.getElementById("summary").textContent = portfolio.summary;

const roleTypewriterText = document.getElementById("role-typewriter-text");
const rolePhrases = ["Automation Engineer", "Robotics Engineer", "FDM Enthusiast"];

if (roleTypewriterText) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    roleTypewriterText.textContent = rolePhrases.join(" / ");
  } else {
    let rolePhraseIndex = 0;
    let roleCharacterIndex = 0;
    let roleIsDeleting = false;

    function animateRoleTypewriter() {
      const rolePhrase = rolePhrases[rolePhraseIndex];
      roleTypewriterText.textContent = rolePhrase.slice(0, roleCharacterIndex);

      if (!roleIsDeleting && roleCharacterIndex < rolePhrase.length) {
        roleCharacterIndex += 1;
        window.setTimeout(animateRoleTypewriter, 72);
      } else if (!roleIsDeleting) {
        roleIsDeleting = true;
        window.setTimeout(animateRoleTypewriter, 1700);
      } else if (roleCharacterIndex > 0) {
        roleCharacterIndex -= 1;
        window.setTimeout(animateRoleTypewriter, 38);
      } else {
        roleIsDeleting = false;
        rolePhraseIndex = (rolePhraseIndex + 1) % rolePhrases.length;
        window.setTimeout(animateRoleTypewriter, 520);
      }
    }

    animateRoleTypewriter();
  }
}

const themeSwitch = document.querySelector(".theme-switch");

function applyTheme(isLight) {
  document.documentElement.classList.toggle("light-mode", isLight);
  document.body.classList.toggle("light-mode", isLight);
  themeSwitch?.setAttribute("aria-checked", String(isLight));
  themeSwitch?.setAttribute("aria-label", isLight ? "Turn off light mode" : "Turn on light mode");
}

let savedLightMode = false;
try {
  savedLightMode = localStorage.getItem("portfolio-theme") === "light";
} catch (error) {
  savedLightMode = false;
}
applyTheme(savedLightMode);

themeSwitch?.addEventListener("click", () => {
  const isLight = !document.body.classList.contains("light-mode");
  applyTheme(isLight);
  try {
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  } catch (error) {
    // The switch still works when browser storage is unavailable.
  }
});

const contactLinks = document.getElementById("contact-links");
const contactDefinitions = [
  { key: "email", label: "Email", href: (value) => `mailto:${value}` },
  { key: "linkedin", label: "LinkedIn", href: (value) => value },
  { key: "github", label: "GitHub", href: (value) => value },
  { key: "resume", label: "Resume", href: (value) => value }
];

contactLinks.innerHTML = contactDefinitions.map((item) => {
  const value = portfolio.contact[item.key];
  if (!value) {
    return "";
  }

  const displayValue = item.key === "email" ? value : `Open ${item.label}`;
  return `
    <a class="contact-link" href="${item.href(value)}" ${item.key === "email" ? "" : 'target="_blank" rel="noopener noreferrer"'}>
      <small>${item.label}</small>
      <strong>${displayValue}</strong>
      <span aria-hidden="true">&nearr;</span>
    </a>
  `;
}).join("");

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
  card.className = "education-node";
  card.innerHTML = `
    <span class="education-node-pin" aria-hidden="true"><i></i></span>
    <time>${item.date}</time>
    <h3>${item.title}</h3>
    <p>${item.detail}</p>
  `;
  qualificationsList.appendChild(card);
});

const skillsWorkspace = document.getElementById("skills-workspace");
const skillCategories = [
  "Embedded & Firmware",
  "Electrical & Simulation",
  "Mechanical & CAD",
  "AI & Computer Vision",
  "Web & Data"
];
const categoryCodes = {
  "Embedded & Firmware": "CTRL-01",
  "Electrical & Simulation": "ELEC-02",
  "Mechanical & CAD": "MECH-03",
  "AI & Computer Vision": "VISN-04",
  "Web & Data": "DATA-05"
};

skillCategories.forEach((category) => {
  const tank = document.createElement("section");
  tank.className = "category-tank";
  tank.dataset.category = category;
  tank.innerHTML = `
    <div class="category-tank-header">
      <span>${categoryCodes[category]}</span>
      <h3>${category}</h3>
      <small>${portfolio.skills.filter((skill) => skill.category === category).length} tools</small>
    </div>
    <div class="category-tank-surface">
      <div class="tank-water"></div>
      <div class="category-origin" aria-hidden="true"><i></i><span>0,0</span></div>
      <div class="skills-cloud" data-skill-category="${category}"></div>
    </div>
  `;
  skillsWorkspace.appendChild(tank);
});

portfolio.skills.forEach((skill, index) => {
  const skillsCloud = skillsWorkspace.querySelector(`[data-skill-category="${skill.category}"]`);
  const categorySkills = portfolio.skills.filter((item) => item.category === skill.category);
  const categoryIndex = categorySkills.indexOf(skill);
  const columns = Math.min(3, Math.ceil(Math.sqrt(categorySkills.length)));
  const rows = Math.ceil(categorySkills.length / columns);
  const column = categoryIndex % columns;
  const row = Math.floor(categoryIndex / columns);
  const bubble = document.createElement("button");
  bubble.type = "button";
  bubble.className = "skill-bubble";
  const initials = skill.name.split(/[\s/&]+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("");
  bubble.innerHTML = `${skill.image
    ? `<img src="${skill.image}" alt="" />`
    : `<span class="skill-monogram" aria-hidden="true">${initials}</span>`
  }<span class="skill-name">${skill.name}</span>`;

  const x = 12 + 76 * ((column + 0.5) / Math.min(columns, categorySkills.length));
  const y = 16 + 68 * ((row + 0.5) / rows);

  bubble.style.left = `${x}%`;
  bubble.style.top = `${y}%`;
  bubble.style.setProperty("--delay", `${(index % 4) * 0.2}s`);
  bubble.dataset.skillIndex = index;
  bubble.dataset.category = skill.category;
  bubble.title = `${skill.name} used in: ${skill.projects.join(", ")}`;
  skillsCloud.appendChild(bubble);
});

const skillDetailPanel = document.createElement("aside");
skillDetailPanel.className = "skill-detail-panel";
skillDetailPanel.setAttribute("aria-live", "polite");
skillsWorkspace.appendChild(skillDetailPanel);

function showSkillProjects(skillIndex) {
  const skill = portfolio.skills[skillIndex];
  if (!skill) return;

  skillsWorkspace.querySelectorAll(".skill-bubble").forEach((bubble) => {
    bubble.classList.toggle("is-selected", Number(bubble.dataset.skillIndex) === skillIndex);
  });

  skillDetailPanel.innerHTML = `
    <button type="button" class="skill-detail-close" aria-label="Close skill details">&times;</button>
    <p class="skill-detail-category">${skill.category}</p>
    <h3>${skill.name}</h3>
    <p class="skill-detail-kicker">Applied to</p>
    <ul class="skill-application-list">${skill.appliedTo.map((application) => `<li>${application}</li>`).join("")}</ul>
    <p class="skill-detail-kicker skill-projects-label">Used in</p>
    <div class="skill-project-links">${skill.projects.map((project) => `<button type="button" data-project-name="${project}">${project}<span aria-hidden="true">&nearr;</span></button>`).join("")}</div>
  `;
  skillDetailPanel.classList.add("is-visible");

  skillDetailPanel.querySelectorAll("[data-project-name]").forEach((projectButton) => {
    projectButton.addEventListener("click", () => {
      const project = portfolio.projects.find((item) => item.name === projectButton.dataset.projectName);
      if (!project) return;
      tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.section === "projects"));
      renderProjects();
      document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => showProjectModal(project), 350);
    });
  });

  skillDetailPanel.querySelector(".skill-detail-close").addEventListener("click", () => {
    skillDetailPanel.classList.remove("is-visible");
    skillsWorkspace.querySelectorAll(".skill-bubble").forEach((bubble) => bubble.classList.remove("is-selected"));
  });
}

const cadCommandPalette = document.getElementById("cad-command-palette");
const cadModeStatus = document.getElementById("cad-mode-status");
const cadCommandButtons = [...document.querySelectorAll("[data-cad-command]")];
let skillInteractionMode = "inspect";
const assembledSkillIndices = new Set();

const skillProfiles = {
  all: null,
  automation: ["ESP32", "Raspberry Pi 5", "FluidNC", "MQTT", "G-code", "Arduino", "C++", "Power Budgeting", "Circuit Wiring", "Fusion 360", "Python", "HTML / CSS / JS", "Excel"],
  robotics: ["ESP32", "Raspberry Pi 5", "FluidNC", "MQTT", "G-code", "Arduino", "C++", "Marlin", "Power Budgeting", "Circuit Wiring", "FEA / CFD", "Fusion 360", "3D Printing", "Python", "PyTorch", "YOLO / OpenCV"],
  fdm: ["Fusion 360", "3D Printing", "Marlin"]
};

function setCadMode(mode, statusLabel = mode.toUpperCase()) {
  skillInteractionMode = mode;
  cadCommandButtons.forEach((button) => {
    const active = button.dataset.cadCommand === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (cadModeStatus) cadModeStatus.textContent = `MODE: ${statusLabel}`;
}

function clearSkillSelection() {
  assembledSkillIndices.clear();
  skillsWorkspace.querySelectorAll(".skill-bubble").forEach((bubble) => {
    bubble.classList.remove("is-selected", "is-assembly-selected");
  });
  skillDetailPanel.classList.remove("is-visible");
}

function applySkillFilter(predicate, statusLabel) {
  clearSkillSelection();
  skillsWorkspace.querySelectorAll(".skill-bubble").forEach((bubble) => {
    const skill = portfolio.skills[Number(bubble.dataset.skillIndex)];
    bubble.hidden = !predicate(skill);
  });
  skillsWorkspace.querySelectorAll(".category-tank").forEach((tank) => {
    tank.hidden = !tank.querySelector(".skill-bubble:not([hidden])");
  });
  setCadMode("inspect", statusLabel);
}

function openCadPalette(title, options) {
  cadCommandPalette.innerHTML = `
    <div class="cad-palette-header"><span>${title}</span><button type="button" aria-label="Close command palette">&times;</button></div>
    <div class="cad-palette-options">${options.map((option) => `<button type="button" data-option="${option.value}"><strong>${option.label}</strong><small>${option.description}</small></button>`).join("")}</div>
  `;
  cadCommandPalette.hidden = false;
  cadCommandPalette.querySelector(".cad-palette-header button").addEventListener("click", () => {
    cadCommandPalette.hidden = true;
  });
  return cadCommandPalette.querySelectorAll("[data-option]");
}

function openProjectFromAssembly(projectName) {
  const project = portfolio.projects.find((item) => item.name === projectName);
  if (!project) return;
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.section === "projects"));
  renderProjects();
  document.getElementById("work").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => showProjectModal(project), 350);
}

function updateAssemblyPanel() {
  const selectedSkills = [...assembledSkillIndices].map((index) => portfolio.skills[index]);
  if (!selectedSkills.length) {
    skillDetailPanel.innerHTML = `
      <button type="button" class="skill-detail-close" aria-label="Close assembly mode">&times;</button>
      <p class="skill-detail-category">ASSEMBLE / MULTI-SELECT</p>
      <h3>Build a skill stack</h3>
      <p>Select two or more IC packages to find projects where those capabilities were integrated.</p>
    `;
  } else {
    const commonProjects = selectedSkills.length > 1
      ? selectedSkills
        .map((skill) => skill.projects)
        .reduce((common, projects) => common.filter((project) => projects.includes(project)))
      : [];
    const assemblyMessage = selectedSkills.length === 1
      ? "Select at least one more component"
      : commonProjects.length
        ? "Integrated together in"
        : "No single project currently uses every selected component";
    skillDetailPanel.innerHTML = `
      <button type="button" class="skill-detail-close" aria-label="Close assembly mode">&times;</button>
      <p class="skill-detail-category">ASSEMBLED STACK</p>
      <h3>${selectedSkills.length} components selected</h3>
      <div class="assembled-skill-list">${selectedSkills.map((skill) => `<span>${skill.name}</span>`).join("")}</div>
      <p class="skill-detail-kicker skill-projects-label">${assemblyMessage}</p>
      ${commonProjects.length ? `<div class="skill-project-links">${commonProjects.map((project) => `<button type="button" data-assembly-project="${project}">${project}<span aria-hidden="true">&nearr;</span></button>`).join("")}</div>` : ""}
    `;
  }
  skillDetailPanel.classList.add("is-visible");
  skillDetailPanel.querySelector(".skill-detail-close").addEventListener("click", () => {
    clearSkillSelection();
    setCadMode("inspect");
  });
  skillDetailPanel.querySelectorAll("[data-assembly-project]").forEach((button) => {
    button.addEventListener("click", () => openProjectFromAssembly(button.dataset.assemblyProject));
  });
}

cadCommandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.dataset.cadCommand;
    if (command === "create") {
      setCadMode("create", "CREATE PROFILE");
      const options = [
        { value: "all", label: "Full assembly", description: "Load every skill component" },
        { value: "automation", label: "Automation", description: "Controls, firmware and implementation" },
        { value: "robotics", label: "Robotics", description: "Mechanics, perception and embedded control" },
        { value: "fdm", label: "FDM", description: "CAD, printing and motion firmware" }
      ];
      openCadPalette("CREATE / ROLE CONFIGURATION", options).forEach((optionButton) => {
        optionButton.addEventListener("click", () => {
          const profile = optionButton.dataset.option;
          const includedSkills = skillProfiles[profile];
          applySkillFilter((skill) => !includedSkills || includedSkills.includes(skill.name), `PROFILE: ${profile.toUpperCase()}`);
          cadCommandPalette.hidden = true;
        });
      });
    } else if (command === "modify") {
      setCadMode("modify", "MODIFY FILTER");
      const options = [{ value: "all", label: "All disciplines", description: "Restore the complete board" }]
        .concat(skillCategories.map((category) => ({ value: category, label: category, description: `Show ${category.toLowerCase()} components` })));
      openCadPalette("MODIFY / DISCIPLINE FILTER", options).forEach((optionButton) => {
        optionButton.addEventListener("click", () => {
          const category = optionButton.dataset.option;
          applySkillFilter((skill) => category === "all" || skill.category === category, category === "all" ? "ALL DISCIPLINES" : category.toUpperCase());
          cadCommandPalette.hidden = true;
        });
      });
    } else if (command === "assemble") {
      cadCommandPalette.hidden = true;
      clearSkillSelection();
      setCadMode("assemble");
      updateAssemblyPanel();
    } else {
      cadCommandPalette.hidden = true;
      clearSkillSelection();
      setCadMode("inspect");
    }
  });
});

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

skillsWorkspace.addEventListener("click", (event) => {
  const bubble = event.target.closest(".skill-bubble");
  if (!bubble) return;
  const skillIndex = Number(bubble.dataset.skillIndex);
  if (skillInteractionMode === "assemble") {
    if (assembledSkillIndices.has(skillIndex)) assembledSkillIndices.delete(skillIndex);
    else assembledSkillIndices.add(skillIndex);
    bubble.classList.toggle("is-assembly-selected", assembledSkillIndices.has(skillIndex));
    updateAssemblyPanel();
  } else {
    setCadMode("inspect");
    showSkillProjects(skillIndex);
  }
});

const revealSections = document.querySelectorAll(".reveal-section");
const exposureHeading = document.querySelector(".experience-hero h2[data-typewriter]");
const educationHeading = document.querySelector("#education h2[data-typewriter]");
const skillsHeading = document.querySelector("#skills h2[data-typewriter]");
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
  const exitStartLine = window.innerHeight * 0.6;
  const exitEndLine = window.innerHeight * 0.18;
  const enterProgress = clamp((startLine - rect.top) / (startLine - endLine), 0, 1);
  const exitProgress = clamp((rect.bottom - exitEndLine) / (exitStartLine - exitEndLine), 0, 1);
  const progress = Math.min(enterProgress, exitProgress);
  const visibleCharacters = Math.round(progress * fullText.length);

  exposureHeading.textContent = fullText.slice(0, visibleCharacters);
  exposureHeading.style.setProperty("--type-progress", progress.toFixed(3));
}

function updateEducationTypewriter() {
  if (!educationHeading) return;

  const fullText = educationHeading.dataset.typewriter;
  const rect = educationHeading.closest(".education-section").getBoundingClientRect();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    educationHeading.textContent = fullText;
    educationHeading.style.setProperty("--type-progress", "1");
    return;
  }

  const enterProgress = clamp((window.innerHeight * 0.9 - rect.top) / (window.innerHeight * 0.34), 0, 1);
  const exitProgress = clamp((rect.bottom - window.innerHeight * 0.12) / (window.innerHeight * 0.3), 0, 1);
  const progress = Math.min(enterProgress, exitProgress);
  educationHeading.textContent = fullText.slice(0, Math.round(progress * fullText.length));
  educationHeading.style.setProperty("--type-progress", progress.toFixed(3));
}

function updateSkillsTypewriter() {
  if (!skillsHeading) return;

  const fullText = skillsHeading.dataset.typewriter;
  const rect = skillsHeading.closest("#skills").getBoundingClientRect();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    skillsHeading.textContent = fullText;
    skillsHeading.style.setProperty("--type-progress", "1");
    return;
  }

  const enterProgress = clamp((window.innerHeight * 0.9 - rect.top) / (window.innerHeight * 0.34), 0, 1);
  const exitProgress = clamp((rect.bottom - window.innerHeight * 0.12) / (window.innerHeight * 0.3), 0, 1);
  const progress = Math.min(enterProgress, exitProgress);
  skillsHeading.textContent = fullText.slice(0, Math.round(progress * fullText.length));
  skillsHeading.style.setProperty("--type-progress", progress.toFixed(3));
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
  updateEducationTypewriter();
  updateSkillsTypewriter();
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

const navigationLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const navigationSections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const navigationObserver = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visibleEntry) return;

    navigationLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visibleEntry.target.id}`);
    });
  }, { rootMargin: "-28% 0px -58%", threshold: [0, 0.1, 0.25, 0.5] });

  navigationSections.forEach((section) => navigationObserver.observe(section));
}

const contentArea = document.getElementById("content-area");
const tabs = document.querySelectorAll(".tab");

function initialiseCurriculumTape(section) {
  const viewport = section.querySelector(".curriculum-banner-list");
  const track = section.querySelector(".curriculum-track");
  const firstSet = section.querySelector(".curriculum-set");
  if (!viewport || !track || !firstSet || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let offset = 0;
  let previousTime = performance.now();
  let isHovered = false;
  let isDragging = false;
  let dragStartX = 0;
  let lastDragX = 0;
  let dragDistance = 0;
  const speed = 34;

  function wrapOffset() {
    const setWidth = firstSet.offsetWidth;
    if (!setWidth) return;
    while (offset <= -setWidth) offset += setWidth;
    while (offset > 0) offset -= setWidth;
  }

  function animateTape(time) {
    if (!track.isConnected) return;
    const elapsed = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;

    if (!isHovered && !isDragging) {
      offset -= speed * elapsed;
      wrapOffset();
    }

    track.style.transform = `translate3d(${offset}px, 0, 0)`;
    window.requestAnimationFrame(animateTape);
  }

  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    isDragging = true;
    dragStartX = event.clientX;
    lastDragX = event.clientX;
    dragDistance = 0;
    viewport.classList.add("is-dragging");
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const movement = event.clientX - lastDragX;
    dragDistance = Math.max(dragDistance, Math.abs(event.clientX - dragStartX));

    if (dragDistance > 5 && !viewport.hasPointerCapture(event.pointerId)) {
      viewport.setPointerCapture(event.pointerId);
    }

    offset += movement;
    lastDragX = event.clientX;
    wrapOffset();
  });

  function finishTapeDrag(event) {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove("is-dragging");
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  }

  viewport.addEventListener("pointerup", finishTapeDrag);
  viewport.addEventListener("pointercancel", finishTapeDrag);
  window.addEventListener("pointerup", finishTapeDrag);
  viewport.addEventListener("mouseenter", () => { isHovered = true; });
  viewport.addEventListener("mouseleave", () => { isHovered = false; });
  viewport.addEventListener("focusin", () => { isHovered = true; });
  viewport.addEventListener("focusout", () => { isHovered = false; });
  viewport.addEventListener("click", (event) => {
    if (dragDistance > 5) {
      event.preventDefault();
      event.stopPropagation();
      dragDistance = 0;
    }
  }, true);

  window.requestAnimationFrame(animateTape);
}

function renderExperience() {
  contentArea.innerHTML = '<div class="content-list experience-list"><div class="experience-signal-bus" aria-hidden="true"><i></i></div></div>';
  const list = contentArea.querySelector(".content-list");

  [...portfolio.experience]
    .sort((a, b) => String(b.start).localeCompare(String(a.start)))
    .forEach((item, index) => {
    const bullets = item.responsibilities.map((point) => `<li>${point}</li>`).join("");

    const card = document.createElement("article");
    card.className = "card showcase-card experience-card";
    card.innerHTML = `
      <div class="experience-connector" aria-hidden="true"><span>${index === 0 ? "CTRL" : "ACT"}_${String(index + 1).padStart(2, "0")}</span><i></i></div>
      <span class="showcase-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.company}</h3>
      ${item.role ? `<p class="experience-role">${item.role}</p>` : ""}
      <p class="meta">${item.period}</p>
      <ul>${bullets}</ul>
      ${item.outcomes?.length ? `
        <div class="experience-outcomes">
          <span>Selected outcomes</span>
          <ul>${item.outcomes.map((outcome) => `<li>${outcome}</li>`).join("")}</ul>
        </div>
      ` : ""}
      ${item.tools?.length ? `<div class="experience-tools">${item.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>` : ""}
    `;
    list.appendChild(card);
  });

  const curriculumBanners = portfolio.internationalCurriculum.map((item, index) => `
    <article class="curriculum-banner curriculum-banner-${index + 1}">
      <div class="curriculum-code">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${item.code}</strong>
      </div>
      <div class="curriculum-main">
        <p class="curriculum-location">${item.location}</p>
        <h4>${item.institution}</h4>
        <p>${item.focus}</p>
      </div>
      <p class="curriculum-period">${item.period}</p>
      <div class="curriculum-photos">
        ${item.photos.map((photo, photoIndex) => `
          <button type="button" class="curriculum-photo" data-curriculum-index="${index}" data-photo-index="${photoIndex}" aria-label="View photo: ${photo.caption}">
            <img src="${photo.image}" alt="${photo.caption}" loading="lazy" />
            <span>${String(photoIndex + 1).padStart(2, "0")}</span>
          </button>
        `).join("")}
      </div>
      ${item.completed.length ? `
        <div class="curriculum-courses">
          <span>Completed</span>
          <ul>${item.completed.map((course) => `<li>${course}</li>`).join("")}</ul>
        </div>
      ` : ""}
    </article>
  `).join("");

  const curriculumSection = document.createElement("section");
  curriculumSection.className = "international-curriculum";
  curriculumSection.innerHTML = `
    <div class="curriculum-heading">
      <p class="eyebrow">International Curriculum</p>
      <div class="curriculum-heading-copy">
        <h3>Engineering beyond borders.</h3>
        <p>Hover over the panels to pause the rolling tape.</p>
      </div>
    </div>
    <div class="curriculum-banner-list">
      <div class="curriculum-track">
        <div class="curriculum-set">${curriculumBanners}</div>
        <div class="curriculum-set" aria-hidden="true" inert>${curriculumBanners}</div>
      </div>
    </div>
  `;
  contentArea.appendChild(curriculumSection);
  initialiseCurriculumTape(curriculumSection);

  curriculumSection.querySelectorAll(".curriculum-photo").forEach((photoButton) => {
    photoButton.addEventListener("click", () => {
      const curriculum = portfolio.internationalCurriculum[Number(photoButton.dataset.curriculumIndex)];
      const photo = curriculum.photos[Number(photoButton.dataset.photoIndex)];
      showImageViewer(photo.image, `${curriculum.location} — ${photo.caption}`);
    });
  });
}

function renderProjects() {
  contentArea.innerHTML = '<div class="content-list projects-list"></div>';
  const list = contentArea.querySelector(".content-list");

  portfolio.projects.forEach((project) => {
    const mainImage = project.images[0];
    const projectSkills = project.skillTags || [...new Set(Object.values(project.technologies || {}).flat())].slice(0, 8);
    const projectHighlights = project.highlights || [];
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

      ${projectHighlights.length ? `
        <div class="project-highlight-strip" aria-label="Selected project results">
          ${projectHighlights.map((result) => `<span><strong>${result.value}</strong><small>${result.label}</small></span>`).join("")}
        </div>
      ` : ""}

      <div class="featured-image-container" tabindex="0" role="button" data-project-id="${project.id}" aria-label="View ${project.name} project details">
        <img src="${mainImage}" alt="${project.name} - Main Model" class="featured-image" />
        <div class="project-skill-tank" aria-hidden="true">
          <div class="project-skill-tank-header"><span>SKILL BUS</span><small>${projectSkills.length} ACTIVE</small></div>
          <div class="project-skill-cloud">
            ${projectSkills.map((skill, index) => `<span style="--skill-x:${12 + (index % 3) * 36}%;--skill-y:${20 + Math.floor(index / 3) * 30}%;--skill-delay:${index * 0.08}s">${skill}</span>`).join("")}
          </div>
        </div>
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

  document.querySelectorAll(".featured-image-container[data-project-id]").forEach((container) => {
    const openProject = () => {
      const projectId = container.dataset.projectId;
      const project = portfolio.projects.find((p) => p.id === projectId);
      if (project) {
        showProjectModal(project);
      }
    };

    container.addEventListener("click", openProject);
    container.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject();
      }
    });
  });
}

function renderEvidenceList(title, items, className = "") {
  if (!items?.length) return "";
  return `
    <section class="case-study-block ${className}">
      <p class="case-study-label">${title}</p>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
}

function renderProjectEvidence(project) {
  const study = project.caseStudy;
  if (!study) return "";

  const resultsHTML = study.results?.length
    ? `
      <section class="case-study-block case-study-results">
        <p class="case-study-label">Results & evidence</p>
        <div class="result-grid">
          ${study.results.map((result) => typeof result === "string"
            ? `<div class="result-card"><p>${result}</p></div>`
            : `<div class="result-card"><strong>${result.value}</strong><p>${result.label}</p></div>`
          ).join("")}
        </div>
      </section>
    `
    : "";

  const resultImagesHTML = study.resultImages?.length
    ? `
      <section class="case-study-block case-study-result-images">
        <p class="case-study-label">Measurement evidence</p>
        <div class="result-image-grid">
          ${study.resultImages.map((result) => `
            <figure class="result-figure">
              <a href="${result.image}" target="_blank" rel="noopener noreferrer" aria-label="Open ${result.title} at full size">
                <img src="${result.image}" alt="${result.title}" />
              </a>
              <figcaption>
                <strong>${result.title}</strong>
                <span>${result.caption}</span>
              </figcaption>
            </figure>
          `).join("")}
        </div>
      </section>
    `
    : "";

  const factsHTML = study.facts?.length
    ? `
      <div class="case-study-facts">
        ${study.facts.map((fact) => `
          <div><strong>${fact.value}</strong><span>${fact.label}</span></div>
        `).join("")}
      </div>
    `
    : "";

  const content = [
    renderEvidenceList("My role", study.role),
    renderEvidenceList("Constraints & requirements", study.constraints),
    renderEvidenceList("Engineering decisions & trade-offs", study.decisions),
    renderEvidenceList("Testing & validation", study.testing),
    resultsHTML,
    resultImagesHTML,
    renderEvidenceList("Final outcome", study.outcome),
    renderEvidenceList("Biggest failure & iteration", study.iterations),
    renderEvidenceList("What I learned", study.learnings)
  ].join("");

  return content || factsHTML
    ? `<div class="case-study-section"><h3>Engineering Case Study</h3>${factsHTML}<div class="case-study-grid">${content}</div></div>`
    : "";
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
    const firmware = (project.technologies.firmware || [])
      .map((item) => `<span class="tech-tag">${item}</span>`)
      .join("");

    const languageCategory = languages ? `
      <div class="tech-category">
        <h4>Languages</h4>
        <div class="tech-tags">${languages}</div>
      </div>
    ` : "";
    const softwareCategory = software ? `
      <div class="tech-category">
        <h4>Software & Tools</h4>
        <div class="tech-tags">${software}</div>
      </div>
    ` : "";
    const firmwareCategory = firmware ? `
      <div class="tech-category">
        <h4>Firmware & Hardware</h4>
        <div class="tech-tags">${firmware}</div>
      </div>
    ` : "";

    technologiesHTML = `
      <div class="technologies-section">
        <h3>Technologies Used</h3>
        ${languageCategory}
        ${softwareCategory}
        ${firmwareCategory}
      </div>
    `;
  }

  const projectLinks = [
    project.links?.demo ? `<a class="project-resource-link" href="${project.links.demo}" target="_blank" rel="noopener noreferrer">Watch demo <span aria-hidden="true">&nearr;</span></a>` : "",
    project.links?.repository ? `<a class="project-resource-link" href="${project.links.repository}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">&nearr;</span></a>` : ""
  ].filter(Boolean).join("");
  const projectLinksHTML = projectLinks ? `<div class="project-resource-links">${projectLinks}</div>` : "";
  const projectEvidenceHTML = renderProjectEvidence(project);

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
      ${projectLinksHTML}
      ${projectEvidenceHTML}
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
