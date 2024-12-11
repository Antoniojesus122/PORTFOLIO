export function setupTheme() {
  const themeToggle = document.querySelector('.theme-toggle')
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
  const favicon = document.getElementById('favicon')
  const logo = document.getElementById('logo')
  
  // Función para actualizar imágenes según el tema
  const updateImages = (theme) => {
    // Actualizar favicon
    favicon.href = `/src/assets/img/favicon-${theme}.ico`
    
    // Actualizar logo
    if (logo) {
      logo.src = `/src/assets/img/logo-${theme}.png`
      logo.alt = `Logo ${theme === 'dark' ? 'oscuro' : 'claro'}`
    }
  }

  // Establecer tema inicial
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme)
    updateThemeIcon(savedTheme)
    updateImages(savedTheme)
  } else if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark')
    updateThemeIcon('dark')
    updateImages('dark')
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    updateThemeIcon(newTheme)
    updateImages(newTheme)
  })

  // Observar cambios en las preferencias del sistema
  prefersDarkScheme.addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    updateThemeIcon(newTheme)
    updateImages(newTheme)
  })
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('.theme-toggle i')
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'
} 