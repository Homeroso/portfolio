'use client'

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
    
    useGSAP(() => {

        const prev = new SplitText('#hero p', {type: 'chars, words'});
        const title = new SplitText('#hero h1', {type: 'chars, words'});
        const description = new SplitText('#hero-description', {type: 'words, lines'});

        const last = ['#hero button', '#hero #square'];

        const textTL = gsap.timeline({ duration: 0.5, ease: 'power1.out' });

        textTL.from(prev.words, {
            opacity: 0,
            y: 50,
        }).from(title.words, {
            opacity: 0,
            y: 100,
        }).from(description.lines, {
            opacity: 0,
            y: 50,
            stagger: 0.2
        }).from(last, {
            opacity: 0,
            y: 50,
        });
9
    });

    return (
        <section id='hero'>
            <div className='flex flex-row min-h-dvh items-center m-10 ml-20'>
                <div className='text-left w-[60%] p-8'>
                    <p className='text-3xl'>- Hello</p>
                    <div className='flex flex-row gap-2'>
                        <h1 className='text-foreground'>I&apos;m</h1>
                        <h1>Homeroso</h1>
                    </div>

                    <p id='hero-description' className='text-3xl'>
                        Designer & Developer crafting engaging digital experiences <br />with a focus on creativity and innovation.
                    </p>
                    <button>
                        Contact
                    </button>
                </div>
                <div className='flex'>
                    <div className='absolute w-70 h-70 bg-secondary overflow-hidden ml-75 mt-[-175]' id='square'/>
                    <div className='absolute w-70 h-70 border border-slate-50 overflow-hidden ml-50 mt-[-80]' id='square'/>
                </div>
            </div>
            
        </section>
    );
};

export default Hero;