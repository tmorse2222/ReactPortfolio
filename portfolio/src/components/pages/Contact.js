import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'message':
                setMessage(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleAlert = (e) => {
        e.preventDefault();
        setErrorMessage('Thank you for your message!');
        setName('');
        setEmail('');
        setMessage('');
    };
    // ensure fields are not empty on blur
    const handleBlur = (e) => {
        if (e.target.name === 'name' && e.target.value === '') {
            setErrorMessage('Name is required');
        }
        if (e.target.name === 'email' && e.target.value === '') {
            setErrorMessage('Email is required');
        }
        if (e.target.name === 'message' && e.target.value === '') {
            setErrorMessage('Message is required');
        }
    };

    const emailValidation = (e) => {
        e.preventDefault();
        if (email.includes('@') && email.includes('.')) {
            handleAlert(e);
        } else {
            setErrorMessage('Please enter a valid email address.');
        }
    };

    return (
        <section>
            <h2 id="contact">Contact Me</h2>
            <form id="contact-form" onSubmit={emailValidation}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onBlur={handleBlur} defaultValue={name} onChange={handleFormChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleBlur} defaultValue={email} onChange={handleFormChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleBlur} defaultValue={message} onChange={handleFormChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;