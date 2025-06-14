import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav role="tablist" aria-label="Main navigation">
      <button role="tab" aria-selected="true" tabindex="0" data-target="about" class="nav-link active">About Me</button>
      <button role="tab" aria-selected="false" tabindex="-1" data-target="projects" class="nav-link">My Projects</button>
      <button role="tab" aria-selected="false" tabindex="-1" data-target="skills_contact" class="nav-link">Skills & Contact Info</button>
      <button role="tab" id="downloadCV" aria-selected="false" tabindex="-1" class="nav-link">Download CV</button>
    </nav>
    <div>
      <button class="btn-toggle" id="darkModeToggle">
        <span class="label">Dark Mode</span>
      </button>
    </div>
  </header>

  <main>
    <section>
      <h1>Maxwell Robertson's Portfolio</h1>
    </section>
    <section id="about">
      <h2>About Me</h2>
      <p>Hello! I’m Max, a passionate web developer with skills in React, JavaScript, and more. I love building clean, performant websites and apps. 
      
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
    </section>

    <section id="projects" class="projects">
      <h2>My Projects</h2>
      <ul class="outer_ul">
        <li id="full_width">
          <strong>Heatstroke Engine</strong>
          <iframe src="/Heatstroke/Heatstroke_Video_Portfolio.mp4" title="proj_1"></iframe>
          <div class="collapsible collapsed">
            <p>
              The Heatstroke Engine was a group project developed during my Master's program. We built a fully featured game engine from the ground up, including:
            </p>
            <ul class="inner_ul">
              <li>3D renderer using the Vulkan API</li>
              <li>UI for game control through ImGui</li>
              <li>Entity Component System (ECS) for scalable entity management</li>
              <li>Networking system using Yojimbo</li>
              <li>Input support for keyboard, mouse and controllers</li>
              <li>Physics simulation utilising PhysX</li>
              <li>Audio and Threading systems</li>
            </ul>
            <p>
              We followed agile development practices, using Gantt charts and Kanban boards to manage progress over several months.
              I was solely responsible for the real-time networking component, which I tightly integrated with both the ECS and physics systems.
              This enabled multiplayer support for a first-person shooter prototype, which we showcased at the 2025 Game Republic Student Showcase.
            </p>
            <div class="fade"></div>
          </div>
          <button class="show_btn">Show More</button>
        </li>
        <li>
          <strong>Shadow Mapping</strong>
          <div class="image-container">
            <img id="shadowMappingImg" src="/Shadow_Mapping/shadow_mapping_1" alt="Shadow Mapping" />
            <div id="shadowMappingCaption" class="image-caption">Shadow Mapping</div>
          </div>
          <div class="collapsible collapsed">
            <p>
              I researched and implemented various shadow mapping techniques to create realistic shadows in 3D graphics.
              The project covered common issues like shadow acne and aliasing, and improvements using methods like Percentage-Closer Filtering, Variance Shadow Maps, and Exponential Shadow Maps.
              I developed a 3D scene with shaders, tested different algorithms, and benchmarked performance, resulting in enhanced shadow quality and insights into their trade-offs.
            </p>
          </div>
          <button class="show_btn">Show More</button>
        </li>
        <li>
          <strong>Recursive NEE Raytracer</strong>
          <iframe src="https://yourproject1.example.com" title="proj_3"></iframe>
        </li>
        <li>
          <strong>Mesh Processing and Repair Pipeline</strong>
          <iframe src="https://yourproject1.example.com" title="proj_4"></iframe>
        </li>
        <li>
          <strong>Bézier Surface Rendering</strong>
          <iframe src="https://yourproject1.example.com" title="proj_5"></iframe>
        </li>
        <li>
          <strong>Sports Centre Management System</strong>
          <iframe src="https://yourproject1.example.com" title="proj_6"></iframe>
        </li>
        <li>
          <strong>Rocket demo</strong>
          <iframe src="https://yourproject1.example.com" title="proj_7"></iframe>
        </li>
        <li>
          <strong>2D Renderer</strong>
          <iframe src="https://yourproject1.example.com" title="proj_8"></iframe>
        </li>
      </ul>
    </section>

    <section id="skills_contact">
      <h2>Skills & Contact Info</h2>
      <ul class="skills">
        <li>React</li>
        <li>JavaScript</li>
        <li>Vite</li>
        <li>CSS3</li>
        <li>HTML5</li>
        <li>Git & GitHub</li>
      </ul>
      <p>Email: maxwgrobertson@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/maxwell-wg-robertson/" target="_blank" class="contact-link">linkedin.com/in/maxwell-wg-robertson/</a></p>
      <p>GitHub: <a href="https://github.com/maxwellROBERTSON" target="_blank" class="contact-link">github.com/maxwellROBERTSON</a></p>
    </section>
  </main>
`;

// Navigation
const navButtons = document.querySelectorAll('nav button[role="tab"]');
const sections = document.querySelectorAll('main section');

function setActiveTab(button) {
  navButtons.forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
    btn.setAttribute('tabindex', '-1');
  });
  button.classList.add('active');
  button.setAttribute('aria-selected', 'true');
  button.setAttribute('tabindex', '0');
  button.focus();
}

function highlightSection(section) {
  sections.forEach(sec => {
    sec.classList.remove('visible');
    const h2 = sec.querySelector('h2');
    if (h2) h2.classList.remove('highlighted');
  });

  section.classList.add('visible');
  const heading = section.querySelector('h2');
  if (heading) heading.classList.add('highlighted');

  const id = section.id;
  const button = document.querySelector(`nav button[data-target="${id}"]`);
  if (button) setActiveTab(button);
}

const headerHeight = document.querySelector('header').offsetHeight;
const offset = headerHeight + 10;

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      setActiveTab(button);
    }
  });
});

function updateActiveSection() {
  const viewportTop = offset;
  const viewportBottom = window.innerHeight;

  let candidateSection = null;

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const heading = section.querySelector('h2');
    if (!heading) continue;

    const rect = heading.getBoundingClientRect();
    const topOffset = rect.top;

    const anyPartVisible = rect.bottom > viewportTop && rect.top < viewportBottom;

    if (anyPartVisible) {
      highlightSection(section);
      return;
    }

    if (topOffset < viewportTop) {
      candidateSection = section;
    }
  }

  if (candidateSection) {
    highlightSection(candidateSection);
  } else if (sections.length > 0) {
    highlightSection(sections[0]);
  }
}


window.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection);

// Download CV functionality
const downloadCV = document.getElementById('downloadCV');
document.getElementById('downloadCV').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = '/Maxwell_Robertson_CV.pdf';
   link.download = 'Maxwell_Robertson_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const label = darkModeToggle.querySelector('.label');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  label.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Show more buttons
const showBtns = document.querySelectorAll(".show_btn");

showBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const listItem = btn.closest("li");
    if (!listItem) return;

    const collapsible = listItem.querySelector(".collapsible");
    if (!collapsible) return;

    // Close all other expanded sections
    document.querySelectorAll(".collapsible.expanded").forEach(other => {
      if (other !== collapsible) {
        other.style.height = other.scrollHeight + "px";
        other.offsetHeight; // force reflow
        other.style.transition = "height 1.0s ease";
        other.style.height = "6rem";

        other.addEventListener("transitionend", function handler() {
          other.classList.remove("expanded");
          other.style.height = "";
          other.style.transition = "";
          other.removeEventListener("transitionend", handler);
        });

        const otherBtn = other.closest("li").querySelector(".show_btn");
        if (otherBtn) otherBtn.textContent = "Show More";
      }
    });

    // Then toggle the clicked one
    if (collapsible.classList.contains("expanded")) {
      // Collapse this one
      const currentHeight = collapsible.scrollHeight;
      collapsible.style.height = currentHeight + "px";
      collapsible.offsetHeight;
      collapsible.style.transition = "height 1.0s ease";
      collapsible.style.height = "6rem";

      collapsible.addEventListener("transitionend", function handler() {
        collapsible.classList.remove("expanded");
        collapsible.style.height = "";
        collapsible.style.transition = "";
        collapsible.removeEventListener("transitionend", handler);
      });

      btn.textContent = "Show More";
    } else {
      // Expand this one
      collapsible.classList.add("expanded");
      const targetHeight = collapsible.scrollHeight;
      collapsible.style.height = "6rem";
      collapsible.offsetHeight;
      collapsible.style.transition = "height 1.0s ease";
      collapsible.style.height = targetHeight + "px";

      collapsible.addEventListener("transitionend", function handler() {
        collapsible.style.height = "auto";
        collapsible.style.transition = "";
        collapsible.removeEventListener("transitionend", handler);
      });

      btn.textContent = "Show Less";
    }
  });
});

// Shadow Mapping images
const imageFilenames = [
  "1Shadow Mapping.png",
  "2PCF 3x3.png",
  "3PCF 9x9.png",
  "4VSM 3x3.png",
  "5VSM 9x9.png",
  "6ESM 3x3.png",
  "7ESM 9x9.png",
  "8Shadow Mapping.png",
  "9PCF 3x3.png",
  "10PCF 9x9.png",
  "11VSM 3x3.png",
  "12VSM 9x9.png",
  "13ESM 3x3.png",
  "14ESM 9x9.png",
  "15Shadow Mapping.png",
  "16PCF 3x3.png",
  "17PCF 9x9.png",
  "18VSM 3x3.png",
  "19VSM 9x9.png",
  "20ESM 3x3.png",
  "21ESM 9x9.png"
];

imageFilenames.sort((a, b) => {
  const numA = parseInt(a.match(/^\d+/)[0], 10);
  const numB = parseInt(b.match(/^\d+/)[0], 10);
  return numA - numB;
});

const imageElement = document.getElementById("shadowMappingImg");
const imageTitle = document.getElementById("shadowMappingCaption");
const imageFolder = "/Shadow_Mapping/";

let index = 0;

setInterval(() => {
  imageElement.src = imageFolder + imageFilenames[index];

  const fullTitle = imageFilenames[index];
  const cleanTitle = fullTitle.replace(/^\d+\s*/, "").replace(/\.png$/i, "");
  imageTitle.textContent = cleanTitle;
  
  index = (index + 1) % imageFilenames.length;
}, 1000);
