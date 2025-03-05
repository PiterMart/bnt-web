'use client'; // If using App Router
import styles from "../styles/footer.module.css"

import { useState } from 'react';

export default function ContactForm2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className={styles.form__container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.title}>Contact Us</p>
        
        <label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <textarea
            name="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          />
        </label>

        <button type="submit" className={styles.button} >
          Send
        </button>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
}
