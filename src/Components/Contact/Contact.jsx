import React, { useEffect, useRef } from 'react';
import mobile from '../../assets/mobile2.svg';
import location from '../../assets/location.svg';
import mail from '../../assets/mail1.svg';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const formRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "bcf20e4d-58ad-4c7e-b03b-56710debccff");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            formRef.current.reset(); // Clear the form fields
        }
    };

    return (
        <div className="contact" id='contact'>
            <div className="contact-title" data-aos="fade-up">
                <h1>Get in touch</h1>
                <div></div>
            </div>
            <div className="contact-section">
                <div className="contact-left" data-aos="fade-right">
                    <h1>Let's talk</h1>
                    <p>Feel free to send me a message about anything you want me to work on. I'm currently looking for an internship and am available to discuss potential opportunities. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt='mail address' /><p>isuraviranga@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={mobile} alt='mobile number' /><p>0777997689</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt='location' /><p>Colombo, Sri Lanka</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right" data-aos="fade-left" ref={formRef}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />
                    <label>Write Your Message Here</label>
                    <textarea name='message' rows={8} placeholder='Enter your message'></textarea>
                    <button className="contact-submit" type='submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
