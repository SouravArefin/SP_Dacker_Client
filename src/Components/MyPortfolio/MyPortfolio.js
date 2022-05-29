import React from 'react';
import myImage from '../../sourav.jpg'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

import ware from '../../warehouse.png'
import zone from '../../zone.png'
import express from '../../express.png'
import SkillsData from './SkillData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyPortfolio = () => {
    return (
     

       
        <>
            <div className='md:flex justify-between container mx-auto px-4 md:px-0 md:my-14'>
                <div className="auto-type flex-1">
                <span className="text-blue-700">I'm </span>
                
                    <AutoTyping
                        active // <boolean>
                        textRef="Sourav Arefin." // <string>
                        writeSpeed={150} // <number>
                        deleteSpeed={150} // <number>
                        delayToWrite={1000} // <number>
                        delayToDelete={2000} // <number>
                    />
                    <BlinkCursor
                        active // <boolean>
                        blinkSpeed={500} // <number>
                    />
                    <p className='text-green-700 sp-style mt-5'>
                        I am a MERN stack web developer from Chittagong, Bangladesh. . I also worked with Edumonk Foundation and Inception Wave Pvt. Ltd as a Software Developer intern and am looking for opportunities to further develop my skills.
                    </p>
                    <p className='text-green-700 sp-style my-3'>Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack, I also have sound knowledge of Data Structures and Algorithms with great problem-solving capabilities.</p>

                   
                  
                    <h1 className='text-2xl sp-style text-cyan-700'>For more information Download the Cv</h1>

                    <button className='mt-10 text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2'><a href="https://drive.google.com/file/d/1UMpbopKM-WVcjMRmXJstn0J4fKQH7egl/view?usp=sharing" target='_blank'>DownLod Cv </a> </button>

                </div>
                <div className="image flex-1 md:ml-5 mt-10 md:mt-0">
                    <img className='md:w-1/2 md:ml-auto' src={myImage} alt="" />
                </div>
               
            </div>
            {/* Skills */}

            <div className="container mx-auto md:flex my-28 px-10 md:px-0">
                <div className="custom-width">
                    <SkillsData></SkillsData>
                </div>
                <div>
                    <h1 className='text-center md:mb-10 md:my-0 my-10 text-uppercase pb-5 text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto'>Sample MERN projects</h1>
                    <div className="grid grid-cols-3">
                        <div className="mx-3">
                            <a href="https://sp-warehouse.web.app/">
                                <img className='w-1/3 ml-auto object-fill' src={ware} alt="" />
                            </a>
                        </div>
                        <div className="mx-3">
                            <a href="https://sp-zone-aac4d.web.app/">
                              <img className='w-1/3 ml-auto object-fill' src={zone} alt="" />
                           </a>
                        </div>
                        <div className="mx-3">
                            <a href="https://sp-express.netlify.app/">
                                <img className='w-1/3 ml-auto object-fill' src={express} alt="" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default MyPortfolio;