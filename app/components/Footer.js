import React from 'react'
import { nav } from '../layout'
import Link from 'next/link'
import { social } from '../data/data'
import Image from 'next/image'

const Footer = () => {
    return (<>
        <footer className="bg-blue-lagos  pt-4 pb-8 xl:pt-8">
            <div className="max-w-screen-lg px-4 mx-auto text-gray-600 xl:max-w-screen-xl sm:px-6 md:px-8 ">
                <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
                    <li className="w-1/2 md:w-1/3 lg:w-1/3">
                        <div className="text-center">
                            <h2 className="text-gray-700 font-medium  text-md uppercase mb-4">
                                Secciones
                            </h2>
                            <ul>
                                {nav.map((item, index) => <li key={index} className="mb-4 transition-colors duration-200 hover:text-gray-800 ">
                                    <Link href={item.href}>
                                        {item.text}
                                    </Link>
                                </li>)}
                            </ul>
                        </div>
                    </li>
                    <li className="w-1/2 md:w-1/3 lg:w-1/3">
                        <div className="text-center">
                            <h2 className="text-gray-700 font-medium  text-md uppercase mb-4">
                                Contacto
                            </h2>
                            <ul>
                                {social.map((item, index) => <li key={index} className="mb-4 transition-colors duration-200 hover:text-gray-800 ">
                                    <a href={item.url}>
                                        {item.social}
                                    </a>
                                </li>)}

                            </ul>
                        </div>
                    </li>
                    <li className="w-1/2 md:w-1/3 lg:w-1/3">
                        <div className="text-center">
                            <h2 className="text-gray-700 font-medium  text-md uppercase mb-4">
                                Politicas y condiciones
                            </h2>
                            <ul>
                                {['Politicas', 'Reservas', 'Terminos y Condicions', 'Reglamento'].map((item, index) => <li key={index} className="mb-4 transition-colors duration-200 hover:text-gray-800 ">
                                    <a href="#">
                                        {item}
                                    </a>
                                </li>)}

                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
                    {social.map((item, index)=><a key={index} href={item.url}>
                        <Image src={item.svg} alt={item.social} width={0} height={0} className="w-6 h-6" />
                    </a>)}
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer