import React from 'react';

const Contact = () => (
    <section id="contact" className="py-10 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary">Contact Me</h2>
        <form className="flex flex-col gap-4">
            <div>
                <label htmlFor="name" className="block mb-1 text-foreground">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 rounded border border-secondary bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 text-foreground">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 rounded border border-secondary bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div>
                <label htmlFor="message" className="block mb-1 text-foreground">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full p-2 rounded border border-secondary bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <button
                type="submit"
                className="self-end px-6 py-3 bg-primary text-background rounded font-semibold hover:bg-secondary transition"
            >
                Send
            </button>
        </form>
    </section>
);

export default Contact;