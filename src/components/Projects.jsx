import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className='my-8'>
            <h2 className='text-3xl font-bold mb-4'>My Projects</h2>
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className='text-2xl font-semibold'>Project 1: Spotify Interface Clone</h3>
                    <p className='mt-2'>This project was a clone of the Spotify interface made using HTML and CSS. It is responsive and user-friendly.</p>
                    <a href="http://link-to-website-a.com" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>Visit Spotify Interface Clone</a>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className='text-2xl font-semibold'>Project 2: Weather Card Generator</h3>
                    <p className='mt-2'>This project is a weather card generator made with React.</p>
                    <a href="http://link-to-website-b.com" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>Visit Weather Card Generator</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;