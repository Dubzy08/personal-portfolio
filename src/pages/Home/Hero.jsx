import './Hero.css'
import './Animations.css'
import { useTranslation } from './LanguageContext';

function Hero(){
    const { t } = useTranslation();

    return(
        <header className='page-header'>
            <div className='main-heading'>
                <div className='main-heading-text fade-in-right'>
                    <p>{t.intro1}<span style={{color:'var(--primary-color)', fontWeight:'400'
                    }}>Jeremy</span>.</p>
                    <span>{t.intro2}</span>
                </div>
                <div className='fade-in-up'>
                    <a className='view-page-button' href='#about'>{t.leanMore} &#8595;</a>
                </div>
            </div>
        </header>
    );
}

export default Hero