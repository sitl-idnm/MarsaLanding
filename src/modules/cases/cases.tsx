import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import styles from './cases.module.scss'
import { CasesProps } from './cases.types'
import { GradientBlur, TitleGradient } from '@/ui'
import CardOutside from '@icons/cases_card_outside.svg'
import CardOutside_mobile from '@icons/cases_card_outside_mobile.svg'
import CardInside from '@icons/cases_card_inside.svg'
import CardInside_tablet from '@icons/cases_card_inside_tablet.svg'
import CardInside_mobile from '@icons/cases_card_inside_mobile.svg'
import Card from '@icons/cases_card.svg'
import Card_mobile from '@icons/cases_card_mobile.svg'

const Cases: FC<CasesProps> = ({
  className
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const rootClassName = classNames(styles.root, className)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderCardOutside = () => {
    if (windowWidth < 768) {
      return <CardOutside_mobile />
    }
    return <CardOutside />
  }

  const renderCard = () => {
    if (windowWidth < 768) {
      return <Card_mobile />
    }
    return <Card />
  }

  const renderCardInside = () => {
    if (windowWidth < 768) {
      return <CardInside_mobile />
    } else if (windowWidth < 1200) {
      return <CardInside_tablet />
    }
    return <CardInside />
  }

  return (
    <div className={rootClassName}>
      <GradientBlur className={styles.gradientBlur} />
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
          {renderCardOutside()}
        </div>
        <div className={styles.card}>
          {renderCard()}
          <h3 className={styles.cardTitle}>Актуальные подходы:</h3>
          <p className={styles.cardDescription}>
            успешные тесты и креативы в топовых источниках трафика.
          </p>
        </div>
        <div className={styles.card}>
          {renderCardInside()}
          <p className={styles.cardDescription}>
            Получай доступ к самым рабочим кейсам — подпишись и будь впереди!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cases
