import SmoothScroll from 'smooth-scroll';

export function setupNavigation() {
  const header = document.querySelector('.header');
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Añadir/remover clase compact con un umbral de 50px
      if (currentScroll > 50) {
        if (!header.classList.contains('compact')) {
          header.classList.add('compact');
        }
      } else {
        if (header.classList.contains('compact')) {
          header.classList.remove('compact');
        }
      }
      
      lastScroll = currentScroll;
    });
  }
}

export function setupMobileNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile a');

  // Toggle menú
  menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMobile?.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Cerrar menú al hacer click en un enlace
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle?.classList.remove('active');
      navMobile?.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Prevenir scroll cuando el menú está abierto
  document.body.addEventListener('touchmove', (e) => {
    if (document.body.classList.contains('menu-open')) {
      e.preventDefault();
    }
  }, { passive: false });
} 