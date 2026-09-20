import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [current, setCurrent] = useState('')

  useEffect(() => {
    const ids = ['about', 'projects', 'skills', 'contact']

    let observer = null

    const setupObserver = () => {
      const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
      if (sections.length === 0) {
        // sections not mounted yet, retry shortly
        setTimeout(setupObserver, 150)
        return
      }

      observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // update html class so CSS can react to current section
            const html = document.documentElement
            ['about', 'projects', 'skills', 'contact'].forEach((id) => html.classList.remove('in-' + id))
            html.classList.add('in-' + entry.target.id)
            setCurrent(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.25 }
      )

      sections.forEach((s) => observer.observe(s))
    }

    setupObserver()

    return () => {
      if (observer) observer.disconnect()
    }
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // update current and html class immediately so nav visuals change on click
    const html = document.documentElement
    ['about', 'projects', 'skills', 'contact'].forEach((i) => html.classList.remove('in-' + i))
    html.classList.add('in-' + id)
    setCurrent(id)
  }

  const darkBg = current === 'skills' || current === 'contact'

  return (
    <div className={`fixed top-0 sm:top-4 left-0 right-0 z-50 w-full py-2 px-4 sm:w-fit sm:rounded-full flex justify-center mx-auto shadow-lg backdrop-blur-md transition-colors ${darkBg ? 'bg-[#333333ee]' : 'bg-[#525252de]'}`}>
      <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }} aria-current={current === 'about' ? 'page' : undefined} className={`nav-btn text-lg font-semibold px-5 py-2 rounded-full transition-colors ${current === 'about' ? 'active' : ''}`}>About</a>
      <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects') }} aria-current={current === 'projects' ? 'page' : undefined} className={`nav-btn text-lg font-semibold px-5 py-2 rounded-full transition-colors ${current === 'projects' ? 'active' : ''}`}>Projects</a>
      <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills') }} aria-current={current === 'skills' ? 'page' : undefined} className={`nav-btn text-lg font-semibold px-5 py-2 rounded-full transition-colors ${current === 'skills' ? 'active' : ''}`}>Skills</a>
      <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} aria-current={current === 'contact' ? 'page' : undefined} className={`nav-btn text-lg font-semibold px-5 py-2 rounded-full transition-colors ${current === 'contact' ? 'active' : ''}`}>Contact</a>
    </div>
  )
}

export default Nav