'use client';

import { FC } from 'react';
import { TelegramLink, Wrapper } from '@/ui';

import styles from './footer.module.scss';
import Logo from '../header/logo';

const Footer: FC = () => {

  return (
    <footer className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.info}>
          <a target="_blank" href="https://marsa-landing.vercel.app/vacancy">
            Вакансии
          </a>
          <a target="_blank" href="https://marsa-landing.vercel.app/">
            О нас
          </a>
        </div>
        <Logo className={styles.logo} />
        <TelegramLink className={styles.telegram} />
      </Wrapper>
    </footer>
  );
};

export default Footer;
