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
      <h1>Portfolio for Maxwell Robertson</h1>
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
      <ul>
        <li>
          <strong>Project One:</strong> <a href="https://yourproject1.example.com" target="_blank" class="project-link">Live Demo</a>
          <iframe src="https://yourproject1.example.com" title="Project One Demo"></iframe>
        </li>
        <li>
          <strong>Project Two:</strong> <a href="https://yourproject2.example.com" target="_blank" class="project-link">Live Demo</a>
          <iframe src="https://yourproject2.example.com" title="Project Two Demo"></iframe>
        </li>
        <li>
          <strong>Project Three:</strong> <a href="https://yourproject3.example.com" target="_blank" class="project-link">Live Demo</a>
          <iframe src="https://yourproject3.example.com" title="Project Three Demo"></iframe>
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
const h1Height = document.querySelector('h1').offsetHeight;
const h2Height = document.querySelector('h2').offsetHeight;
const offset = headerHeight + h1Height - 2 * h2Height + 10;

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

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const heading = section.querySelector('h2');
    if (!heading) continue;

    const rect = heading.getBoundingClientRect();

    const anyPartVisible = rect.bottom > viewportTop && rect.top < viewportBottom;

    if (anyPartVisible) {
      highlightSection(section);
      return;
    }
  }

  if (sections.length > 0) {
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