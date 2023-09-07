import React from 'react';
import Image from 'next/image';

const AboutTitle = ({ title }) => {
  return (
    <div
      className={`flex gap-3 items-center py-3 pl-5 pr-20 border-b-2 text-base`}
      style={{ borderColor: '#1E2D3D' }}>
      <Image src={require('../../public/icons/arrow-down.svg')} />
      {title}
    </div>
  );
};

export default AboutTitle;
