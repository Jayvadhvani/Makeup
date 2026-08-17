import { useEffect } from 'react';

export default function SEO({ title, description, keywords }) {
    useEffect(() => {
        // Update Title
        document.title = title ? `${title} | Gold Crown Makeup Studio` : 'Gold Crown Makeup Studio | Best Makeup Artist in Kanpur';

        // Update Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Gold Crown Makeup Studio by Sunita Gupta. Premium bridal makeup, party makeup, and professional makeup academy in Kanpur.');
        }

        // Update Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords || 'Makeup Studio Kanpur, Best Bridal Makeup Kanpur, Sunita Gupta Makeup Artist, Makeup Academy Kanpur, Party Makeup, Professional Makeup Artist');
        }

    }, [title, description, keywords]);

    return null;
}
