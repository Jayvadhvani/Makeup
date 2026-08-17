
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

export default function Home() {
    const reviews = [
        { name: "Ananya Sharma", text: "Sunita ma'am did an absolutely beautiful job with my bridal makeup. She understood exactly what I wanted and made me look elegant without making me feel overdone." },
        { name: "Riya Verma", text: "My experience at Gold Crown Makeup Studio was wonderful. The makeup was flawless, comfortable and looked amazing in photographs." },
        { name: "Priya Singh", text: "I was looking for a soft, elegant bridal look and Sunita ma'am created exactly that. Every little detail was perfect, from the makeup to the overall finish." },
        { name: "Aditi Gupta", text: "One of the best makeup experiences I have ever had. The finish was beautiful, the products felt comfortable and the entire appointment was handled so professionally." },
        { name: "Kavya Tiwari", text: "I booked Gold Crown for my wedding function and I couldn't have been happier. Sunita ma'am made me feel completely comfortable and gave me such a sophisticated look." },
        { name: "Simran Kapoor", text: "I absolutely loved my party makeup! The look was glamorous but still felt like me. The team was warm, professional and very attentive." }
    ];
    const [reviewIndex, setReviewIndex] = useState(0);

    const heroImages = [
        import.meta.env.BASE_URL + 'assets/images/gold-crown-studio-banner1.png',
        import.meta.env.BASE_URL + 'assets/images/bridal/bridal-02.svg',
        import.meta.env.BASE_URL + 'assets/images/gallery/gallery-03.svg'
    ];
    const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000); // Change image every 4 seconds
        return () => clearInterval(timer);
    }, [heroImages.length, heroIndex]);

    const nextHeroSlide = () => {
        setHeroIndex((prev) => (prev + 1) % heroImages.length);
    };
    const prevHeroSlide = () => {
        setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
    };

    const nextReviews = () => {
        setReviewIndex((prev) => (prev + 1) % (reviews.length - 2));
    };
    const prevReviews = () => {
        setReviewIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
    };

    return (
        <>
            <SEO 
                title="Best Bridal Makeup Artist in Kanpur" 
                description="Gold Crown Makeup Studio by Sunita Gupta. Premium bridal makeup, party makeup, and professional makeup academy in Kanpur." 
                keywords="Makeup Studio Kanpur, Best Bridal Makeup Kanpur, Sunita Gupta Makeup Artist, Makeup Academy Kanpur, Party Makeup" 
            />
            {/* HERO */}
            <section className="hero-editorial">
                {/* Full-screen background slider */}
                <div className="hero-bg">
                    {heroImages.map((img, index) => (
                        <img
                            key={'hero-' + index}
                            src={img}
                            alt={'Luxury Bridal Makeup ' + (index + 1)}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: index === heroIndex ? 1 : 0,
                                transition: 'opacity 1.5s ease-in-out'
                            }}
                        />
                    ))}
                    <div className="hero-overlay"></div>
                </div>

                {/* Left Arrow - extreme left center */}
                <button onClick={prevHeroSlide} aria-label="Previous Image" className="hero-arrow hero-arrow-left">&#10094;</button>
                {/* Right Arrow - extreme right center */}
                <button onClick={nextHeroSlide} aria-label="Next Image" className="hero-arrow hero-arrow-right">&#10095;</button>

                {/* Dot indicators */}
                <div className="hero-dots">
                    {heroImages.map((_, i) => (
                        <button key={i} onClick={() => setHeroIndex(i)} className={'hero-dot' + (i === heroIndex ? ' hero-dot-active' : '')} aria-label={'Slide ' + (i+1)} />
                    ))}
                </div>

                <div className="container hero-content">
                    <FadeUp>
                        <div className="hero-meta">Luxury Indian Bridal Makeup</div>
                        <h1 className="heading-display">Elegance in<br/><i className="italic color-burgundy">Every Detail</i></h1>
                        <p className="text-lead hero-text-lead" style={{ margin: '2rem 0 3rem' }}>
                            Gold Crown Makeup Studio by Sunita Gupta brings over 15 years of mastery to craft your perfect bridal and occasion look in Kanpur.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn-solid">Book Your Bridal Look</Link>
                            <Link to="/services" className="btn btn-glass">Explore Services</Link>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* BRAND STORY */}
            <section className="section bg-white">
                <div className="container editorial-grid">
                    <FadeUp>
                        <div className="img-wrapper img-portrait border-delicate">
                            <img src={import.meta.env.BASE_URL + 'assets/images/sunita-gupta.jpg'} alt="Sunita Gupta" />
                        </div>
                    </FadeUp>
                    <div style={{ padding: '10%' }}>
                        <FadeUp delay={200}>
                            <h4 className="text-meta" style={{ marginBottom: '1rem' }}>The Art Behind the Beauty</h4>
                            <h2 className="heading-lg">Meet Sunita Gupta</h2>
                            <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>
                                Every face tells a story. At Gold Crown Makeup Studio, we don't just apply makeup; we enhance your natural grace, ensuring you feel confident and radiantly yourself on your most important days.
                            </p>
                            <p className="text-secondary" style={{ marginBottom: '2.5rem' }}>
                                With personalized consultations and premium techniques, we tailor every brushstroke to your features, outfit, and personal aesthetic.
                            </p>
                            <Link to="/about" className="btn">Discover Our Story</Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* FEATURED SERVICES */}
            <section className="section bg-secondary">
                <div className="container">
                    <FadeUp>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Our Expertise</h4>
                            <h2 className="heading-xl">Curated <i className="italic">Services</i></h2>
                        </div>
                    </FadeUp>
                    
                    <div className="grid-3">
                        {[
                            { title: 'Bridal Makeup', img: import.meta.env.BASE_URL + 'assets/images/services/service-01.svg', link: '/bridal' },
                            { title: 'Party & Occasion', img: import.meta.env.BASE_URL + 'assets/images/services/service-02.svg', link: '/services' },
                            { title: 'Makeup Academy', img: import.meta.env.BASE_URL + 'assets/images/services/service-03.svg', link: '/academy' }
                        ].map((s, i) => (
                            <FadeUp key={i} delay={i * 150}>
                                <div className="service-block">
                                    <div className="img-wrapper img-portrait border-delicate">
                                        <img src={s.img} alt={s.title} />
                                    </div>
                                    <h3 className="heading-md" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>{s.title}</h3>
                                    <Link to={s.link} className="text-meta color-burgundy">Explore &rarr;</Link>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* ORNAMENT / DIVIDER */}
            <div className="container section-sm text-center">
                <div className="line-vertical"></div>
            </div>

            {/* PORTFOLIO TEASER */}
            <section className="section">
                <div className="container">
                    <FadeUp>
                        <div className="editorial-grid reverse">
                            <div style={{ paddingRight: '10%' }}>
                                <h4 className="text-meta" style={{ marginBottom: '1rem' }}>The Gallery</h4>
                                <h2 className="heading-xl">Signature <i className="italic">Looks</i></h2>
                                <p className="text-secondary" style={{ marginBottom: '2.5rem' }}>
                                    From soft, contemporary glam to rich, traditional Indian bridal aesthetics, view our curated portfolio of real clients.
                                </p>
                                <Link to="/portfolio" className="btn">View Portfolio</Link>
                            </div>
                            <div className="grid-2">
                                <div className="img-wrapper img-portrait" style={{ marginTop: '4rem' }}>
                                    <img src={import.meta.env.BASE_URL + 'assets/images/gallery/gallery-01.svg'} alt="Portfolio 1" />
                                </div>
                                <div className="img-wrapper img-portrait">
                                    <img src={import.meta.env.BASE_URL + 'assets/images/gallery/gallery-02.svg'} alt="Portfolio 2" />
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* TESTIMONIALS TEASER */}
            <section className="section bg-secondary">
                <div className="container">
                    <FadeUp>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Client Love</h4>
                            <h2 className="heading-xl">Words of <i className="italic">Praise</i></h2>
                        </div>
                    </FadeUp>
                    
                    <div style={{ position: 'relative', padding: '0 1rem' }}>
                        <button onClick={prevReviews} aria-label="Previous Reviews" style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', background: 'var(--accent-primary)', color: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>&#10094;</button>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            marginBottom: '3rem',
                            overflow: 'hidden'
                        }}>
                            {reviews.slice(reviewIndex, reviewIndex + 3).map((review, i) => (
                                <FadeUp key={reviewIndex + '-' + i} delay={i * 100}>
                                    <div style={{
                                        backgroundColor: 'var(--bg-white)',
                                        padding: '2rem',
                                        border: '1px solid rgba(214, 197, 179, 0.3)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <div style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
                                        <p className="text-secondary" style={{ fontStyle: 'italic', flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                            "{review.text}"
                                        </p>
                                        <h4 className="text-meta color-burgundy">— {review.name}</h4>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                        
                        <button onClick={nextReviews} aria-label="Next Reviews" style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', background: 'var(--accent-primary)', color: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>&#10095;</button>
                    </div>
                    
                    <div className="text-center">
                        <FadeUp>
                            <Link to="/testimonials" className="btn">Read All Reviews</Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section bg-white text-center">
                <div className="container-narrow">
                    <FadeUp>
                        <h2 className="heading-xl">Ready to Discuss Your Look?</h2>
                        <p className="text-lead" style={{ margin: '0 auto 3rem' }}>
                            Contact Gold Crown Makeup Studio to check availability for your event date and begin your personalized beauty journey.
                        </p>
                        <Link to="/contact" className="btn-solid">Book Now</Link>
                    </FadeUp>
                </div>
            </section>
        </>
    );
}
