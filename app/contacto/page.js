import Banner from '../components/Banner'
import FormContact from '../components/FormContact'
import { contacto } from '../data/data'

export const metadata = {
    title: "Contacto",
    description: "Contacto",
    keywords: "Contacto",
}

export default function page() {
    return <div className='flex flex-col gap-24 justify-center items-center'>
        <Banner fondo={'/Images/fondos/contacto.jpg'} />

        <section className='max-w-6xl mx-auto flex gap-12 justify-center items-center flex-wrap'>
            <a href='tel:+573219300020' className='flex flex-col justify-center items-center space-x-3  border-4 bg-blue-lagos shadow-xl w-64 text-center rounded-lg p-4 h-40'>
                <svg viewBox="0 0 24 24" fill="none" className='w-20 h-20 stroke-black' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h2 className='text-black font-bold text-2xl'>Recepción</h2>
                <p>+57 321 9300020</p>
            </a>
            <a href='tel:+573103437059' className='flex flex-col justify-center items-center space-x-3  border-4 bg-blue-lagos shadow-xl w-64 text-center rounded-lg p-4 h-40'>
                <svg viewBox="0 0 24 24" fill="none" className='w-20 h-20 stroke-black' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h2 className='text-black font-bold text-2xl'>Oficina</h2>
                <p>+57 310 3437059</p>
            </a>
            <a href='tel:+573103437059' className='flex flex-col justify-center items-center space-x-3  border-4 bg-blue-lagos shadow-xl w-64 text-center rounded-lg p-4 h-40'>
                <svg viewBox="0 0 24 24" fill="none" className='w-20 h-20 stroke-black' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h2 className='text-black font-bold text-2xl'>Teléfono</h2>
                <p>+57 314 8677552</p>
            </a>
            <a href='https://maps.app.goo.gl/KWcnHTi6sknMDPtQ8' className='flex flex-col justify-center items-center space-x-3  border-4 bg-blue-lagos shadow-xl w-64 text-center rounded-lg p-4 h-40'>
                <svg viewBox="0 0 24 24" className='w-20 h-20 stroke-black' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h2 className='text-black font-bold text-2xl'>Dirección</h2>
                <p>Kilometro 1 #16 - 25, Monterrey, Casanare</p>
            </a>
            <a href='mailto:loslagoscentrovacacional@gmail.com' className='flex flex-col justify-center items-center space-x-3 border-4 bg-blue-lagos shadow-xl w-64 text-center rounded-lg p-4 h-40'>
                <svg viewBox="0 0 24 24" className='w-12 stroke-black' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h2 className='text-black font-bold text-2xl '>Correo</h2>
                <p className='w-full truncate'>loslagoscentrovacacional@gmail.com</p>
            </a>
        </section >

        <section className='max-w-7xl w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4208420735727!2d-72.89160582398188!3d4.8689461401739225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6ad2850e5b68df%3A0x30c6adb32b2fb1cb!2sHotel%20Los%20Lagos%20Centro%20Vacacional%3B%20Hotel%20en%20Monterrey%20Casanare%2C!5e0!3m2!1ses-419!2sco!4v1694108258499!5m2!1ses-419!2sco" className='w-full h-[450px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <section className='max-w-screen-xl mx-auto flex gap-12 justify-center items-center flex-wrap'>

            <div className='md:w-1/5'>
                <h2 className='text-black font-bold text-2xl'>Contacto</h2>
                <p className='text-black font-mediun text-lg'>Centro Vacacional Los Lagos se encuentra en una ubicación privilegiada a solo 500 metros de la Marginal de la Selva en el hermoso municipio de Monterrey. Nuestra ubicación estratégica te brinda un fácil acceso a la belleza natural de la zona y a todas las comodidades que necesitas para disfrutar de una experiencia inolvidable. ¡Ven y descubre la tranquilidad y la aventura que te esperan en Los Lagos!</p>
                <ul>
                    <li className='text-lg text-gray-950 hover:text-gray-500 font-medium'><a href={`tel:${contacto.telefono}`}>Teléfono: {contacto.telefono}</a></li>
                    <li className='text-lg text-gray-950 hover:text-gray-500 font-medium'><a href={`mailto:${contacto.correo}`}>Correo: {contacto.telefono}</a></li>
                    <li className='text-lg text-gray-950 hover:text-gray-500 font-medium'><a href={`${contacto.maps}`}>Direccion: {contacto.direccion}</a></li>
                </ul>
            </div>
            <div className='w-full lg:w-4/6 p-4'>
                <FormContact />
            </div>
        </section>
    </div >

}