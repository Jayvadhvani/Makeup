import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

export default function Academy() {
    const curriculum = [
        {
            title: 'Professional Makeup Course',
            duration: '4 Weeks',
            desc: 'A comprehensive foundational course designed for beginners. Learn color theory, skin anatomy, sanitation, tool mastery, and basic everyday to party makeup looks.',
            highlights: ['Color Theory & Matching', 'Skin Preparation & Analysis', 'Day & Evening Looks', 'Brush Mastery']
        },
        {
            title: 'Advanced Bridal Masterclass',
            duration: '6 Weeks',
            desc: 'Take your skills to the professional level. This intensive module covers advanced techniques required for high-pressure bridal environments, including traditional and modern Indian bridal aesthetics.',
            highlights: ['HD & Airbrush Techniques', 'Advanced Contouring', 'Bridal Hair Styling', 'Dupatta Draping']
        },
        {
            title: 'Editorial & Fashion Styling',
            duration: '2 Weeks',
            desc: 'Explore the creative side of makeup artistry. Learn how to create avant-garde looks, work with harsh studio lighting, and collaborate with photographers and models.',
            highlights: ['High Fashion Aesthetics', 'Creative Eyeliner Techniques', 'Working on Set', 'Portfolio Building']
        }
    ];

    const studentWork = [
        import.meta.env.BASE_URL + 'assets/images/gallery/gallery-01.svg',
        import.meta.env.BASE_URL + 'assets/images/gallery/gallery-02.svg',
        import.meta.env.BASE_URL + 'assets/images/gallery/gallery-03.svg',
        import.meta.env.BASE_URL + 'assets/images/gallery/gallery-04.svg'
    ];

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
            {/* HERO SECTION */}
            <section className="container section-sm text-center">
                <FadeUp>
                    <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Education</h4>
                    <h1 className="heading-display"><i className="italic">Gold Crown</i> Academy</h1>
                    <div className="line-vertical" style={{ margin: '3rem auto' }}></div>
                    <p className="text-lead" style={{ margin: '0 auto', maxWidth: '800px' }}>
                        Turn your passion into a profession. Learn the art, science, and business of makeup artistry directly from Sunita Gupta. Our intensive hands-on courses are designed to build your skills and launch your career.
                    </p>
                </FadeUp>
            </section>

            {/* WHY CHOOSE US (Split Layout) */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="editorial-grid">
                        <FadeUp delay={100}>
                            <div className="img-wrapper academy-mentorship-image border-delicate">
                                <img src="https://freelancemakeupartistinkanpursunitagupta.wordpress.com/wp-content/uploads/2024/06/the-art-of-bridal-makeup-insights-from-sunita-gupta.jpg" alt="Gold Crown Makeup Studio students celebrating their makeup artist certification with Sunita Gupta" loading="lazy" />
                            </div>
                        </FadeUp>
                        <div style={{ padding: '0 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <FadeUp delay={200}>
                                <h4 className="text-meta color-burgundy" style={{ marginBottom: '0.5rem' }}>The Difference</h4>
                                <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Hands-On Mentorship</h2>
                                <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>
                                    Unlike theoretical classes, the Gold Crown Academy emphasizes intense practical training. Every technique taught by Sunita Gupta is followed by supervised hands-on practice sessions on live models.
                                </p>
                                <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>✦</span> Small Batch Sizes for Personal Attention
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>✦</span> Live Demonstrations
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>✦</span> Business & Client Management Skills
                                    </li>
                                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>✦</span> Recognized Certification
                                    </li>
                                </ul>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* CURRICULUM */}
            <section className="section bg-white academy-curriculum">
                <div className="container academy-curriculum-container">
                    <FadeUp>
                        <div className="text-center curriculum-heading">
                            <div className="curriculum-eyebrow"><span></span><h4 className="text-meta">Syllabus</h4><span></span></div>
                            <h2 className="heading-xl">Course <i className="italic">Curriculum</i></h2>
                            <div className="curriculum-flourish" aria-hidden="true"><span></span><b>◆</b><span></span></div>
                        </div>
                    </FadeUp>

                    <div className="curriculum-grid">
                        {curriculum.map((course, i) => {
                            const highlightIcons = [
                                ['◉', '♧', '◎', '✧'],
                                ['▣', '❋', '◇', '♕'],
                                ['♧', '☆', '▣', '♧']
                            ];
                            return (
                                <FadeUp key={i} delay={i * 120}>
                                    <article className="curriculum-card">
                                        <div className="curriculum-card-top">
                                            <div className="curriculum-number"><span>{String(i + 1).padStart(2, '0')}</span><i></i></div>
                                            <span className="curriculum-duration">
                                                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="1.5"></rect><path d="M8 3v4M16 3v4M4 10h16M8 14h2M14 14h2"></path></svg>
                                                {course.duration}
                                            </span>
                                        </div>
                                        <h3 className="curriculum-card-title">{course.title}</h3>
                                        <p className="curriculum-card-description">{course.desc}</p>
                                        <ul className="curriculum-highlights">
                                            {course.highlights.map((highlight, j) => (
                                                <li key={j}>
                                                    <span className="curriculum-highlight-icon" aria-hidden="true">{highlightIcons[i][j]}</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </FadeUp>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* STUDENT GALLERY */}
            <section className="section bg-secondary">
                <div className="container">
                    <FadeUp>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Showcase</h4>
                            <h2 className="heading-xl">Student <i className="italic">Portfolio</i></h2>
                            <p className="text-secondary" style={{ margin: '1rem auto 0', maxWidth: '600px' }}>
                                A look at the incredible work produced by our alumni during their training sessions.
                            </p>
                        </div>
                    </FadeUp>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {studentWork.map((img, index) => (
                            <FadeUp key={index} delay={index * 100}>
                                <div className="border-delicate" style={{ height: '350px', overflow: 'hidden' }}>
                                    <img 
                                        src={img} 
                                        alt={'Student Work ' + (index + 1)} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
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
                        <h4 className="text-meta" style={{ marginBottom: '1rem' }}>Enrollment</h4>
                        <h2 className="heading-xl">Begin Your <i className="italic">Career</i></h2>
                        <p className="text-lead" style={{ margin: '0 auto 3rem' }}>
                            Seats for our upcoming batches are highly limited to ensure personalized attention. Get in touch to request our syllabus brochure and fee structure.
                        </p>
                        <Link to="/contact" className="btn-solid">Inquire About Courses</Link>
                    </FadeUp>
                </div>
            </section>
        </div>
    );
}
