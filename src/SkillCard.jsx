import './SkillCard.css'

function SkillCard(props){

    const filename = props.filename;
    const filepath = './src/assets/skills/';

    return(
        <div className='skill-card'>
            <img className='skill-image' src={filepath+filename}></img>
            <div className='skill-title'>{props.title}</div>
        </div>
    );
}

export default SkillCard