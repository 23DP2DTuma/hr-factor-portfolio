import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
    { icon: '👥', title: 'Personāla atlase', description: 'Meklējam un atlasām labākos kandidātus jūsu vakancēm. Izmantojam strukturētas intervijas un kompetenču novērtēšanu.' },
    { icon: '📋', title: 'HR konsultācijas', description: 'Konsultējam par darba tiesībām, personāla politiku, atalgojuma sistēmām un organizācijas attīstību.' },
    { icon: '🎓', title: 'Apmācības', description: 'Organizējam apmācības vadītājiem un HR speciālistiem par modernajām personāla vadības praksēm.' },
    { icon: '🔄', title: 'HR ārpakalpojumi', description: 'Nodrošinām algu aprēķinu, personāla administrēšanu un dokumentu pārvaldību.' },
    { icon: '🔍', title: 'Kandidātu meklēšana', description: 'Aktīvi meklējam kandidātus, izmantojot datubāzes, sociālos tīklus un profesionālos kontaktus.' },
    { icon: '📊', title: 'Darba tirgus analīze', description: 'Analizējam darba tirgu, algu līmeņus un tendences jūsu nozarē.' },
];

export default function Services() {
    return (
        <section className="section" style={{ background: 'var(--light)' }}>
            <div className="container">
                <h2 className="section-title">Pakalpojumi</h2>
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', color: '#666' }}>
                    Piedāvājam pilnu HR pakalpojumu klāstu — no personāla atlases līdz tehnoloģiju ieviešanai.
                </p>
                <div className="services-grid">
                    {services.map((s, i) => <ServiceCard key={i} {...s} />)}
                </div>
            </div>
        </section>
    );
}
