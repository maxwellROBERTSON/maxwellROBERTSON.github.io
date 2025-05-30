(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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
`;const s=document.querySelectorAll('nav button[role="tab"]'),a=document.querySelectorAll("main section");function c(x){s.forEach(o=>{o.classList.remove("active"),o.setAttribute("aria-selected","false"),o.setAttribute("tabindex","-1")}),x.classList.add("active"),x.setAttribute("aria-selected","true"),x.setAttribute("tabindex","0"),x.focus()}function l(x){a.forEach(e=>{e.classList.remove("visible");const t=e.querySelector("h2");t&&t.classList.remove("highlighted")}),x.classList.add("visible");const o=x.querySelector("h2");o&&o.classList.add("highlighted");const i=x.id,n=document.querySelector(`nav button[data-target="${i}"]`);n&&c(n)}const h=document.querySelector("header").offsetHeight,g=document.querySelector("h1").offsetHeight,f=document.querySelector("h2").offsetHeight,d=h+g-2*f+10;s.forEach(x=>{x.addEventListener("click",()=>{const o=x.getAttribute("data-target"),i=document.getElementById(o);if(i){const n=i.getBoundingClientRect().top+window.scrollY-d;window.scrollTo({top:n,behavior:"smooth"}),c(x)}})});function u(){const x=d,o=window.innerHeight;for(let i=0;i<a.length;i++){const n=a[i],e=n.querySelector("h2");if(!e)continue;const t=e.getBoundingClientRect();if(t.bottom>x&&t.top<o){l(n);return}}a.length>0&&l(a[0])}window.addEventListener("scroll",u);window.addEventListener("load",u);document.getElementById("downloadCV");document.getElementById("downloadCV").addEventListener("click",()=>{const x=document.createElement("a");x.href="/Maxwell_Robertson_CV.pdf",x.download="Maxwell_Robertson_CV.pdf",document.body.appendChild(x),x.click(),document.body.removeChild(x)});const m=document.getElementById("darkModeToggle"),p=m.querySelector(".label");m.addEventListener("click",()=>{document.body.classList.toggle("dark"),p.textContent=document.body.classList.contains("dark")?"Light Mode":"Dark Mode"});
