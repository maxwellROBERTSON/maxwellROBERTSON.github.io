(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))x(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&x(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function x(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();document.querySelector("#app").innerHTML=`
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
`;const d=document.querySelectorAll('nav button[role="tab"]'),a=document.querySelectorAll("main section");function p(t){d.forEach(i=>{i.classList.remove("active"),i.setAttribute("aria-selected","false"),i.setAttribute("tabindex","-1")}),t.classList.add("active"),t.setAttribute("aria-selected","true"),t.setAttribute("tabindex","0"),t.focus()}function c(t){a.forEach(n=>{n.classList.remove("visible");const o=n.querySelector("h2");o&&o.classList.remove("highlighted")}),t.classList.add("visible");const i=t.querySelector("h2");i&&i.classList.add("highlighted");const e=t.id,x=document.querySelector(`nav button[data-target="${e}"]`);x&&p(x)}const f=document.querySelector("header").offsetHeight,g=f+10;d.forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-target"),e=document.getElementById(i);if(e){const x=e.getBoundingClientRect().top+window.scrollY-g;window.scrollTo({top:x,behavior:"smooth"}),p(t)}})});function h(){const t=g,i=window.innerHeight;let e=null;for(let x=0;x<a.length;x++){const n=a[x],o=n.querySelector("h2");if(!o)continue;const s=o.getBoundingClientRect(),m=s.top;if(s.bottom>t&&s.top<i){c(n);return}m<t&&(e=n)}e?c(e):a.length>0&&c(a[0])}window.addEventListener("scroll",h);window.addEventListener("load",h);document.getElementById("downloadCV");document.getElementById("downloadCV").addEventListener("click",()=>{const t=document.createElement("a");t.href="/Maxwell_Robertson_CV.pdf",t.download="Maxwell_Robertson_CV.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t)});const u=document.getElementById("darkModeToggle"),b=u.querySelector(".label");u.addEventListener("click",()=>{document.body.classList.toggle("dark"),b.textContent=document.body.classList.contains("dark")?"Light Mode":"Dark Mode"});const y=document.querySelectorAll(".show_btn");y.forEach(t=>{t.addEventListener("click",()=>{const i=t.closest("li");if(!i)return;const e=i.querySelector(".collapsible");if(e)if(document.querySelectorAll(".collapsible.expanded").forEach(x=>{if(x!==e){x.style.height=x.scrollHeight+"px",x.offsetHeight,x.style.transition="height 1.0s ease",x.style.height="6rem",x.addEventListener("transitionend",function o(){x.classList.remove("expanded"),x.style.height="",x.style.transition="",x.removeEventListener("transitionend",o)});const n=x.closest("li").querySelector(".show_btn");n&&(n.textContent="Show More")}}),e.classList.contains("expanded")){const x=e.scrollHeight;e.style.height=x+"px",e.offsetHeight,e.style.transition="height 1.0s ease",e.style.height="6rem",e.addEventListener("transitionend",function n(){e.classList.remove("expanded"),e.style.height="",e.style.transition="",e.removeEventListener("transitionend",n)}),t.textContent="Show More"}else{e.classList.add("expanded");const x=e.scrollHeight;e.style.height="6rem",e.offsetHeight,e.style.transition="height 1.0s ease",e.style.height=x+"px",e.addEventListener("transitionend",function n(){e.style.height="auto",e.style.transition="",e.removeEventListener("transitionend",n)}),t.textContent="Show Less"}})});const r=["1Shadow Mapping.png","2PCF 3x3.png","3PCF 9x9.png","4VSM 3x3.png","5VSM 9x9.png","6ESM 3x3.png","7ESM 9x9.png","8Shadow Mapping.png","9PCF 3x3.png","10PCF 9x9.png","11VSM 3x3.png","12VSM 9x9.png","13ESM 3x3.png","14ESM 9x9.png","15Shadow Mapping.png","16PCF 3x3.png","17PCF 9x9.png","18VSM 3x3.png","19VSM 9x9.png","20ESM 3x3.png","21ESM 9x9.png"];r.sort((t,i)=>{const e=parseInt(t.match(/^\d+/)[0],10),x=parseInt(i.match(/^\d+/)[0],10);return e-x});const w=document.getElementById("shadowMappingImg"),v=document.getElementById("shadowMappingCaption"),S="/Shadow_Mapping/";let l=0;setInterval(()=>{w.src=S+r[l];const i=r[l].replace(/^\d+\s*/,"").replace(/\.png$/i,"");v.textContent=i,l=(l+1)%r.length},1e3);
