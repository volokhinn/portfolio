'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const File = ({ title, linkUrl }) => {
  const currentPath = usePathname();
  const pathNavigation = currentPath + '/' + title;
  return (
    <Link href={'' + linkUrl} className={`flex gap-4 hover:bg-slate-800 transition px-4 py-1`}>
      <Image src={require('../../../public/icons/file-icon.svg')} />
      {title}
    </Link>
  );
};

export default File;
