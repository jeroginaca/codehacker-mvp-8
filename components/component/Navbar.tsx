"use client"

import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import NavLinks from './NavLinks';
import NavLinksResp from './NavLinksResp';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar flex justify-between items-center text-white fixed w-full md:py-1 pr-4 md:pr-0 md:px-[3rem] z-[10000] ${scrolling ? 'gradient-bg' : ''}`}>
        <Link href="/">
          <Image 
            src="https://res.cloudinary.com/dr3cvyonp/image/upload/v1694439448/Logo_qbbelb.png"
            width={80}
            height={80}
            alt="logo"
          />
        </Link>

        <NavLinks />

        <Link href="/contact" className="hidden md:flex text-[20px]  py-[12px] px-[30px] font-semibold tracking-[.10em]">Contacto</Link> 
         
        <NavLinksResp />
      </div>

    </>
  )
}

export default Navbar