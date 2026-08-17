import FadeUp from '../components/FadeUp';
import SEO from '../components/SEO';

export default function Testimonials() {
    const allReviews = [
        { name: "Pooja Singh", text: "Gold Crown Studio is hands down the best in Kanpur! Sunita ma'am and her team are so welcoming and professional. She gave me the exact bridal look I dreamed of—flawless, elegant, and it lasted all night without feeling heavy. Highly recommended!" },
        { name: "Ankita Verma", text: "I completed my professional makeup course at Gold Crown Academy, and it was a life-changing experience. Sunita ma'am's hands-on teaching style and attention to detail gave me so much confidence. Best decision I ever made!" },
        { name: "Roshni Agarwal", text: "Booked them for my engagement and wedding. The makeup was so natural and personalized to my features rather than looking cakey. The studio environment is very luxurious and hygienic. Thank you for making me feel so special!" },
        { name: "Neha Agarwal", text: "Gold Crown Makeup Studio exceeded my expectations. The makeup looked natural in person and gorgeous in pictures. Sunita ma'am has such an amazing eye for what suits each face." },
        { name: "Simran Kapoor", text: "I absolutely loved my party makeup! The look was glamorous but still felt like me. The team was warm, professional and very attentive. I would definitely recommend Gold Crown Makeup Studio." },
        { name: "Sneha Mishra", text: "Sunita ma'am is truly talented. She listened patiently to my preferences and created a look that suited my outfit, hairstyle and personality perfectly. I felt beautiful and confident throughout the event." },
        { name: "Aditi Gupta", text: "One of the best makeup experiences I have ever had. The finish was beautiful, the products felt comfortable and the entire appointment was handled so professionally. Gold Crown Makeup Studio is definitely worth visiting." },
        { name: "Kavya Tiwari", text: "I booked Gold Crown for my wedding function and I couldn't have been happier. Sunita ma'am made me feel completely comfortable and gave me such a sophisticated look. Everyone kept asking who did my makeup!" },
        { name: "Nisha Srivastava", text: "From consultation to the final look, everything was wonderful. Sunita ma'am takes time to understand what you want instead of simply following a routine. The final result was elegant and beautiful." },
        { name: "Ishita Jain", text: "I wanted a modern yet traditional look for my family wedding, and Gold Crown Makeup Studio delivered perfectly. My makeup looked fresh, polished and beautiful for hours." },
        { name: "Pooja Yadav", text: "Sunita ma'am has an incredible talent for enhancing natural features. I still looked like myself, just a more glamorous and confident version. I loved the final look!" },
        { name: "Mehak Bhatia", text: "Absolutely loved my experience at Gold Crown Makeup Studio. The attention to detail was amazing and the overall look was exactly what I had imagined. The studio has such a professional and welcoming atmosphere." },
        { name: "Shreya Sinha", text: "I was quite nervous before my makeup appointment, but Sunita ma'am made me feel completely relaxed. She understood my concerns and created a beautiful look that made me feel confident." },
        { name: "Tanya Arora", text: "My bridal makeup was simply gorgeous! The look complemented my outfit and jewellery perfectly. Sunita ma'am's attention to detail really stood out, and I felt like the best version of myself." },
        { name: "Sakshi Gupta", text: "Gold Crown Makeup Studio is my go-to place for special occasions. The makeup is elegant, polished and customized according to the person. Sunita ma'am and her team are wonderful." },
        { name: "Divya Srivastava", text: "I loved how personalized the entire experience was. Instead of giving me a standard makeup look, Sunita ma'am created something specifically for me. The final result was beautiful and sophisticated." },
        { name: "Mansi Kapoor", text: "The makeup was stunning and photographed beautifully. I received so many compliments from my friends and family. Thank you, Sunita ma'am, for making my special occasion even more memorable!" },
        { name: "Ritika Sharma", text: "From the moment I entered Gold Crown Makeup Studio, I felt welcomed. Everything was handled with care and professionalism. My makeup looked elegant, fresh and perfectly suited to my features." },
        { name: "Komal Verma", text: "I wanted something subtle and classy, and Sunita ma'am understood my vision perfectly. The result was beautiful without feeling heavy. I absolutely loved it!" },
        { name: "Pallavi Mishra", text: "Sunita ma'am is extremely skilled and patient. She took the time to understand my preferences and paid attention to every small detail. I was genuinely delighted with the final look." },
        { name: "Radhika Jain", text: "My experience at Gold Crown Makeup Studio was amazing. The makeup was flawless, the overall styling was beautiful and the team made me feel very comfortable. Highly recommended for special occasions." },
        { name: "Muskan Tiwari", text: "I wanted a glamorous look for my reception and Sunita ma'am created exactly what I had pictured. The makeup looked gorgeous under lights and in photographs. I absolutely loved it!" },
        { name: "Shalini Agarwal", text: "What I loved most was that the makeup enhanced my features instead of changing my appearance. Sunita ma'am has a wonderful understanding of face structure and what works for each individual." },
        { name: "Preeti Singh", text: "Gold Crown Makeup Studio gave me such a beautiful experience. Everything felt organized and professional, and the final makeup was stunning. I felt confident from the moment I looked in the mirror." },
        { name: "Neelam Gupta", text: "Sunita ma'am's work is beautiful and detailed. She creates makeup that feels luxurious but still personal. I received so many compliments and was extremely happy with my look." },
        { name: "Juhi Saxena", text: "I had a wonderful experience at Gold Crown Makeup Studio. The makeup was elegant, comfortable and perfectly matched my outfit. Sunita ma'am is incredibly talented and friendly." },
        { name: "Sanya Malhotra", text: "I showed Sunita ma'am a few inspiration pictures and she created a look that suited me even better. She understood my features and made the entire experience enjoyable. I loved the result!" },
        { name: "Charu Srivastava", text: "Beautiful makeup, professional service and wonderful attention to detail. Gold Crown Makeup Studio made me feel special and confident. I would happily recommend Sunita ma'am to anyone looking for professional makeup." },
        { name: "Ayesha Khan", text: "I was looking for a refined and elegant look for an important family celebration. Sunita ma'am understood exactly what I wanted and created a beautiful finish. I felt confident and received so many compliments." },
        { name: "Divya Sharma", text: "Gold Crown Makeup Studio truly understands that every woman has her own style. Sunita ma'am created a look that felt completely 'me' while still making me feel extra special. A beautiful experience from beginning to end." }
    ];

    // Splitting reviews into Google Highlights and General Reviews
    const googleReviews = allReviews.slice(0, 3);
    const generalReviews = allReviews.slice(3);

    const GoogleIcon = () => (
        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
    );

    return (
        <div style={{ paddingTop: '120px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
            {/* HERO SECTION */}
            <div className="container section-sm text-center">
                <FadeUp>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', color: '#FBBC05', fontSize: '1.5rem' }}>★★★★★</div>
                        <span className="text-meta" style={{ letterSpacing: '0.1em' }}>4.9/5 Average Rating</span>
                    </div>
                    <h1 className="heading-display"><i className="italic">Loved by Brides</i></h1>
                    <h2 className="heading-lg">Across Kanpur</h2>
                    <div className="line-vertical" style={{ margin: '3rem auto' }}></div>
                </FadeUp>
            </div>

            {/* GOOGLE REVIEWS HIGHLIGHT */}
            <div className="bg-secondary section-sm">
                <div className="container">
                    <FadeUp>
                        <h4 className="text-meta text-center" style={{ marginBottom: '3rem' }}>Verified Google Reviews</h4>
                    </FadeUp>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {googleReviews.map((review, i) => (
                            <FadeUp key={i} delay={i * 150}>
                                <div style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '12px',
                                    padding: '2rem',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{
                                                width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)',
                                                color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold'
                                            }}>
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: '600', color: '#202124', fontSize: '0.95rem' }}>{review.name}</div>
                                                <div style={{ color: '#70757a', fontSize: '0.8rem' }}>Local Guide</div>
                                            </div>
                                        </div>
                                        <GoogleIcon />
                                    </div>
                                    <div style={{ display: 'flex', color: '#FBBC05', fontSize: '1rem', marginBottom: '1rem' }}>★★★★★</div>
                                    <p style={{ color: '#3c4043', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>
                                        {review.text}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </div>

            {/* MASONRY REVIEWS */}
            <div className="container section">
                <FadeUp>
                    <h4 className="text-meta text-center" style={{ marginBottom: '4rem' }}>More Client Experiences</h4>
                </FadeUp>
                <div style={{
                    columnCount: 3,
                    columnGap: '2rem',
                    '@media (max-width: 1024px)': { columnCount: 2 },
                    '@media (max-width: 768px)': { columnCount: 1 }
                }} className="masonry-grid">
                    {generalReviews.map((review, i) => (
                        <FadeUp key={i} delay={(i % 5) * 100}>
                            <div style={{
                                backgroundColor: 'var(--bg-white)',
                                padding: '2.5rem',
                                border: '1px solid rgba(214, 197, 179, 0.4)',
                                marginBottom: '2rem',
                                breakInside: 'avoid',
                                display: 'inline-block',
                                width: '100%'
                            }}>
                                <div style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>★★★★★</div>
                                <p className="text-secondary" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
                                    "{review.text}"
                                </p>
                                <h4 className="text-meta color-burgundy">— {review.name}</h4>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 1024px) {
                    .masonry-grid { column-count: 2 !important; }
                }
                @media (max-width: 768px) {
                    .masonry-grid { column-count: 1 !important; }
                }
            `}</style>
        </div>
    );
}
