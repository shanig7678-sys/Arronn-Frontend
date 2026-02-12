import { useState } from 'react';
import '../App.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, message } = formData;
        if (!name || !subject || !message) {
            setError("Please fill in all fields");
            setSuccess("");
            return;
        }
        setError("");
        console.log("Form Submitted:", formData);
        setFormData({
            name: "",
            subject: "",
            message: ""
        });

        setSuccess("Message sent successfully!");
    };

    return (
        <section className='contact-section'>
            <div className="contact-info">
                <div className="contact-content">
                    <h1 className='title'>Contact Me</h1>
                    <p>For Any Project Knock Us</p>
                    <img src="./assets/blur.svg" alt="blur" className='contact-blur-img' />
                </div>
                <hr />
            </div>
            <div className="contact-form">
                <div className="form-heading">
                    <h1 className='title'>Get in Touch With Us</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="group">
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="subject">SUBJECT</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="message">MESSAGE</label>
                        <input
                            type='text'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    {error && <p className="error" style={{ color: 'white', fontSize: '0.8rem', fontWeight: 'medium' }}>{error}</p>}
                    {success && <p className="success" style={{ color: 'white' }}>{success}</p>}
                    <input type="submit" value="SEND" className='form-btn' />
                </form>
            </div>
            <div className='contact-detail'>
                <img src="./assets/laptop.svg" alt="laptop" />
                <div className="contact-link">
                    <p className='title'>Street Avenue 21, CA</p>
                    <p className='title'>+9 0283353</p>
                    <p className='title'>info@arronn.com</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
