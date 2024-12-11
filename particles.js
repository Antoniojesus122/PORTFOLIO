export function setupParticles() {
  // Función para obtener el color de las partículas según el tema
  const getParticleColor = () => {
    const theme = document.documentElement.getAttribute('data-theme')
    return theme === 'dark' ? '#ffffff' : '#1a1f36'
  }

  const initParticles = (color) => {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: color
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: color,
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 3
          }
        }
      },
      retina_detect: true
    })
  }

  // Inicializar partículas con el color correcto
  initParticles(getParticleColor())

  // Actualizar partículas cuando cambie el tema
  const observer = new MutationObserver(() => {
    const newColor = getParticleColor()
    // Destruir y reinicializar las partículas con el nuevo color
    if (window.pJSDom && window.pJSDom[0]) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS()
      window.pJSDom = []
    }
    initParticles(newColor)
  })

  // Observar cambios en el atributo data-theme
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  })

  // Limpiar observer cuando se desmonte
  return () => observer.disconnect()
} 