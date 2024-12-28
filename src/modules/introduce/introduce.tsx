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
      <h1 className={styles.title}>
        <TitleGradient>
          Взгляни на&nbsp;закулисье арбитража трафика!
        </TitleGradient>
      </h1>
      <p className={styles.subtitle}>
        Узнай, как мы генерируем тысячи лидов ежедневно!
      </p>
      <div className={styles.button}>
        <ButtonBlue>
          Подписаться на наш Telegram-канал
        </ButtonBlue>
      </div>
      <p className={styles.description}>
        Эксклюзивные кейсы, инсайты и стратегии от лидеров арбитража. Узнай
        первым!
      </p>
    </div>
  );
};

export default Introduce;
