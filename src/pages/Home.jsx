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
    const [openFaq, setOpenFaq] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardsToShow = isMobile ? 1 : 3;

    const heroImages = [
        import.meta.env.BASE_URL + 'assets/images/banner1.jpg',
        import.meta.env.BASE_URL + 'assets/images/Banner-2.jpg'
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
        setReviewIndex((prev) => (prev + 1) % reviews.length);
    };
    const prevReviews = () => {
        setReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
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
                                // Keep the bridal face and jewellery in frame after reducing the hero height.
                                objectPosition: index === 0 ? 'center 34%' : 'center 24%',
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

            {/* TRUST STRIP */}
            <section className="trust-strip" aria-label="Gold Crown Makeup Studio highlights">
                <div className="container">
                    <div className="trust-strip-heading">
                        <span className="trust-strip-eyebrow">The Gold Crown Difference</span>
                        <span className="trust-strip-rule" aria-hidden="true"></span>
                    </div>
                    <div className="trust-strip-grid">
                        <div className="trust-item">
                            <div className="trust-icon" aria-hidden="true">
                                <svg viewBox="0 0 48 48" fill="none">
                                    <path d="M24 5.5 29.2 16l11.6 1.7-8.4 8.2 2 11.6L24 32l-10.4 5.5 2-11.6-8.4-8.2L18.8 16 24 5.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
                                    <path d="m18.5 23.5 3.6 3.6 7.6-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="trust-copy">
                                <strong>15+ Years</strong>
                                <span>Makeup Artistry Experience</span>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon" aria-hidden="true">
                                <svg viewBox="0 0 48 48" fill="none">
                                    <path d="M24 6 28.5 15.2 38.7 16.7 31.3 24l1.8 10.3L24 29.4l-9.1 4.9L16.7 24l-7.4-7.3 10.2-1.5L24 6Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/>
                                    <path d="M7 39c2.8-5.5 7.2-8.2 13-8.2M41 39c-2.8-5.5-7.2-8.2-13-8.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="trust-copy">
                                <strong>Bridal & Occasion</strong>
                                <span>Looks for Your Special Moments</span>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon" aria-hidden="true">
                                <svg viewBox="0 0 48 48" fill="none">
                                    <path d="M24 40s-15-8.7-15-21a8.5 8.5 0 0 1 15-5.5A8.5 8.5 0 0 1 39 19c0 12.3-15 21-15 21Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
                                    <path d="M16 23.5h5l2.4-5.5 3.2 11 2.1-5.5H33" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="trust-copy">
                                <strong>Personalized Care</strong>
                                <span>Looks Tailored to You</span>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon" aria-hidden="true">
                                <svg viewBox="0 0 48 48" fill="none">
                                    <path d="M24 5.5 28.8 15l10.5 1.5-7.6 7.4 1.8 10.4L24 29.4l-9.5 4.9 1.8-10.4-7.6-7.4L19.2 15 24 5.5Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/>
                                    <path d="M17.5 40h13M24 35v5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="trust-copy">
                                <strong>Studio & Academy</strong>
                                <span>Beauty Services and Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BRAND STORY */}
            <section className="brand-story-section">
                <div className="container brand-story-grid">
                    <FadeUp>
                        <div className="brand-story-portrait">
                            <div className="brand-story-image-frame">
                                <img src={import.meta.env.BASE_URL + 'assets/images/sunita-gupta.jpg'} alt="Sunita Gupta, founder of Gold Crown Makeup Studio" loading="lazy" />
                            </div>
                            <span className="brand-story-image-caption">Gold Crown Makeup Studio</span>
                        </div>
                    </FadeUp>
                    <div className="brand-story-content">
                        <FadeUp delay={140}>
                            <p className="text-meta brand-story-eyebrow">The Art Behind the Beauty</p>
                            <h2 className="brand-story-title">Meet <span>Sunita Gupta</span></h2>
                            <div className="brand-story-rule" aria-hidden="true"><span /></div>
                            <p className="brand-story-lead"><strong>Every face tells a story.</strong> At Gold Crown Makeup Studio, we don't just apply makeup; we enhance your natural grace, helping you feel confident and radiantly yourself on your most important days.</p>
                            <p className="brand-story-description">With personalized consultations and premium techniques, we tailor every brushstroke to your features, outfit, and personal aesthetic.</p>
                            <div className="brand-story-values" aria-label="Our approach">
                                <div className="brand-story-value">
                                    <span className="brand-story-value-icon" aria-hidden="true">◇</span>
                                    <span>Personalized<br />Consultations</span>
                                </div>
                                <div className="brand-story-value">
                                    <span className="brand-story-value-icon" aria-hidden="true">✧</span>
                                    <span>Premium<br />Techniques</span>
                                </div>
                                <div className="brand-story-value">
                                    <span className="brand-story-value-icon" aria-hidden="true">♡</span>
                                    <span>Natural &amp;<br />Radiant Looks</span>
                                </div>
                                <div className="brand-story-value">
                                    <span className="brand-story-value-icon" aria-hidden="true">☆</span>
                                    <span>Your Special<br />Moments</span>
                                </div>
                            </div>
                            <Link to="/about" className="brand-story-cta">Discover Our Story <span aria-hidden="true">→</span></Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* FOUNDER VIDEO */}
            <section className="founder-video-section" aria-labelledby="founder-video-title">
                <div className="founder-video-script" aria-hidden="true">Gold Crown</div>
                <div className="founder-video-floral founder-video-floral-top" aria-hidden="true">❧</div>
                <div className="founder-video-floral founder-video-floral-bottom" aria-hidden="true">✿</div>
                <div className="container founder-video-container">
                    <FadeUp>
                        <header className="founder-video-heading">
                            <p className="founder-video-eyebrow"><span aria-hidden="true">•</span> A Closer Look <span aria-hidden="true">•</span></p>
                            <h2 id="founder-video-title">Discover the <em>Gold Crown</em><br className="founder-video-title-break" /> Experience</h2>
                            <div className="founder-video-crown-rule" aria-hidden="true"><span></span><b>♛</b><span></span></div>
                            <p>Step into our world of beauty, artistry, and the details that make every special look memorable.</p>
                        </header>
                        <div className="founder-video-frame-wrap">
                            <div className="founder-video-frame">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/dcDdFLR52TU"
                                    title="Visit Sunita Gupta's Gold Crown Makeup Studio"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="founder-video-link-wrap">
                            <span className="founder-video-link-rule" aria-hidden="true"></span>
                            <a href="https://www.youtube.com/watch?v=dcDdFLR52TU" target="_blank" rel="noreferrer" className="founder-video-link"><span className="founder-video-play-icon" aria-hidden="true">▷</span> Watch on YouTube <span className="founder-video-link-arrow" aria-hidden="true">→</span></a>
                            <span className="founder-video-link-rule" aria-hidden="true"></span>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* FEATURED SERVICES */}
            <section className="curated-services-section" aria-labelledby="curated-services-title">
                <div className="curated-services-script" aria-hidden="true">Our Services</div>
                <div className="curated-services-ornament curated-services-ornament-left" aria-hidden="true">❧</div>
                <div className="curated-services-ornament curated-services-ornament-right" aria-hidden="true">✿</div>
                <div className="container curated-services-container">
                    <FadeUp>
                        <header className="curated-services-heading">
                            <p className="curated-services-eyebrow"><span></span> Our Expertise <span></span></p>
                            <h2 id="curated-services-title">Curated <em>Services</em></h2>
                            <p>From bridal transformations to party glam and professional training,<br className="curated-services-desktop-break" /> we offer personalized services to bring out your most beautiful self.</p>
                            <div className="curated-services-crown-rule" aria-hidden="true"><span></span><b>♛</b><span></span></div>
                        </header>
                    </FadeUp>
                    <div className="curated-services-grid">
                        {[
                            {
                                title: 'Bridal Makeup',
                                description: 'Timeless bridal looks tailored to your style, enhancing your natural beauty for your special day.',
                                img: 'https://cdn0.weddingwire.in/vendor/7838/3_2/960/jpg/file-1693904960859_15_77838-169390496068714.jpeg',
                                alt: 'Indian bride with traditional bridal makeup and ornate gold jewelry',
                                link: '/bridal',
                                icon: '♙'
                            },
                            {
                                title: 'Party & Occasion',
                                description: 'Stunning looks for every celebration be it receptions, parties, or special events that make you stand out.',
                                img: 'https://pallavityagi.com/images/portfolio-party.png',
                                alt: 'Elegant party makeup look for a special occasion',
                                link: '/services',
                                icon: '♧'
                            },
                            {
                                title: 'Makeup Academy',
                                description: 'Learn from industry expertise with hands-on training and professional guidance to build your career.',
                                img: 'https://assets.lakme-academy.com/images/blogs/1771997541426-behind-the-magazine-cover-fashion-industry-careers-you-can-train-for.jpg',
                                alt: 'Makeup artist demonstrating eye makeup techniques during training',
                                link: '/academy',
                                icon: '⌂'
                            }
                        ].map((service, i) => (
                            <FadeUp key={service.title} delay={i * 130}>
                                <article className="curated-service-card">
                                    <Link to={service.link} className="curated-service-image-link" aria-label={`Explore ${service.title}`}>
                                        <div className="curated-service-image">
                                            <img src={service.img} alt={service.alt} loading="lazy" />
                                        </div>
                                    </Link>
                                    <div className="curated-service-icon" aria-hidden="true">{service.icon}</div>
                                    <div className="curated-service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <div className="curated-service-divider" aria-hidden="true"><span>◆</span></div>
                                        <Link to={service.link} className="curated-service-cta">Explore <span aria-hidden="true">→</span></Link>
                                    </div>
                                </article>
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
            <section className="signature-gallery-section" aria-labelledby="signature-gallery-title">
                <div className="container signature-gallery-layout">
                    <FadeUp>
                        <div className="signature-gallery-visual" aria-label="Bridal makeup portfolio preview">
                            <div className="signature-gallery-wash" aria-hidden="true"></div>
                            <div className="signature-gallery-ornament signature-gallery-ornament-one" aria-hidden="true">✿</div>
                            <div className="signature-gallery-ornament signature-gallery-ornament-two" aria-hidden="true">❧</div>
                            <figure className="signature-gallery-photo signature-gallery-photo-main">
                                <img
                                    src="https://images.pexels.com/photos/10954282/pexels-photo-10954282.jpeg?auto=compress&cs=tinysrgb&w=900"
                                    alt="Indian bride wearing traditional bridal jewelry and detailed makeup"
                                    loading="lazy"
                                />
                            </figure>
                            <figure className="signature-gallery-photo signature-gallery-photo-detail">
                                <img
                                    src="https://images.pexels.com/photos/10954271/pexels-photo-10954271.jpeg?auto=compress&cs=tinysrgb&w=900"
                                    alt="Close-up of bridal makeup, jewelry, and a carefully finished look"
                                    loading="lazy"
                                />
                            </figure>
                            <span className="signature-gallery-image-note">Beauty in every detail</span>
                        </div>
                    </FadeUp>
                    <div className="signature-gallery-copy">
                        <FadeUp delay={140}>
                            <p className="signature-gallery-eyebrow"><span>The Gallery</span></p>
                            <h2 id="signature-gallery-title" className="signature-gallery-title">Signature <em>Looks</em></h2>
                            <div className="signature-gallery-rule" aria-hidden="true"><span /></div>
                            <p className="signature-gallery-description">
                                From soft, contemporary glam to rich, traditional Indian bridal artistry, explore a collection of looks created to celebrate every bride’s individuality.
                            </p>
                            <Link to="/portfolio" className="signature-gallery-cta">View Portfolio <span aria-hidden="true">⟶</span></Link>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS TEASER */}
            <section className="client-praise-section" aria-labelledby="client-praise-title">
                <div className="client-praise-script" aria-hidden="true">Client Love</div>
                <div className="container client-praise-container">
                    <FadeUp>
                        <header className="client-praise-heading">
                            <p className="client-praise-eyebrow"><span></span> Client Love <span></span></p>
                            <h2 id="client-praise-title">Words of <em>Praise</em></h2>
                            <p>Real stories. Real transformations. Real happiness.</p>
                            <div className="client-praise-crown" aria-hidden="true"><span></span><b>♛</b><span></span></div>
                        </header>
                    </FadeUp>
                    <div className="client-praise-carousel">
                        <button onClick={prevReviews} aria-label="Previous reviews" className="client-praise-arrow client-praise-arrow-left">‹</button>
                        <div className="client-praise-grid">
                            {reviews.slice(reviewIndex, reviewIndex + cardsToShow).map((review, i) => (
                                <article key={reviewIndex + '-' + i} className="client-praise-card">
                                    <div className="client-praise-avatar" aria-hidden="true">{review.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</div>
                                    <div className="client-praise-quote-mark" aria-hidden="true">“</div>
                                    <div className="client-praise-stars" aria-label="5 out of 5 stars">★★★★★</div>
                                    <p className="client-praise-review">“{review.text}”</p>
                                    <h3 className="client-praise-name">{review.name}</h3>
                                    <div className="client-praise-card-rule" aria-hidden="true"><span>◆</span></div>
                                </article>
                            ))}
                        </div>
                        <button onClick={nextReviews} aria-label="Next reviews" className="client-praise-arrow client-praise-arrow-right">›</button>
                    </div>
                    <div className="client-praise-footer">
                        <Link to="/testimonials" className="client-praise-cta">Read All Reviews <span aria-hidden="true">→</span></Link>
                        <div className="client-praise-bottom-rule" aria-hidden="true"><span></span><b>♛</b><span></span></div>
                    </div>
                </div>
            </section>

                        {/* LATEST BEAUTY JOURNAL */}
            <section className="section bg-white">
                <div className="container">
                    <FadeUp>
                        <div className="journal-heading">
                            <div>
                                <h4 className="text-meta" style={{ marginBottom: '1rem' }}>From the Beauty Journal</h4>
                                <h2 className="heading-xl">Bridal Beauty <i className="italic">Insights</i></h2>
                                <p className="text-secondary journal-intro">Thoughtful tips to help you plan your look, care for your skin, and feel confident on your special day.</p>
                            </div>
                            <Link to="/blog" className="btn journal-all-link">Explore All Articles</Link>
                        </div>
                    </FadeUp>
                    <div className="journal-grid">
                        <FadeUp delay={0}>
                            <article className="journal-card">
                                <Link to="/blog#bridal-makeup-timeline" className="journal-image-link" aria-label="Read: How to Plan Your Bridal Makeup Timeline">
                                    <img src="https://images.pexels.com/photos/10954282/pexels-photo-10954282.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Indian bride wearing traditional bridal jewelry and makeup" loading="lazy" />
                                    <span className="journal-category">Bridal Planning</span>
                                </Link>
                                <div className="journal-card-body">
                                    <p className="journal-meta">5 minute read</p>
                                    <h3>How to Plan Your Bridal Makeup Timeline</h3>
                                    <p>From the first consultation to the final touch-up, a calm schedule helps your wedding morning feel more effortless.</p>
                                    <Link to="/blog#bridal-makeup-timeline" className="journal-read-link">Read article <span aria-hidden="true">→</span></Link>
                                </div>
                            </article>
                        </FadeUp>
                        <FadeUp delay={100}>
                            <article className="journal-card">
                                <Link to="/blog#skin-prep-before-wedding" className="journal-image-link" aria-label="Read: Simple Skin Prep Before Your Wedding">
                                    <img src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Skincare products arranged for a simple beauty routine" loading="lazy" />
                                    <span className="journal-category">Skin Preparation</span>
                                </Link>
                                <div className="journal-card-body">
                                    <p className="journal-meta">4 minute read</p>
                                    <h3>Simple Skin Prep Before Your Wedding</h3>
                                    <p>Build a gentle, consistent routine and know what to avoid close to your event to help makeup sit comfortably.</p>
                                    <Link to="/blog#skin-prep-before-wedding" className="journal-read-link">Read article <span aria-hidden="true">→</span></Link>
                                </div>
                            </article>
                        </FadeUp>
                        <FadeUp delay={200}>
                            <article className="journal-card">
                                <Link to="/blog#choose-bridal-makeup-look" className="journal-image-link" aria-label="Read: Choosing a Bridal Makeup Look That Feels Like You">
                                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Makeup artist preparing a client for a beauty look" loading="lazy" />
                                    <span className="journal-category">Makeup Inspiration</span>
                                </Link>
                                <div className="journal-card-body">
                                    <p className="journal-meta">4 minute read</p>
                                    <h3>Choose a Bridal Makeup Look That Feels Like You</h3>
                                    <p>Use your outfit, ceremony, comfort, and personal style to guide a look that feels polished and authentically yours.</p>
                                    <Link to="/blog#choose-bridal-makeup-look" className="journal-read-link">Read article <span aria-hidden="true">→</span></Link>
                                </div>
                            </article>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="section bg-secondary">
                <div className="container faq-layout">
                    <FadeUp>
                        <div className="faq-intro">
                            <h4 className="text-meta" style={{ marginBottom: '1rem' }}>A Little Clarity</h4>
                            <h2 className="heading-xl">Frequently Asked <i className="italic">Questions</i></h2>
                            <p className="text-secondary">Planning a bridal look should feel exciting, not overwhelming. Here are answers to a few common questions.</p>
                            <Link to="/contact" className="btn-solid" style={{ marginTop: '2rem' }}>Ask Us Directly</Link>
                        </div>
                    </FadeUp>
                    <div className="faq-list">
                        {[
                            {
                                question: 'How do I book a bridal makeup appointment?',
                                answer: 'Contact Gold Crown Makeup Studio through the booking form, phone, or WhatsApp. Share your event date, function, venue, and the services you are interested in so the team can discuss availability and the next steps.'
                            },
                            {
                                question: 'When should I enquire about my wedding date?',
                                answer: 'It is a good idea to enquire as early as you can, especially for popular wedding dates and peak seasons. Availability varies by date, so please contact the studio to confirm your event.'
                            },
                            {
                                question: 'Can my makeup look be customized to my outfit and personal style?',
                                answer: 'Yes. Your preferred finish, outfit colours, jewellery, event setting, and comfort are useful starting points for a personalized consultation. Bring reference images if you have them, and discuss what feels most like you.'
                            },
                            {
                                question: 'Do you offer makeup for engagements, receptions, and other occasions?',
                                answer: 'Gold Crown Makeup Studio offers bridal and occasion makeup services. Contact the studio with your event details to discuss the most suitable option and availability.'
                            },
                            {
                                question: 'How should I prepare my skin before my makeup appointment?',
                                answer: 'Keep your routine gentle and familiar, moisturize as usual, and avoid trying new strong skincare products immediately before your event. If you have a skin concern, consult a qualified dermatologist well ahead of the date.'
                            },
                            {
                                question: 'Does the studio also provide makeup training?',
                                answer: 'The website includes a Makeup Academy section. Contact the studio to ask about current courses, training formats, schedules, and enrolment details.'
                            }
                        ].map((item, index) => (
                            <div className={'faq-item' + (openFaq === index ? ' faq-item-open' : '')} key={item.question}>
                                <h3 className="faq-question-heading">
                                    <button
                                        className="faq-question"
                                        type="button"
                                        aria-expanded={openFaq === index}
                                        aria-controls={'home-faq-answer-' + index}
                                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                    >
                                        <span>{item.question}</span>
                                        <span className="faq-toggle" aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                                    </button>
                                </h3>
                                <div id={'home-faq-answer-' + index} className="faq-answer" hidden={openFaq !== index}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
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
