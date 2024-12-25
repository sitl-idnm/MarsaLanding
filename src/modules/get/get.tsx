import { FC } from 'react'
import classNames from 'classnames'

import styles from './get.module.scss'
import { GetProps } from './get.types'
import TitleGradient from '@/ui/titleGradient/titleGradient'
import GetBorder from '@icons/get_border.svg'

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
              Что вы получите в канале?
            </TitleGradient>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Get
