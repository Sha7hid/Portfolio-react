import React,{useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
import { useState } from 'react';
import { useContext } from 'react';

function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
const[done, setDone] =useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0cl9k6r', 'template_2turt0f', form.current, 'dHpJ6JGkW3bKv6SPf')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
  <div className="contact-form" id='Contact'>
    <div className="w-left">
        <div className="awesome">
            <span style={{color: darkMode?'white': ''}}>Get in touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
    </div>
    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
<input type="text" name="from_name" className="user" placeholder="Name" />
<input type="email" name="from_email" className="user" placeholder="Email" />
<textarea name="message"  cols="30" rows="10" className="user" placeholder='Message'></textarea>
<input type="submit" value="Send" className='button'/>
<span>{done && "Thanks for contacting me!"}</span>
<div className="blur s-blur1" style={{background:"var(--purple)"}}></div>
        </form>
    </div>
  </div>
  )
}

export default Contact
