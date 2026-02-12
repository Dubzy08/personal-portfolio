import './Footer.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import githubImg from './assets/socials/github.png'
import linkedinImg from './assets/socials/linkedin.png'
import mailImg from './assets/socials/mail.png'

function Footer(){

    return (
        <footer>
            <a href='#home' className='home-button'>
                <KeyboardDoubleArrowUpIcon/>
            </a>
            <div className='socials'>
                <a href='https://github.com/Dubzy08' className='social-link' target='_blank'>
                    <img className='social-img' src={githubImg}></img>
                </a>
                <a href='https://www.linkedin.com/in/jeremydub%C3%A9/' className='social-link' target='_blank'>
                    <img className='social-img' src={linkedinImg}></img>
                </a>
                <a href='mailto:jeremy.dube08@outlook.com' className='social-link'>
                    <img className='social-img' src={mailImg}></img>
                </a>
            </div>
            <p className='copyright-text'>&copy; 2026 J.Dube | Software & Web Engineer</p>
        </footer>
    );
}

export default Footer