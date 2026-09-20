import Nav from './assets/components/Nav'
import About from './assets/components/About'
import Projects from './assets/components/Projects'
import Skills from './assets/components/Skills'
import Contact from './assets/components/Contact'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('site-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } catch (e) {
      return 'dark'
    }
  })

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('theme-light', 'theme-dark')
    html.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
    try { localStorage.setItem('site-theme', theme) } catch (e) {}
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div>
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="fixed bottom-3 right-3 border border-gray-900 border-z-50 p-3 rounded-full shadow-lg flex items-center justify-center focus:outline-none transition-transform hover:scale-105"
        style={{ backgroundColor: 'var(--site-bg)', color: 'var(--site-text)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  )
}

export default App
