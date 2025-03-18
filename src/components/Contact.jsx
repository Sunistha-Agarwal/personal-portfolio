import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className='my-8'>
            <h2 className='text-3xl font-bold mb-4'>Contact Me</h2>
            <ul className='space-y-2'>
                <li>
                    <a href="https://www.linkedin.com/in/sunistha-agarwal" target="_blank" rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Sunistha-Agarwal" target="_blank" rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                        GitHub
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;