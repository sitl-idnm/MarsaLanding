import { FC } from 'react'
import classNames from 'classnames'

import styles from './get.module.scss'
import { GetProps } from './get.types'
import TitleGradient from '@/ui/titleGradient/titleGradient'
import GetBorder from '@icons/get_border.svg'
import Checklist from '@icons/checklist.svg'
import Cloud from '@icons/cloud.svg'
import Letter from '@icons/letter.svg'
import Tools from '@icons/tools.svg'
import Angle from '@icons/get_info_angle.svg'
import Line from '@icons/get_info_line.svg'
import Separator from '@icons/get_info_separator.svg'
import { ButtonBlue } from '@/ui'

const Get: FC<GetProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.subcontainer}>
        <div className={styles.container}>
          <GetBorder />
          <h2 className={styles.title}>
            <TitleGradient>
              Что вы получите в&nbsp;канале?
            </TitleGradient>
          </h2>
        </div>
      </div>
      <div className={styles.information}>
        <Angle className={styles.informationAngle__leftTop} />
        <Angle className={styles.informationAngle__leftBottom} />
        <Angle className={styles.informationAngle__rightTop} />
        <Angle className={styles.informationAngle__rightBottom} />
        <Line className={styles.informationLine__left} />
        <Line className={styles.informationLine__right} />
        <div className={styles.informationItem}>
          <Checklist />
          <p className={styles.informationItemText}>
            Ежедневные советы по медиабаингу
          </p>
        </div>
        <Separator className={styles.informationSeparator} />
        <div className={styles.informationItem}>
          <Letter />
          <p className={styles.informationItemText}>
            Новости из мира арбитража трафика
          </p>
        </div>
        <Separator className={styles.informationSeparator} />
        <div className={styles.informationItem}>
          <Tools />
          <p className={styles.informationItemText}>
            Закрытые инструменты и гайды
          </p>
        </div>
        <Separator className={styles.informationSeparator} />
        <div className={styles.informationItem}>
          <Cloud />
          <p className={styles.informationItemText}>
            Ответы на вопросы в прямом эфире
          </p>
        </div>
      </div>
      <div className={styles.button}>
        <ButtonBlue>Вступить в Telegram бесплатно</ButtonBlue>
      </div>
    </div>
  )
}

export default Get
