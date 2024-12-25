'use client'

import { FC, useState } from 'react';

import styles from './buttonBlue.module.scss';
import { ButtonBlueProps } from './buttonBlue.types';
import Link from 'next/link';
import IconTg from '@icons/tg_blue.svg'
import IconTgBlack from '@icons/tg_black.svg'

const ButtonBlue: FC<ButtonBlueProps> = ({ children }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Link href='https://t.me/marsateam' className={styles.link}>
      <div
        className={styles.button}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        {onHover ? <IconTgBlack/> : <IconTg />}
        <span className={styles.text}>{children}</span>
      </div>
    </Link>
  );
};

export default ButtonBlue;
