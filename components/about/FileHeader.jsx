import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FileHeader = ({ title, link }) => {
  return (
    <div
      className={`flex gap-4 items-center border-r-2 py-3 px-5 w-fit`}
      style={{ color: '#607B96', borderColor: '#1E2D3D' }}>
      {title}
      <Link href={'' + link}>
        <Image
          src={require('../../public/icons/x-markup.svg')}
          className={`cursor-pointer hover:bg-slate-700 transition p-1 w-5`}
        />
      </Link>
    </div>
  );
};

export default FileHeader;
