import './Footer.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import githubImg from '/src/assets/socials/github.png'
import linkedinImg from '/src/assets/socials/linkedin.png'
import mailImg from '/src/assets/socials/mail.png'
import { useLenis } from '../../LenisContext';

function Footer(){

    const lenis = useLenis();

    const scrollToTop = () => {
        lenis?.scrollTo(0);
    }

    return (
        <footer>
            <a onClick={scrollToTop} className='home-button'>
                <KeyboardDoubleArrowUpIcon/>
            </a>
            <div className='socials'>
                <a href='https://github.com/Dubzy08' className='social-link' target='_blank'>
                    <img className='social-img' src={githubImg}></img>
                </a>
                <a href='https://www.linkedin.com/in/jeremy-dube-software-engineer' className='social-link' target='_blank'>
                    <img className='social-img' src={linkedinImg}></img>
                </a>
                <a href='mailto:jeremy.dube08@outlook.com' className='social-link'>
                    <img className='social-img' src={mailImg}></img>
                </a>
            </div>
            <p className='copyright-text'>&copy; 2026 J.Dube | Software & Web Developer. All rights reserved.</p>
        </footer>
    );
}

export default Footer