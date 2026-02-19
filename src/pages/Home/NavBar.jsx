import './NavBar.css'
import { useTranslation } from './LanguageContext';
import logo from '/src/assets/JD_logo_nobackground_new.png';
import { useEffect, useRef } from 'react';

function NavigationBar({ activeSection, lenis }) {
    const { t, language, toggleLanguage } = useTranslation();
    const navItems = ['home', 'about', 'skills', 'projects', 'contact', 'resume'];
    const navRef = useRef(null);

    useEffect(() => {
        const updateBubble = () =>{
            const activeEl = navRef.current?.querySelector('.active');
            if (activeEl) {
                const { offsetLeft, offsetWidth } = activeEl;
                navRef.current.style.setProperty('--left', `${offsetLeft}px`);
                navRef.current.style.setProperty('--width', `${offsetWidth}px`);
            }
        }

        updateBubble();
    }, [activeSection, t]);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        if (lenis) lenis.scrollTo(id, { offset: 0 });
    };

    return (
        <div className='nav-bar'>
            <img className='website-logo' src={logo} alt='logo' />
            <div className='nav-selection'>
                <nav className='nav' ref={navRef} style={{ position: 'relative' }}>
                    <div className="nav-active-bubble" />
                    
                    {navItems.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleNavClick(e, `#${id}`)}
                            className={`nav-link ${activeSection === id ? "active" : ""}`}
                        >
                            {t[id]}
                        </a>
                    ))}
                </nav>
                <button className='lang-toggle-btn' onClick={toggleLanguage}>
                    {language === 'en' ? 'FR' : 'EN'}
                </button>
            </div>
        </div>
    );
}

export default NavigationBar