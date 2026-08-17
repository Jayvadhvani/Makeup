
import { useEffect, useRef, useState } from 'react';

export default function FadeUp({ children, delay = 0 }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        if (domRef.current) observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={domRef} 
            className={'fade-up ' + (isVisible ? 'visible' : '')} 
            style={{ transitionDelay: delay + 'ms' }}
        >
            {children}
        </div>
    );
}
