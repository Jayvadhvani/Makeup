
import FadeUp from '../components/FadeUp';

export default function Pathway() {
    return (
        <div style={{ paddingTop: '120px', minHeight: '80vh' }}>
            <div className="container section">
                <FadeUp>
                    <h4 className="text-meta text-center" style={{ marginBottom: '1rem' }}>Gold Crown Makeup Studio</h4>
                    <h1 className="heading-display text-center"><i className="italic">Pathway</i></h1>
                    <div className="line-vertical" style={{ margin: '3rem auto' }}></div>
                    <p className="text-center text-lead" style={{ margin: '0 auto', maxWidth: '800px' }}>
                        This is the premium Pathway page. It inherits the sophisticated typography, spacing, and background colors of our new luxury design system. Content blocks will follow the asymmetrical editorial grid approach shown on the homepage.
                    </p>
                </FadeUp>
            </div>
        </div>
    );
}
