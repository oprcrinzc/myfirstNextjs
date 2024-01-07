"use client"

import Image from 'next/image'
import styles from '@/app/styles/page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>
      <div className={styles.home}>
        <p className={styles.button} onClick={()=>{router.push("/login")}}>Login</p>
      </div>
    </main>
  )
}
