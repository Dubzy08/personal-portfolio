import './NavBar.css'
import { useTranslation } from './LanguageContext';
import logo from '/src/assets/JD_logo_nobackground_new.png';
import { useLenis } from '../../LenisContext';
import { useState, useEffect, useRef } from 'react';

function NavigationBar() {
    const { t, language, toggleLanguage } = useTranslation();
    const navItems = ['home', 'about', 'skills', 'projects', 'contact', 'resume'];
    const navRef = useRef(null);
    const lenis = useLenis();

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

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
        lenis?.scrollTo(id, { offset: 0 });
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