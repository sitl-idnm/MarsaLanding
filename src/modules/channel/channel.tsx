import { FC } from 'react'
import classNames from 'classnames'

import styles from './channel.module.scss'
import { ChannelProps } from './channel.types'
import { ButtonBlue, TitleGradient } from '@/ui'
import { ChannelBlocks } from '@/components'

const Channel: FC<ChannelProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.title}>
        <TitleGradient>Почему этот канал изменит твой подход к арбитражу?</TitleGradient>
      </h2>
      <div className={styles.content}>
        <ChannelBlocks />
        <ButtonBlue>Узнать больше в Telegram!</ButtonBlue>
      </div>
    </div>
  )
}

export default Channel
