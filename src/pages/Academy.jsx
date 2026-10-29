import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

const image = (filename) => import.meta.env.BASE_URL + 'assets/images/academy/' + filename;

const courses = [
  { title: 'Professional Makeup Artist Course', tag: 'Build your foundation', image: 'professional-makeup-course.svg', desc: 'Explore the fundamentals of makeup artistry, from skin preparation and colour theory to product knowledge and a polished finish.', topics: ['Skin analysis and preparation', 'Colour theory and foundation matching', 'Day, evening and party looks', 'Brushes, tools and hygiene'] },
  { title: 'Bridal Makeup Course', tag: 'Bridal artistry', image: 'bridal-makeup-course.svg', desc: 'Study the details behind bridal looks, including complexion, feature definition and adapting techniques to the occasion.', topics: ['Bridal base and long-wear finish', 'Eye makeup and lashes', 'Contour, highlight and blush', 'Look planning and finishing'] },
  { title: 'Airbrush & HD Makeup', tag: 'Refine your technique', image: 'airbrush-hd-makeup.svg', desc: 'Explore high-definition finishes, airbrush principles, product selection and controlled application for camera-ready results.', topics: ['HD finish principles', 'Airbrush equipment knowledge', 'Layering and coverage control', 'Photography-ready finishing'] },
  { title: 'Self-Makeup & Occasion Looks', tag: 'Everyday confidence', image: 'self-makeup-course.svg', desc: 'Learn to create looks that suit your features and preferences, from a simple routine to a more defined occasion look.', topics: ['Personal skin-prep routine', 'Everyday base application', 'Eye and lip combinations', 'Product selection'] },
  { title: 'Hairstyling for Makeup Artists', tag: 'Complete the look', image: 'hairstyling-course.svg', desc: 'Explore how occasion hairstyling and makeup can come together to create a cohesive finished look.', topics: ['Hair preparation and sectioning', 'Foundational styling techniques', 'Bridal and occasion coordination', 'Finishing products'] },
  { title: 'Editorial & Fashion Makeup', tag: 'Creative expression', image: 'editorial-makeup-course.svg', desc: 'Explore creative concepts, colour placement and the considerations involved in makeup for editorial and photoshoot settings.', topics: ['Concept and reference planning', 'Colour and texture exploration', 'Makeup for photography', 'Portfolio presentation'] }
];

const curriculum = [
  { title: '01. Skin & Preparation', items: ['Basic skin analysis', 'Cleansing and preparation', 'Primer and product compatibility', 'Foundation shade and undertone matching'] },
  { title: '02. Base & Face Structure', items: ['Concealing and correcting', 'Foundation application and blending', 'Contour, highlight and blush placement', 'Powdering and setting techniques'] },
  { title: '03. Eyes, Brows & Lips', items: ['Eye shapes and placement', 'Blending and colour coordination', 'Brows and false-lash application', 'Lip preparation and finishing'] },
  { title: '04. Professional Practice', items: ['Brush and tool care', 'Hygiene and sanitation', 'Client consultation and look planning', 'Photography and portfolio presentation'] }
];

const faqs = [
  { q: 'Do I need previous makeup experience?', a: 'Course prerequisites can vary. Ask the academy which current class is suitable for beginners and whether any previous experience is required.' },
  { q: 'How long does a course take?', a: 'Duration depends on the selected course and batch schedule. Contact the academy for current duration, class days and timings.' },
  { q: 'What are the course fees?', a: 'Fees depend on the course and what is included. Contact the academy for the latest fee structure before enrolling.' },
  { q: 'Does the course include practical training?', a: 'Ask about the practical format for your selected course, including demonstrations, supervised exercises and whether practice on models is included.' },
  { q: 'Will I receive a certificate?', a: 'Please confirm certificate availability and course-completion requirements with the academy before admission.' },
  { q: 'How can I enrol?', a: 'Send an enquiry through WhatsApp or the Contact page. Mention the course you are interested in and the team can guide you on current batches and next steps.' }
];

const wa = 'https://wa.me/919839550961?text=' + encodeURIComponent('Hello Gold Crown Makeup Studio, I would like to enquire about Makeup Academy courses, fees and upcoming batches.');

function Placeholder({ filename, className = '', alt = '' }) {
  return <div className={'academy-photo-placeholder ' + className} role="img" aria-label={alt || ('Image placeholder: ' + filename)}><span className="academy-photo-symbol" aria-hidden="true">✦</span><span className="academy-photo-filename">{filename}</span></div>;
}

function Heading({ eyebrow, title, accent, description }) {
  return <FadeUp><div className="academy-heading"><p className="academy-eyebrow">{eyebrow}</p><h2>{title} {accent && <em>{accent}</em>}</h2>{description && <p className="academy-heading-description">{description}</p>}<div className="academy-heading-rule" aria-hidden="true"><span></span><b>✦</b><span></span></div></div></FadeUp>;
}

export default function Academy() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div className="academy-redesign">
      <SEO title="Makeup Academy in Kanpur" description="Explore makeup artist training at Gold Crown Makeup Studio in Kanpur with Sunita Gupta. Enquire about professional makeup, bridal, airbrush, self-makeup and hairstyling courses." keywords="Makeup Academy in Kanpur, Makeup Artist Course Kanpur, Bridal Makeup Course, Sunita Gupta, Gold Crown Makeup Academy, Professional Makeup Training" />

      {/* 01 — Academy introduction / hero */}
      <section className="academy-hero">
        <div className="container academy-hero-grid">
          <div className="academy-hero-copy">
            <FadeUp>
              <p className="academy-eyebrow academy-eyebrow-light">GOLD CROWN MAKEUP STUDIO · ACADEMY</p>
              <h1>Turn your passion<br />into <em>your profession.</em></h1>
              <p className="academy-hero-lead">Learn the art of makeup with guidance from master makeup artist Sunita Gupta. Explore professional techniques, build confidence and take the next step in your beauty journey.</p>
              <div className="academy-actions"><a className="academy-cta" href={wa} target="_blank" rel="noopener noreferrer">Enquire About Courses <span aria-hidden="true">↗</span></a><a className="academy-hero-link" href="#academy-courses">Explore courses ↓</a></div>
              <p className="academy-hero-note"><span>✦</span> Practical learning. Creative confidence. Professional foundations.</p>
            </FadeUp>
          </div>
          <FadeUp delay={150}><div className="academy-hero-visual"><Placeholder filename="academy-hero.svg" className="academy-hero-image" alt="Placeholder for academy hero photograph" /><div className="academy-hero-seal"><span>LEARN</span><b>THE ART</b><span>OF BEAUTY</span></div><div className="academy-hero-caption"><span>THE LEARNING JOURNEY</span><span>KANPUR, INDIA</span></div></div></FadeUp>
        </div>
        <div className="academy-hero-footer"><span>MAKEUP ARTISTRY</span><span>CRAFT · PRACTICE · GROW</span><span>GOLD CROWN ACADEMY</span></div>
      </section>

      {/* 02 — About the academy */}
      <section className="section academy-about" id="about-academy"><div className="container academy-two-col">
        <FadeUp><div className="academy-about-visual"><Placeholder filename="academy-interior.svg" className="academy-about-image" alt="Placeholder for academy interior or learning environment" /><span className="academy-side-label">A SPACE TO LEARN & CREATE</span></div></FadeUp>
        <div className="academy-copy"><Heading eyebrow="01 / ABOUT OUR ACADEMY" title="A place where skill meets" accent="self-expression" />
          <p>Gold Crown Makeup Academy is the learning wing of Gold Crown Makeup Studio, created for people who want to explore makeup artistry and develop practical beauty skills. Our focus is on understanding fundamentals, practising techniques with care and approaching each look with creativity and professionalism.</p>
          <p>Whether you are starting your journey or looking to refine a particular skill, speak with us about the course and learning format that best matches your goals.</p>
          <div className="academy-facts"><div><strong>15+</strong><span>Years of studio experience*</span></div><div><strong>Learn</strong><span>Through guided practice</span></div><div><strong>Grow</strong><span>At your own pace</span></div></div>
          <small className="academy-disclaimer">*Studio experience as described by Gold Crown Makeup Studio. Confirm the preferred wording before publication.</small>
        </div>
      </div></section>

      {/* 03 — Mentor */}
      <section className="section academy-mentor" id="academy-mentor"><div className="container academy-two-col academy-mentor-grid">
        <div className="academy-copy"><Heading eyebrow="02 / MEET YOUR MENTOR" title="Learn with" accent="Sunita Gupta" />
          <p className="academy-mentor-role">Master Makeup Artist · Beauty Educator</p>
          <p>With more than 15 years of experience described by the studio, Sunita Gupta brings a working makeup artist’s perspective to bridal styling, occasion makeup and beauty. Her approach centres on understanding the person, choosing techniques thoughtfully and paying attention to the details that complete a look.</p>
          <p>Get in touch to learn more about her teaching approach, current classes and the opportunities available at the academy.</p>
          <a className="academy-inline-link" href={wa} target="_blank" rel="noopener noreferrer">Ask about learning with Sunita ↗</a>
        </div>
        <FadeUp delay={120}><div className="academy-mentor-photo"><Placeholder filename="sunita-gupta-mentor.svg" className="academy-mentor-image" alt="Placeholder for Sunita Gupta mentor portrait" /><div className="academy-signature"><span>MEET YOUR MENTOR</span><strong>Sunita Gupta</strong></div></div></FadeUp>
      </div></section>

      {/* 04 — Courses */}
      <section className="section academy-courses" id="academy-courses"><div className="container">
        <Heading eyebrow="03 / OUR PROFESSIONAL MAKEUP COURSES" title="Find the course that fits" accent="your goals" description="Explore learning areas and contact the academy for confirmed fees, durations, eligibility and upcoming batch dates." />
        <div className="academy-course-grid">{courses.map((course, index) => <FadeUp key={course.title} delay={(index % 3) * 70}><article className="academy-course-card"><div className="academy-course-picture"><Placeholder filename={course.image} className="academy-course-image" alt={'Placeholder for ' + course.title} /><span className="academy-course-number">{String(index + 1).padStart(2, '0')}</span></div><div className="academy-course-content"><p className="academy-course-tag">{course.tag}</p><h3>{course.title}</h3><p>{course.desc}</p><ul>{course.topics.slice(0, 3).map(topic => <li key={topic}><span aria-hidden="true">✦</span>{topic}</li>)}</ul><div className="academy-course-bottom"><span>Schedule on enquiry</span><a href={wa} target="_blank" rel="noopener noreferrer" aria-label={'Enquire about ' + course.title}>Enquire ↗</a></div></div></article></FadeUp>)}</div>
        <p className="academy-disclaimer">Course names are presented as enquiry categories. Confirm which courses and modules are currently offered before accepting enrolments.</p>
      </div></section>

      {/* 05 — Curriculum */}
      <section className="section academy-curriculum" id="academy-curriculum"><div className="container">
        <div className="academy-curriculum-top"><div><Heading eyebrow="04 / DETAILED COURSE CURRICULUM" title="Build your skills," accent="one technique at a time" description="A sample learning framework. The exact syllabus depends on the selected course and should be confirmed with the academy." /></div><Placeholder filename="makeup-course-curriculum.svg" className="academy-curriculum-image" alt="Placeholder for makeup tools and curriculum photograph" /></div>
        <div className="academy-curriculum-grid">{curriculum.map(group => <article className="academy-curriculum-card" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul></article>)}</div>
        <div className="academy-curriculum-footer"><p>Looking for a specific skill or technique?</p><a className="academy-inline-link" href={wa} target="_blank" rel="noopener noreferrer">Ask for the detailed syllabus ↗</a></div>
      </div></section>

      {/* 06 — Hands-on practical training */}
      <section className="section academy-practice" id="academy-practice"><div className="container academy-two-col">
        <FadeUp><div className="academy-practice-visual"><Placeholder filename="students-practical-training.svg" className="academy-practice-image" alt="Placeholder for students practising makeup techniques" /><span className="academy-practice-caption">LEARN IT. PRACTISE IT. REFINE IT.</span></div></FadeUp>
        <div className="academy-copy"><Heading eyebrow="05 / HANDS-ON PRACTICAL TRAINING" title="Confidence grows" accent="with practice" />
          <p>Makeup artistry is a hands-on skill. Ask about the practical elements included in your chosen course, from instructor demonstrations and guided exercises to practice on models where available.</p>
          <div className="academy-steps"><div><span>01</span><div><h3>Observe</h3><p>Understand the purpose behind each step and technique.</p></div></div><div><span>02</span><div><h3>Practise</h3><p>Build control and consistency through guided exercises.</p></div></div><div><span>03</span><div><h3>Refine</h3><p>Review the result, learn from feedback and keep improving.</p></div></div></div>
          <small className="academy-disclaimer">Model practice, class sizes and individual supervision vary by course; confirm these details before enrolment.</small>
        </div>
      </div></section>

      {/* 07 — Why choose Gold Crown */}
      <section className="section academy-why" id="why-gold-crown"><div className="container">
        <Heading eyebrow="06 / WHY CHOOSE GOLD CROWN ACADEMY?" title="A thoughtful start to" accent="your beauty journey" description="The right training should help you understand not only how to create a look, but also why each step matters." />
        <div className="academy-benefits">{[
          ['01','Mentor-led learning','Learn from the perspective of a working makeup artist.'],
          ['02','Technique foundations','Understand preparation, products, tools and application.'],
          ['03','Practice with purpose','Ask about guided exercises and practical sessions in each course.'],
          ['04','Creative confidence','Develop your eye for colour, balance and finishing.'],
          ['05','Professional habits','Learn about hygiene, client consultation and thoughtful service.'],
          ['06','Career direction','Explore possible next steps that fit your interests and skills.']
        ].map(([number,title,desc]) => <article className="academy-benefit" key={number}><span>{number}</span><div><h3>{title}</h3><p>{desc}</p></div><b aria-hidden="true">✦</b></article>)}</div>
      </div></section>

      {/* 08 — Student gallery */}
      <section className="section academy-gallery" id="student-gallery"><div className="container">
        <Heading eyebrow="07 / STUDENT MAKEUP GALLERY" title="Practice in progress," accent="creativity on display" description="Replace these placeholders with approved images of student work, class activities and makeup transformations." />
        <div className="academy-gallery-grid">{['student-makeup-01.svg','student-makeup-02.svg','student-makeup-03.svg','student-makeup-04.svg','student-makeup-05.svg','student-makeup-06.svg'].map((filename,index) => <FadeUp key={filename} delay={(index % 3) * 60}><figure className={'academy-gallery-tile academy-gallery-tile-' + (index + 1)}><Placeholder filename={filename} className="academy-gallery-image" alt={'Placeholder for student makeup gallery image ' + (index + 1)} /><figcaption><span>STUDENT WORK</span><b>{String(index + 1).padStart(2, '0')}</b></figcaption></figure></FadeUp>)}</div>
      </div></section>

      {/* 09 — Student testimonials */}
      <section className="section academy-testimonials" id="student-testimonials"><div className="container">
        <Heading eyebrow="08 / STUDENT TESTIMONIALS" title="Real voices," accent="real learning journeys" description="Student feedback belongs here. Replace these sample prompts with genuine, approved testimonials before publishing." />
        <div className="academy-testimonial-grid">{[
          ['student-testimonial-01.svg','Add a genuine student review about the learning experience, practice or mentor support.'],
          ['student-testimonial-02.svg','Add a second verified testimonial. Publish student names and photos only with permission.'],
          ['student-testimonial-03.svg','Use the student’s own words and confirm permission before publication.']
        ].map(([filename,quote],index) => <article className="academy-testimonial-card" key={filename}><Placeholder filename={filename} className="academy-testimonial-avatar" alt={'Placeholder for student testimonial photo ' + (index + 1)} /><div className="academy-quote-mark" aria-hidden="true">“</div><p>{quote}</p><div className="academy-testimonial-author"><strong>Student testimonial</strong><span>Replace with approved course details</span></div><span className="academy-testimonial-index">0{index + 1}</span></article>)}</div>
      </div></section>

      {/* 10 — Career opportunities */}
      <section className="section academy-careers" id="career-opportunities"><div className="container academy-two-col">
        <div className="academy-copy"><Heading eyebrow="09 / CAREER OPPORTUNITIES" title="Where can your" accent="skills take you?" description="Training can be a starting point for exploring different directions in the beauty industry. Outcomes depend on practice, portfolio quality, experience and the opportunities you pursue." />
          <ul className="academy-career-list"><li><span>01</span><div><strong>Freelance Makeup Artistry</strong><p>Build experience with clients and occasion looks.</p></div></li><li><span>02</span><div><strong>Bridal & Event Makeup</strong><p>Explore specialised looks for weddings and celebrations.</p></div></li><li><span>03</span><div><strong>Studio or Salon Work</strong><p>Develop skills for beauty-service environments.</p></div></li><li><span>04</span><div><strong>Fashion & Content Projects</strong><p>Build a portfolio for editorial, photoshoot and content work.</p></div></li></ul>
        </div><FadeUp delay={120}><Placeholder filename="makeup-artist-career.svg" className="academy-career-image" alt="Placeholder for makeup artist career image" /></FadeUp>
      </div></section>

      {/* 11 — Upcoming batches and admissions */}
      <section className="section academy-admissions" id="academy-admissions"><div className="container academy-two-col">
        <FadeUp><Placeholder filename="academy-admissions.svg" className="academy-admissions-image" alt="Placeholder for academy admission or class photograph" /></FadeUp>
        <div className="academy-copy"><Heading eyebrow="10 / UPCOMING BATCHES & ADMISSIONS" title="Your next chapter" accent="starts with a conversation" />
          <p>Tell us what you want to learn. The academy can guide you on suitable courses, current batch dates, class timings, course fees and admission steps.</p>
          <div className="academy-admission-steps"><div><span>01</span><p><strong>Choose your interest</strong>Tell us which course or makeup skill you want to explore.</p></div><div><span>02</span><p><strong>Confirm the details</strong>Ask for the latest syllabus, duration, fee and schedule.</p></div><div><span>03</span><p><strong>Plan your enrolment</strong>Confirm eligibility and next steps with the academy.</p></div></div>
          <a className="academy-cta" href={wa} target="_blank" rel="noopener noreferrer">Ask About Upcoming Batches ↗</a>
          <small className="academy-disclaimer">Batch dates, fees and availability need confirmation from the academy.</small>
        </div>
      </div></section>

      {/* 12 — FAQs */}
      <section className="section academy-faq" id="academy-faq"><div className="container academy-faq-layout"><div><Heading eyebrow="11 / FREQUENTLY ASKED QUESTIONS" title="A few things to" accent="know before you begin" description="Need a different answer? Contact the academy for details about a specific course." /></div><div className="academy-faq-list">{faqs.map((faq,index) => { const isOpen = openFaq === index; return <div className={'academy-faq-item ' + (isOpen ? 'is-open' : '')} key={faq.q}><button type="button" className="academy-faq-question" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.q}</span><b aria-hidden="true">{isOpen ? '−' : '+'}</b></button>{isOpen && <div className="academy-faq-answer"><p>{faq.a}</p></div>}</div>; })}</div></div></section>

      {/* Contact and enquiry */}
      <section className="academy-contact" id="academy-contact"><div className="container academy-contact-grid"><div><p className="academy-eyebrow academy-eyebrow-light">12 / CONTACT & ENQUIRY</p><h2>Ready to explore<br /><em>makeup artistry?</em></h2><p>Talk to Gold Crown Makeup Studio about courses, class schedules and the next steps for your learning journey.</p><div className="academy-actions"><a className="academy-cta" href={wa} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp ↗</a><Link className="academy-contact-link" to="/contact">Contact page ↗</Link></div></div><div className="academy-contact-card"><Placeholder filename="academy-contact.svg" className="academy-contact-image" alt="Placeholder for Gold Crown Makeup Studio contact image" /><div className="academy-contact-meta"><span>GOLD CROWN MAKEUP STUDIO</span><strong>Sunita Gupta · Makeup Academy</strong><span>120 / 220, Lajpat Nagar, Narainpurwa, Kanpur, Uttar Pradesh 208005</span><a href="tel:+919839550961">+91 98395 50961</a><a href="tel:+919161338872">+91 91613 38872</a></div></div></div></section>
      <div className="academy-endline"><span>GOLD CROWN MAKEUP ACADEMY</span><span>LEARN THE ART. BUILD YOUR FUTURE.</span></div>
    </div>
  );
}
