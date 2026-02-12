import './NavBar.css'
import { useTranslation } from './LanguageContext';

function NavigationBar() {
    const { t, language, toggleLanguage } = useTranslation();

    return (
        <>
            <div className='nav-bar'>
                <div>
                    <img className='website-logo' src='./src/assets/JD_logo_nobackground.png' alt='logo'/>
                </div>
                <ul className='item-list'>
                    <li className='list-item'>
                        <a href="#home">{t.home}</a>
                    </li>
                    <li className='list-item'>
                        <a href="#about">{t.about}</a>
                    </li>
                    <li className='list-item'>
                        <a href="#skills">{t.skills}</a>
                    </li>
                    <li className='list-item'>
                        <a href="#projects">{t.projects}</a>
                    </li>
                    <li className='list-item'>
                        <a href="#contact">{t.contact}</a>
                    </li>
                    <li className='list-item'>
                        <a href="#resume">{t.resume}</a>
                    </li>
                </ul>
                <div className='lang-toggle-container'>
                    <button className='lang-toggle-btn' onClick={toggleLanguage}>
                        {language === 'en' ? 'FR' : 'EN'}
                    </button>
                </div>

            </div>
        </>
    );
}

export default NavigationBar