import './Resume.css'

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
                        <a href="/public/Jeremy_Dube_Software_Engineer_EN.pdf" target="_blank" rel="noopener noreferrer" className="btn-preview">
                            <i className="fa fa-eye"></i> Preview
                        </a>
                        <a href="/public/Jeremy_Dube_Software_Engineer_EN.pdf" download="Jeremy_Resume_EN.pdf" className="btn-download">
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
                        <a href="/public/Jeremy_Dube_Software_Engineer_FR.pdf" target="_blank" rel="noopener noreferrer" className="btn-preview">
                            <i className="fa fa-eye"></i> Aperçu
                        </a>
                        <a href="/public/Jeremy_Dube_Software_Engineer_FR.pdf" download="Jeremy_Resume_FR.pdf" className="btn-download">
                            <i className="fa fa-download"></i> Télécharger
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume