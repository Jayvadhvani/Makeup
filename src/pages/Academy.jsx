import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

const asset = (name) => `${import.meta.env.BASE_URL}assets/images/academy/${name}`;

const courses = [
    {
        title: 'Professional Makeup Artist Course',
        tag: 'Build your foundation',
        duration: 'Enquire for current schedule',
        description: 'Develop your makeup artistry from the fundamentals through structured lessons and guided practice. Designed for learners who want to understand technique, products and professional working habits.',
        topics: ['Skin analysis and preparation', 'Colour theory and foundation matching', 'Day, evening and party looks', 'Brushes, tools and hygiene']
    },
    {
        title: 'Bridal Makeup Course',
        tag: 'Bridal artistry',
        duration: 'Enquire for current schedule',
        description: 'Explore the techniques behind polished bridal looks, with attention to skin finish, feature definition and adapting makeup to the occasion and individual client.',
        topics: ['Bridal base and long-wear finish', 'Eye makeup and lash application', 'Contour, highlight and blush placement', 'Bridal look planning and finishing']
    },
    {
        title: 'Airbrush & HD Makeup',
        tag: 'Refine your technique',
        duration: 'Availability on enquiry',
        description: 'Learn about high-definition finishes and airbrush makeup principles, including product selection, application control and creating a balanced result for photography and events.',
        topics: ['HD finish principles', 'Airbrush equipment and product knowledge', 'Layering and coverage control', 'Photography-ready finishing']
    },
    {
        title: 'Self-Makeup & Occasion Looks',
        tag: 'Everyday confidence',
        duration: 'Enquire for current schedule',
        description: 'Understand how to create a look that suits your features, preferences and occasion, from an everyday routine to a more defined party look.',
        topics: ['Personal skin-prep routine', 'Simple everyday base', 'Eye and lip combinations', 'Product selection and application']
    },
    {
        title: 'Hairstyling for Makeup Artists',
        tag: 'Complete the look',
        duration: 'Confirm modules on enquiry',
        description: 'Build an understanding of occasion hairstyling and how hair, makeup and outfit styling work together to create a cohesive finished look.',
        topics: ['Hair preparation and sectioning', 'Foundational styling techniques', 'Bridal and occasion look coordination', 'Finishing and setting products']
    },
    {
        title: 'Editorial & Fashion Makeup',
        tag: 'Creative expression',
        duration: 'Availability on enquiry',
        description: 'Explore creative makeup concepts, colour placement and the considerations involved in producing makeup looks for editorial and photoshoot settings.',
        topics: ['Creative concept and reference planning', 'Colour and texture exploration', 'Makeup for photography', 'Portfolio presentation']
    }
];

const curriculumGroups = [
    { title: '01. Skin & Preparation', items: ['Skin types and basic skin analysis', 'Cleansing and preparation', 'Primer selection and product compatibility', 'Foundation shade and undertone matching'] },
    { title: '02. Base & Face Structure', items: ['Concealing and correcting', 'Foundation application and blending', 'Contour, highlight and blush placement', 'Powdering and setting techniques'] },
    { title: '03. Eyes, Brows & Lips', items: ['Eye shapes and eye-makeup placement', 'Blending and colour coordination', 'Brow definition and false-lash application', 'Lip preparation, lining and finishing'] },
    { title: '04. Professional Practice', items: ['Brush and tool care', 'Hygiene and sanitation practices', 'Client consultation and look planning', 'Photography, portfolio and service presentation'] }
];

const faqs = [
    { q: 'Do I need previous makeup experience?', a: 'Course prerequisites can vary. Ask the academy which current batch is suitable for beginners and whether any prior experience is required.' },
    { q: 'How long does a course take?', a: 'Duration depends on the selected course and batch schedule. Contact the academy for the current duration, class days and timings.' },
    { q: 'What are the course fees?', a: 'Fees depend on the course and included training. Contact the academy for the latest fee structure before enrolling.' },
    { q: 'Will I get practical training?', a: 'Ask about the practical format for your chosen course, including demonstrations, supervised practice and whether model practice is included.' },
    { q: 'Will I receive a certificate?', a: 'Please confirm the certificate requirements and course-completion criteria with the academy before admission.' },
    { q: 'How can I enrol?', a: 'Send an enquiry through WhatsApp or the Contact page. Share the course you are interested in and the team can guide you on current batches and next steps.' }
];

const galleryImages = [
    'student-makeup-01.jpg',
    'student-makeup-02.jpg',
    'student-makeup-03.jpg',
    'student-makeup-04.jpg',
    'student-makeup-05.jpg',
    'student-makeup-06.jpg'
];

const testimonials = [
    { image: 'student-testimonial-01.jpg', name: 'Student testimonial', quote: 'Add an approved student review here. Keep the student’s wording accurate and publish it only with permission.' },
    { image: 'student-testimonial-02.jpg', name: 'Student testimonial', quote: 'Add a second genuine review about the learning experience, practical sessions or mentor support.' },
    { image: 'student-testimonial-03.jpg', name: 'Student testimonial', quote: 'Add another verified testimonial. Avoid publishing names, photos or claims without the student’s consent.' }
];

function ImagePlaceholder({ name, className = '', alt = '' }) {
    return (
        <div className={`academy-image-placeholder ${className}`} role="img" aria-label={alt || `Image placeholder: ${name}`}>
            <span className="academy-image-placeholder-mark" aria-hidden="true">✦</span>
            <span className="academy-image-placeholder-label">{name}</span>
        </div>
    );
}

function SectionHeading({ eyebrow, title, italic, description }) {
    return (
        <FadeUp>
            <div className="academy-section-heading">
                <p className="academy-eyebrow">{eyebrow}</p>
                <h2>{title} {italic && <em>{italic}</em>}</h2>
                {description && <p className="academy-section-description">{description}</p>}
                <div className="academy-heading-rule" aria-hidden="true"><span></span><b>✦</b><span></span></div>
            </div>
        </FadeUp>
    );
}

export default function Academy() {
    const [openFaq, setOpenFaq] = useState(0);

    const whatsappUrl = 'https://wa.me/919839550961?text=' + encodeURIComponent('Hello Gold Crown Makeup Studio, I would like to enquire about Makeup Academy courses, fees and upcoming batches.');

    return (
        <div className="academy-page">
            <SEO
                title="Makeup Academy in Kanpur"
                description="Explore makeup artist training at Gold Crown Makeup Studio in Kanpur with Sunita Gupta. Enquire about professional makeup, bridal, airbrush, self-makeup and hairstyling courses."
                keywords="Makeup Academy in Kanpur, Makeup Artist Course Kanpur, Bridal Makeup Course, Sunita Gupta, Gold Crown Makeup Academy, Professional Makeup Training"
            />

            {/* 01 — Academy hero */}
            <section className="academy-hero">
                <div className="academy-hero-grain" aria-hidden="true"></div>
                <div className="container academy-hero-grid">
                    <div className="academy-hero-copy">
                        <FadeUp>
                            <p className="academy-eyebrow academy-eyebrow-light">GOLD CROWN MAKEUP STUDIO · ACADEMY</p>
                            <h1>Turn your passion<br />into <em>your profession.</em></h1>
                            <p className="academy-hero-lead">Learn the art of makeup with guidance from master makeup artist Sunita Gupta. Explore professional techniques, build your confidence and take the next step in your beauty journey.</p>
                            <div className="academy-hero-actions">
                                <a className="btn-solid academy-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Enquire About Courses <span aria-hidden="true">↗</span></a>
                                <a className="academy-text-link" href="#academy-courses">Explore courses <span aria-hidden="true">↓</span></a>
                            </div>
                            <div className="academy-hero-note"><span aria-hidden="true">✦</span> Practical learning. Creative confidence. Professional foundations.</div>
                        </FadeUp>
                    </div>
                    <FadeUp delay={150}>
                        <div className="academy-hero-visual">
                            <ImagePlaceholder name="academy-hero.jpg" className="academy-hero-image" alt="Placeholder for Gold Crown Makeup Academy hero photograph" />
                            <div className="academy-hero-stamp"><span>LEARN</span><b>THE ART</b><span>OF BEAUTY</span></div>
                            <div className="academy-hero-caption"><span>01 / THE JOURNEY</span><span>Gold Crown Academy</span></div>
                        </div>
                    </FadeUp>
                </div>
                <div className="academy-hero-bottom"><span>MAKEUP ARTISTRY</span><span>CRAFT · PRACTICE · GROW</span><span>KANPUR, UTTAR PRADESH</span></div>
            </section>

            {/* 02 — About the academy */}
            <section className="section academy-about" id="about-academy">
                <div className="container academy-split-layout">
                    <FadeUp>
                        <div className="academy-about-visual">
                            <ImagePlaceholder name="academy-interior.jpg" className="academy-about-image" alt="Placeholder for academy interior or learning environment" />
                            <span className="academy-vertical-note">A SPACE TO LEARN & CREATE</span>
                        </div>
                    </FadeUp>
                    <div className="academy-about-copy">
                        <SectionHeading eyebrow="01 / ABOUT OUR ACADEMY" title="A place where skill meets" italic="self-expression" />
                        <p>Gold Crown Makeup Academy is the learning wing of Gold Crown Makeup Studio, created for people who want to explore makeup artistry and develop practical beauty skills. Our focus is on understanding the fundamentals, practising techniques with care and learning how to approach each look with creativity and professionalism.</p>
                        <p>Whether you are starting your journey or looking to refine a particular skill, speak with us about the course and learning format that best matches your goals.</p>
                        <div className="academy-fact-row">
                            <div><strong>15+</strong><span>Years of studio experience*</span></div>
                            <div><strong>Learn</strong><span>Through guided practice</span></div>
                            <div><strong>Grow</strong><span>At your own pace</span></div>
                        </div>
                        <p className="academy-disclaimer">*Studio experience as described by Gold Crown Makeup Studio; confirm the preferred wording before publication.</p>
                    </div>
                </div>
            </section>

            {/* 03 — Mentor */}
            <section className="section academy-mentor" id="academy-mentor">
                <div className="container academy-mentor-grid">
                    <div className="academy-mentor-copy">
                        <SectionHeading eyebrow="02 / MEET YOUR MENTOR" title="Learn with" italic="Sunita Gupta" />
                        <p className="academy-mentor-role">Master Makeup Artist · Beauty Educator</p>
                        <p>With more than 15 years of experience described by the studio, Sunita Gupta brings a working makeup artist’s perspective to beauty, bridal styling and occasion makeup. Her approach centres on understanding the person, choosing techniques thoughtfully and paying attention to the details that complete a look.</p>
                        <p>Get in touch to learn more about her teaching approach, current classes and the opportunities available at the academy.</p>
                        <a className="academy-inline-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Ask about learning with Sunita <span aria-hidden="true">↗</span></a>
                    </div>
                    <FadeUp delay={120}>
                        <div className="academy-mentor-portrait-wrap">
                            <ImagePlaceholder name="sunita-gupta-mentor.jpg" className="academy-mentor-portrait" alt="Placeholder for Sunita Gupta mentor portrait" />
                            <div className="academy-mentor-signature"><span>Meet your mentor</span><strong>Sunita Gupta</strong></div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* 04 — Courses */}
            <section className="section academy-courses" id="academy-courses">
                <div className="container">
                    <SectionHeading eyebrow="03 / OUR PROFESSIONAL MAKEUP COURSES" title="Find the course that fits" italic="your goals" description="Explore learning areas and contact the academy for confirmed fees, durations, eligibility and upcoming batch dates." />
                    <div className="academy-course-grid">
                        {courses.map((course, index) => (
                            <FadeUp key={course.title} delay={(index % 3) * 80}>
                                <article className="academy-course-card">
                                    <div className="academy-course-image-wrap">
                                        <ImagePlaceholder name={['professional-makeup-course.jpg','bridal-makeup-course.jpg','airbrush-hd-makeup.jpg','self-makeup-course.jpg','hairstyling-course.jpg','editorial-makeup-course.jpg'][index]} className="academy-course-image" alt={`Placeholder for ${course.title}`} />
                                        <span className="academy-course-number">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                    <div className="academy-course-body">
                                        <p className="academy-course-tag">{course.tag}</p>
                                        <h3>{course.title}</h3>
                                        <p>{course.description}</p>
                                        <ul>{course.topics.slice(0, 3).map((topic) => <li key={topic}><span aria-hidden="true">✦</span>{topic}</li>)}</ul>
                                        <div className="academy-course-footer"><span>{course.duration}</span><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${course.title}`}>Enquire ↗</a></div>
                                    </div>
                                </article>
                            </FadeUp>
                        ))}
                    </div>
                    <p className="academy-course-note">Course names are presented as enquiry categories. Confirm which courses and modules are currently offered before accepting enrolments.</p>
                </div>
            </section>

            {/* 05 — Curriculum */}
            <section className="section academy-curriculum" id="academy-curriculum">
                <div className="container">
                    <div className="academy-curriculum-top">
                        <div><SectionHeading eyebrow="04 / DETAILED COURSE CURRICULUM" title="Build your skills," italic="one technique at a time" description="A sample learning framework. The exact syllabus depends on the selected course and should be confirmed with the academy." /></div>
                        <ImagePlaceholder name="makeup-course-curriculum.jpg" className="academy-curriculum-image" alt="Placeholder for makeup tools and curriculum photograph" />
                    </div>
                    <div className="academy-curriculum-grid">
                        {curriculumGroups.map((group) => (
                            <article className="academy-curriculum-item" key={group.title}>
                                <h3>{group.title}</h3>
                                <ul>{group.items.map((item) => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul>
                            </article>
                        ))}
                    </div>
                    <div className="academy-curriculum-footer"><p>Looking for a specific skill or technique?</p><a className="academy-inline-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Ask for the detailed syllabus <span aria-hidden="true">↗</span></a></div>
                </div>
            </section>

            {/* 06 — Hands-on practice */}
            <section className="section academy-practice" id="academy-practice">
                <div className="container academy-practice-grid">
                    <FadeUp>
                        <div className="academy-practice-visual">
                            <ImagePlaceholder name="students-practical-training.jpg" className="academy-practice-image" alt="Placeholder for students practising makeup techniques" />
                            <div className="academy-practice-image-caption">LEARN IT. PRACTISE IT. REFINE IT.</div>
                        </div>
                    </FadeUp>
                    <div className="academy-practice-copy">
                        <SectionHeading eyebrow="05 / HANDS-ON PRACTICAL TRAINING" title="Confidence grows" italic="with practice" />
                        <p>Makeup artistry is a hands-on skill. Ask about the practical elements included in your chosen course, from instructor demonstrations and guided exercises to practice on models where available.</p>
                        <div className="academy-practice-steps">
                            <div><span>01</span><div><h3>Observe</h3><p>Understand the purpose behind each step and technique.</p></div></div>
                            <div><span>02</span><div><h3>Practise</h3><p>Build control and consistency through guided exercises.</p></div></div>
                            <div><span>03</span><div><h3>Refine</h3><p>Review the result, learn from feedback and keep improving.</p></div></div>
                        </div>
                        <p className="academy-disclaimer">Model practice, class sizes and the amount of individual supervision vary by course; please confirm these details before enrolment.</p>
                    </div>
                </div>
            </section>

            {/* 07 — Why choose us */}
            <section className="section academy-why" id="why-gold-crown">
                <div className="container">
                    <SectionHeading eyebrow="06 / WHY CHOOSE GOLD CROWN ACADEMY?" title="A thoughtful start to" italic="your beauty journey" description="The right training should help you understand not only how to create a look, but also why each step matters." />
                    <div className="academy-benefit-grid">
                        {[
                            ['01', 'Mentor-led learning', 'Learn from the perspective of a working makeup artist.'],
                            ['02', 'Technique foundations', 'Understand preparation, products, tools and application.'],
                            ['03', 'Practice with purpose', 'Ask about guided exercises and practical sessions in each course.'],
                            ['04', 'Creative confidence', 'Develop your own eye for colour, balance and finishing.'],
                            ['05', 'Professional habits', 'Learn about hygiene, client consultation and thoughtful service.'],
                            ['06', 'Career direction', 'Explore possible next steps that fit your interests and skills.']
                        ].map(([number, title, description]) => (
                            <article className="academy-benefit-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b aria-hidden="true">✦</b></article>
                        ))}
                    </div>
                </div>
            </section>

            {/* 08 — Gallery */}
            <section className="section academy-gallery" id="student-gallery">
                <div className="container">
                    <SectionHeading eyebrow="07 / STUDENT MAKEUP GALLERY" title="Practice in progress," italic="creativity on display" description="Replace these placeholders with approved images of student work, class activities and makeup transformations." />
                    <div className="academy-gallery-grid">
                        {galleryImages.map((name, index) => <FadeUp key={name} delay={(index % 3) * 60}><figure className={`academy-gallery-tile academy-gallery-tile-${index + 1}`}><ImagePlaceholder name={name} className="academy-gallery-image" alt={`Placeholder for student makeup gallery image ${index + 1}`} /><figcaption><span>STUDENT WORK</span><b>{String(index + 1).padStart(2, '0')}</b></figcaption></figure></FadeUp>)}
                    </div>
                </div>
            </section>

            {/* 09 — Testimonials */}
            <section className="section academy-testimonials" id="student-testimonials">
                <div className="container">
                    <SectionHeading eyebrow="08 / STUDENT TESTIMONIALS" title="Real voices," italic="real learning journeys" description="Student feedback belongs here. Replace the sample prompts with genuine, approved testimonials before publishing." />
                    <div className="academy-testimonial-grid">
                        {testimonials.map((testimonial, index) => <article className="academy-testimonial-card" key={testimonial.image}><ImagePlaceholder name={testimonial.image} className="academy-testimonial-avatar" alt={`Placeholder for ${testimonial.name} photo`} /><div className="academy-quote-mark" aria-hidden="true">“</div><p>{testimonial.quote}</p><div className="academy-testimonial-author"><strong>{testimonial.name}</strong><span>Replace with approved course details</span></div><span className="academy-testimonial-index">0{index + 1}</span></article>)}
                    </div>
                </div>
            </section>

            {/* 10 — Career pathways */}
            <section className="section academy-careers" id="career-opportunities">
                <div className="container academy-careers-grid">
                    <div className="academy-careers-copy">
                        <SectionHeading eyebrow="09 / CAREER OPPORTUNITIES" title="Where can your" italic="skills take you?" description="Training can be a starting point for exploring different directions in the beauty industry. Outcomes depend on practice, portfolio quality, experience and the opportunities you pursue." />
                        <ul className="academy-career-list">
                            <li><span>01</span><div><strong>Freelance Makeup Artistry</strong><p>Build experience with clients and occasion looks.</p></div></li>
                            <li><span>02</span><div><strong>Bridal & Event Makeup</strong><p>Explore specialised looks for weddings and celebrations.</p></div></li>
                            <li><span>03</span><div><strong>Studio or Salon Work</strong><p>Develop professional skills for beauty-service environments.</p></div></li>
                            <li><span>04</span><div><strong>Fashion & Content Projects</strong><p>Build a portfolio for editorial, photoshoot and content work.</p></div></li>
                        </ul>
                    </div>
                    <FadeUp delay={120}><ImagePlaceholder name="makeup-artist-career.jpg" className="academy-career-image" alt="Placeholder for professional makeup artist career image" /></FadeUp>
                </div>
            </section>

            {/* 11 — Upcoming batches */}
            <section className="section academy-admissions" id="academy-admissions">
                <div className="container academy-admissions-grid">
                    <FadeUp><ImagePlaceholder name="academy-admissions.jpg" className="academy-admissions-image" alt="Placeholder for academy admission or class image" /></FadeUp>
                    <div className="academy-admissions-copy">
                        <SectionHeading eyebrow="10 / UPCOMING BATCHES & ADMISSIONS" title="Your next chapter" italic="starts with a conversation" />
                        <p>Tell us what you want to learn. The academy can guide you on suitable courses, current batch dates, class timings, course fees and admission steps.</p>
                        <div className="academy-admission-details">
                            <div><span>01</span><p><strong>Choose your interest</strong>Tell us which course or makeup skill you would like to explore.</p></div>
                            <div><span>02</span><p><strong>Confirm the details</strong>Ask for the latest syllabus, duration, fee and schedule.</p></div>
                            <div><span>03</span><p><strong>Plan your enrolment</strong>Confirm eligibility and the next steps with the academy.</p></div>
                        </div>
                        <a className="btn-solid academy-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Ask About Upcoming Batches <span aria-hidden="true">↗</span></a>
                        <p className="academy-disclaimer">Batch dates, fees and seat availability are not listed as fixed here because they need to be confirmed by the academy.</p>
                    </div>
                </div>
            </section>

            {/* 12 — FAQ */}
            <section className="section academy-faq" id="academy-faq">
                <div className="container academy-faq-layout">
                    <div><SectionHeading eyebrow="11 / FREQUENTLY ASKED QUESTIONS" title="A few things to" italic="know before you begin" description="Need a different answer? Contact the academy for details about a specific course." /></div>
                    <div className="academy-faq-list">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return <div className={`academy-faq-item ${isOpen ? 'is-open' : ''}`} key={faq.q}><button type="button" className="academy-faq-question" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.q}</span><b aria-hidden="true">{isOpen ? '−' : '+'}</b></button>{isOpen && <div className="academy-faq-answer"><p>{faq.a}</p></div>}</div>;
                        })}
                    </div>
                </div>
            </section>

            {/* Contact enquiry */}
            <section className="academy-contact" id="academy-contact">
                <div className="container academy-contact-inner">
                    <div className="academy-contact-copy">
                        <p className="academy-eyebrow academy-eyebrow-light">12 / CONTACT & ENQUIRY</p>
                        <h2>Ready to explore<br /><em>makeup artistry?</em></h2>
                        <p>Talk to Gold Crown Makeup Studio about courses, class schedules and the next steps for your learning journey.</p>
                        <div className="academy-contact-actions"><a className="btn-solid academy-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <span aria-hidden="true">↗</span></a><Link className="academy-contact-link" to="/contact">Contact page <span aria-hidden="true">↗</span></Link></div>
                    </div>
                    <div className="academy-contact-card">
                        <ImagePlaceholder name="academy-contact.jpg" className="academy-contact-image" alt="Placeholder for Gold Crown Makeup Studio contact image" />
                        <div className="academy-contact-meta"><span>GOLD CROWN MAKEUP STUDIO</span><strong>Sunita Gupta · Makeup Academy</strong><span>120 / 220, Lajpat Nagar, Narainpurwa, Kanpur, Uttar Pradesh 208005</span><a href="tel:+919839550961">+91 98395 50961</a><a href="tel:+919161338872">+91 91613 38872</a></div>
                    </div>
                </div>
            </section>
            <div className="academy-page-end"><span>GOLD CROWN MAKEUP ACADEMY</span><span>LEARN THE ART. BUILD YOUR FUTURE.</span></div>
        </div>
    );
}
