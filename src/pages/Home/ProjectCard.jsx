import { useTranslation } from './LanguageContext';
import './ProjectCard.css';

function ProjectCard(props){
    const { t } = useTranslation();

    return(
        <div className='project-card'>
            <img className='project-image' src={props.image} alt={props.title}>
            </img>
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
    );
}

export default ProjectCard