import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

const articles = [
    {
        id: 'bridal-makeup-timeline',
        category: 'Bridal Planning',
        readTime: '5 min read',
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
        readTime: '4 min read',
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
        readTime: '4 min read',
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
    },
    {
        id: 'makeup-that-lasts-through-functions',
        category: 'Makeup Tips',
        readTime: '4 min read',
        title: 'How to Help Your Makeup Stay Fresh Through Wedding Functions',
        intro: 'A little planning and a few simple habits can help your makeup look polished throughout a busy celebration.',
        image: 'https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Makeup brushes and cosmetics prepared for a beauty session',
        paragraphs: [
            ['Talk about the full schedule', 'Tell your makeup artist how long you expect to wear the look, whether you will be outdoors, and how many events are planned. Heat, humidity, movement, and lighting can influence the preparation and finish that will suit your day.'],
            ['Avoid touching your face often', 'Frequent touching can move makeup and transfer oils. If you need to adjust something, use clean hands or a clean tissue and follow the touch-up guidance provided by your artist.'],
            ['Keep a small touch-up kit', 'Ask your artist what is appropriate for your particular look. Depending on your products, a tissue, lipstick or lip colour, and a small powder may be useful; you do not need to carry your entire makeup bag.'],
            ['Allow time between events', 'If there is a break between ceremonies or functions, use it to refresh, hydrate, and check your look in suitable lighting. Ask in advance whether additional touch-up support is available.'],
            ['Follow product-specific advice', 'Different skin types and formulas behave differently. Your makeup artist can recommend the most useful touch-up approach for the products and finish used on you.']
        ],
        takeaway: 'Long-wear makeup is a team effort: communicate your schedule, follow tailored touch-up advice, and focus on enjoying your celebration.'
    },
    {
        id: 'bridal-makeup-trial-guide',
        category: 'Bridal Planning',
        readTime: '5 min read',
        title: 'What to Bring to Your Bridal Makeup Consultation',
        intro: 'A focused consultation helps you and your makeup artist turn inspiration into a look that suits your wedding plans.',
        image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Beauty products and brushes arranged for a makeup consultation',
        paragraphs: [
            ['Bring outfit and jewellery references', 'Photos of your outfit, dupatta, jewellery, and other accessories help your artist understand the colours and details that will frame your face. If you have fabric swatches, those can be useful too.'],
            ['Choose a few useful inspiration images', 'Pick a small collection and identify what you like in each image—perhaps the eye shape, skin finish, lip tone, or overall mood. This is more helpful than a large folder of unrelated looks.'],
            ['Explain your comfort zone', 'Share whether you usually wear makeup, which features you like to emphasize, and any styles or products you prefer to avoid. A good consultation should feel collaborative.'],
            ['Mention sensitivities and practical needs', 'Let the artist know about known allergies, skin sensitivities, contact lenses, or other relevant comfort considerations before products are applied.'],
            ['Ask about timing and inclusions', 'Confirm the expected appointment length, what the service includes, any travel arrangements, and the plan for additional functions. Ask the studio directly about its current packages and availability.']
        ],
        takeaway: 'A consultation works best when you arrive with clear references, honest preferences, and enough time to discuss practical details.'
    },
    {
        id: 'bridal-makeup-for-day-and-evening',
        category: 'Makeup Inspiration',
        readTime: '4 min read',
        title: 'Day Wedding or Evening Reception: How the Look Can Differ',
        intro: 'Lighting and event atmosphere can influence makeup choices, while your personal style should remain the guide.',
        image: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Elegant bridal beauty styling for a special occasion',
        paragraphs: [
            ['Think about natural light', 'Daytime ceremonies often involve bright natural light and outdoor photographs. You may prefer a balanced finish that looks harmonious in person and in photographs, discussed with your artist in advance.'],
            ['Consider the evening setting', 'Evening receptions may feature dimmer venues, stage lighting, and flash photography. Your artist can help decide whether more definition or a slightly richer lip colour fits your outfit and preferences.'],
            ['Coordinate with your outfit', 'The embroidery, jewellery, and colour palette of your outfit can help guide the overall look. The aim is coordination, not matching every detail exactly.'],
            ['Keep your own preferences central', 'There is no single rule that every daytime bride needs soft makeup or every evening bride needs bold makeup. Choose the finish that feels right to you and works with the event.'],
            ['Discuss photography plans', 'Tell your artist whether most photos will be outdoors, under warm indoor lights, or on a stage. This context can help them plan a balanced finish.']
        ],
        takeaway: 'Use the time of day as one useful consideration, not a strict rule. The best look is the one that suits your style, outfit, and celebration.'
    },
    {
        id: 'choose-bridal-makeup-artist-kanpur',
        category: 'Bridal Planning',
        readTime: '5 min read',
        title: 'How to Choose a Bridal Makeup Artist in Kanpur',
        intro: 'Use these practical questions to find a makeup artist whose style, communication, and schedule suit your wedding plans in Kanpur.',
        image: 'https://images.pexels.com/photos/10954271/pexels-photo-10954271.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Indian bride with traditional bridal jewellery and detailed wedding makeup',
        paragraphs: [
            ['Review real bridal work', 'Look for a portfolio that includes complete bridal looks, close-up details, and different styles. Check whether the artist’s work feels consistent and whether the examples match the finish you have in mind. Ask which images represent their own work.'],
            ['Discuss your date and location', 'When contacting a bridal makeup artist in Kanpur, share your wedding date, venue or getting-ready location, ceremony time, and the number of functions. Confirm availability and ask about travel arrangements if you are getting ready away from the studio.'],
            ['Ask about the consultation', 'A useful consultation should cover your outfit, jewellery, preferred makeup finish, event lighting, and any product sensitivities. Bring a small collection of reference images and explain what you like about each one.'],
            ['Clarify the service details', 'Before booking, ask what the quoted service includes, how long the appointment usually takes, what happens if the schedule changes, and whether additional functions or touch-ups can be discussed separately. Confirm all agreed details in writing.'],
            ['Choose communication and comfort', 'You will spend important preparation time with your artist. Clear answers, realistic expectations, and a willingness to listen are as important as a beautiful portfolio. Avoid choosing on photographs alone without discussing your needs.']
        ],
        takeaway: 'The right bridal makeup artist is a good match for your style and event logistics. Compare portfolios, communication, service details, and availability before making your decision.'
    },
    {
        id: 'bridal-makeup-packages-kanpur',
        category: 'Bridal Planning',
        readTime: '4 min read',
        title: 'What to Check Before Booking Bridal Makeup Packages in Kanpur',
        intro: 'A simple checklist can help you compare bridal makeup services clearly and understand what is included before confirming a date.',
        image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Makeup brushes and beauty products arranged for a bridal makeup appointment',
        paragraphs: [
            ['List the functions you need', 'Write down whether you need makeup for the wedding ceremony, engagement, reception, or other celebrations. Different dates and start times can affect scheduling, so share the full plan when requesting package details.'],
            ['Ask what each service includes', 'Confirm whether the service includes makeup only or other agreed elements such as hairstyling, draping, lashes, or touch-up support. Inclusions vary between providers, so request a written breakdown instead of assuming every package is the same.'],
            ['Confirm travel and timing', 'If the artist needs to travel to a venue or hotel, ask whether travel costs apply and how much preparation time should be reserved. Check the start time, expected duration, and contingency plan for delays.'],
            ['Discuss products and preferences', 'Share any known sensitivities and ask how the artist will tailor the look to your skin, outfit, and comfort. If you have a preferred finish, explain it during the consultation rather than relying on a package name alone.'],
            ['Read the booking terms', 'Ask about the advance payment, cancellation or rescheduling terms, and how the date is confirmed. Keep a copy of the final service details and payment record for reference.']
        ],
        takeaway: 'When comparing bridal makeup packages in Kanpur, look beyond the headline price. Clear inclusions, timing, travel terms, and communication make it easier to compare options fairly.'
    },
    {
        id: 'engagement-makeup-looks',
        category: 'Makeup Inspiration',
        readTime: '4 min read',
        title: 'Engagement Makeup Ideas for an Elegant, Photo-Ready Look',
        intro: 'From soft glam to a more defined evening finish, your engagement makeup can complement your outfit without overpowering your personal style.',
        image: 'https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Elegant makeup styling inspiration for a special occasion',
        paragraphs: [
            ['Match the mood of your event', 'A daytime engagement may inspire a fresh, softly defined look, while an evening celebration may suit richer colours or more pronounced eyes. These are starting points rather than rules—choose what feels right for you.'],
            ['Coordinate with your outfit', 'Consider your outfit colour, neckline, embroidery, and jewellery. Share photographs of these details with your makeup artist so the complete look feels balanced.'],
            ['Decide what you want to emphasize', 'You might prefer softly defined eyes, a statement lip, luminous skin, or classic glam. Choose one or two priorities and discuss how the rest of the makeup can complement them.'],
            ['Think about photography and lighting', 'Tell your artist whether your event is indoors or outdoors and when most photographs will be taken. This context helps guide the finish and level of definition.'],
            ['Plan your appointment in advance', 'Share your event time, getting-ready location, and any outfit changes early. If you are also booking wedding or reception makeup, ask about availability for each date at the same time.']
        ],
        takeaway: 'An elegant engagement makeup look starts with your outfit, event, and personal preferences. Bring inspiration, discuss the details, and leave enough time to get ready comfortably.'
    },
    {
        id: 'reception-makeup-guide',
        category: 'Occasion Makeup',
        readTime: '4 min read',
        title: 'Reception Makeup: How to Create a Polished Evening Look',
        intro: 'A reception look can feel glamorous and refined when makeup, jewellery, outfit, and venue lighting work together.',
        image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Professional makeup artist preparing a client for an occasion look',
        paragraphs: [
            ['Start with the outfit', 'A heavily embellished outfit may pair well with balanced makeup, while a simpler outfit can leave more room for a statement lip or defined eyes. Consider the full styling rather than deciding on makeup in isolation.'],
            ['Plan for evening lighting', 'Reception venues often use warm lights, spotlights, and flash photography. Explain the venue and photography plans to your artist so they can recommend a finish that works in context.'],
            ['Choose a comfortable level of glamour', 'Smoky eyes, a classic liner, a soft shimmer, or a bold lip can all work depending on your preferences. You do not need to follow a trend if it does not feel like you.'],
            ['Allow time for outfit changes', 'If your reception follows another function, include time to change clothes, adjust jewellery, and travel. Tell your makeup artist if you need a refresh or a different look for the second event.'],
            ['Keep touch-ups simple', 'Ask which small items are useful for your specific makeup. A planned touch-up approach can be more practical than carrying many products or repeatedly applying layers.']
        ],
        takeaway: 'The best reception makeup is coordinated, comfortable, and planned around your evening schedule. Discuss the outfit, venue lighting, and desired finish before the event.'
    },
    {
        id: 'makeup-academy-kanpur-course-checklist',
        category: 'Makeup Academy',
        readTime: '5 min read',
        title: 'How to Choose a Makeup Academy in Kanpur',
        intro: 'If you are exploring professional makeup training, compare course content, hands-on practice, trainer guidance, and the support offered to students.',
        image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Beauty products arranged for skincare and makeup learning',
        paragraphs: [
            ['Review the curriculum', 'Ask whether the course covers skin preparation, colour matching, base techniques, eye makeup, hygiene, client consultation, and occasion or bridal looks. Request a clear outline of topics and practical outcomes before enrolling.'],
            ['Look for supervised practice', 'Makeup is a hands-on skill. Find out how much time students spend practising techniques, whether models or practice materials are provided, and how instructors give feedback on completed looks.'],
            ['Ask about class format and duration', 'Confirm the course schedule, class size, total training hours, materials, and any attendance requirements. Make sure the format fits your current commitments and learning goals.'],
            ['Understand the kit and extra costs', 'Ask what products and tools are included, what students need to purchase separately, and whether the kit is suitable for continued practice after the course. Get a written list to avoid surprises.'],
            ['Clarify certificates and career guidance', 'If a certificate is offered, ask what it represents and what requirements apply. You can also ask whether the academy provides portfolio guidance or advice on building client experience; do not assume employment or client bookings are guaranteed.']
        ],
        takeaway: 'When comparing makeup academies in Kanpur, choose based on transparent course details, practical training, hygiene standards, and instructor feedback. Contact the academy directly to confirm current batches and fees.'
    },
    {
        id: 'hd-vs-airbrush-bridal-makeup',
        category: 'Bridal Makeup Tips',
        readTime: '5 min read',
        title: 'HD vs Airbrush Bridal Makeup: What Should You Choose?',
        intro: 'Both HD and airbrush techniques can create beautiful bridal looks. The right option depends on your skin, desired finish, event, and the artist’s assessment.',
        image: 'https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1200',
        imageAlt: 'Makeup brushes and cosmetics prepared for professional makeup application',
        paragraphs: [
            ['Understand the techniques', 'HD makeup generally refers to products and application designed to look refined in high-resolution photography. Airbrush makeup uses a specialised tool to apply a fine mist of product. Exact results depend on the products, preparation, and artist technique.'],
            ['Consider your skin and preferred finish', 'Think about whether you prefer a natural, dewy, matte, or more perfected finish. Skin texture, dryness, oiliness, and sensitivities all affect how products look and feel, so discuss these with your artist.'],
            ['Think about the full event', 'Your ceremony duration, climate, outfit, and photography conditions may influence the recommendation. No technique is automatically best for every bride or every situation.'],
            ['Ask about preparation and touch-ups', 'A suitable skin-preparation routine and correct application matter with either technique. Ask what to expect during the appointment and what touch-up products may be useful for your event.'],
            ['Choose through consultation', 'Share inspiration photos and explain how you want your makeup to look in person and in photographs. An experienced artist can help you decide which approach is appropriate for your preferences and circumstances.']
        ],
        takeaway: 'There is no universal winner between HD and airbrush bridal makeup. Discuss your skin, preferred finish, event conditions, and budget with your makeup artist before deciding.'
    }
];

const POSTS_PER_PAGE = 3;

export default function Blog() {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const selectedArticle = articles.find((article) => article.id === location.hash.slice(1));
    const totalPages = Math.ceil(articles.length / POSTS_PER_PAGE);
    const visibleArticles = articles.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    useEffect(() => {
        if (!selectedArticle) return;
        const articleIndex = articles.findIndex((article) => article.id === selectedArticle.id);
        setCurrentPage(Math.floor(articleIndex / POSTS_PER_PAGE) + 1);
        const frame = window.requestAnimationFrame(() => {
            document.getElementById('blog-article-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return () => window.cancelAnimationFrame(frame);
    }, [location.hash, selectedArticle]);

    const changePage = (page) => {
        setCurrentPage(page);
        window.requestAnimationFrame(() => {
            document.getElementById('blog-listing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    const openArticle = (id) => navigate('/blog#' + id);
    const backToArticles = () => navigate('/blog');

    return (
        <div className="blog-page">
            <SEO
                title={selectedArticle ? selectedArticle.title : 'Bridal Beauty Journal'}
                description={selectedArticle
                    ? selectedArticle.title + '. ' + selectedArticle.intro + ' Gold Crown Makeup Studio in Kanpur.'
                    : 'Explore bridal makeup tips, wedding beauty planning, pre-wedding skincare, engagement and reception makeup, and professional makeup training advice from Gold Crown Makeup Studio in Kanpur.'}
                keywords={selectedArticle
                    ? selectedArticle.title.toLowerCase() + ', ' + selectedArticle.category.toLowerCase() + ', bridal makeup Kanpur, Gold Crown Makeup Studio'
                    : 'bridal makeup artist Kanpur, bridal makeup tips, engagement makeup Kanpur, reception makeup, makeup academy Kanpur, pre-wedding skincare, Gold Crown Makeup Studio'}
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
                    {selectedArticle ? (
                        <article id="blog-article-detail" className="blog-detail">
                            <button type="button" className="blog-back-link" onClick={backToArticles}>
                                <span aria-hidden="true">←</span> Back to all articles
                            </button>
                            <div className="blog-detail-header">
                                <p className="journal-meta">{selectedArticle.category} <span aria-hidden="true">·</span> {selectedArticle.readTime}</p>
                                <h2 className="heading-xl">{selectedArticle.title}</h2>
                                <p className="blog-article-intro">{selectedArticle.intro}</p>
                            </div>
                            <div className="blog-detail-hero-image">
                                <img src={selectedArticle.image} alt={selectedArticle.imageAlt} />
                            </div>
                            <div className="blog-detail-copy">
                                {selectedArticle.paragraphs.map(([heading, paragraph]) => (
                                    <section className="blog-copy-block" key={heading}>
                                        <h3>{heading}</h3>
                                        <p>{paragraph}</p>
                                    </section>
                                ))}
                                <div className="blog-takeaway">
                                    <strong>A final thought</strong>
                                    <p>{selectedArticle.takeaway}</p>
                                </div>
                                <div className="blog-detail-cta">
                                    <h3>Planning your special look?</h3>
                                    <p>Tell us about your event and we’ll help you explore the next steps.</p>
                                    <Link to="/contact" className="btn-solid">Contact the Studio</Link>
                                </div>
                            </div>
                        </article>
                    ) : (
                        <div id="blog-listing" className="blog-listing">
                            <div className="blog-listing-heading">
                                <div>
                                    <p className="text-meta">Tips, Inspiration & Advice</p>
                                    <h2 className="heading-xl">Latest from the <i className="italic">Journal</i></h2>
                                    <p className="text-secondary">Ideas for bridal planning, beauty preparation, and looks for your most meaningful occasions.</p>
                                </div>
                                <span className="blog-count">{articles.length} articles</span>
                            </div>

                            <div className="blog-card-grid">
                                {visibleArticles.map((article, index) => (
                                    <FadeUp key={article.id} delay={index * 90}>
                                        <article className="blog-list-card">
                                            <button type="button" className="blog-list-image" onClick={() => openArticle(article.id)} aria-label={'Read ' + article.title}>
                                                <img src={article.image} alt={article.imageAlt} loading="lazy" />
                                                <span className="journal-category">{article.category}</span>
                                            </button>
                                            <div className="blog-list-card-body">
                                                <p className="journal-meta">{article.readTime}</p>
                                                <h3>{article.title}</h3>
                                                <p className="blog-list-excerpt">{article.intro}</p>
                                                <button type="button" className="journal-read-link blog-read-button" onClick={() => openArticle(article.id)}>
                                                    Read article <span aria-hidden="true">→</span>
                                                </button>
                                            </div>
                                        </article>
                                    </FadeUp>
                                ))}
                            </div>

                            <nav className="blog-pagination" aria-label="Blog pagination">
                                <button type="button" className="pagination-arrow" onClick={() => changePage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} aria-label="Previous page">
                                    <span aria-hidden="true">←</span> <span className="pagination-word">Previous</span>
                                </button>
                                <div className="pagination-pages" aria-label={'Page ' + currentPage + ' of ' + totalPages}>
                                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                        <button type="button" key={page} onClick={() => changePage(page)} className={'pagination-page' + (currentPage === page ? ' pagination-page-active' : '')} aria-current={currentPage === page ? 'page' : undefined} aria-label={'Page ' + page}>
                                            {page}
                                        </button>
                                    ))}
                                </div>
                                <button type="button" className="pagination-arrow" onClick={() => changePage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} aria-label="Next page">
                                    <span className="pagination-word">Next</span> <span aria-hidden="true">→</span>
                                </button>
                            </nav>
                            <p className="pagination-summary">Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–{Math.min(currentPage * POSTS_PER_PAGE, articles.length)} of {articles.length} articles</p>
                        </div>
                    )}
                </div>
            </section>

            {!selectedArticle && (
                <section className="blog-bottom-cta-section">
                    <div className="container">
                        <div className="blog-bottom-cta text-center">
                            <h2 className="heading-xl">Have a question about your look?</h2>
                            <p className="text-secondary">Tell us about your occasion and we’ll help you explore the next steps.</p>
                            <Link to="/contact" className="btn-solid">Contact the Studio</Link>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
