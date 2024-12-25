import { FC } from 'react'
import classNames from 'classnames'

import styles from './channelBlocks.module.scss'
import { ChannelBlocksProps } from './channelBlocks.types'
import ChannelBlock from './channelBlock/channelBlock'

const ChannelBlocks: FC<ChannelBlocksProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <ChannelBlock>Прямой доступ к профессиональной команде</ChannelBlock>
      <ChannelBlock>Инсайты о новых источниках трафика</ChannelBlock>
      <ChannelBlock>Еженедельные рабочие кейсы</ChannelBlock>
      <ChannelBlock>Чек-листы и инструменты, которые реально работают</ChannelBlock>
    </div>
  )
}

export default ChannelBlocks
