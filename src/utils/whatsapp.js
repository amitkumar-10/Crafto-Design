// utils/whatsapp.js
export function buildWhatsAppURL(number, form) {
  const message = `
Hello! I am ${form.name}.
Phone: ${form.phone}
Email: ${form.email}
Project Details: ${form.message}
  `;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
