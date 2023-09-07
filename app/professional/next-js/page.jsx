'use client';
import React from 'react';
import FileHeader from '@/components/about/FileHeader';
import { codeText } from '@/Helpers/codeText';

const University = () => {
  let text = `/**
  * My skills in Next.js include
  *
  * Building Static and Dynamic Applications
  * 
  * I can create both static and dynamic 
  * web applications using Next.js, ensuring
  * fast page loading and responsiveness.
  *
  * Server-Side Rendering (SSR)
  * 
  * I am familiar with SSR principles and can
  * use them to enhance the SEO and performance
  * of your application.
  *
  * Routing Management
  * 
  * I develop complex navigation systems using Next.js
  * routing to create user-friendly and intuitive interfaces.
  * 
  * API Interaction
  * 
  * I can integrate web services and APIs, allowing
  * the application to interact with the server
  * and fetch/send data.
  * 
  * Performance Optimization
  * 
  * My optimization skills enable me to create applications
  * that run quickly and efficiently,
  * even with large datasets.
*/`;
  return (
    <>
      <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
        <FileHeader title="next-js" link="/professional" />
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
