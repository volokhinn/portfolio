import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const ProjectCard = ({ project }) => {
  return (
    <>
      <div className={`flex flex-col w-96`}>
        <h3 className={`text-[#5565E8] mb-3 font-bold`}>
          Project {project.id}{' '}
          <span className={`text-[#607B96] font-medium`}>// {project.title}</span>
        </h3>
        <div className={`bg-[#011221] rounded-xl border-[#1E2D3D] border-2 relative`}>
          <Image
            alt="project"
            src={require('../public/' + `${project.image}`)}
            className={` rounded-t-xl h-44 object-cover`}
          />
          <Image
            alt="project"
            src={require(`../public/icons/${project.mainCategory}.svg`)}
            className={`absolute top-6 right-6`}
          />
          <div className={`py-7 px-7`}>
            <p className={`text-[#607B96] mb-7 text-[18px]`}>{project.description}</p>
            <Link
              href={project.link}
              target="blank"
              className={`text-white bg-[#1C2B3A] py-3 px-4 rounded-xl`}>
              view-project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
