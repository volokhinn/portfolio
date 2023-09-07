'use client';
import React from 'react';
import FileHeader from '@/components/about/FileHeader';
import { codeText } from '@/Helpers/codeText';

const University = () => {
  let text = `/**
  * My skills in React include
  *
  * User Interface (UI) Development
  * 
  * I specialize in creating interfaces that are 
  * not only functional but also visually appealing.
  * I use style libraries and components to achieve
  * a modern and attractive design.
  *
  * State Management
  * 
  * I am familiar with state management in React, 
  * including the use of context, hooks, and the 
  * Redux library for efficient data and application
  * state management.
  *
  * Routing
  * 
  * I develop application navigation using React Router
  * or other libraries to ensure smooth transitions
  * between pages.
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
        <FileHeader title="react" link="/professional" />
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
