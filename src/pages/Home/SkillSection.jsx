import SkillCard from './SkillCard.jsx';
import { Skills } from '../../assets/skills/Skills.js';
import './SkillSection.css';

function SkillSection() {
    const rows = getTriangleRows(Skills);
    let skillIndex = 0;

    return (
        <div className='skills-triangle'>
            {rows.map((count, rowIdx) => (
                <div className='skills-row' key={rowIdx}>
                    {Skills.slice(skillIndex, skillIndex += count).map(skill => (
                        <SkillCard key={skill.title} title={skill.title} filename={skill.filename} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function getTriangleRows(cards) {
    const n = cards.length;

    let numRows = Math.ceil((-1 + Math.sqrt(1 + 8 * n)) / 2);

    let rows = Array.from({ length: numRows }, (_, i) => numRows - i);

    let deficit = (numRows * (numRows + 1)) / 2 - n;
    for (let i = rows.length - 1; i >= 0 && deficit > 0; i--) {
        const remove = Math.min(rows[i], deficit);
        rows[i] -= remove;
        deficit -= remove;
    }

    rows = rows.filter(r => r > 0);
    return rows;
}

export default SkillSection