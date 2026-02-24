import './Hero.css'
import './Animations.css'
import { useTranslation } from './LanguageContext';
import { useLenis } from '../../LenisContext.js';
import TiltCard from './TiltCard.jsx';

function Hero() {
    const { t } = useTranslation();
    const lenis = useLenis();

    const handleScrollTo = (e, id) => {
        e.preventDefault();
        lenis?.scrollTo(id);
    }

    return (
        <div className='main-heading'>
            <TiltCard />
            <div>
                <div className='main-heading-text fade-in-right'>
                    <p>{t.intro1}<span style={{
                        color: 'var(--primary-color)', fontWeight: '400'
                    }}>Jeremy</span>.</p>
                    <span>{t.intro2}</span>
                </div>
                <div className='fade-in-up'>
                    <a 
                        className='view-page-button' 
                        onClick={(e) => handleScrollTo(e, '#about')}
                    >
                        {t.leanMore} &#8595;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero