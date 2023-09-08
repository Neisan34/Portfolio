import React ,{useRef}from "react";
import '../Contact/Contact.css';
import Facebook from '../../assets/facebook-icon.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/LinkedIn.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_akls4sk', 'template_zm3wctq', form.current, 'diRO731CqrhCTk7e6')
          .then((result) => {
              console.log(result.text);
              alert('Email Sent!')
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    return (  
     <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" />
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/jonathanjrsequitin.nanud/" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook" className="link"/>
                        </a>
                        <a href="https://www.instagram.com/nathan_inspires/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" className="link"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jonathan-jr-nanud-90aba4279/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} alt="LinkedIn" className="link"/>
                        </a>
                    </div>
                </form>
            </div>
     </section>
    );
}

export default Contact;
