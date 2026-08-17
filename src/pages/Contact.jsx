import { useState } from 'react';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Bridal Makeup',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        
        // Format the message for WhatsApp
        const text = 'Hello Gold Crown Makeup Studio! %0A%0A' +
            'My name is *' + formData.name + '*.%0A' +
            'I am interested in: *' + formData.service + '*.%0A' +
            (formData.message ? '%0AMessage: ' + formData.message : '');

        const whatsappNumber = '919839550961';
        const whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + text;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            
            {/* HERO */}
            <div className="container section-sm text-center">
                <FadeUp>
                    <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Consultation</h4>
                    <h1 className="heading-display"><i className="italic">Get in</i> Touch</h1>
                    <div className="line-vertical" style={{ margin: '3rem auto' }}></div>
                    <p className="text-lead" style={{ margin: '0 auto', maxWidth: '800px' }}>
                        Whether you are planning your dream wedding, attending a special event, or looking to enroll in our academy, we are here to assist you. Reach out to schedule your session.
                    </p>
                </FadeUp>
            </div>

            <section className="section bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        
                        {/* CONTACT INFO */}
                        <div>
                            <FadeUp delay={100}>
                                <h3 className="heading-lg" style={{ marginBottom: '2rem' }}>Studio <i className="italic">Details</i></h3>
                                
                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 className="text-meta color-burgundy" style={{ marginBottom: '0.5rem' }}>Visit Us</h4>
                                    <p className="text-secondary" style={{ lineHeight: '1.6' }}>
                                        Gold Crown Makeup Studio<br />
                                        120 / 220, Lajpat Nagar, Narainpurwa<br />
                                        Kanpur, Uttar Pradesh 208005
                                    </p>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 className="text-meta color-burgundy" style={{ marginBottom: '0.5rem' }}>Contact Info</h4>
                                    <p className="text-secondary" style={{ lineHeight: '1.6' }}>
                                        <a href="tel:+919839550961" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98395 50961</a><br />
                                        <a href="mailto:info@goldcrownstudio.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@goldcrownstudio.com</a>
                                    </p>
                                </div>

                                <div style={{ marginBottom: '3rem' }}>
                                    <h4 className="text-meta color-burgundy" style={{ marginBottom: '0.5rem' }}>Studio Hours</h4>
                                    <p className="text-secondary" style={{ lineHeight: '1.6' }}>
                                        Monday – Sunday: 10:00 AM – 8:00 PM<br />
                                        <span style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>(Prior appointment is highly recommended)</span>
                                    </p>
                                </div>

                                {/* Placeholder Map Box */}
                                <div style={{ width: '100%', height: '250px', backgroundColor: 'var(--bg-secondary)', border: '1px solid rgba(214, 197, 179, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                                    <a href="https://maps.google.com/?q=Gold+Crown+Studio+Kanpur" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>View on Google Maps</a>
                                </div>
                            </FadeUp>
                        </div>

                        {/* CONTACT FORM */}
                        <div>
                            <FadeUp delay={200}>
                                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '3rem', border: '1px solid rgba(214, 197, 179, 0.4)' }}>
                                    <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Send an Inquiry</h3>
                                    <p className="text-secondary" style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>
                                        Fill out the form below. Once submitted, it will securely open WhatsApp so you can send your details directly to our studio team.
                                    </p>

                                    <form onSubmit={handleWhatsAppSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name *</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                required 
                                                style={{ width: '100%', padding: '1rem', border: '1px solid rgba(44, 38, 38, 0.2)', backgroundColor: 'transparent', fontFamily: 'var(--font-body)', fontSize: '1rem' }} 
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone *</label>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                value={formData.phone} 
                                                onChange={handleChange} 
                                                required 
                                                style={{ width: '100%', padding: '1rem', border: '1px solid rgba(44, 38, 38, 0.2)', backgroundColor: 'transparent', fontFamily: 'var(--font-body)', fontSize: '1rem' }} 
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service Interested In</label>
                                            <select 
                                                name="service" 
                                                value={formData.service} 
                                                onChange={handleChange} 
                                                style={{ width: '100%', padding: '1rem', border: '1px solid rgba(44, 38, 38, 0.2)', backgroundColor: 'transparent', fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-primary)', cursor: 'pointer' }}
                                            >
                                                <option value="Bridal Makeup">Bridal Makeup</option>
                                                <option value="Pre-Bridal Packages">Pre-Bridal Packages</option>
                                                <option value="Party & Occasion Makeup">Party & Occasion Makeup</option>
                                                <option value="Professional Makeup Course">Professional Makeup Course</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Additional Details</label>
                                            <textarea 
                                                name="message" 
                                                value={formData.message} 
                                                onChange={handleChange} 
                                                rows="4" 
                                                style={{ width: '100%', padding: '1rem', border: '1px solid rgba(44, 38, 38, 0.2)', backgroundColor: 'transparent', fontFamily: 'var(--font-body)', fontSize: '1rem', resize: 'vertical' }} 
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="btn-solid" style={{ marginTop: '1rem', width: '100%' }}>Send via WhatsApp</button>
                                    </form>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
