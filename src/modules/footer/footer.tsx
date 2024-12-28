'use client';

import { FC } from 'react';
import { InstagramLink, TelegramLink, Wrapper } from '@/ui';

import styles from './footer.module.scss';
import Logo from '../header/logo';

const Footer: FC = () => {

  return (
    <footer className={styles.root}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.info}>
          <a target="_blank" href="https://marsa.team/vacancy">
            Вакансии
          </a>
          <a target="_blank" href="https://marsa.team">
            О нас
          </a>
        </div>
        <Logo className={styles.logo} />
        <div className={styles.social}>
          <InstagramLink className={styles.instagram} />
          <TelegramLink className={styles.telegram} />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
