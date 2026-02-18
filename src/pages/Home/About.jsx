import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import './About.css'
import { useTranslation } from './LanguageContext';

function About() {

    const { t } = useTranslation();

    return (
        <>
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="mui-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        {/* We use your CSS variables here for consistency */}
                        <stop offset="0%" stopColor="var(--secondary-color)" />
                        <stop offset="100%" stopColor="var(--primary-color)" />
                    </linearGradient>
                </defs>
            </svg>
            <AssignmentIndOutlinedIcon
                className='profile-icon'
                sx={{
                    fontSize: 200,
                    strokeWidth: 0.1,
                    fill: 'url(#mui-gradient)',
                    paintOrder:'stroke'
                }}
            />
            <p className='about-text'>
                {t.aboutDesc}
            </p>
        </>
    );
}

export default About