import { FC } from 'react'
import classNames from 'classnames'

import styles from './first.module.scss'
import { FirstProps } from './first.types'
import TitleGradient from '@/ui/titleGradient/titleGradient'
import { ButtonBlue } from '@/ui'
import Square from '@icons/first_square.svg'

const First: FC<FirstProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <Square className={styles.square_leftTop} />
        <Square className={styles.square_rightTop} />
        <Square className={styles.square_leftBottom} />
        <Square className={styles.square_rightBottom} />
        <h2 className={styles.title}>
          <TitleGradient>
            Будь в числе первых — подпишись на канал прямо сейчас!
          </TitleGradient>
        </h2>
        <div className={styles.info}>
          <p className={styles.infoText}>
            Мы не спамим. Только полезный контент!
          </p>
          <ButtonBlue>
            Подписаться на Telegram
          </ButtonBlue>
        </div>
      </div>
    </div>
  )
}

export default First
