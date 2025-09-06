# FabDiz‑style Multi‑page Interior Site (React + Vite + Tailwind)

Multi‑page website: Home, Projects, About, Contact. Contact form sends an email via **EmailJS** (optional) and also opens **WhatsApp** chat with a pre‑filled message.

## 🚀 Run locally
```bash
npm install
npm run dev
```

## 🧩 Pages
- `/` Home
- `/projects` Gallery
- `/about` About
- `/contact` Contact form

## ✉️ Email (EmailJS)
1. Create free account: https://www.emailjs.com/
2. Add a service (e.g., Gmail) and a template with fields:
   - `user_name`, `user_phone`, `user_city`, `user_message`
3. Open `src/config.js` and fill:
   ```js
   export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
4. The form will use EmailJS. If these are left as `YOUR_...`, it will only open WhatsApp.

## 💬 WhatsApp
- Your number is already set to **+91 78775 03702**.
- You can change it in `src/config.js` → `WHATSAPP_NUMBER`.

## 🧱 Tech
- React + Vite
- TailwindCSS
- React Router
- Framer Motion

## 📦 Build
```bash
npm run build
npm run preview
```

## 🔧 Customization
- Change images and text in `src/pages/*`.
- Update navbar/footers in `src/App.jsx`.
