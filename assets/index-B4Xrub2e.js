(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function l(i){let o=0;const n=r=>{o=r,i.innerHTML=`count is ${o}`};i.addEventListener("click",()=>n(o+1)),n(0)}document.querySelector("#app").innerHTML=`
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0; padding: 0;
      transition: background-color 0.3s, color 0.3s;
      background-color: #f9f9f9;
      color: #222;
    }
    body.dark {
      background-color: #121212;
      color: #eee;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      background: #282c34;
      color: white;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    nav a {
      color: white;
      text-decoration: none;
      margin-right: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }
    nav a:hover {
      text-decoration: underline;
    }
    .btn-cv, .btn-toggle {
      background: #61dafb;
      color: #282c34;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 1rem;
      text-decoration: none;
    }
    main {
      padding: 2rem;
      max-width: 900px;
      margin: auto;
    }
    section {
      margin-bottom: 4rem;
    }
    h2 {
      border-bottom: 2px solid #61dafb;
      padding-bottom: 0.25rem;
    }
    ul.skills {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    ul.skills li {
      background: #61dafb;
      color: #282c34;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: bold;
    }
    .projects iframe {
      width: 100%;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-top: 1rem;
    }
    a.project-link {
      color: #61dafb;
      font-weight: bold;
      text-decoration: none;
    }
    a.project-link:hover {
      text-decoration: underline;
    }
  </style>

  <header>
    <nav>
      <a href="#about" class="nav-link">About Me</a>
      <a href="#projects" class="nav-link">My Projects</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="#contact" class="nav-link">Contact Info</a>
    </nav>
    <div>
      <a href="/path/to/your-cv.pdf" download class="btn-cv">Download CV</a>
      <button class="btn-toggle" id="darkModeToggle">Toggle Dark Mode</button>
    </div>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>Hello! I’m Max, a passionate web developer with skills in React, JavaScript, and more. I love building clean, performant websites and apps.</p>
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

    <section id="skills">
      <h2>Skills & Technologies</h2>
      <ul class="skills">
        <li>React</li>
        <li>JavaScript</li>
        <li>Vite</li>
        <li>CSS3</li>
        <li>HTML5</li>
        <li>Git & GitHub</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact Info</h2>
      <p>Email: max@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/maxwell" target="_blank" style="color:#61dafb;">linkedin.com/in/maxwell</a></p>
      <p>GitHub: <a href="https://github.com/maxwellROBERTSON" target="_blank" style="color:#61dafb;">github.com/maxwellROBERTSON</a></p>
    </section>
  </main>
`;const c=document.getElementById("darkModeToggle");c.addEventListener("click",()=>{document.body.classList.toggle("dark")});document.querySelectorAll("a.nav-link").forEach(i=>{i.addEventListener("click",o=>{o.preventDefault();const n=i.getAttribute("href").substring(1),r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth"})})});l(document.querySelector("#counter"));
