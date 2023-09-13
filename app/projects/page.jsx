import FileHeader from '@/components/about/FileHeader';
import ProjectCard from '@/components/ProjectCard';
const Projects = () => {
  return (
    <>
      <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
        <FileHeader title="Projects" link="/" />
      </div>
      <div
        className={`flex flex-wrap gap-x-16 gap-y-16 py-24 px-32 overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-corner-white scrollbar-thumb-slate-500 scrollbar-track-transparent h-[750px]`}>
        <ProjectCard /> <ProjectCard /> <ProjectCard />
        <ProjectCard /> <ProjectCard /> <ProjectCard />
        <ProjectCard /> <ProjectCard /> <ProjectCard />
        <ProjectCard /> <ProjectCard /> <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
