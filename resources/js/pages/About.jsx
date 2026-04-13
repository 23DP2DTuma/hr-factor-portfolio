import React from 'react';

export default function About() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Par HR Factor</h2>
                <div className="about-content">
                    <div>
                        <p><strong>HR Factor, SIA</strong> ir Latvijā reģistrēts personāla atlases un konsultāciju uzņēmums. Mēs palīdzam uzņēmumiem atrast piemērotākos darbiniekus, konsultējam par personāla vadības jautājumiem un nodrošinām HR ārpakalpojumus.</p>
                        <br />
                        <p>Mūsu komanda apvieno pieredzi personāla vadībā ar modernām IT zināšanām, lai radītu risinājumus, kas tiešām darbojas.</p>
                        <div className="about-stats">
                            <div className="stat-item"><div className="number">50+</div><div>Klienti</div></div>
                            <div className="stat-item"><div className="number">10+</div><div>Gadi pieredzē</div></div>
                            <div className="stat-item"><div className="number">200+</div><div>Veiksmīgas atlases</div></div>
                            <div className="stat-item"><div className="number">15</div><div>Komandas dalībnieki</div></div>
                        </div>
                    </div>
                    <div className="values-card">
                        <h3>Mūsu vērtības</h3>
                        <ul>
                            <li>✓ Profesionalitāte un kvalitāte</li>
                            <li>✓ Individuāla pieeja katram klientam</li>
                            <li>✓ Modernās tehnoloģijas</li>
                            <li>✓ Konfidencialitāte un uzticamība</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
