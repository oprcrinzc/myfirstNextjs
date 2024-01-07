import React from 'react'
import { FormEvent } from 'react'
import styles from '@/app/styles/page.module.css'

export default function page() {

    // const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    //     'use server'
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const response = await fetch("/api/login", {
    //         method: "POST",
    //         body: formData
    //     })
    //     const data = await response.json()
    //     console.log(data)
    // }

  return (
    <main className={styles.main}>
        <div className={styles.home}>
            <div className={styles.card}>
                <h1>login</h1>
                <form action='api/login' method='post'>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" required/>
                    <input type="submit" value="login" />
                </form>
            </div>
        </div>
    </main>
  )
}
