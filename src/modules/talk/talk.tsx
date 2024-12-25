import { FC } from 'react'
import classNames from 'classnames'

import styles from './talk.module.scss'
import { TalkProps } from './talk.types'
import TitleGradient from '@/ui/titleGradient/titleGradient'
import Image from 'next/image'
import AvatarFirst from '@public/images/avatarFirst.png'
import AvatarSecond from '@public/images/avatarSecond.png'
import { ButtonBlue } from '@/ui'


const Talk: FC<TalkProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.title}>
        <TitleGradient>
          Что говорят о нас другие арбитражники?
        </TitleGradient>
      </h2>
      <div className={styles.content}>
        <div className={styles.item}>
          <Image className={styles.itemImage} src={AvatarFirst} alt=''></Image>
          <div className={styles.itemText}>
            <h3 className={styles.itemTitle}>
              Александр Т.
            </h3>
            <p className={styles.itemDescription}>
              Действительно полезный канал! За 2 недели увеличил ROI на 50%.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <Image className={styles.itemImage} src={AvatarSecond} alt=''></Image>
          <div className={styles.itemText}>
            <h3 className={styles.itemTitle}>
              Мария К.
            </h3>
            <p className={styles.itemDescription}>
              Здесь все по делу: инструменты, стратегии, офферы. Не трачу время на поиски            </p>
          </div>
        </div>
      </div>
      <ButtonBlue>
        Присоединяйтесь к нашей команде!
      </ButtonBlue>
    </div>
  )
}

export default Talk
