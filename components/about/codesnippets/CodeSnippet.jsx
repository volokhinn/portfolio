import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { paraisoDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSnippet = ({ children, details, stars, created }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mt-10">
        <div className="flex items-center gap-3">
          <div>
            <Image src={require('../../../public/user.png')} />
          </div>
          <div className="flex-col">
            <div className="text-sm" style={{ color: '#5565E8' }}>
              <Link href="https://github.com/volokhinn" target="blank">
                @volokhinn
              </Link>
            </div>
            <div className="text-[12px]" style={{ color: '#607B96' }}>
              Created {created} ago
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div
            className={`flex flex-row text-sm gap-2 items-center ${
              showDetails ? 'text-white' : 'text-[#607B96]'
            } hover:text-white transition cursor-pointer`}
            onClick={() => setShowDetails(!showDetails)}>
            <Image src={require('../../../public/icons/comments.svg')} width={20} height={20} />
            details
          </div>
          <div className="flex flex-row text-sm gap-2 items-center" style={{ color: '#607B96' }}>
            <Image src={require('../../../public/icons/star.svg')} width={20} height={20} />
            {stars} stars
          </div>
        </div>
      </div>
      <div className="bg-[#011221] rounded-xl border-2 border-[#1E2D3D] px-3 py-5 mt-4">
        <SyntaxHighlighter language="javascript" style={paraisoDark}>
          {children}
        </SyntaxHighlighter>
      </div>
      {showDetails && (
        <div className="flex justify-between mt-4 border-t-2 border-[#1E2D3D] py-4 text-[#607B96]">
          {details}
          <Image
            className="p-1 hover:bg-slate-700 cursor-pointer"
            src={require('../../../public/icons/x-markup.svg')}
            width={20}
            height={20}
            onClick={() => setShowDetails(!showDetails)}
          />
        </div>
      )}
    </>
  );
};

export default CodeSnippet;
