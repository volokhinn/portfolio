'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const Folder = ({ title, children, icon }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div
        onClick={() => setExpand(!expand)}
        className={`flex gap-3 items-center cursor-pointer hover:bg-slate-800 transition px-4 py-1`}>
        <Image
          className={`${expand ? 'rotate-90' : 'rotate-0'} transition duration-75`}
          src={require('../../../public/icons/arrow-folder.svg')}
        />
        <Image src={icon} width={20} height={20} />
        {title}
      </div>
      {expand && <div className={`ml-7 mt-1`}>{children}</div>}
    </>
  );
};

export default Folder;
