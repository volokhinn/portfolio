import React from 'react';
import Folder from '../folders/Folder';
import File from '../folders/File';
import AboutTitle from '../AboutTitle';
import folderGreen from '../../../public/icons/folder-icon-green.svg';
import folderPurple from '../../../public/icons/folder-icon-purple.svg';

const ProfessionalFolders = () => {
  return (
    <>
      <AboutTitle title="professional-info" />
      <div className={`my-5`}>
        <File title="soft-skills" linkUrl="/professional" />
        {/* <Folder title="experience" icon={folderGreen}>
          <File title="dma" />
        </Folder> */}
        <Folder title="hard-skills" icon={folderPurple}>
          <File title="react" linkUrl="/professional/react" />
          <File title="next-js" linkUrl="/professional/next-js" />
        </Folder>
      </div>
    </>
  );
};

export default ProfessionalFolders;
