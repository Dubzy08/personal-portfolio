import './Resume.css'
import resume_fr from '../public/Jeremy_Dube_Software_Engineer_FR.pdf';
import resume_en from '../public/Jeremy_Dube_Software_Engineer_EN.pdf';

function Resume() {

    return (
        <>
            <div className="resume-container">
                <div className="resume-card">
                    <div className="card-header">
                        <span className="lang-code">EN</span>
                        <h3>English Resume</h3>
                    </div>
                    <div className="button-group">
                        <a href={resume_en} target="_blank" rel="noopener noreferrer" className="btn-preview">
                            <i className="fa fa-eye"></i> Preview
                        </a>
                        <a href={resume_en} download="Jeremy_Resume_EN.pdf" className="btn-download">
                            <i className="fa fa-download"></i> Download
                        </a>
                    </div>
                </div>
                <div className="resume-card">
                    <div className="card-header">
                        <span className="lang-code">FR</span>
                        <h3>CV Français</h3>
                    </div>
                    <div className="button-group">
                        <a href={resume_fr} target="_blank" rel="noopener noreferrer" className="btn-preview">
                            <i className="fa fa-eye"></i> Aperçu
                        </a>
                        <a href={resume_fr} download="Jeremy_Resume_FR.pdf" className="btn-download">
                            <i className="fa fa-download"></i> Télécharger
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume