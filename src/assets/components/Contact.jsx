import React, { useState } from 'react'
import { GoPaperAirplane } from "react-icons/go";


const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !message) {
      setStatus('Please fill both fields')
      return
    }

    setStatus('sending')

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, message })
        })

        if (res.ok) {
          setStatus('Message sent — thanks!')
          setEmail('')
          setMessage('')
        } else {
          const text = await res.text()
          setStatus('Send failed: ' + (text || res.status))
        }
      } catch (err) {
        setStatus('Send error: ' + err.message)
      }
    } else {
      // Fallback to opening user's mail client
      const subject = encodeURIComponent('Portfolio contact')
      const body = encodeURIComponent(`From: ${email}\n\n${message}`)
      window.location.href = `mailto:miladyousef019@gmail.com?subject=${subject}&body=${body}`
      setStatus('Opened mail client')
    }
  }

  return (
    <div id="contact" className="pt-[100px] flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-gray-300 mb-6 text-center">Contact</h1>
      <h1 className="text-lg font-semibold text-gray-300 mb-6 text-center">Please contact me directly at <a href="mailto:miladyousef019@gmail.com" className='underline'>miladyousef019@gmail.com</a> or through this form</h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-3xl">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#686868ea] text-gray-200 placeholder:text-gray-200 focus:outline-none rounded-lg h-12 w-full md:w-[600px] pl-3 mb-4"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#686868ea] text-gray-200 placeholder:text-gray-200 focus:outline-none rounded-lg h-36 w-full md:w-[600px] pl-3 p-3 mb-4 resize-none"
        />

        <button
          className="bg-[#030303] text-gray-100 rounded-lg flex items-center justify-center h-12 p-3 mb-6 mt-3 gap-2 hover:scale-105 hover:gap-3.5 duration-200 w-full md:w-auto"
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Submit'} <GoPaperAirplane />
        </button>
      </form>

      {status && <p className="text-gray-300 text-[14px] px-3 text-center">{status}</p>}

      <p className="text-gray-300 text-[14px] px-3 text-center">2026 Yousef milaf. all rights reserved.</p>
      <p className="text-gray-300 text-[14px] px-3 text-center">About this website: built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.</p>
    </div>
  )
}

export default Contact