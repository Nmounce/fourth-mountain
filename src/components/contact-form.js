import React from "react";
import { useState} from "react";

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleFormUpdate = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
    })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form>
            <input value={formData.name}type="text" name="name" id="name" placeholder="Your Name" onChange={handleFormUpdate}/>
            <input value={formData.email}type="text" name="email" id="email" placeholder="Your Email Address" onChange={handleFormUpdate}/>
            <input value={formData.message}type="text" name="message" id="message" placeholder="Whats your message?" onChange={handleFormUpdate}/>
            { formData.name && formData.email ? <button onClick={handleSubmit}>Submit</button> : '' }
        </form>
    );
}

export default ContactForm;

