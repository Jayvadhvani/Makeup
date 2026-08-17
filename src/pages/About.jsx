import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

export default function About() {
    const studioImages = [
        import.meta.env.BASE_URL + 'assets/images/gallery/gallery-10.svg',
        import.meta.env.BASE_URL + 'assets/images/gallery/gallery-11.svg',
        import.meta.env.BASE_URL + 'assets/images/gallery/gallery-12.svg',
    ];

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            
            {/* HERO */}
            <div className="container section-sm text-center">
                <FadeUp>
                    <h4 className="text-meta" style={{ marginBottom: '1rem' }}>The Visionary</h4>
                    <h1 className="heading-display"><i className="italic">Sunita</i> Gupta</h1>
                    <div className="line-vertical" style={{ margin: '3rem auto' }}></div>
                    <p className="text-lead" style={{ margin: '0 auto', maxWidth: '800px' }}>
                        With over 15 years of experience in the beauty industry, Sunita Gupta is Kanpur's premier makeup artist, dedicated to empowering women through the transformative art of luxury makeup.
                    </p>
                </FadeUp>
            </div>

            {/* THE ARTIST STORY (Split Layout) */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="editorial-grid">
                        <FadeUp delay={100}>
                            <div className="img-wrapper border-delicate" style={{ height: '600px' }}>
                                <img src={import.meta.env.BASE_URL + 'assets/images/sunita-gupta.jpg'} alt="Sunita Gupta - Lead Makeup Artist" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeUp>
                        <div style={{ padding: '0 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <FadeUp delay={200}>
                                <h4 className="text-meta color-burgundy" style={{ marginBottom: '0.5rem' }}>Our Story</h4>
                                <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>A Legacy of Beauty</h2>
                                <p className="text-secondary" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                    What began as a profound passion for color and aesthetics has evolved into Gold Crown Makeup Studio—a sanctuary of beauty and confidence. Sunita Gupta's journey is defined by her meticulous attention to detail and her innate ability to enhance a woman's natural features rather than masking them.
                                </p>
                                <p className="text-secondary" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                    Certified by prestigious international academies, Sunita brings global techniques to Kanpur. From high-profile fashion editorials to over a thousand stunning bridal transformations, her work is celebrated for its elegance, longevity, and flawless finish.
                                </p>
                                <img src={import.meta.env.BASE_URL + 'assets/images/logo.png'} alt="Signature" style={{ height: '40px', marginTop: '1rem', opacity: 0.6 }} />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* PHILOSOPHY & VALUES */}
            <section className="section bg-white text-center">
                <div className="container-narrow">
                    <FadeUp>
                        <h4 className="text-meta" style={{ marginBottom: '1rem' }}>The Studio Philosophy</h4>
                        <h2 className="heading-xl">Beyond the <i className="italic">Mirror</i></h2>
                        <p className="text-lead" style={{ margin: '3rem auto' }}>
                            "We believe that makeup should not be a disguise. True luxury lies in personalization—understanding your unique bone structure, your skin's texture, and your personal style to create a look that feels authentically and undeniably you."
                        </p>
                    </FadeUp>
                </div>
                
                <div className="container" style={{ marginTop: '4rem' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        <FadeUp delay={100}>
                            <div style={{ padding: '2rem', border: '1px solid rgba(214, 197, 179, 0.4)', height: '100%' }}>
                                <h3 className="heading-md" style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Premium Products</h3>
                                <p className="text-secondary">We strictly use high-end, international, and hypoallergenic products to ensure a radiant, skin-safe, and long-lasting finish.</p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={200}>
                            <div style={{ padding: '2rem', border: '1px solid rgba(214, 197, 179, 0.4)', height: '100%' }}>
                                <h3 className="heading-md" style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Hygiene First</h3>
                                <p className="text-secondary">Sanitation is our top priority. We adhere to rigorous global hygiene standards for all our tools, brushes, and products.</p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={300}>
                            <div style={{ padding: '2rem', border: '1px solid rgba(214, 197, 179, 0.4)', height: '100%' }}>
                                <h3 className="heading-md" style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Continuous Education</h3>
                                <p className="text-secondary">The beauty industry evolves constantly. Our team undergoes regular training to master the latest global trends and techniques.</p>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* STUDIO GLIMPSE */}
            <section className="section bg-secondary">
                <div className="container">
                    <FadeUp>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h4 className="text-meta" style={{ marginBottom: '1rem' }}>The Space</h4>
                            <h2 className="heading-xl">Inside the <i className="italic">Studio</i></h2>
                        </div>
                    </FadeUp>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {studioImages.map((img, index) => (
                            <FadeUp key={index} delay={index * 150}>
                                <div className="img-wrapper border-delicate" style={{ height: '350px' }}>
                                    <img 
                                        src={img} 
                                        alt={'Gold Crown Studio Interior ' + (index + 1)} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section bg-white text-center">
                <div className="container-narrow">
                    <FadeUp>
                        <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Connect</h4>
                        <h2 className="heading-xl">Let's Create <i className="italic">Magic</i></h2>
                        <p className="text-lead" style={{ margin: '0 auto 3rem' }}>
                            Whether it is for your wedding day or you want to learn the art of makeup yourself, we are here for you.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn-solid">Book an Appointment</Link>
                            <Link to="/academy" className="btn">Join the Academy</Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
