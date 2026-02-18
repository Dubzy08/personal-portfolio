import Footer from './Footer.jsx';
import NavigationBar from './NavBar.jsx';
import SkillCard from './SkillCard.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Hero from './Hero.jsx';
import ParticleBackground from './Particle.jsx';
import Resume from './Resume.jsx';
import { useTranslation } from './LanguageContext.jsx';
import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { SkillIcons } from '../../assets/skills/index.jsx';

function App() {

    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('home');
    const lenisRef = useRef(null);

    useEffect(() => {
        lenisRef.current = new Lenis();
        
        function raf(time) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
        };
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]"); // Only watch sections with IDs

        const observerOptions = {
            root: null, // use the viewport
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper middle of the screen
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

    return (
        <div className='app-container'>
            <ParticleBackground id='tsparticles' />
            <div className='content'>
                <NavigationBar activeSection={activeSection} lenis={lenisRef.current} className='nav-bar' />
                <section id='home'>
                    <div className='welcome-screen'>
                        <Hero />
                    </div>
                </section>
                <div className='about-skills-container'>
                    <section id='about' className='section-block about'>
                        <h2 className='section-heading'>{t.about}</h2>
                        <About />
                    </section>
                    <section id='skills' className='section-block skills'>
                        <h2 className='section-heading'>{t.skills}</h2>
                        <div className='container'>
                            <SkillCard title='PYTHON' filename={SkillIcons.python} />
                            <SkillCard title='JAVASCRIPT' filename={SkillIcons.javascript} />
                            <SkillCard title='C++' filename={SkillIcons.cpp} />
                            <SkillCard title='REACT' filename={SkillIcons.react} />
                            <SkillCard title='HTML' filename={SkillIcons.html} />
                            <SkillCard title='C#' filename={SkillIcons.csharp} />
                            <SkillCard title='GIT' filename={SkillIcons.git} />
                            <SkillCard title='CSS' filename={SkillIcons.css} />
                            <SkillCard title='DOCKER' filename={SkillIcons.docker} />
                            <SkillCard title='POSTGRESQL' filename={SkillIcons.postgresql} />
                        </div>
                        <p>{t.skillsDesc}</p>
                    </section>
                </div>
                <section id='projects' className='section-block projects'>
                    <h2 className='section-heading'>{t.projects}</h2>
                </section>
                <section id='contact' className='section-block contact'>
                    <h2 className='section-heading'>{t.contact}</h2>
                    <Contact />
                </section>
                <section id='resume' className='section-block resume'>
                    <h2 className='section-heading'>{t.resume}</h2>
                    <Resume />
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default App
