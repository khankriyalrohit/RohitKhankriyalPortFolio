import React, { useState } from 'react';
import './Contact.css';
// import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import { db } from '../../firebase';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "rohitkhankriyalportfolio"), {
              name: formData.name,
              email: formData.email,
              message: formData.message,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };

    return (
        <div className="container" id = "contact">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className = "labelmessage">Message</label>
                    <textarea id="message" name="message" rows="5" className = "hemlocontact"value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
