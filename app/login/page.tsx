"use client"

import React, { useEffect, useState } from 'react'
import { FormEvent } from 'react'
import Alert from '@/app/components/alert'
import AlertHandler from '../components/alertHandler'
import styles from '@/app/styles/page.module.css'
import { getCookie, deleteCookie } from 'cookies-next';
import clsx from 'clsx'
import Swal from 'sweetalert2'
import type { SweetAlertIcon } from 'sweetalert2'

export default function page() {
    const [hasAlert, setHasAlert] = useState(false)
    const alertHandler = async () => {
        let getc = getCookie("alert")
        try {
            if (typeof(getc) == "string"){
                let json = await (JSON.parse(getc))
                let iconx: SweetAlertIcon
                console.log(json.code)
                switch (json.code){
                    case 0:
                        iconx = "success"
                        break;
                    case 1:
                        iconx = "warning"
                        break;
                    default:
                        iconx = "question"
                }
                console.log(JSON.parse(getc))
                await Swal.fire({
                    title: json.title,
                    text: json.text,
                    icon: iconx ,
                    confirmButtonText: 'ok'
                })
                await deleteCookie('alert')
            }
        } catch (e){
            console.log('errorrrr')
            setHasAlert(false)
        }
    }
    useEffect(()=>{
        setInterval(()=>{alertHandler()}, 1000)
    })
    return (
    <main className={styles.main}>
        {}
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
