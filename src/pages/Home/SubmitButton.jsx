import './SubmitButton.css'
import { useTranslation } from './LanguageContext';

function SubmitButton(){

    const { t } = useTranslation();

    return(
        <button className='submit-button'>{t.submit}</button>
    );
}

export default SubmitButton