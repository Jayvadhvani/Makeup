import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

export default function Services() {
    const services = [
        {
            id: 'bridal',
            title: 'Bridal Makeup',
            subtitle: 'Your Perfect Day, Perfected',
            description: 'At Gold Crown Makeup Studio, we specialize in luxury bridal transformations. Led by Sunita Gupta, our team crafts bespoke looks that honor traditional Indian aesthetics while incorporating modern, flawless techniques. From intricate Haldi and Mehndi styling to the ultimate luxury Wedding Day glam, we ensure you look radiant, photograph beautifully, and feel utterly confident.',
            features: ['HD & Airbrush Makeup', 'Custom Hair Styling & Draping', 'Premium International Products', 'On-Venue Services Available'],
            img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85',
            imgAlt: 'Professional bridal makeup artist carefully applying makeup for a luxury bridal look',
            link: '/bridal',
            linkText: 'View Bridal Portfolio'
        },
        {
            id: 'party',
            title: 'Party & Occasion Makeup',
            subtitle: 'Elegance for Every Event',
            description: "Whether you are attending a glamorous reception, a sophisticated cocktail party, or a vibrant family celebration, our party makeup services are designed to make you stand out. We focus on enhancing your natural features with long-lasting, luminous makeup that complements your outfit and the event's ambiance.",
            features: ['Reception & Engagement Looks', 'Subtle Glam & Dewy Finishes', 'Advanced Hairstyling', 'Group Bookings Available'],
            img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=85',
            imgAlt: 'Elegant beauty portrait representing polished party and occasion makeup',
            link: '/contact',
            linkText: 'Book an Appointment'
        },
        {
            id: 'pre-bridal',
            title: 'Pre-Bridal Packages',
            subtitle: 'The Journey to Radiance',
            description: 'True beauty starts with healthy, glowing skin. Our comprehensive pre-bridal packages include customized skincare, haircare, and deep-nourishing beauty treatments designed to prep your canvas weeks before the big day. Experience luxury facials, spa treatments, and professional consultations to ensure a flawless glow from within.',
            features: ['Customized Skin Treatments', 'Hair Spa & Conditioning', 'Body Polishing', 'Personalized Consultation'],
            img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85',
            imgAlt: 'Relaxing professional facial skincare treatment for pre-bridal skin preparation',
            link: '/contact',
            linkText: 'Inquire About Packages'
        },
        {
            id: 'academy',
            title: 'Professional Makeup Courses',
            subtitle: 'Learn from the Masters',
            description: 'Step into the world of professional beauty. The Gold Crown Makeup Academy offers intensive, hands-on certification courses led by Sunita Gupta. Designed for aspiring artists, our curriculum covers everything from basic color theory to advanced bridal and editorial techniques, equipping you with the skills to launch a successful career in makeup artistry.',
            features: ['Beginner to Advanced Levels', 'Hands-on Practical Sessions', 'Business & Client Management', 'Professional Certification'],
            img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85',
            imgAlt: 'Makeup brushes and professional cosmetics used for makeup artist training',
            link: '/academy',
            linkText: 'Explore the Academy'
        }
    ];

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
            {/* Header Section */}
            <section className="container section-sm text-center">
                <FadeUp>
                    <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Our Expertise</h4>
                    <h1 className="heading-display"><i className="italic">Bespoke</i> Beauty Services</h1>
                    <div className="line-vertical" style={{ margin: '3rem auto' }}></div>
                    <p className="text-lead" style={{ margin: '0 auto', maxWidth: '800px' }}>
                        From signature bridal transformations to professional artistry education, Gold Crown Makeup Studio offers a premium suite of services tailored to elevate your beauty and confidence.
                    </p>
                </FadeUp>
            </section>

            {/* Services List */}
            <section className="section bg-secondary">
                <div className="container">
                    {services.map((service, index) => (
                        <div key={service.id} className={'editorial-grid ' + (index % 2 !== 0 ? 'reverse' : '')} style={{ marginBottom: index !== services.length - 1 ? '8rem' : '0' }}>
                            <FadeUp delay={100}>
                                <div className="img-wrapper img-landscape border-delicate services-photo-frame">
                                    <img src={service.img} alt={service.imgAlt} loading="lazy" decoding="async" />
                                </div>
                            </FadeUp>
                            <div style={{ padding: '0 5%' }}>
                                <FadeUp delay={200}>
                                    <h4 className="text-meta color-burgundy" style={{ marginBottom: '0.5rem' }}>{service.subtitle}</h4>
                                    <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>{service.title}</h2>
                                    <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                                        {service.description}
                                    </p>
                                    <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
                                        {service.features.map((feature, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                                <span style={{ color: 'var(--accent-primary)' }}>✦</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to={service.link} className="btn">{service.linkText}</Link>
                                </FadeUp>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-white text-center">
                <div className="container-narrow">
                    <FadeUp>
                        <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Consultation</h4>
                        <h2 className="heading-xl">Let's Design Your <i className="italic">Signature Look</i></h2>
                        <p className="text-lead" style={{ margin: '0 auto 3rem' }}>
                            Every service begins with understanding your unique style and needs. Reach out to schedule a consultation with Sunita Gupta and the Gold Crown team.
                        </p>
                        <Link to="/contact" className="btn-solid">Book an Appointment</Link>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
