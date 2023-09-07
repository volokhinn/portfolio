'use client';
import React from 'react';
import FileHeader from '@/components/about/FileHeader';
import { codeText } from '@/Helpers/codeText';

const About = () => {
  let text = `/**
  * Soft skills
  *
  * Communication
  *
  * I have excellent communication skills, 
  * both written and verbal. I can clearly and concisely 
  * explain complex technical concepts to technical
  * and non-technical individuals.
  *
  * Problem-solving
  * I excel in analyzing and solving problems. 
  * I can quickly  identify the root cause of an issue and 
  * propose the best solution. I am also willing to work in a team 
  * to find a collective resolution to a problem.
  *
  * Organization and time management
  * I am adept at effectively planning my work and managing time
  * to meet deadlines. I can prioritize tasks and manage projects
  * to ensure successful project completion.
  *
  * Adaptability and teachability
  * I am ready to quickly adapt to new situations and technologies.
  * I am always open to learning new skills and willing
  * to invest time and effort in self-improvement. 
  * I strive to stay up-to-date with the latest trends 
  * in web development and adapt to changes in the industry.
  *
  * These soft skills help me be a successful web developer
  * by facilitating effective interaction with clients and teams,
  * as well as achieving high results in projects.
*/`;
  return (
    <>
      <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
        <FileHeader title="soft-skills" link="/" />
      </div>
      <div className="overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-corner-white scrollbar-thumb-slate-500 scrollbar-track-transparent">
        <div className="py-5 pl-4 pr-8" style={{ borderColor: '#1E2D3D', height: '750px' }}>
          {codeText(text)}
        </div>
      </div>
    </>
  );
};

export default About;
