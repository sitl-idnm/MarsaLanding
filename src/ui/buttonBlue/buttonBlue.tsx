'use client'

import { FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './buttonBlue.module.scss';
import { ButtonBlueProps } from './buttonBlue.types';
import Link from 'next/link';
import Tg from '@icons/tg_blue.svg'
// import TgHover from '@icons/tg_blue_hover.svg'

gsap.registerPlugin(ScrollTrigger);

const ButtonBlue: FC<ButtonBlueProps> = ({ children, blue }) => {

  const backgroundUrl = blue ? '/images/back_button_blue.png' : '/images/back_button.png';
  const hoverBackgroundUrl = blue ? '/images/back_button_blue_hover.png' : '/images/back_button_blue_hover.png';

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundImage = `url(${hoverBackgroundUrl})`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundImage = `url(${backgroundUrl})`;
  };

  return (
    <Link href='https://t.me/marsateam'>
      <div
        className={styles.button}
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Tg />
        <span className={styles.text}>{children}</span>
      </div>
    </Link>
  );
};

export default ButtonBlue;
