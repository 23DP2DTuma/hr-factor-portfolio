import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Sazināties ar mums</h2>
                <div className="contact-grid">
                    <ContactForm />
                    <div className="contact-info">
                        <h3>Kontaktinformācija</h3>
                        <div className="contact-info-item">
                            <span className="label">Adrese:</span>
                            <span>Aleksandra Čaka iela 109-13, Rīga, LV-1011</span>
                        </div>
                        <div className="contact-info-item">
                            <span className="label">E-pasts:</span>
                            <span>info@hrfactor.lv</span>
                        </div>
                        <div className="contact-info-item">
                            <span className="label">Tālrunis:</span>
                            <span>+371 2X XXX XXX</span>
                        </div>
                        <div className="contact-info-item">
                            <span className="label">Darba laiks:</span>
                            <span>P.–Pk. 9:00–17:00</span>
                        </div>
                        <div className="info-box">
                            <h4>Kāpēc izvēlēties mūs?</h4>
                            <p>Vairāk nekā 10 gadu pieredze HR jomā, individuāla pieeja un modernas tehnoloģijas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
