import { useTranslation } from './LanguageContext';
import { useState, useEffect } from 'react';
import './ProjectCard.css';
import { jaJP } from '@mui/material/locale';

function ProjectCard(props){
    const { t } = useTranslation();

    const [ count, setCount ] = useState(5);
    const [ skills, setSkills ] = useState([]);
    const [ loadMoreText, setLoadMoreText ] = useState(`+${props.skills.length - count}`);

    useEffect(() => {
        const showSkills = () => {
            const skills = props.skills.slice(0, count);
            setSkills(skills);
        }

        showSkills();

    }, [count]);

    const toggleShowBtn = () => {
        if(count === props.skills.length){
            setCount(5);
            setLoadMoreText(`+${props.skills.length - 5}`);
        } else {
            setCount(props.skills.length);
            setLoadMoreText('▲');
        }
    };

    return(
        <div className='project-card'>
            <div className='image-container'>
                <img className='project-image' src={props.image} alt={props.title}>
                </img>
            </div>
            <div className='project-content'>
                <div className='project-info'>
                    <div className='project-title'>
                        {props.title}
                    </div>
                    <div className='project-desc'>
                        {props.desc[t] || props.desc.en}
                    </div>
                    <div className='project-skills'>
                        {skills.map((skill, index) => (
                            <span key={index} className='skill-tag'>
                                {skill}
                            </span>
                        ))}
                        <button onClick={toggleShowBtn}>{loadMoreText}</button>
                    </div>
                </div>
                <div className='project-links'>
                    <a className='live-demo' href={props.demoLink ? props.demoLink : '#' }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        Live Demo
                    </a>
                    <a className={`source-code ${!props.codeLink ? 'disabled' : ''}`} href={props.codeLink}>
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