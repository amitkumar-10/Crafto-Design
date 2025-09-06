import React from 'react'
import { buildWhatsAppURL } from '../utils/whatsapp'
import { WHATSAPP_NUMBER, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config'

export default function Contact() {
  const [form, setForm] = React.useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = React.useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function sendEmailJS() {
    if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.startsWith('YOUR_')) return false
    try {
      const url = 'https://api.emailjs.com/api/v1.0/email/send'
      const payload = {
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          user_name: form.name,
          user_phone: form.phone,
          user_email: form.email,
          user_message: form.message
        }
      }
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      return res.ok
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')

    // Send email (optional)
    const emailSent = await sendEmailJS()

    // Build WhatsApp URL and open
    const waURL = buildWhatsAppURL(WHATSAPP_NUMBER, form)
    window.open(waURL, '_blank')

    setStatus(emailSent ? 'Email sent! WhatsApp opened.' : 'WhatsApp opened.')

    // Clear status after 3s
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Let’s Design Your Space</h1>
          <p className="mt-2 text-slate-600">Share a few details and we will contact you.</p>
          <div className="mt-6 space-y-2 text-slate-700 text-sm">
            <div>Phone: +91 99865 15115</div>
            <div>Email: crafto.sp@gmail.com</div>
            <div>Cities: Bengaluru • Hyderabad • Mysuru</div>
          </div>
          <div className='text-2xl md:text-3xl font-bold mt-10'>
            <h1><a href="https://maps.app.goo.gl/JiiWC3djdxB5hQbX8?g_st=aw" 
            className="text-red-600"><i class="fas fa-map-marker-alt"></i>
              
              </a>Location</h1>

            <div className="mt-6 space-y-2 text-slate-700 text-sm">
              <a
                href="https://maps.app.goo.gl/jt9yQ53fvn7UJ88k8"
                rel="noopener noreferrer"
                className="text-slate-700 hover: "
              >
                3rd cross, road, Chikka Banaswadi,
              <br />Bengaluru, Karnataka 560033
              </a></div>
          </div>
   
        </div>
        <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow border p-6 space-y-4">
          <div>
            <label className="block text-sm mb-1">Your name</label>
            <input placeholder="Enter your name" name="name" value={form.name} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone number</label>
            <input placeholder="Enter your phone number" name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Email address</label>
            <input placeholder="Enter your Email address" name="email" value={form.email} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          </div>

          <div>
            <label className="block text-sm mb-1">Project details</label>
            <textarea placeholder="Write all about your project" name="message" value={form.message} onChange={handleChange} className="w-full border rounded-md px-3 py-2 h-28" />
          </div>
          <button className="w-full px-4 py-2 rounded-md bg-slate-900 text-white">Submit</button>
          {status && <div className="text-sm text-slate-600">{status}</div>}
        </form>

      </div>
    </div>
  )
}
