'use client';
import React from 'react';
import FileHeader from '@/components/about/FileHeader';
import { codeText } from '@/Helpers/codeText';

const OnlineCourses = () => {
  let text = `/**
  * I have also deepened my knowledge of web development
  * by studying React and Next.js through
  * online courses on YouTube. These courses have helped
  * me master modern tools and approaches
  * to building web applications.
  * 
  * Learning React has allowed me to create dynamic
  * and interactive user interfaces using
  * a component-based approach. I have learned how to
  * effectively manage application state and utilize
  * various libraries and plugins to enhance
  * performance and functionality.
  *   
  * Next.js has given me the ability to create powerful
  * and scalable web applications. I have learned how to work
  * with server-side rendering, static generation,
  * and other features that help optimize the performance
  * and SEO metrics of my applications.
  * 
  * I am constantly improving my web development skills
  * by studying new tools and technologies. I strive to stay
  * up-to-date with the latest industry trends in order
  * to offer my clients innovative and high-quality solutions.
*/`;
  return (
    <>
      <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
        <FileHeader title="online-courses" link="/about" />
      </div>
      <div className="overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-corner-white scrollbar-thumb-slate-500 scrollbar-track-transparent">
        <div className="py-5 pl-4 pr-14" style={{ borderColor: '#1E2D3D', height: '750px' }}>
          {codeText(text)}
        </div>
      </div>
    </>
  );
};

export default OnlineCourses;
