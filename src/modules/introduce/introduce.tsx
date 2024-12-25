'use client';

import { FC } from 'react';
import classNames from 'classnames';
import styles from './introduce.module.scss';
import { IntroduceProps } from './introduce.types';
import { ButtonBlue, TitleGradient } from '@/ui';

const Introduce: FC<IntroduceProps> = ({ className }) => {

  const rootClassName = classNames(styles.root, className);

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
