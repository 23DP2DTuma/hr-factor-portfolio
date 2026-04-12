import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        if (!formData.name || !formData.email) {
            setStatus({ type: 'error', text: 'Lūdzu, aizpildiet vārdu un e-pastu.' });
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus({ type: 'success', text: 'Ziņa nosūtīta veiksmīgi!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await res.json();
                const errors = data.errors;
                const msg = errors
                    ? Object.values(errors).flat().join(' ')
                    : (data.message || 'Kļūda nosūtot ziņu.');
                setStatus({ type: 'error', text: msg });
            }
        } catch {
            setStatus({ type: 'error', text: 'Nevar savienoties ar serveri.' });
        }
        setLoading(false);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Vārds *</label>
                <input type="text" id="name" name="name" value={formData.name}
                    onChange={handleChange} placeholder="Jūsu vārds" />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-pasts *</label>
                <input type="email" id="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="jusu@epasts.lv" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Ziņa</label>
                <textarea id="message" name="message" value={formData.message}
                    onChange={handleChange} placeholder="Jūsu ziņojums..." />
            </div>
            {status && <div className={`form-message ${status.type}`}>{status.text}</div>}
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Nosūta...' : 'Nosūtīt'}
            </button>
        </form>
    );
}
