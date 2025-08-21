import React from 'react'

export default function About(){
  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop" alt="studio" className="w-full rounded-2xl shadow"/>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Design‑first. Execution‑obsessed.</h1>
          <p className="mt-3 text-slate-600">We’re a multidisciplinary interior design studio delivering delightful, practical spaces. Our in‑house team manages drawings, 3D, procurement and site works—so you don’t have to coordinate 10 vendors.</p>
          <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
            <li>Transparent BOQs & timelines</li>
            <li>Premium materials, verified vendors</li>
            <li>Dedicated project manager</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
