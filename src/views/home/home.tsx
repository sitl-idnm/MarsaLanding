'use client'
import { FC } from 'react'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'
// import { Button } from '@/ui'
import { Introduce } from '@/modules/introduce'
// import Link from 'next/link'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)
import { Cases } from '@/modules/cases'
import { Talk } from '@/modules/talk'
import { Get } from '@/modules/get'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Introduce />
      <Cases />
      <Talk />
      <Get />
    </main>
  )
}

export default Home
