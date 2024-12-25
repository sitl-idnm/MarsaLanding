import { FC } from 'react'
import classNames from 'classnames'

import styles from './channelBlock.module.scss'
import { ChannelBlockProps } from './channelBlock.types'
import Accept from '@icons/accept_circle.svg'

const ChannelBlock: FC<ChannelBlockProps> = ({
  className,
  children
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <Accept />
      <p className={styles.text}>{children}</p>
    </div>
  )
}

export default ChannelBlock
