import './SkillCard.css'

function SkillCard(props){

    return(
        <div className='skill-card'>
            <img className='skill-image' src={props.filename} alt={props.title}></img>
            <div className='skill-title'>{props.title}</div>
        </div>
    );
}

export default SkillCard