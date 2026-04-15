import React, { useState, useEffect } from 'react';

export default function Admin() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchContacts = async () => {
        try {
            const res = await fetch('/api/contacts');
            const data = await res.json();
            setContacts(data);
        } catch {
            console.error('Failed to fetch contacts');
        }
        setLoading(false);
    };

    useEffect(() => { fetchContacts(); }, []);

    const handleDelete = async (id) => {
        if (!confirm('Dzēst šo ziņu?')) return;
        try {
            const res = await fetch(`/api/contacts/${id}`, {
                method: 'DELETE',
                headers: { 'Accept': 'application/json' },
            });
            if (res.ok) {
                setContacts(prev => prev.filter(c => c.id !== id));
            }
        } catch {
            console.error('Failed to delete');
        }
    };

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Kontaktformas ziņas</h2>
                {loading ? (
                    <p style={{ textAlign: 'center' }}>Ielādē...</p>
                ) : contacts.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#888' }}>Nav ziņu.</p>
                ) : (
                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Vārds</th>
                                    <th>E-pasts</th>
                                    <th>Ziņa</th>
                                    <th>Datums</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(c => (
                                    <tr key={c.id}>
                                        <td>{c.name}</td>
                                        <td>{c.email}</td>
                                        <td>{c.message || '—'}</td>
                                        <td>{new Date(c.created_at).toLocaleDateString('lv-LV')}</td>
                                        <td>
                                            <button className="btn-delete" onClick={() => handleDelete(c.id)}>
                                                Dzēst
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
}