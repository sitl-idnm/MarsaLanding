'use client';

import { FC } from 'react';
import { LanguageLinks, TelegramLink, Wrapper } from '@/ui';
import { useLanguage, Language } from '@/service/language';

import styles from './footer.module.scss';
import Logo from '../header/logo';

type Translations = Record<Language, { vacancies: string }>;

const translations: Translations = {
  ru: {
    vacancies: 'Вакансии',
  },
  en: {
    vacancies: 'Vacancies',
  },
};

const Footer: FC = () => {
  const { language } = useLanguage();

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
