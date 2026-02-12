import Footer from './Footer.jsx'
import NavigationBar from './NavBar.jsx'
import SkillCard from './SkillCard.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import ParticleBackground from './Particle.jsx'
import Resume from './Resume.jsx'
import { useTranslation } from './LanguageContext.jsx'

function App() {

    const { t } = useTranslation();

    return (
        <>
            {/* <ParticleBackground className='main-bg'/> */}
            <NavigationBar className='nav-bar'/>
            <div className='welcome-screen'>
                <Home/>
            </div>
            <div className='about-skills-container'>
                <section id='about' className='section-block about'>
                    <h2 className='section-heading'>{t.about}</h2>
                    <About/>
                </section>
                <section id='skills' className='section-block skills'>
                    <h2 className='section-heading'>{t.skills}</h2>
                    <div className='container'>
                        <SkillCard title='PYTHON' filename='python.png'/>
                        <SkillCard title='JAVASCRIPT' filename='javascript.png'/>
                        <SkillCard title='C++' filename='cpp.png'/>
                        <SkillCard title='REACT' filename='react.png'/>
                        <SkillCard title='HTML' filename='html5.png'/>
                        <SkillCard title='C#' filename='csharp.png'/>
                        <SkillCard title='GIT' filename='git.png'/>
                        <SkillCard title='CSS' filename='css.png'/>
                        <SkillCard title='DOCKER' filename='docker.png'/>
                        <SkillCard title='POSTGRESQL' filename='postgresql.png'/>
                    </div>
                    <p>{t.skillsDesc}</p>
                </section>
            </div>
            <section id='projects' className='section-block projects'>
                <h2 className='section-heading'>{t.projects}</h2>
            </section>
            <section id='contact' className='section-block contact'>
                <h2 className='section-heading'>{t.contact}</h2>
                <Contact/>
            </section>
            <section id='resume' className='section-block resume'>
                <h2 className='section-heading'>{t.resume}</h2>
                <Resume/>
            </section>
            <Footer/>
        </>
    );
}

export default App
