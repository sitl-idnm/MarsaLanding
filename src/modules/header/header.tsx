'use client';

import { FC } from 'react';
import { TelegramLink, Wrapper } from '@/ui';
import classNames from 'classnames';

import styles from './header.module.scss';
import { HeaderProps } from './header.types';
import Logo from './logo';

const Header: FC<HeaderProps> = ({ className }) => {

  const headerClassName = classNames(styles.root, className);

  return (
    <header className={headerClassName}>
      <Wrapper className={styles.wrapper}>
        {/* Отображение TelegramLink для больших экранов */}
        <div className={styles.tg__about}>
          <TelegramLink className={styles.telegram} />
        </div>
        <Logo className={styles.logo} />
      </Wrapper>
    </header>
  );
};

export default Header;
