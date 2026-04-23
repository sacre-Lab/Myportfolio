import React, { useState, useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from './ContactExperience'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef(null);
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...FormData,
        [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
   
    try {
        await emailjs.sendForm (
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
            formRef.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )

    // Reset form after submission 
    setFormData({ name: '', email: '', message: '' });

    } catch(error) {
        console.log('EMAILJS ERROR, ', error)
    }

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
   
  }
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch"
          sub="📬 Let's build something together — send me a message!"
        />

        <div className="mt-16 grid-12-cols items-stretch">
            {/* Contact Form - Left side */}
          <div className="xl:col-span-5 h-full">
            <form onSubmit={handleSubmit} className='card-border p-6 rounded-lg w-full flex flex-col gap-6 h-full' ref={formRef}>
              {status && <p className='mb-4 text-accent'>{status}</p>}

              <div className="flex-1">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your name" />

                <label htmlFor="email" className="mt-4">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" />

                <label htmlFor="message" className="mt-4">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Write your message..." />
              </div>

              <button type="submit" disabled={loading}>
                 <div className='cta-button group'>
                    <div className='bg-circle' />
                    <p className='text'>{loading ? 'Sending...' : 'Send Message'}</p>
                    <div className='arrow-wrapper'>
                        <img src='/images/arrow-down.svg' alt='arrow' />
                    </div>
                    </div>
                </button>
            </form>
          </div>

          {/* 3D Experience - Right side */}
            <div className='xl:col-span-7 min-h-96'>
                <div className='w-full h-full bg-[#cd7c2e]
                hover:cursor-grab rounded-3xl overflow-hidden'>
              <ContactExperience />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
