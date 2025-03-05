import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../styles/page.module.css';

const TypewriterText = () => {
  return (
    <Typewriter
    className={styles.fadeInBlur}
      options={{
        strings: ['Trade Without Borders'],
        autoStart: true,
        loop: false,
        delay: 50, // Adjust typing speed
        deleteSpeed: Infinity, // Prevent deletion
        cursor: '', // Remove cursor
      }}
    />
  );
};

export default TypewriterText;