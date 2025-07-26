import {useState} from 'react'

const ContactForm = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${form.name}, your message has been sent !`);
        console.log(form.name);
        console.log(form.email);
        console.log(form.message);
        

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        
        
        
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder='name'
                value={form.name}
                onChange={handleChange}

            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
            />
            <button type='submit'>Send</button>
        </form>
    )
}

export default ContactForm