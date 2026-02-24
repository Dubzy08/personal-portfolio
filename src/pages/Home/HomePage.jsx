import Footer from './Footer.jsx';
import NavigationBar from './NavBar.jsx';
import SkillSection from './SkillSection.jsx';
import ProjectCard from './ProjectCard.jsx'
import About from './About.jsx';
import Contact from './Contact.jsx';
import Hero from './Hero.jsx';
import ParticleBackground from './Particle.jsx';
import Resume from './Resume.jsx';
import { useTranslation } from './LanguageContext.jsx';
import { useEffect, useState, useRef } from 'react';
import { Projects } from '../../assets/projects/projects.js';

function Home() {

    const { t } = useTranslation();
    
    return (
        <div className='app-container'>
            <ParticleBackground />
            <NavigationBar className='nav-bar' />
            <div className='content container'>
                <section id='home'>
                    <Hero />
                </section>
                <section id='about' className='section-block about'>
                    <h1 className='section-heading'>{t.about}</h1>
                    <About />
                </section>
                <section id='skills' className='section-block skills'>
                    <h1 className='section-heading'>{t.skills}</h1>
                    <SkillSection />
                    <p>{t.skillsDesc}</p>
                </section>
                <section id='projects' className='section-block projects'>
                    <h1 className='section-heading'>{t.projects}</h1>
                    <p>{t.projectPar}</p>
                    <div className='project-card-container'>
                        {Projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </section>
                <section id='contact' className='section-block contact'>
                    <h1 className='section-heading'>{t.contact}</h1>
                    <Contact />
                </section>
                <section id='resume' className='section-block resume'>
                    <h1 className='section-heading'>{t.resume}</h1>
                    <Resume />
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Home
