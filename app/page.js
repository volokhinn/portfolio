'use client';
import CodeSlider from '@/components/CodeSlider';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      className={`flex items-center px-52`}
      style={{
        backgroundImage: `url('/icons/bg-blur.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'fill',
        backgroundPosition: 'right center',
      }}>
      <div className={`w-9/12`}>
        <div className={`flex-col`}>
          <div className={`font-extralight text-lg mb-3`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hi all, I am').start();
              }}
            />
          </div>
          <h1 className={`text-6xl font-normal mb-5`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(2000).typeString('Nick Volokhin').start();
              }}
            />
          </h1>
          <div className={`text-4xl flex gap-5`} style={{ color: '#4D5BCE' }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(4000).typeString('> Front-end developer').start();
              }}
            />
          </div>
          <div className={`mt-24`}>
            <div style={{ color: '#607B96' }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(7300)
                    .typeString('// you can also see it on my Github page')
                    .start();
                }}
              />
            </div>
            <div className={`flex gap-2`}>
              <span style={{ color: '#4D5BCE' }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.pauseFor(13500).typeString('const').start();
                  }}
                />
              </span>
              <span style={{ color: '#43D9AD' }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.pauseFor(14500).typeString('gitHubLink').start();
                  }}
                />
              </span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(16000).typeString(' = ').start();
                }}
              />
              <Link href="https://github.com/volokhinn" target="blank">
                <span style={{ color: '#E99287' }}>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(16500)
                        .typeString('“https://github.com/volokhinn”')
                        .start();
                    }}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`overflow-hidden`}>
        <CodeSlider />
      </div>
    </div>
  );
}
