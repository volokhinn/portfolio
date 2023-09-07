import React from 'react';
import Folder from '../folders/Folder';
import File from '../folders/File';
import AboutTitle from '../AboutTitle';
import folderRed from '../../../public/icons/folder-icon-red.svg';
import folderGreen from '../../../public/icons/folder-icon-green.svg';

const HobbiesFolders = () => {
  return (
    <>
      <AboutTitle title="hobbies" />
      <div className={`my-5`}>
        <File title="hobbies" linkUrl="/hobbies" />
      </div>
    </>
  );
};

export default HobbiesFolders;
