'use client';
import React, { useState } from 'react';
import FileHeader from '@/components/about/FileHeader';
import '@/public/styles/CodeSlider.css';
import { codeText } from '@/Helpers/codeText';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [msg, setMsg] = useState('');

  const formText = `const button = document.querySelector('#sendBtn');

  const message = {
    name: "${name}",
    email: "${mail}",
    message: "${msg}",
    date: "${new Date().toDateString('')}"
  }
  
  button.addEventListener('click', () => {
    form.send(message);
  })`;

  return (
    <>
      <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
        <FileHeader title="contacts" link="/" />
      </div>
      <div className={`flex`}>
        <div className="overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-corner-white scrollbar-thumb-slate-500 scrollbar-track-transparent w-[50%]">
          <div className="py-20 px-32" style={{ borderColor: '#1E2D3D', height: '750px' }}>
            <p>_name:</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className={`border-2 border-[#607B96] rounded-xl color-[#465E77] bg-[#011221] px-4 py-2 mt-3 mb-6 w-full`}
            />
            <p>_email:</p>
            <input
              onChange={(e) => setMail(e.target.value)}
              type="text"
              className={`border-2 border-[#607B96] rounded-xl color-[#465E77] bg-[#011221] px-4 py-2 mt-3 mb-6 w-full`}
            />
            <p>_message:</p>
            <textarea
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              rows={10}
              className={`border-2 border-[#607B96] rounded-xl color-[#465E77] bg-[#011221] px-4 py-2 mt-3 mb-6 w-full resize-none`}
            />
            <button className={`bg-[#1C2B3A] py-3 px-4 text-white rounded-xl`}>
              submit-message
            </button>
          </div>
        </div>
        <div className={`border-x-2 p-1 w-7`} style={{ borderColor: '#1E2D3D' }}></div>
        <div
          className={`py-5 px-10 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-w-3 scrollbar-thumb-slate-500`}
          style={{ height: '800px', width: '50%', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
          <div className={`text-[#607B96]`}>{codeText(formText)}</div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
