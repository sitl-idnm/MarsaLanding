'use client';

import { FC, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';
import styles from './introduce.module.scss';
import { IntroduceProps } from './introduce.types';
import { ButtonBlue, TitleGradient } from '@/ui';
import Image from 'next/image';
import { AnimatedImage } from '@/ui/animatedImage';
import Link from 'next/link';
import { Language, useLanguage } from '@/service/language';

type Translations = Record<Language, { welcome: string; vacancies: string }>;

const translations: Translations = {
  ru: {
    welcome: 'Экономика заливов— путь к космическому профиту',
    vacancies: 'ВАКАНСИИ',
  },
  en: {
    welcome: 'Funnel economics – the path to cosmic profit',
    vacancies: 'VACANCIES',
  },
};

const Introduce: FC<IntroduceProps> = ({ className }) => {
  const [imageSrc, setImageSrc] = useState('/images/introduce.webp');
  const [isMobile, setIsMobile] = useState(false); // Для отслеживания ширины экрана
  const rootClassName = classNames(styles.root, className);
  const { language } = useLanguage();

  const [isVisible, setIsVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    // Проверяем ширину экрана при монтировании
    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.matchMedia('(max-width: 480px)').matches) {
        setImageSrc('/images/introduce-mobile.webp'); // Mobile
      } else if (window.matchMedia('(max-width: 1200px)').matches) {
        setImageSrc('/images/introduce.webp'); // Tablet
      } else {
        setImageSrc('/images/introduce-tablet.webp'); // Default
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Обновление состояния для разрешения < 768px
    };

    updateImageSrc();
    handleResize();

    window.addEventListener('resize', updateImageSrc);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', updateImageSrc);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Отключаем observer после первого появления
        }
      },
      {
        threshold: 0.1 // Триггер когда хотя бы 10% компонента видно
      }
    );

    const element = document.querySelector(`.${styles.root}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to('#paint0_linear_252_1251', {
        attr: { x1: '50', y1: '50', x2: '200', y2: '200' },
        duration: 3,
        ease: 'linear',
      });
    }
  }, [isInView]);

  return (
    <div className={rootClassName}>
      <TitleGradient className={styles.title}>
        Взгляни на закулисье арбитража трафика!
      </TitleGradient>
      <p className={styles.subtitle}>
        Узнай, как мы генерируем сотни лидов ежедневно!
      </p>
      <a href="https://t.me/marsateam"><ButtonBlue className={styles.button}>
        Подписаться на наш Telegram-канал
      </ButtonBlue></a>
      <p className={styles.description}>
        Эксклюзивные кейсы, инсайты и стратегии от лидеров арбитража. Узнай
        первым!
      </p>
    </div>
  );
};

export default Introduce;
