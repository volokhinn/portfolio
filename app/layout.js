'use client';
import TheFooter from '@/components/TheFooter';
import './globals.css';
import TheHeader from '@/components/TheHeader';
import { Fira_Code } from 'next/font/google';

const fira = Fira_Code({ subsets: ['latin', 'retina'] });

export const metadata = {
  title: 'Home | Nick Volokhin',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className} style={{ background: '#010C15' }}>
        <main
          style={{
            background: '#011627',
            border: '1px solid #1E2D3D',
            borderRadius: 8,
            overflow: 'hidden',
          }}
          className="mx-10 my-5 w-100 bg-slate-600">
          {<TheHeader />}
          {children}
          {<TheFooter />}
        </main>
      </body>
    </html>
  );
}
