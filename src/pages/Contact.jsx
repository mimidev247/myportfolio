import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiCheck, HiExclamationTriangle } from 'react-icons/hi2'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────
//  EmailJS Configuration
//  Follow these steps to set up:
//
//  1. Go to https://www.emailjs.com and create a free account
//  2. Add an Email Service (Gmail recommended) → copy the SERVICE_ID
//  3. Create an Email Template with these variables:
//       {{name}}  {{email}}  {{message}}  {{title}}
//     → copy the TEMPLATE_ID
//  4. Go to Account → General → copy your PUBLIC_KEY
//  5. Paste the values below:
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_oi5k3i9'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_x1sesrx'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'm_qZEDxIYDAjXEZa6'   // e.g. 'aBcDeFgHiJkLmN'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/miracle-samuel-507a0631b',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/mimidev247',
  },
  {
    name: 'Email',
    url: 'mailto:sammiracle66@gmail.com',
  },
]

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg(err?.text || 'Something went wrong. Please try again or email directly.')

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen pt-20 sm:pt-24 pb-28 sm:pb-32 px-4 sm:px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl mb-10 sm:mb-16"
          id="contact-title"
        >
          Let's build something together.
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
          {/* Left - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-4"
            id="social-links"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-display font-semibold text-white
                  hover:text-accent transition-colors duration-300"
                id={`social-${link.name.toLowerCase()}`}
              >
                {link.name}
                <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8"
            id="contact-form"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Hidden field for email subject */}
              <input type="hidden" name="title" value={`New message from ${formData.name || 'someone'}`} />
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white
                    placeholder:text-gray-500 text-sm font-medium transition-all duration-300
                    hover:border-white/[0.15] focus:border-accent/50
                    disabled:opacity-50 disabled:cursor-not-allowed"
                  id="input-name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white
                    placeholder:text-gray-500 text-sm font-medium transition-all duration-300
                    hover:border-white/[0.15] focus:border-accent/50
                    disabled:opacity-50 disabled:cursor-not-allowed"
                  id="input-email"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                disabled={status === 'sending'}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white
                  placeholder:text-gray-500 text-sm font-medium transition-all duration-300 resize-none
                  hover:border-white/[0.15] focus:border-accent/50
                  disabled:opacity-50 disabled:cursor-not-allowed"
                id="input-message"
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status !== 'sending' ? { scale: 1.01 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-sm tracking-wide cursor-pointer
                  transition-all duration-300 flex items-center justify-center gap-2
                  ${status === 'sending'
                    ? 'bg-accent/50 text-[#141421]/70 cursor-wait'
                    : 'glow-btn text-[#141421]'
                  }`}
                id="submit-btn"
              >
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'idle' && 'Send Message'}
                {status === 'success' && 'Send Message'}
                {status === 'error' && 'Send Message'}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-accent/10 border border-accent/20"
                  >
                    <HiCheck className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-sm text-accent">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-red-500/10 border border-red-500/20"
                  >
                    <HiExclamationTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-400">
                      {errorMsg || 'Failed to send. Please email me directly at sammiracle66@gmail.com'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
