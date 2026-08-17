import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

export default function Portfolio() {
    // Top highlighted images for the slider
    const featuredImages = [
        '/assets/images/gallery/gallery-01.svg',
        '/assets/images/gallery/gallery-02.svg',
        '/assets/images/gallery/gallery-03.svg',
        '/assets/images/gallery/gallery-04.svg',
        '/assets/images/gallery/gallery-05.svg',
    ];

    // The rest of the gallery images for the masonry layout
    const masonryImages = [
        '/assets/images/gallery/gallery-06.svg',
        '/assets/images/gallery/gallery-07.svg',
        '/assets/images/gallery/gallery-08.svg',
        '/assets/images/gallery/gallery-09.svg',
        '/assets/images/gallery/gallery-10.svg',
        '/assets/images/gallery/gallery-11.svg',
        '/assets/images/gallery/gallery-12.svg',
        '/assets/images/gallery/gallery-13.svg',
        '/assets/images/gallery/gallery-14.svg',
        '/assets/images/gallery/gallery-15.svg',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === featuredImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? featuredImages.length - 1 : prev - 1));
    };

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            
            {/* HERO */}
            <div className="container section-sm text-center">
                <FadeUp>
                    <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Our Work</h4>
                    <h1 className="heading-display"><i className="italic">Portfolio</i> Gallery</h1>
                    <div className="line-vertical" style={{ margin: '3rem auto' }}></div>
                    <p className="text-lead" style={{ margin: '0 auto', maxWidth: '800px' }}>
                        Browse our extensive collection of bridal transformations, editorial looks, and party glam. Each image reflects our dedication to enhancing natural beauty and crafting the perfect look for every occasion.
                    </p>
                </FadeUp>
            </div>

            {/* FEATURED SLIDER */}
            <section className="section bg-secondary">
                <div className="container">
                    <FadeUp>
                        <h2 className="heading-xl text-center" style={{ marginBottom: '3rem' }}>Featured <i className="italic">Highlights</i></h2>
                        
                        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', height: '600px', overflow: 'hidden', borderRadius: '4px' }}>
                            <img 
                                src={featuredImages[currentSlide]} 
                                alt={'Featured ' + (currentSlide + 1)} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }} 
                            />
                            
                            {/* Overlay Text */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '2rem',
                                background: 'linear-gradient(transparent, rgba(44, 38, 38, 0.8))',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end'
                            }}>
                                <div>
                                    <h4 className="text-meta" style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Look {currentSlide + 1}</h4>
                                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Signature Glamour</h3>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button onClick={prevSlide} aria-label="Previous Image" style={{ background: 'transparent', color: 'white', border: '1px solid white', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>&#10094;</button>
                                    <button onClick={nextSlide} aria-label="Next Image" style={{ background: 'transparent', color: 'white', border: '1px solid white', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>&#10095;</button>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* FULL GALLERY MASONRY */}
            <section className="section bg-white">
                <div className="container">
                    <FadeUp>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Complete Collection</h4>
                            <h2 className="heading-lg">Explore All <i className="italic">Transformations</i></h2>
                        </div>
                    </FadeUp>
                    
                    <div style={{
                        columnCount: 3,
                        columnGap: '1.5rem',
                        '@media (max-width: 1024px)': { columnCount: 2 },
                        '@media (max-width: 768px)': { columnCount: 1 }
                    }} className="masonry-gallery">
                        {masonryImages.map((img, i) => (
                            <FadeUp key={i} delay={(i % 4) * 100}>
                                <div style={{ marginBottom: '1.5rem', breakInside: 'avoid', position: 'relative', group: 'true', cursor: 'pointer' }} className="gallery-item">
                                    <img 
                                        src={img} 
                                        alt={'Portfolio work ' + (i + 6)} 
                                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px' }} 
                                    />
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section bg-secondary text-center">
                <div className="container-narrow">
                    <FadeUp>
                        <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Your Turn</h4>
                        <h2 className="heading-xl">Ready for your <i className="italic">Transformation?</i></h2>
                        <p className="text-lead" style={{ margin: '0 auto 3rem' }}>
                            We would love to be part of your special day. Contact us to discuss your vision and book a trial.
                        </p>
                        <Link to="/contact" className="btn-solid">Get in Touch</Link>
                    </FadeUp>
                </div>
            </section>
            
            <style>{`
                @media (max-width: 1024px) {
                    .masonry-gallery { column-count: 2 !important; }
                }
                @media (max-width: 768px) {
                    .masonry-gallery { column-count: 1 !important; }
                }
            `}</style>
        </div>
    );
}
