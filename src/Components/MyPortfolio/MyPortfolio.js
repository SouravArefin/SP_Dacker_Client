import React from 'react';
import myImage from '../../sourav.jpg'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

import ware from '../../warehouse.png'
import zone from '../../zone.png'
import express from '../../express.png'
import SkillsData from './SkillData';

const MyPortfolio = () => {
    return (
        <>
            <div className='md:flex justify-between container mx-auto'>
                
                <div className="auto-type flex-1">
              <span>I'm</span>  
                    <AutoTyping
                        active // <boolean>
                        textRef=" Sourav Arefin." // <string>
                        writeSpeed={150} // <number>
                        deleteSpeed={150} // <number>
                        delayToWrite={1000} // <number>
                        delayToDelete={2000} // <number>
                    />
                    <BlinkCursor
                        active // <boolean>
                        blinkSpeed={500} // <number>
                    />
                    <p className='text-gray-500 mt-5'>
                        I am a MERN stack web developer from Chittagong, Bangladesh. I work as a freelance web developer for clients across the globe with great product delivery. I also worked with Edumonk Foundation and Inception Wave Pvt. Ltd as a Software Developer intern and am looking for opportunities to further develop my skills.
                    </p>
                    <p className='text-gray-500 my-3'>Skilled in HTML, CSS, Bootstrap, TailwindCSS, Javascript(ES6), and MERN (Mongo DB, Express, React, Node) stack, I also have sound knowledge of Data Structures and Algorithms with great problem-solving capabilities.</p>

                    <p className='text-gray-500'>
                        I can vouch for the fact that I am a fast learner with a penchant to both learn and unlearn; That is learning the latest relevant technologies and skills. I also bring with me some fresh ideas and I am confident you will find many of them to be quite useful and innovative.
                    </p>

                </div>
                <div className="image flex-1 ml-5 ">
                    <img className='w-1/2 ml-auto' src={myImage} alt="" />
                </div>
            </div>
            {/* Skills */}

<div className="container mx-auto md:flex my-28">
                <div className="custom-width">
                    <SkillsData></SkillsData>
                </div>
                <div>
                    <h1 className='text-center text-3xl font-semibold mb-10'>Sample MERN projects</h1>
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