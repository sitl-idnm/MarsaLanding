'use client';

import { FC, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import styles from './borders.module.scss';
import { BordersProps } from './borders.types';

gsap.registerPlugin(ScrollTrigger);

const Borders: FC<BordersProps> = ({ className = [] }) => {
  const rootClassName = classNames(styles.root, className);

  // Рефы для каждой линии
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const animateBorders = useCallback(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: topRef.current, // элемент, который будет активировать анимацию
        start: 'top center', // когда верхняя часть элемента достигает центра экрана
        toggleActions: 'play none none none',
      },
    });

    // Анимация для линий
    tl.fromTo(
      [topRef.current, rightRef.current, bottomRef.current, leftRef.current],
      { scaleX: 0, scaleY: 0 },
      {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        transformOrigin: 'center',
        ease: 'power2.out',
      }
    );
  }, []);

  useEffect(() => {
    animateBorders();

    // Очистка ScrollTrigger при размонтировании компонента
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animateBorders]);

  return (
    <div className={rootClassName}>
      {/* Линии по сторонам */}
      <div ref={topRef} className={styles.borderTop}></div>
      <div ref={rightRef} className={styles.borderRight}></div>
      <div ref={bottomRef} className={styles.borderBottom}></div>
      <div ref={leftRef} className={styles.borderLeft}></div>
    </div>
  );
};

export default Borders;
