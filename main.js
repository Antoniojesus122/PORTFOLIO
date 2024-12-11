import { setupNavigation, setupMobileNavigation } from './navigation.js'
import { setupParticles } from './particles.js'
import { setupTheme } from './theme.js'
import { setupAnimations } from './animations.js'
import { setupExperienceAccordion } from './experience.js'

document.querySelector('#app').innerHTML = `
  <div id="particles-js"></div>
  
  <!-- Header con navegación -->
  <header class="header">
    <img id="logo" src="/src/assets/img/logo-light.png" alt="Logo" class="logo" />
    
    <!-- Botón hamburguesa -->
    <button class="menu-toggle" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Navegación móvil -->
    <nav class="nav-mobile">
      <ul>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#educacion">Educación</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li class="mobile-cv">
          <a href="/src/assets/CV-Antonio-Jesus-Gonzalez.pdf" download>
            <i class="fas fa-download"></i>
            Descargar CV
          </a>
        </li>
      </ul>
    </nav>

    <!-- Navegación desktop -->
    <nav class="nav-desktop">
      <ul>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#educacion">Educación</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>

    <a href="/src/assets/CV-Antonio-Jesus-Gonzalez.pdf" class="cv-button desktop-only" download>
      <i class="fas fa-download"></i>
      <span>Descargar CV</span>
    </a>
  </header>

  <main>
    <!-- Sección Inicio -->
    <section id="inicio" class="hero">
      <div class="hero-content">
        <h1>¡Hola, soy Antonio Jesús!</h1>
        <h2>Tecnico en Sistemas Microinformáticos y Redes <br> Desarrollador Web en formación</h2>
        <div class="typewriter-container">
          <span id="typewriter"></span><span class="cursor">|</span>
        </div>
        <div class="hero-buttons">
          <a href="#proyectos" class="btn">
            <i class="fas fa-code-branch"></i>
            Mis Proyectos
          </a>
          <a href="mailto:antoniojesusgonzalezdomingo4@gmail.com" class="btn btn-primary">
            <i class="fas fa-envelope"></i>
            Contáctame
          </a>
        </div>
      </div>
    </section>



    <!-- Sección Experiencia -->
    <section id="experiencia" class="section">
      <h2 class="section-title">Experiencia Laboral</h2>
      
      <div class="accordion-container">
        <div class="accordion-item">
          <div class="accordion-header">
            <div class="job-title-container">
              <h3>Informático</h3>
              <p class="company">ICONO Informática - Lepe, Huelva</p>
            </div>
            <div class="job-date">21/03/2024 - 21/06/2024</div>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="accordion-content">
            <ul class="job-description">
              <li>Reparación de ordenadores</li>
              <li>Mantenimiento de equipos</li>
              <li>Soporte técnico</li>
            </ul>
            <div class="technologies">
              <span class="tech-tag">Reparación PC</span>
              <span class="tech-tag">Mantenimiento</span>
              <span class="tech-tag">Soporte Técnico</span>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Sección Proyectos -->
    <section id="proyectos" class="section">
      <h2 class="section-title">Proyectos</h2>
      
      <div class="coming-soon-container">
        <div class="coming-soon-card">
          <i class="fas fa-code"></i>
          <h3>Próximamente</h3>
          <p>Nuevos proyectos en desarrollo</p>
        </div>
      </div>
    </section>


    <!-- Sección Sobre Mí -->
    <section id="sobre-mi" class="section">
      <h2 class="section-title">Sobre mí</h2>
      
      <div class="about-container">
        <div class="about-content">
          <p class="about-text">
         Hey, Soy Antonio Jesus!, técnico en sistemas microinformáticos y redes y desarrollador web en formación. 
         Apasionado por la informática y tecnologías. 
          </p>
          
          <p class="about-text">
            Actualmente estoy enfocado en expandir mis conocimientos en nuevas tecnologías 
            y frameworks, siempre buscando aprender y mejorar mis habilidades.
          </p>
        </div>
      </div>
    </section>


        <!-- Sección Educación -->
    <section id="educacion" class="section">
      <h2 class="section-title">Educación</h2>
      <div class="timeline">
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-content">
            <h3>CFGS Desarrollo de Aplicaciones Web</h3>
            <p>I.E.S. La Arboleda</p>
            <span class="date">2024 - Actualidad</span>
          </div>
        </div>
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-content">
            <h3>CFGM Sistemas Microinformáticos y Redes</h3>
            <p>I.E.S. La Arboleda</p>
            <span class="date">2022 - 2024</span>
          </div>
        </div>
        <div class="timeline-item animate-on-scroll">
          <div class="timeline-content">
            <h3>Educación Secundaria Obligatoria (ESO)</h3>
            <p>I.E.S. José Antonio Fernández Muriel</p>
            <span class="date">2018 - 2022</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Sección Contacto -->
    <section id="contacto" class="section">
      <h2 class="section-title">Contacto</h2>
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-item animate-on-scroll">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>antoniojesusgonzalezdomingo4@gmail.com</p>
          </div>
          <div class="info-item animate-on-scroll">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Ubicación</h3>
            <p>Huelva, España</p>

             <br>
                              <div class="social-buttons">
            <a href="https://github.com/Antoniojesus122" target="_blank" class="social-btn github">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/antonio-jesus-gordon-piñero" target="_blank" class="social-btn linkedin">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          </div>
        </div>
        <form id="contact-form" class="contact-form animate-on-scroll">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" class="btn">
            <i class="fas fa-paper-plane"></i>
            Enviar Mensaje
          </button>
        </form>

      </div>
      
    </section>
  </main>

<!-- Footer -->
<footer class="footer">
  <div class="footer-content">
    <div class="footer-left">
      <p>© 2024 Antonio Jesús González. Casi todos los derechos reservados</p>
    </div>
    <div class="footer-right">
      <nav class="footer-nav">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </div>
</footer>

  <!-- Botón de tema flotante -->
  <button class="theme-toggle" aria-label="Cambiar tema">
    <i class="fas fa-moon"></i>
  </button>
`;

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation()
  setupMobileNavigation()
  setupParticles()
  setupTheme()
  setupAnimations()
  setupExperienceAccordion()
  setupSmoothScroll()
})
