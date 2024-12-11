export function setupAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`
    observer.observe(el)
  })

  setupTypewriter()

  setupSmoothScroll()

  return () => observer.disconnect()
}

function setupTypewriter() {
  const phrases = [
    "Desarrollando nuevos proyectos",
    "Resolviendo problemas con tecnología",
    "En constante aprendizaje",
    "Disponible para colaborar",
    "Apasionado por la tecnología"
  ]

  const typewriter = document.getElementById('typewriter')
  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 100

  function type() {
    const currentPhrase = phrases[phraseIndex]
    
    if (isDeleting) {
      typewriter.textContent = currentPhrase.substring(0, charIndex - 1)
      charIndex--
      typingSpeed = 50
    } else {
      typewriter.textContent = currentPhrase.substring(0, charIndex + 1)
      charIndex++
      typingSpeed = 100
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
    }

    setTimeout(type, typingSpeed)
  }

  type()
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
          duration: 1500
        });

        targetElement.classList.add('section-highlight');
        setTimeout(() => {
          targetElement.classList.remove('section-highlight');
        }, 1000);
      }
    });
  });
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar')
  
  progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress')
    bar.style.setProperty('--progress', `${progress}%`)
  })
}

export function setupFormAnimations() {
  const form = document.querySelector('.contact-form')
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      
      const submitButton = form.querySelector('button[type="submit"]')
      submitButton.classList.add('pulse')
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      showNotification('¡Mensaje enviado con éxito!', 'success')
      
      form.reset()
      
      submitButton.classList.remove('pulse')
    })
  }
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div')
  notification.className = `notification ${type}`
  notification.textContent = message
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.remove()
  }, 3000)
}
