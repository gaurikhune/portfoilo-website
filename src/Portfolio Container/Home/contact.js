import React from "react";
import './contact.css'
import { GrMail } from 'react-icons/gr'
import { RiMessage2Fill } from 'react-icons/ri'
import { IoLogoWhatsapp } from 'react-icons/io'
const Contact = () => {
    return (
        <div className="dark">
            <section id="contact">

                <h5> Get In Touch</h5>
                <h2> Contact Me</h2>
                <div className="container contact_container">
                    <div className="contact_options">
                        <article className="contact_option">
                            <GrMail className="contact_option-icon" />
                            <h4>E-Mail</h4>
                            <h5>gaurikhune5@gmail.com</h5>
                            <a href="mailto:gaurikhune5@gmail.com" >Send A Message</a>
                        </article>
                        <article className="contact_option">
                            <RiMessage2Fill className="contact_option-icon" />
                            <h4>Message</h4>
                            <h5> hyy guys what's upp?</h5>
                            <a href="https://m.me/github.com" >Send A Message</a>
                        </article>
                        <article className="contact_option">
                            <IoLogoWhatsapp className="contact_option-icon" />
                            <h4>Whatsapp</h4>
                            <h5>+8798076885</h5>
                            <a href="https://api.whatsapp.com/send?phone+8796476229">Send A Message</a>
                        </article>
                    </div>
                    <form action="">
                        <input type='text' name='name' placeholder='your full name' required />
                        <input type='email' name='email' placeholder='your email' required />
                        <textarea name='message' rows='7' placeholder='your message' required></textarea>
                        <button type='submit' className="btn btn-primary">send a message</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default Contact;