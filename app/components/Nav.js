'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { contacto, social } from '../data/data'


const Nav = ({ nav }) => {
    const [fixed, setFixed] = useState(false)
    const [show, setShow] = useState(false)
    const path = usePathname()

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (<>

        <nav className={'w-full  h-14 md:h-fit ' + (fixed ? 'fixed top-0 right-0 bg-blue-lagos z-50' : 'absolute top-0 right-0  z-50')}>
            <div className='relative mx-auto lg:w-fit w-full '>
                <ul className='hidden lg:flex py-4 z-50 gap-8 '>
                    {nav.slice(0, 3).map((item, index) => {
                        return (
                            <li key={index} className={(fixed ? 'inline-block px-6 py-3  font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-green-lagos leading-pro  ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-orange-lagos hover:text-white hover:shadow-lg active:opacity-85 ' : 'inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle ') + (path.slice(0, -1) === item.href ? "text-white" : "text-gray-600")}>
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        )
                    })}
                    <li className={' rounded-full flex justify-center items-center mx-auto mt-2 w-44 ' + (fixed ? '' : 'bg-blue-lagos')}>
                        <Image loading='lazy' src='/IdentificadorHorizontal.png' width={150} height={0} className='w-44' />
                    </li>
                    {nav.slice(3).map((item, index) => {
                        return (
                            <li key={index} className={(fixed ? 'inline-block px-6 py-3  font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer bg-green-lagos leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-orange-lagos hover:text-white hover:shadow-lg active:opacity-85 ' : 'inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle ') + (path.slice(0, -1) === item.href ? "text-white" : "text-gray-600")}>
                                <Link href={item.href}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={show ? 'fixed top-0 right-0 bottom-0 left-0 bg-gray-lagos flex flex-col pt-14 items-center justify-center gap-4' : 'hidden '}>
                    {nav.map((item, index) => {
                        return (
                            <Link key={index} className='inline-block px-6 py-3 w-3/5 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl  from-sky-400 to-sky-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md hover:scale-110 hover:rotate-2 hover:bg-lime-600 hover:text-sky-200 hover:shadow-lg active:opacity-85 ' onClick={() => {
                                setShow(!show); document.getElementById('checkbox').checked = false
                            }} href={item.href}>{item.text}</Link>
                        )
                    })}
                </div>
                <div className={`lg:hidden  flex jus`}>
                    <input onClick={() => setShow(!show)} className='' type="checkbox" id="checkbox" />
                    <label for="checkbox" className="fixed top-2 toggle  ">
                        <div className={`bars ${fixed ? 'bg-white' : 'bg-blue-lagos'}`} id="bar1"></div>
                        <div className={`bars ${fixed ? 'bg-gray-lagos' : 'bg-blue-lagos'}`} id="bar2"></div>
                        <div className={`bars ${fixed ? 'bg-white' : 'bg-blue-lagos'}`} id="bar3"></div>
                    </label>
                    <div className={' rounded-full flex justify-center items-center mx-auto mt-2  ' + (fixed ? '' : 'bg-white')}>
                        <Image loading='lazy' src='/IdentificadorHorizontal.png' width={150} height={150} />
                    </div>
                </div>
            </div>
        </nav>
        <div className={(fixed ? 'fixed top-1/2 bottom-0 z-50 lg:right-4 right-2' : 'hidden' + ' ')}>
            <div className="social ">
                <a className="social-link4" target='_blank' href={`https://wa.me/${contacto.telefono}`}>
                    <svg viewBox="0 0 16 16" className="bi bi-whatsapp" fill="currentColor" height="200" width="200" xmlns="http://www.w3.org/2000/svg" > <path fill="black" d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                </a>
            </div>
            <div className="social ">
                <a className="social-link1" target='_blank' href={social[0].url} >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#000000"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#000000"></path> </g></svg>
                </a>
            </div>
            <div className="social ">
                <a className="social-link2" target='_blank' href={social[1].url}>
                    <svg viewBox="  4 4 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000000"></path> </g></svg>                </a>
            </div>
        </div>
    </>
    )
}

export default Nav