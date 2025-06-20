(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();document.querySelector("#app").innerHTML=`
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
      <p>
      Motivated Computer Science undergraduate specialising in high-performance graphics and games
      engineering. Experienced with C++, OpenGL, Visual Studio, and GitHub. Passionate about building
      creative and efficient real-time applications. Seeking opportunities to contribute technical expertise
      and a strong work ethic to the graphics or game development industry.
      </p>
    </section>

    <section id="projects" class="projects">
      <h2>My Projects</h2>
      <ul class="outer_ul">
        <li id="full_width">
          <strong>Heatstroke Engine</strong>
          <div class="media-container">
            <video class="media" muted playsinline loop autoplay controls>
              <source src="/Heatstroke/Heatstroke_Video_Portfolio.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
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
          <div class="media-container">
            <img id="shadowMappingImg" class="media" src="/Shadow_Mapping/shadow_mapping_1" alt="Shadow Mapping" />
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
        <!--
        <li>
          <strong>Recursive NEE Raytracer</strong>
          <iframe src="https://yourproject1.example.com" title="proj_3"></iframe>
        </li>
        -->
        <li>
          <strong>Mesh Processing and Repair Pipeline</strong>
          <div class="media-container">
            <video class="media" muted playsinline loop autoplay controls>
              <source src="/Mesh_Repair/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="collapsible collapsed">
            <p>
            In this project, I developed a processing pipeline for 3D meshes, converting raw triangle data into more structured formats to facilitate analysis and repair.
            I implemented tools to convert between file formats, including triangle soup (.tri), face index (.face), and directed edge (.diredge) representations.
            Using these formats, I created algorithms to test if meshes are manifold by detecting problematic edges or vertices.
            For manifold meshes, I applied the Euler formula to calculate their genus, revealing their topological properties.
            The main focus was on automatic mesh repair, where I identified holes by finding unpaired edges, traced their boundaries, and repositioned vertices to close these gaps.
            The repaired meshes became manifold and ready for further use without manual fixes.
            </p>
            <div class="fade"></div>
          </div>
          <button class="show_btn">Show More</button>
        </li>
        <li>
          <strong>Bézier Surface Rendering</strong>
          <div class="media-container">
            <img class="media" src="/Bezier_Curve/img.png" alt="Bezier Curve" />
          </div>
          <div class="collapsible collapsed">
            <p>
               I implemented a series of foundational computer graphics techniques, starting with developing a mathematics library for handling points, vectors, and matrices to perform geometric computations.
               I then developed routines to draw basic primitives such as axes and lines using parametric methods without relying on OpenGL, ensuring a deeper understanding of rendering at the pixel level.
               The project progressed to applying transformations through rotation matrices and managing different projection types, culminating in the rendering of Bezier curves and patches using the de Casteljau algorithm.
               Finally, through parallelisation and OpenMP, I maximised the performance of the CPU based rendering algorithms.
               Overall, I gained practical experience with the core concepts and algorithms that underpin computer graphics.
            </p>
          </div>
          <button class="show_btn">Show More</button>
        </li>
        <li>
         <strong>Sports Centre Management System</strong>
          <div class="media-container">
            <video id="gymVideo" class="media" muted playsinline loop autoplay controls>
              <source src="/Gym_Corp/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="collapsible collapsed">
            <p>
            GymCorp is a sports centre management system I developed with a team at University, enabling customers to register, book, and pay for facility use, while providing staff and managers with administrative access.
            We developed a full-stack client-server web application using Flask with Flask-SQLAlchemy for the backend API, React for the frontend interface, and Node.js with Yarn for dependency management and build processes.
            Throughout three development sprints, we followed a Scrum-based methodology with regular planning, stand-ups, and review meetings.
            We used GitHub extensively for version control, issue tracking, and CI/CD via GitHub Actions, and documented our process and testing strategy in the project wiki.
            </p>
            <div class="fade"></div>
          </div>
          <button class="show_btn">Show More</button>
        </li>
        <!--
        <li>
          <strong>Rocket demo</strong>
          <iframe src="https://yourproject1.example.com" title="proj_7"></iframe>
        </li>
        <li>
          <strong>2D Renderer</strong>
          <iframe src="https://yourproject1.example.com" title="proj_8"></iframe>
        </li>
        -->
      </ul>
    </section>

    <section id="skills_contact">
      <h2>Skills & Contact Info</h2>
      <ul class="skills">
        <li>C++</li>
        <li>C</li>
        <li>Vulkan</li>
        <li>OpenGL</li>
        <li>Networking</li>
        <li>Version Control - Git</li>
        <li>Frontend</li>
        <li>Backend</li>
      </ul>
      <p>Email: maxwgrobertson@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/maxwell-wg-robertson/" target="_blank" class="contact-link">linkedin.com/in/maxwell-wg-robertson/</a></p>
      <p>GitHub: <a href="https://github.com/maxwellROBERTSON" target="_blank" class="contact-link">github.com/maxwellROBERTSON</a></p>
    </section>
  </main>
`;const h=document.querySelectorAll('nav button[role="tab"]'),l=document.querySelectorAll("main section");function m(t){h.forEach(o=>{o.classList.remove("active"),o.setAttribute("aria-selected","false"),o.setAttribute("tabindex","-1")}),t.classList.add("active"),t.setAttribute("aria-selected","true"),t.setAttribute("tabindex","0"),t.focus()}function p(t){l.forEach(n=>{n.classList.remove("visible");const s=n.querySelector("h2");s&&s.classList.remove("highlighted")}),t.classList.add("visible");const o=t.querySelector("h2");o&&o.classList.add("highlighted");const e=t.id,i=document.querySelector(`nav button[data-target="${e}"]`);i&&m(i)}const y=document.querySelector("header").offsetHeight,w=y+10;function S(t,o=500){const e=window.scrollY,i=t-e,n=performance.now();function s(r){const g=r-n,u=Math.min(g/o,1),b=a(u);window.scrollTo(0,e+i*b),u<1&&requestAnimationFrame(s)}function a(r){return r<.5?2*r*r:-1+(4-2*r)*r}requestAnimationFrame(s)}h.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const e=t.getAttribute("data-target"),i=document.getElementById(e);if(i){m(t);const n=document.querySelector("header").offsetHeight,a=i.getBoundingClientRect().top+window.scrollY-n-10;S(a)}})});function f(){const t=w,o=window.innerHeight;let e=null;for(let i=0;i<l.length;i++){const n=l[i],s=n.querySelector("h2");if(!s)continue;const a=s.getBoundingClientRect(),r=a.top;if(a.bottom>t&&a.top<o){p(n);return}r<t&&(e=n)}e?p(e):l.length>0&&p(l[0])}window.addEventListener("scroll",f);window.addEventListener("load",f);document.getElementById("downloadCV");document.getElementById("downloadCV").addEventListener("click",()=>{const t=document.createElement("a");t.href="/Maxwell_Robertson_CV.pdf",t.download="Maxwell_Robertson_CV.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t)});const v=document.getElementById("darkModeToggle"),x=v.querySelector(".label");v.addEventListener("click",()=>{document.body.classList.toggle("dark"),x.textContent=document.body.classList.contains("dark")?"Light Mode":"Dark Mode"});const M=document.querySelectorAll("video");M.forEach(t=>{t.play().catch(o=>{console.warn("Video play failed:",o)})});const k=document.querySelectorAll(".show_btn");k.forEach(t=>{t.addEventListener("click",()=>{const o=t.closest("li");if(!o)return;const e=o.querySelector(".collapsible");if(e)if(document.querySelectorAll(".collapsible.expanded").forEach(i=>{if(i!==e){i.style.height=i.scrollHeight+"px",i.offsetHeight,i.style.transition="height 1.0s ease",i.style.height="6rem",i.addEventListener("transitionend",function s(){i.classList.remove("expanded"),i.style.height="",i.style.transition="",i.removeEventListener("transitionend",s)});const n=i.closest("li").querySelector(".show_btn");n&&(n.textContent="Show More")}}),e.classList.contains("expanded")){const i=e.scrollHeight;e.style.height=i+"px",e.offsetHeight,e.style.transition="height 1.0s ease",e.style.height="6rem",e.addEventListener("transitionend",function n(){e.classList.remove("expanded"),e.style.height="",e.style.transition="",e.removeEventListener("transitionend",n)}),t.textContent="Show More"}else{e.classList.add("expanded");const i=e.scrollHeight;e.style.height="6rem",e.offsetHeight,e.style.transition="height 1.0s ease",e.style.height=i+"px",e.addEventListener("transitionend",function n(){e.style.height="auto",e.style.transition="",e.removeEventListener("transitionend",n)}),t.textContent="Show Less"}})});const c=["1Shadow Mapping.png","2PCF 3x3.png","3PCF 9x9.png","4VSM 3x3.png","5VSM 9x9.png","6ESM 3x3.png","7ESM 9x9.png","8Shadow Mapping.png","9PCF 3x3.png","10PCF 9x9.png","11VSM 3x3.png","12VSM 9x9.png","13ESM 3x3.png","14ESM 9x9.png","15Shadow Mapping.png","16PCF 3x3.png","17PCF 9x9.png","18VSM 3x3.png","19VSM 9x9.png","20ESM 3x3.png","21ESM 9x9.png"];c.sort((t,o)=>{const e=parseInt(t.match(/^\d+/)[0],10),i=parseInt(o.match(/^\d+/)[0],10);return e-i});const E=document.getElementById("shadowMappingImg"),C=document.getElementById("shadowMappingCaption"),I="/Shadow_Mapping/";let d=0;setInterval(()=>{E.src=I+c[d];const o=c[d].replace(/^\d+\s*/,"").replace(/\.png$/i,"");C.textContent=o,d=(d+1)%c.length},1e3);const L=document.getElementById("gymVideo");L.playbackRate=2;
