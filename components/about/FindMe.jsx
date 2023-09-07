import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FindMe = () => {
  return (
    <>
      <div
        className={`flex gap-3 items-center py-3 px-5 border-y-2 text-base`}
        style={{ borderColor: '#1E2D3D' }}>
        <Image src={require('../../public/icons/arrow-down.svg')} />
        find-me-also-in
      </div>
      <Link
        href="https://t.me/volokhinn"
        target="blank"
        className={`flex items-center gap-4 px-5 pt-3 text-[#607B96] hover:text-white transition`}>
        <Image src={require('../../public/icons/link.svg')} />
        Telegram account
      </Link>
      <Link
        href="https://vk.com/nick_volokhin"
        target="blank"
        className={`flex items-center gap-4 p-5 text-[#607B96] hover:text-white transition`}>
        <Image src={require('../../public/icons/link.svg')} />
        VK profile
      </Link>
    </>
  );
};

export default FindMe;
