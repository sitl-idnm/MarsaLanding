'use client'
import { FC } from 'react'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'
import { ButtonBlue } from '@/ui'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <ButtonBlue blue={false}>Подписаться на Telegram</ButtonBlue>
    </main>
  )
}

export default Home
