import './Footer.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function Footer(){

    return (
        <footer>
            <a href='#home' className='home-button'>
                <KeyboardDoubleArrowUpIcon/>
            </a>
            <div className='socials'>
                <a href='home' className='social-link'>
                    <img className='social-img' src='./src/assets/socials/github.png'></img>
                </a>
                <a href='https://www.linkedin.com/in/jeremydub%C3%A9/' className='social-link'>
                    <img className='social-img' src='./src/assets/socials/linkedin.png'></img>
                </a>
                <a href='home' className='social-link'>
                    <img className='social-img' src='./src/assets/socials/mail.png'></img>
                </a>
            </div>
            <p className='copyright-text'>&copy; 2026 J.Dube | Software & Web Engineer</p>
        </footer>
    );
}

export default Footer