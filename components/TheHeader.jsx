'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TheHeader = () => {
  const currentPath = usePathname();

  const isActiveRoute = (route) => {
    if (route !== '/' && currentPath !== '/') {
      return currentPath.includes(route);
    } else if (route === '/' && currentPath === '/') {
      return currentPath === route;
    }
  };

  const getTextColor = (route) => {
    return isActiveRoute(route) ? '#fff' : '#607B96';
  };

  const getTextColorAbout = () => {
    return isActiveRoute('/about') || isActiveRoute('/professional') || isActiveRoute('/hobbies')
      ? '#fff'
      : '#607B96';
  };

  return (
    <header style={{ color: '#607B96', borderColor: '#1E2D3D' }} className={`border-b-2`}>
      <div className={`flex justify-between`}>
        <div className={`flex justify-normal`}>
          <div className={`pl-4 pr-40 py-3`}>nick-volokhin</div>
          <div
            className={`px-5 py-3 border-l-2 ${isActiveRoute('/') ? 'border-b-2' : ''}`}
            style={{
              borderColor: '#1E2D3D',
              borderBottomColor: isActiveRoute('/') ? '#FEA55F' : '',
              color: getTextColor('/'),
            }}>
            <Link href="/" className={`hover:text-white transition`}>
              _hello
            </Link>
          </div>
          <div
            className={`px-4 py-3 border-l-2 ${
              isActiveRoute('/about') || isActiveRoute('/professional') || isActiveRoute('/hobbies')
                ? 'border-b-2'
                : ''
            }`}
            style={{
              borderColor: '#1E2D3D',
              borderBottomColor:
                isActiveRoute('/about') ||
                isActiveRoute('/professional') ||
                isActiveRoute('/hobbies')
                  ? '#FEA55F'
                  : '',
              color: getTextColorAbout(),
            }}>
            <Link href="/about" className={`hover:text-white transition`}>
              _about-me
            </Link>
          </div>
          <div
            className={`px-4 py-3 border-x-2 ${isActiveRoute('/projects') ? 'border-b-2' : ''}`}
            style={{
              borderColor: '#1E2D3D',
              borderBottomColor: isActiveRoute('/projects') ? '#FEA55F' : '',
              color: getTextColor('/projects'),
            }}>
            <Link href="/projects" className={`hover:text-white transition`}>
              _projects
            </Link>
          </div>
        </div>
        <div
          className={`px-4 py-3 border-l-2 ${isActiveRoute('/contacts') ? 'border-b-2' : ''}`}
          style={{
            borderColor: '#1E2D3D',
            borderBottomColor: isActiveRoute('/contacts') ? '#FEA55F' : '',
            color: getTextColor('/contacts'),
          }}>
          <Link href="/contacts" className={`hover:text-white transition`}>
            _contact-me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
