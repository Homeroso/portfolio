'use client'

import React, { useState, useEffect, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';


// List your image filenames here
const imageFilenames = [
    'Koishi.png',
    'Marisa.png',
    'Mokou.png',
    'Youmu.jpg',
    'Marzo.png',
    'Teio.png',
];

const logos = [
    '2hu.webp',
    'uma.webp'
]


function Projects() {

    const [currentImg, setCurrentImg] = useState(imageFilenames[0]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3); // Show 3 images at a time (0, 1, 2)

    const mainIndex = 1 

    const visibleImages = useMemo(() => {
        return startIndex < endIndex
            ? imageFilenames.slice(startIndex, endIndex)
            : [...imageFilenames.slice(startIndex), ...imageFilenames.slice(0, endIndex)];
    }, [startIndex, endIndex, imageFilenames]);

    useEffect(() => {
        visibleImages.forEach(filename => {
            const img = new window.Image();
            img.src = `/images/designs/${filename}`;
        });
    }, [visibleImages]);


    const [imageWidth, setImageWidth] = useState(500);
    const [imageHeight, setImageHeight] = useState(892);

    useEffect(() => {
        const mobileSize = 768;
        const width = window.innerWidth < mobileSize ? 300 : 500;
        const height = window.innerWidth < mobileSize ? 535 : 892;
        setImageWidth(width);
        setImageHeight(height);
    }, []);


    // Animate the currently selected image
    useGSAP(() => {
        gsap.fromTo(
            '.project-image.selected',
            { opacity: 0.5, scale: 0.9, duration: 0.5 },
            { opacity: 1, scale: 1, duration: 0.5 }
        )

        //This is a hook, it runs every time currentImg changes
    }, [startIndex, endIndex]);


    const rightAnimation = ()  => {
        gsap.fromTo(
             '.project-image:not(.selected)',
             { x: -20, opacity: 0.5, },   // Start 50px left and invisible
             { x: 0, opacity: 0.6, duration: 0.5 } // Animate to original position and visible
         )
    }

    const leftAnimation = ()  => {
        gsap.fromTo(
             '.project-image:not(.selected)',
             { x: 20, opacity: 0.5 },   // Start 50px left and invisible
             { x: 0, opacity: 0.6, duration: 0.5 } // Animate to original position and visible
         )
    }

    return (
        <section id='projects'>
            <div className="flex flex-col m-10 text-center items-center">
                <div className='w-1/2 mb-10 items-start text-center'>
                    <h2>Projects</h2>
                    <p className='text-2xl'>
                        A selection of my design works, showcasing creativity and attention to detail.
                    </p>
                </div>
                
                <div className='relative flex flex-row items-center'
                    style={{
                        minHeight: imageHeight,
                        minWidth: imageWidth , // or a fixed width if you prefer
                    }}
                >
                    <IoIosArrowForward 
                        className='cursor-pointer absolute left-[-200] text-8xl z-20 mb-16 ml-2 text-foreground flip-horizontal'
                        onClick={() => {
                            const total = imageFilenames.length;
                            setStartIndex((startIndex - 1 + total) % total);
                            setEndIndex((endIndex - 1 + total) % total);
                            leftAnimation();
                        }}
                    />
                    {visibleImages.map((filename, index) => (
                        <div className='flex flex-row items-end' key={index}>
                            {index === mainIndex ? (
                                    <Image
                                        key={index}
                                        src={`/images/designs/${filename}`}
                                        alt={`Project ${index}`}  
                                        width={imageWidth}
                                        height={imageHeight}
                                        loading='lazy' 
                                        objectFit='contain'
                                        className={`
                                            project-image selected z-10 no-select mx-5' 
                                        }`}
                                    />
                                
                            ) : 
                            <div className= 'flex flex-row items-center w-full'>
                                
                                <Image
                                    key={index}
                                    src={`/images/designs/${filename}`}
                                    alt={`Project ${index}`}   
                                    loading='lazy'
                                    width={imageWidth * 0.85}
                                    height={imageHeight * 0.85}
                                    objectFit='contain'
                                    className="project-image no-select absolute opacity-60 mx-3"
                                    style={
                                        { 
                                            right: `calc(10% + ${(index < mainIndex ? -1:1)*300}px)`,
                                            top: '5%',
                                            translate: '(-50%, -50%)'
                                        }
                                    }
                                    />
                                
                            </div>
                            }
                        </div>
                    ))}
                    <IoIosArrowForward 
                        className='cursor-pointer absolute right-[-200px] text-8xl mb-16 ml-2 z-20 text-foreground'
                        onClick={() => {
                            const total = imageFilenames.length;
                            setStartIndex((startIndex + 1) % total);
                            setEndIndex((endIndex + 1) % total);
                            rightAnimation();
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;