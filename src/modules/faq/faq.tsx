import { FC } from 'react'
import classNames from 'classnames'

import styles from './faq.module.scss'
import { FaqProps } from './faq.types'
import { TitleGradient } from '@/ui'
import Circle from '@icons/faq_circle.svg'

const Faq: FC<FaqProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.title}><TitleGradient>FAQ</TitleGradient></h2>
      <div className={styles.line} />
      <div className={styles.questions}>
        <div className={styles.question}>
          <div className={styles.question__design}>
            <Circle />
            <div className={styles.question__border} />
          </div>
          <div className={styles.question__content}>
            <h3 className={styles.question__title}>
              Кому подойдет этот канал?
            </h3>
            <p className={styles.question__text}>
              Арбитражникам любого уровня: от новичков до опытных специалистов, которые ищут реальные решения.
            </p>
          </div>
        </div>
        <div className={styles.question}>
          <div className={styles.question__design}>
            <Circle />
            <div className={styles.question__border} />
          </div>
          <div className={styles.question__content}>
            <h3 className={styles.question__title}>
              Сколько это стоит?
            </h3>
            <p className={styles.question__text}>
              Абсолютно бесплатно.
            </p>
          </div>
        </div>
        <div className={styles.question}>
          <div className={styles.question__design}>
            <Circle />
            <div className={styles.question__border} />
          </div>
          <div className={styles.question__content}>
            <h3 className={styles.question__title}>
              Как часто выходит контент?
            </h3>
            <p className={styles.question__text}>
              Каждый день или по мере появления важных инсайтов
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
