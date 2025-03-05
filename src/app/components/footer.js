'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '../styles/footer.module.css';
import ContactForm from './contactForm';
import ContactForm2 from './contactForm2';



export default function Footer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const currentPath = usePathname();

    const pages = [
        { name: 'Home', path: '/artists', delay: '0s' },
        { name: 'Services', path: '/exhibitions', delay: '0.1s' },
        { name: 'About us', path: '/headquarters', delay: '0.2s' },
        { name: 'Contact', path: '/fairs', delay: '0.3s' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const isCurrent = (path) => {
        return currentPath === path;
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setIsVisible(false);
            } else {
                // scrolling up
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div className={styles.footer}>

        <div className={styles.contentSection} style={{borderTop: '0px solid #ffffff', marginTop: '1rem'}}>
            {/* <ContactForm/> */}
            <ContactForm2/>
        </div>

        <div className={styles.contentSection} style={{borderTop: '1px solid #ffffff'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4908106012235!2d-58.4446443!3d-34.5917485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb56bc74fc40d%3A0xde01271c180d65!2sValerie&#39;s%20Factory!5e0!3m2!1ses-419!2sar!4v1712180399625!5m2!1ses-419!2sar" style={{border: '0', marginTop: '5rem'}}width="240" height="135" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          <Link href="/">
          <Image
                  src="/BNT-LOGO_SIGLAS_clear.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '15rem', paddingTop: '5rem' }}
                  alt="Picture of the author"
          />
          </Link>
        </div>
        
      </div>
    );
}
