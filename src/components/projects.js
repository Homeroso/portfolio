'use client'

import React from 'react';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// List your image filenames here
const imageFilenames = [
    'koishi.png',
    'Marisa.png',
    'Mokou.png',
];


function Projects() {

    const [currentImg, setCurrentImg] = useState(imageFilenames[0]);
    
    useGSAP(() => {
        gsap.fromTo(
            '.project-image.selected',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5 }
        )
    }, [currentImg]);


    return (
        <section id='projects'>
            <div className="flex flex-row m-10 ">
                <div className='w-1/2 mb-10 items-start'>
                    <h2>Projects</h2>
                </div>
                
                <div>
                    {imageFilenames.map((filename, index) => (
                        <img
                            key={index}
                            src={`/images/designs/${filename}`}
                            alt={`Project ${index}`}
                            onClick={() => setCurrentImg(filename)}
                            className={`project-image cursor-pointer ${currentImg === filename ? 'selected border-2 border-blue-500' : 'w-20 opacity-60'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;