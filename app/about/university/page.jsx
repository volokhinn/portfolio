'use client';
import React from 'react';
import FileHeader from '@/components/about/FileHeader';
import { codeText } from '@/Helpers/codeText';

const University = () => {
  let text = `/**
  * I studied at SibSUTI for a bachelor's degree
  * in "System Software".
  * During my studies, I gained in-depth
  * knowledge of various aspects
  * of software development, including programming languages, 
  * databases, algorithms, and data structures.
  *
  * My education at SibSUTI provided me
  * with a strong foundation
  * for my career in web development.
  * I apply the knowledge and skills
  * I acquired in my work to create high-quality and 
  * innovative web applications for my clients.
  *
  * I am always open to new opportunities
  * and willing to continue
  * learning to stay up-to-date with the latest
  * technological trends and remain competitive
  * in the software development market.
*/`;
  return (
    <>
      <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
        <FileHeader title="university" link="/about" />
      </div>
      <div className="overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-corner-white scrollbar-thumb-slate-500 scrollbar-track-transparent">
        <div className="py-5 pl-4 pr-14" style={{ borderColor: '#1E2D3D', height: '750px' }}>
          {codeText(text)}
        </div>
      </div>
    </>
  );
};

export default University;
