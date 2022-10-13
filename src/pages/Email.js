import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormElements } from './EmailElements';


const EmailPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_it20gms', 'template_ecy2uwb', form.current, 'vv8p2wcJmKmmI0vJ0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <FormElements>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </FormElements>
  );
};
    

export default EmailPage;