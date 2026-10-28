import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

export default function Bridal() {
    const galleryImages = [
        import.meta.env.BASE_URL + 'assets/images/bridal/bridal-01.svg',
        import.meta.env.BASE_URL + 'assets/images/bridal/bridal-02.svg',
        import.meta.env.BASE_URL + 'assets/images/bridal/bridal-03.svg',
        import.meta.env.BASE_URL + 'assets/images/bridal/bridal-04.svg',
        import.meta.env.BASE_URL + 'assets/images/bridal/bridal-05.svg',
        import.meta.env.BASE_URL + 'assets/images/bridal/bridal-06.svg',
    ];

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
            {/* IMAGE-LED BRIDAL HERO */}
            <section className="bridal-hero">
                <div className="container bridal-hero-grid">
                    <FadeUp>
                        <div className="bridal-hero-copy">
                            <p className="text-meta bridal-hero-eyebrow"><span></span>The Signature Experience</p>
                            <h1 className="heading-display"><i className="italic">Bridal</i><br />Beauty, Made Personal</h1>
                            <div className="bridal-hero-flourish" aria-hidden="true"><span></span><b>◆</b><span></span></div>
                            <p className="text-lead bridal-hero-description">
                                Your wedding day should feel unmistakably you. Sunita Gupta creates refined, radiant bridal looks that celebrate your features, your traditions, and your story.
                            </p>
                            <div className="bridal-hero-actions">
                                <Link to="/contact" className="btn-solid">Enquire About Bridal</Link>
                                <Link to="/portfolio" className="bridal-hero-link">Explore Our Work <span aria-hidden="true">↗</span></Link>
                            </div>
                            <p className="bridal-hero-note">Thoughtful artistry · Timeless elegance · Personal attention</p>
                        </div>
                    </FadeUp>
                    <FadeUp delay={150}>
                        <figure className="bridal-hero-visual">
                            <div className="bridal-hero-image-frame">
                                <img
                                    src="https://images.unsplash.com/photo-1742891602017-40b3a924f476?auto=format&fit=crop&w=1400&q=85"
                                    alt="Indian bride wearing traditional bridal makeup and ornate gold jewellery"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                            <figcaption><span>01</span><span>Radiant by tradition. Unique by design.</span></figcaption>
                        </figure>
                    </FadeUp>
                </div>
            </section>

            {/* THE PROCESS (Split Layout) */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="editorial-grid">
                        <FadeUp delay={100}>
                            <div className="img-wrapper img-portrait border-delicate">
                                <img src={import.meta.env.BASE_URL + 'assets/images/services/service-01.svg'} alt="Bridal Consultation" />
                            </div>
                        </FadeUp>
                        <div style={{ padding: '0 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <FadeUp delay={200}>
                                <h4 className="text-meta color-burgundy" style={{ marginBottom: '0.5rem' }}>Step 01</h4>
                                <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>The Consultation</h2>
                                <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>
                                    Every stunning bridal look begins with an in-depth consultation. We sit down with you to understand your vision, review your wardrobe, and analyze your skin type. This is where we align on the perfect harmony of colors, contouring, and styling tailored to your specific features.
                                </p>
                                <p className="text-secondary">
                                    We also provide customized pre-bridal skincare routines to ensure your skin is healthy, hydrated, and ready for a flawless makeup application.
                                </p>
                            </FadeUp>
                        </div>
                    </div>

                    <div className="editorial-grid reverse" style={{ marginTop: '8rem' }}>
                        <FadeUp delay={100}>
                            <div className="img-wrapper img-portrait border-delicate">
                                <img src={import.meta.env.BASE_URL + 'assets/images/portfolio/port-07.svg'} alt="HD & Airbrush Makeup" />
                            </div>
                        </FadeUp>
                        <div style={{ padding: '0 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <FadeUp delay={200}>
                                <h4 className="text-meta color-burgundy" style={{ marginBottom: '0.5rem' }}>Step 02</h4>
                                <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>HD & Airbrush Mastery</h2>
                                <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>
                                    We utilize premium international products and advanced techniques—including HD and Airbrush makeup—to create a luminous, long-lasting finish. These techniques ensure your makeup feels lightweight and looks pristine under harsh wedding lighting and high-definition photography.
                                </p>
                                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>✦</span> Sweat & Tear Resistant
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>✦</span> Natural Skin-like Finish
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>✦</span> Flawless Photographic Results
                                    </li>
                                </ul>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* BRIDAL GALLERY */}
            <section className="section bg-white">
                <div className="container">
                    <FadeUp>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Our Work</h4>
                            <h2 className="heading-xl">Bridal <i className="italic">Inspiration</i></h2>
                            <p className="text-secondary" style={{ margin: '1rem auto 0', maxWidth: '600px' }}>
                                A glimpse into the timeless elegance and diverse styles we have crafted for our beautiful brides.
                            </p>
                        </div>
                    </FadeUp>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {galleryImages.map((img, index) => (
                            <FadeUp key={index} delay={(index % 3) * 100}>
                                <div className="img-wrapper border-delicate" style={{ height: '400px', cursor: 'pointer', overflow: 'hidden' }}>
                                    <img 
                                        src={img} 
                                        alt={'Bridal Makeup ' + (index + 1)} 
                                        style={{ transition: 'transform 0.5s ease' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                    
                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <FadeUp>
                            <Link to="/portfolio" className="btn">View Full Portfolio</Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section bg-secondary text-center">
                <div className="container-narrow">
                    <FadeUp>
                        <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Availability</h4>
                        <h2 className="heading-xl">Secure Your <i className="italic">Date</i></h2>
                        <p className="text-lead" style={{ margin: '0 auto 3rem' }}>
                            We accept a limited number of bridal bookings per season to ensure unparalleled attention to detail for each bride. Reach out today to check availability.
                        </p>
                        <Link to="/contact" className="btn-solid">Book Consultation</Link>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
