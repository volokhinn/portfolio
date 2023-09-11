import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TheFooter = () => {
  return (
    <footer style={{ color: '#607B96', borderColor: '#1E2D3D' }} className={`border-t-2`}>
      <div className={`flex justify-between`}>
        <div className={`flex`}>
          <div className={`px-4 py-3`}>find me in:</div>
          <div
            className={`px-4 py-3 flex items-center justify-center border-l-2`}
            style={{ borderColor: '#1E2D3D' }}>
            <Link href="https://vk.com/nick_volokhin" target="blank">
              <Image
                className={`opacity-50 hover:opacity-100 transition`}
                src={require('../public/icons/vk.svg')}
                width={30}
                height={30}
                alt="vk"
              />
            </Link>
          </div>
          <div
            className={`px-4 py-3 flex items-center justify-center border-x-2`}
            style={{ borderColor: '#1E2D3D' }}>
            <Link href="https://t.me/volokhinn" target="blank">
              <Image
                className={`opacity-50 hover:opacity-100 transition`}
                src={require('../public/icons/tg.svg')}
                width={30}
                height={100}
                alt="tg"
              />
            </Link>
          </div>
        </div>
        <div className={`px-4 py-3 flex-row border-l-2`} style={{ borderColor: '#1E2D3D' }}>
          <Link
            className={`flex items-center gap-5 transition`}
            href="https://github.com/volokhinn"
            target="blank">
            @volokhinn
            <Image
              className={`hover:opacity-100 opacity-50 transition`}
              src={require('../public/icons/gh.svg')}
              width={30}
              height={100}
              alt="gh"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
