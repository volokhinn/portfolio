'use client';
import FileHeader from '@/components/about/FileHeader';
import ProjectCard from '@/components/ProjectCard';
import AboutTitle from '@/components/about/AboutTitle';

import projectsData from '../../projects.json';

import Image from 'next/image';
import { useState } from 'react';

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) => prevCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  const filteredProjects = projectsData.filter((project) =>
    selectedCategories.every((category) => project.categories.includes(category)),
  );

  const categories = [
    {
      name: 'html',
      img: require('../../public/icons/technologies/html.svg'),
    },
    {
      name: 'css',
      img: require('../../public/icons/technologies/css.svg'),
    },
    {
      name: 'js',
      img: require('../../public/icons/technologies/js.svg'),
    },
    {
      name: 'react',
      img: require('../../public/icons/technologies/react.svg'),
    },
    {
      name: 'react-native',
      img: require('../../public/icons/technologies/react.svg'),
    },
    {
      name: 'next',
      img: require('../../public/icons/technologies/next.svg'),
    },
  ];

  return (
    <>
      <div className={`flex`}>
        <div className={`border-r-2 w-2/12`} style={{ borderColor: '#1E2D3D' }}>
          <AboutTitle title="projects" />
          <div className={`p-5`}>
            {categories.map((category) => (
              <div key={category} className={`flex gap-5 items-center mb-6 text-[16px]`}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                />
                <Image src={category.img} alt={category.name} width={25} height={25} />
                {category.name}
              </div>
            ))}
          </div>
        </div>
        <div className={`flex-col`} style={{ width: '100%' }}>
          <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
            <FileHeader title="Projects" link="/" />
          </div>
          <div
            className={`flex flex-wrap gap-x-16 gap-y-16 py-24 px-32 overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-corner-white scrollbar-thumb-slate-500 scrollbar-track-transparent h-[750px]`}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
