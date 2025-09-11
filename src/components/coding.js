'use client';

import React, { use } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const codingProjects = [
    {
        name: 'Ciclomart',
        description: 'A marketplace for buying and selling bicycles and components.',
        link: 'ciclomart.com',
        tech: ['React', 'GSAP', 'Next.js']
    },
    {
        name: 'CourseClash',
        description: 'A platform for students participate on interactive course experiences.',
        link: 'https://course-clash.vercel.app/',
        tech: ['React', 'Node.js', 'Express']
    },
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio built with React and GSAP animations.',
        link: 'https://github.com/yourusername/portfolio',
        tech: ['React', 'GSAP', 'Next.js']
    }
];

const CodingProjects = () => {

    useGSAP(() => {
        gsap.from('#coding .card', {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '#coding',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    return (
        <section id='coding'>
            <h2>Coding Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {codingProjects.map((project, idx) => (
                    <div key={idx} className="card">
                        <h3>{project.name}</h3>
                        <p >{project.description}</p>
                        <p>
                            <strong>Tech:</strong> 
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CodingProjects;