import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const services = [
    { icon: '👥', title: 'Personāla atlase', description: 'Meklējam un atlasām labākos kandidātus jūsu uzņēmuma vakancēm.' },
    { icon: '📋', title: 'HR konsultācijas', description: 'Konsultējam par darba tiesībām, personāla politiku un atalgojuma sistēmām.' },
    { icon: '🎓', title: 'Apmācības', description: 'Organizējam apmācības vadītājiem un personāla speciālistiem.' },
];

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>HR Factor</h1>
                    <p>Mēs palīdzam uzņēmumiem atrast labākos talantus un digitalizēt HR procesus.</p>
                    <Link to="/contact" className="btn btn-primary">Sazināties</Link>
                </div>
            </section>
            <section className="section" style={{ background: 'var(--light)' }}>
                <div className="container">
                    <h2 className="section-title">Mūsu pakalpojumi</h2>
                    <div className="services-grid">
                        {services.map((s, i) => (
                            <ServiceCard key={i} {...s} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
