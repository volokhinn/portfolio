'use client';
import React, { useState } from 'react';
import FileHeader from '@/components/about/FileHeader';
import '@/public/styles/CodeSlider.css';
import { codeText } from '@/Helpers/codeText';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { paraisoDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sendMessage } from '../../api/telegram';
import { useRouter } from 'next/navigation';

const ContactMe = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState({});

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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const message = `Почта: ${mail};
        Имя: ${name};
        Сообщение: ${msg}.`;
        await sendMessage(message);
        router.push('/contacts/thanks');
        setName('');
        setMail('');
        setMsg('');
        setErrors({});
      } catch (error) {
        console.log('Error', error);
      }
    }
  };

  const validateForm = () => {
    let formErrors = {};

    if (!name) {
      formErrors.name = 'Please enter your name';
    }

    if (!mail) {
      formErrors.mail = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
      formErrors.mail = 'Please enter a valid email';
    }

    if (!msg) {
      formErrors.msg = 'Please enter a message';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  return (
    <>
      <div className="border-b-2" style={{ borderColor: '#1E2D3D' }}>
        <FileHeader title="contacts" link="/" />
      </div>
      <div className={`flex`}>
        <div className="overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-corner-white scrollbar-thumb-slate-500 scrollbar-track-transparent w-[50%]">
          <div className="py-20 px-32" style={{ borderColor: '#1E2D3D', height: '750px' }}>
            <form onSubmit={onSubmit}>
              <p>_name:</p>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className={`border-2 border-[#607B96] rounded-xl color-[#465E77] bg-[#011221] px-4 py-2 mt-3 mb-2 w-full`}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}

              <p className={`mt-4`}>_email:</p>
              <input
                onChange={(e) => setMail(e.target.value)}
                type="mail"
                className={`border-2 border-[#607B96] rounded-xl color-[#465E77] bg-[#011221] px-4 py-2 mt-3 mb-2 w-full`}
              />
              {errors.mail && <p className="text-red-500">{errors.mail}</p>}

              <p className={`mt-4`}>_message:</p>
              <textarea
                onChange={(e) => setMsg(e.target.value)}
                type="text"
                rows={10}
                className={`border-2 border-[#607B96] rounded-xl color-[#465E77] bg-[#011221] px-4 py-2 mt-3 mb-2 w-full resize-none`}
              />
              {errors.msg && <p className="text-red-500">{errors.msg}</p>}
              <button type="submit" className={`bg-[#1C2B3A] mt-4 py-3 px-4 text-white rounded-xl`}>
                submit-message
              </button>
            </form>
          </div>
        </div>
        <div className={`border-x-2 p-1 w-7`} style={{ borderColor: '#1E2D3D' }}></div>
        <div
          className={`py-5 px-10 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-w-3 scrollbar-thumb-slate-500`}
          style={{
            height: '800px',
            width: '50%',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}>
          <div className={`text-[#607B96]`}>
            <SyntaxHighlighter language="javascript" style={paraisoDark}>
              {formText}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
