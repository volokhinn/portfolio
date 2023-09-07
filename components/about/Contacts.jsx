import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contacts = ({ isContacts }) => {
  return (
    <>
      <div
        className={`flex gap-3 items-center py-3 px-5 ${
          isContacts ? 'border-b-2' : 'border-y-2'
        } text-base`}
        style={{ borderColor: '#1E2D3D' }}>
        <Image src={require('../../public/icons/arrow-down.svg')} />
        contacts
      </div>
      <Link
        href="mailto:volokhin5555@gmail.com"
        className={`flex items-center gap-4 p-5`}
        style={{ color: '#607B96' }}>
        <Image src={require('../../public/icons/mail.svg')} />
        volokhin5555@gmail.com
      </Link>
    </>
  );
};

export default Contacts;
