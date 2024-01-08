import React from 'react'
import {cookies} from "next/headers"
import '@/app/styles/alertBox.css'
import type {AlertProps} from '@/app/lib/types/dtypes'
import clsx from 'clsx'

export default function alert(props:AlertProps) {
    // const ck = cookies()
  return (
    <div className={clsx('alertBox', {
        'bg-level-0': props.level === 0,
        'bg-level-1': props.level === 1,
        'bg-level-2': props.level === 2,
    })}>
        <h1>{props.title}</h1>
        <div className='text'>
            <p>{props.text}</p>
            {/* <p>{ck.get('alert')?.value}</p> */}
        </div>
    </div>
  )
}
