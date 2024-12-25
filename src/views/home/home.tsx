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
import { First } from '@/modules/first'
import { Channel } from '@/modules/channel'
import { Faq } from '@/modules/faq'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Introduce />
      <Channel />
      <Cases />
      <Get />
      <Talk />
      <First />
      <Faq />
    </main>
  )
}

export default Home
