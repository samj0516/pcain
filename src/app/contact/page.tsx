// 'use client'
// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import styled from 'styled-components';
// import { CircularProgress } from '@mui/material';
import  ContactForm  from '../../Components/Contact'

// const Input = styled.input`
//     width: 100%;
//     `
// const SubmitThankYou = styled.h1`
//     color: black
//     text-transform: uppercase;
//     `
export default function Contact() {
//     const form = useRef();
//     const [isLoading, setIsLoading] = useState(false);

//     const sendEmail = (e) => {
//         setIsLoading(true);
//         e.preventDefault();

//     emailjs.sendForm('service_gp1ph3q', 'contact_form', form.current, 'aLK6MLVPJOG4YmdId')
//       .then((result) => {
//           console.log(result.text);
//           setIsLoading(false);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
    return (
    // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop:'10rem' }} >
    //    <h1>Contact</h1>
       
    //    {isLoading ? (
    //         <CircularProgress />) :(
    // <form id='contactForm' style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', width: '20rem' }} ref={form} onSubmit={sendEmail}>
    //   <label>Name*</label>
    //   <Input type="text" name="user_name" required/>
    //   <label>Email*</label>
    //   <Input type="email" name="user_email" required/>
    //   <label>Message</label>
    //   <textarea style={{width: '100%'}} name="message" />
    //   <input style={{width: '5rem', height:'2.5rem', backgroundColor:'white', borderRadius:'.5rem'}} type="submit" value="Submit"/>
    // </form>)}
        

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop:'10rem' }} >
       <h1>Contact</h1>
       <ContactForm/>
    </div>

    )
  }
  