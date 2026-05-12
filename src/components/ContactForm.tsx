import { useState } from 'react';
import type { FormEvent } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@googleadsagency.my?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-white">Message sent</h3>
        <p className="text-white/50 text-sm mt-1">Your email client should have opened. Otherwise, email us at hello@googleadsagency.my</p>
        <button onClick={() => setSent(false)} className="mt-3 text-primary text-sm font-medium hover:underline">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Name</label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all duration-150 text-sm text-white placeholder:text-white/30"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email</label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all duration-150 text-sm text-white placeholder:text-white/30"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Message</label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition-all duration-150 text-sm text-white placeholder:text-white/30 resize-none"
          placeholder="Tell us about your advertising goals..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-2.5 px-6 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors duration-150 text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
