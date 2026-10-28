import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

const articles = [
    {
        id: 'bridal-makeup-timeline',
        category: 'Bridal Planning',
        readTime: '5 minute read',
        title: 'How to Plan Your Bridal Makeup Timeline',
        intro: 'A thoughtful wedding-morning schedule gives you room to get ready without feeling rushed.',
        image: 'https://images.pexels.com/photos/10954282/pexels-photo-10954282.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Indian bride wearing traditional bridal jewelry and makeup',
        paragraphs: [
            ['Start with your ceremony time', 'Work backwards from the time you need to leave for the venue or be ready for photographs. Include time for dressing, jewellery, travel, and a small buffer for unexpected delays.'],
            ['Share the details early', 'When you enquire, share your event date, location, function schedule, and the looks you have in mind. If you have more than one function, mention each one so the studio can discuss a realistic plan.'],
            ['Prepare your inspiration', 'Save a few reference images that show the makeup finish you like. Include examples of eye makeup, lip colour, and overall styling, but stay open to adapting the ideas to your features, outfit, and comfort.'],
            ['Keep the morning essentials ready', 'Set aside your outfit, jewellery, accessories, and any items you will need after makeup. Keep water and a light snack nearby if appropriate, and ask someone you trust to help coordinate small tasks.'],
            ['Leave room for final checks', 'Plan a few minutes for a final look in natural light, checking the overall balance with your outfit and jewellery, and making any agreed touch-ups before you leave.']
        ],
        takeaway: 'The best timeline is personal to your ceremony, travel, and chosen services. Discuss the schedule with your makeup artist before the wedding day.'
    },
    {
        id: 'skin-prep-before-wedding',
        category: 'Skin Preparation',
        readTime: '4 minute read',
        title: 'Simple Skin Prep Before Your Wedding',
        intro: 'Comfortable, well-cared-for skin starts with consistency—not a last-minute shelf full of new products.',
        image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Skincare products arranged for a simple beauty routine',
        paragraphs: [
            ['Keep your routine familiar', 'Use products your skin already tolerates. A gentle cleanser, moisturizer, and daytime sun protection are a sensible foundation for many people. If you already have a routine that works, avoid changing it dramatically just before the event.'],
            ['Avoid experimenting close to the date', 'New exfoliants, strong actives, peels, or unfamiliar facials can cause irritation for some people. Do not schedule an aggressive treatment immediately before your wedding. If you are considering a treatment, discuss timing and suitability with a qualified skincare professional.'],
            ['Hydrate and rest', 'Drink water regularly, follow your usual sleep routine where possible, and allow yourself time to unwind. These simple habits support your general wellbeing during a busy planning period.'],
            ['Tell your artist about sensitivities', 'Mention known allergies, sensitivities, or products that usually irritate your skin before the appointment. If you have an active skin condition or a persistent concern, seek advice from a qualified dermatologist rather than trying to treat it yourself at the last minute.'],
            ['Arrive with a clean, comfortable base', 'Follow the preparation instructions shared by your makeup artist. Unless they advise otherwise, avoid layering lots of new products on the morning of the event; too many layers may affect how makeup sits.']
        ],
        takeaway: 'A gentle routine and early communication are more useful than rushing into new treatments. Your skin needs comfort, not pressure, before a big day.'
    },
    {
        id: 'choose-bridal-makeup-look',
        category: 'Makeup Inspiration',
        readTime: '4 minute read',
        title: 'Choosing a Bridal Makeup Look That Feels Like You',
        intro: 'Your bridal look can honour tradition while still reflecting your own taste and comfort.',
        image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Makeup artist preparing a client for a beauty look',
        paragraphs: [
            ['Start with how you want to feel', 'Think about three words that describe your ideal look: for example, classic, soft, radiant, bold, or glamorous. These words can help your artist understand the feeling you want rather than relying on a single reference photo.'],
            ['Consider your outfit and jewellery', 'The colours, embroidery, neckline, and jewellery all influence the overall balance. Your makeup does not have to match every detail exactly; it should complement the complete look.'],
            ['Think about the event and lighting', 'A daytime ceremony, evening reception, and indoor celebration can call for different levels of definition. Tell your artist where the event will take place and whether most photographs will be indoors or outdoors.'],
            ['Choose comfort as well as photographs', 'If you rarely wear bold lipstick or dramatic eye makeup, talk through how to adapt the idea so it still feels comfortable. A polished look should let you enjoy your day, not make you feel unlike yourself.'],
            ['Use reference images thoughtfully', 'Bring a small, focused selection of inspiration images and explain what you like about each one. Photos can be affected by lighting, filters, editing, and individual features, so use them as a starting point rather than a promise of an identical result.']
        ],
        takeaway: 'The most successful bridal look is a collaboration: your inspiration, your comfort, and your artist’s professional guidance all matter.'
    }
];

export default function Blog() {
    useEffect(() => {
        if (!window.location.hash) return;
        const targetId = window.location.hash.slice(1);
        const frame = window.requestAnimationFrame(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return () => window.cancelAnimationFrame(frame);
    }, []);

    return (
        <div className="blog-page">
            <SEO
                title="Bridal Beauty Journal"
                description="Read bridal makeup planning tips, pre-wedding skincare guidance, and makeup inspiration from Gold Crown Makeup Studio in Kanpur."
                keywords="bridal makeup tips Kanpur, Indian bridal makeup, wedding skin preparation, bridal beauty advice, Gold Crown Makeup Studio"
            />
            <section className="blog-hero">
                <div className="container-narrow text-center">
                    <FadeUp>
                        <p className="text-meta blog-hero-eyebrow">Gold Crown Makeup Studio</p>
                        <h1 className="heading-display">The Beauty <i className="italic">Journal</i></h1>
                        <div className="line-vertical" style={{ margin: '2rem auto' }}></div>
                        <p className="text-lead" style={{ margin: '0 auto' }}>
                            Bridal planning advice, thoughtful beauty routines, and inspiration to help you feel like yourself on every special occasion.
                        </p>
                    </FadeUp>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="blog-article-list">
                        {articles.map((article, index) => (
                            <article id={article.id} className={'blog-article' + (index % 2 ? ' blog-article-reverse' : '')} key={article.id}>
                                <FadeUp>
                                    <div className="blog-article-image">
                                        <img src={article.image} alt={article.imageAlt} loading="lazy" />
                                    </div>
                                </FadeUp>
                                <div className="blog-article-content">
                                    <FadeUp delay={100}>
                                        <p className="journal-meta">{article.category} <span aria-hidden="true">·</span> {article.readTime}</p>
                                        <h2 className="heading-lg">{article.title}</h2>
                                        <p className="blog-article-intro">{article.intro}</p>
                                        {article.paragraphs.map(([heading, paragraph]) => (
                                            <div className="blog-copy-block" key={heading}>
                                                <h3>{heading}</h3>
                                                <p>{paragraph}</p>
                                            </div>
                                        ))}
                                        <div className="blog-takeaway">
                                            <strong>A final thought</strong>
                                            <p>{article.takeaway}</p>
                                        </div>
                                        <Link to="/contact" className="journal-read-link">Plan your look with us <span aria-hidden="true">→</span></Link>
                                    </FadeUp>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="blog-bottom-cta text-center">
                        <h2 className="heading-xl">Have a question about your look?</h2>
                        <p className="text-secondary">Tell us about your occasion and we’ll help you explore the next steps.</p>
                        <Link to="/contact" className="btn-solid">Contact the Studio</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
