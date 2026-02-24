import { alignItems, alignSelf, boxSizing, fontSize, justifyContent, justifyItems, justifySelf } from "@mui/system";
import SubmitButton from "./SubmitButton";
import "./Contact.css";
import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "./LanguageContext";

function Contact(){

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    return(
        <div className="contact-container container">
            <p>{t.contactText}</p>
            <input 
                className="contact-input"
                name="name"
                placeholder={t.name}
                required
            /><br/>
            <input 
                className="contact-input"
                name="email"
                type="email" 
                placeholder={t.email}
                required
            /><br/>
            <textarea 
                className="contact-input contact-textarea"
                type='text' 
                placeholder="Message"
            />
            <div className="submit-button-container">
                <SubmitButton/>
            </div>
        </div>
    );
}

export default Contact