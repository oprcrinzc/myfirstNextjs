import React, { useEffect, useState } from 'react'
import Alert from './alert'
// import {cookies} from "next/headers"
import type {AlertProps} from '@/app/lib/types/dtypes'
import { getCookie, deleteCookie } from 'cookies-next';

export default function alertHandler() {
    const [alertList , setAlertList] = useState([{}])
    const [test, setTest] = useState('')
    useEffect(()=>{
        setTimeout(()=>{
            setAlertList([{}])
            let getc = getCookie("alert")
        try {
            if (typeof(getc) == "string"){
                // alertList.push(JSON.parse(getc))
                setAlertList(JSON.parse(getc))
                deleteCookie('alert')
            }
        } catch (e){
            console.log('errorrrr')
        }
        // setTest("ss")
        
        console.log(alertList)
        }, 1000)
    })
  return (
    <div>
        {/* {
            alertList.map((d, i)=>{
                return <p key={i}>{i}</p>
            })
        } */}
        {/* <p>{alertList.title}</p> */}
        {
            alertList ? <Alert title={alertList.title} text={alertList.text} level={alertList.level}/> : ''
        }
    </div>
  )
}
