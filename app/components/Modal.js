'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Modal = (data) => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <button className='w-full h-full' onClick={()=>setModal(!modal)}>
                <img loading='lazy' src={data.data} width={0} height={0} className='rounded-xl w-full h-full object-cover' />
            </button>
            <button className={(modal ? '' : 'hidden ') + 'fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-800/80 z-50 '} onClick={()=>setModal(!modal)}>
                <img src={data.data} className='lg:max-w-4xl w-full lg:max-h-[720px] object-cover'/>
            </button>
        </>
    )
}

export default Modal