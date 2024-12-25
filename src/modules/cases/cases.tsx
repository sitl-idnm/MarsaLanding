import { FC } from 'react'
import classNames from 'classnames'

import styles from './cases.module.scss'
import { CasesProps } from './cases.types'
import { TitleGradient } from '@/ui'
import CardOutside from '@icons/cases_card_outside.svg'
import CardInside from '@icons/cases_card_inside.svg'
import Card from '@icons/cases_card.svg'

const Cases: FC<CasesProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.title}>
        <TitleGradient>
          Что делает наши кейсы уникальными?
        </TitleGradient>
      </h2>
      <p className={styles.description}>
        Делимся только реальными стратегиями:
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Пошаговые стратегии:</h3>
          <p className={styles.cardDescription}>
            готовые решения для оптимизации и масштабирования
          </p>
          <CardOutside />
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Актуальные подходы:</h3>
          <p className={styles.cardDescription}>
            успешные тесты и креативы в топовых источниках трафика.
          </p>
          <CardInside />
        </div>
        <div className={styles.card}>
          <p className={styles.cardDescription}>
            Получай доступ к самым рабочим кейсам — подпишись и будь впереди!
          </p>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Cases
