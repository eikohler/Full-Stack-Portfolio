import React from 'react';

function Contact() {
  return (
    <div>
        <div className='text-center'>
            <h2>Looking for a front-end developer?</h2>
            <h2>Send me a message 👇</h2>
        </div>
        <form id="contact-form">
            <section className='row my-4'>
                <div className='col-md-6'>
                    <input placeholder="Name" type="text" name="name" />
                </div>
                <div className='col-md-6'>
                    <input placeholder="Email" type="email" name="email" />
                </div>
                <div className='col-12 mt-3'>
                    <textarea placeholder="Message" name="message" rows="5" />                    
                </div>
            </section>
            <div className='text-center'>
                <button type="submit">Say Hi</button>
            </div>
        </form>
    </div>
  );
}

export default Contact;