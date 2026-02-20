import { useTranslation } from './LanguageContext';
import './ProjectCard.css';

function ProjectCard(props){
    const { t } = useTranslation();

    return(
        <div className='project-card'>
            <img className='project-image' src={props.image} alt={props.title}>
            </img>
            <div className='project-content'>
                <div className='project-info'>
                    <div className='project-title'>
                        {props.title}
                    </div>
                    <div className='project-desc'>
                        {props.desc[t] || props.desc.en}
                    </div>
                    <div className='project-skills'>
                        {props.skills.map((skill, index) => (
                            <span key={index} className='skill-tag'>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='project-links'>
                    <a className='info-link live-demo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        Live Demo
                    </a>
                    <a className='info-link source-code'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        Source
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard