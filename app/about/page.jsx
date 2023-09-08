'use client';
import React from 'react';
import FileHeader from '@/components/about/FileHeader';
import { codeText } from '@/Helpers/codeText';

const About = () => {
  let text = `/**
  * About me
  * My name is Nick.
  * I have 2 years of experience in web development.
  * I have a strong passion for creating visually appealing
  * and user-friendly websites.
  * Throughout my career, I have worked on various projects
  * ranging from small business websites.
  *
  * I am proficient in several programming languages
  * HTML, CSS, JavaScript, React, Next.js.
  * I also have extensive experience with 
  * popular content management system like WordPress.
  *
  * Additionally, I have a solid understanding of responsive 
  * design principles and can ensure that websites 
  * are optimized for different devices and screen sizes.
  *
  * Please feel free to browse through my portfolio to see some 
  * of the projects I have worked on. If you have any questions 
  * or would like to discuss a potential collaboration, 
  * don't hesitate to contact me.
*/`;
  return (
    <>
      <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
        <FileHeader title="about" link="/" />
      </div>
      <div className="overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-corner-white scrollbar-thumb-slate-500 scrollbar-track-transparent">
        <div className="py-5 pl-4" style={{ borderColor: '#1E2D3D', height: '750px' }}>
          {codeText(text)}
        </div>
      </div>
    </>
  );
};

export default About;
