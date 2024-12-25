'use client'

import { FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './buttonBlue.module.scss';
import { ButtonBlueProps } from './buttonBlue.types';
import Link from 'next/link';
import Tg from '@icons/tg_blue.svg'

gsap.registerPlugin(ScrollTrigger);

const ButtonBlue: FC<ButtonBlueProps> = ({ children, blue }) => {

  const backgroundUrl = blue ? '/images/back_button_blue.png' : '/images/back_button.png';

  return (
    <Link href='#'>
      <div className={styles.button} style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <Tg />
        <span className={styles.text}>{children}</span>
      </div>
    </Link>
  );
};

export default ButtonBlue;
