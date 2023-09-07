import React from 'react';
import Folder from '../folders/Folder';
import File from '../folders/File';
import AboutTitle from '../AboutTitle';
import folderPurple from '../../../public/icons/folder-icon-purple.svg';
import folderYellow from '../../../public/icons/folder-icon-yellow.svg';

const PersonalFolders = () => {
  return (
    <>
      <AboutTitle title="personal-info" />
      <div className={`my-5`}>
        <File title="about" linkUrl="/about" />
        <Folder title="interests" icon={folderPurple}>
          <File title="123" />
        </Folder>
        <Folder title="education" icon={folderYellow}>
          <File title="university" linkUrl="/about/university" />
          <File title="online-courses" linkUrl="/about/online-courses" />
        </Folder>
      </div>
    </>
  );
};

export default PersonalFolders;
