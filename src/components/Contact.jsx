import React, { useState } from 'react'
import "../styles/Contact.css"
import { send } from '@emailjs/browser'

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: "",
        from_email: "",
        message: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();

        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_USER_ID
        )
            .then((response) => {
                console.log("Success", response.status, response.text);
                setToSend({
                    from_name: "",
                    from_email: "",
                    message: ""
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

  return (
    <section className="contact">
        <h1>Contact</h1>
        <span></span>
        <p className="contact-caption">Have a question or interested in working together? Send me a message and I'll get back to you as soon as possible.</p>
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <div className="form-section">
                    <label htmlFor="from_name">Name</label>
                    <input name="from_name" placeholder="Your Name" value={toSend.from_name} onChange={handleChange}></input>
                </div>
                <div className="form-section">
                    <label htmlFor="from_email">Email</label>
                    <input name="from_email" type="email" placeholder="Your Email" value={toSend.from_email} onChange={handleChange}></input>
                </div>
                <div className="form-section">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Your Message" value={toSend.message} onChange={handleChange} rows={10}/>
                </div>
                <button className="send-message" type="submit">Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact

// serviceID: service_evc856f
// templateId: template_zvwvmpk