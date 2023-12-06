import Image from 'next/image'
import Team from './components/Team'
import Banner from './components/Banner'
import Services from './components/Services'
import Comments from './components/Comments'
import Faq from './components/Faq'
import { comments, faq, featured, team } from './data/data'
import DivImg from './components/DivImg'

export const metadata ={
  title: 'Los Lagos',
  description: 'Los Lagos es un lugar para todos, donde podras disfrutar de un momento de relajacion y confort, con la mejor atencion personalizada y la discresion que nos caracteriza',
  keywords: ['Los Lagos', 'Hotel', 'Jacuzzi', 'Confort', 'Atencion Personalizada', 'Discresion', 'Relax', 'Descanso', 'Habitaciones', 'Servicios', 'Galeria', 'Nosotros', 'Contacto', 'Reservas', 'Politicas', 'Terminos y Condiciones', 'Reglamento'],
}

export default function Home() {
  return (
    <div>
      <video className='w-full mx-auto lg:h-screen  object-cover lg:object-fill' autoPlay muted loop poster='/Images/_DJI0063.JPG'>
        <source src="/video-lagos-lq.mp4" type="video/mp4" />
      </video>
      <div className='flex flex-col items-center gap-44'>
        <section id='cta'>
          <div className=" max-w-screen-xl p-4 px-4 mx-auto bg-white  sm:px-6 lg:px-8 py-26 lg:mt-20">
            <div className="">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                  <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                    ¿Por qué elegirnos?
                  </p>
                  <h1 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 :text-3xl sm:leading-9">
                  Descubre la Experiencia Única de Monterrey Casanare en el Hotel Los Lagos Centro Vacacional
                  </h1>
                  <p className="mt-4 text-lg leading-6 text-gray-500 ">
                  Bienvenido a nuestro exclusivo Hotel Los Lagos Centro Vacacional, donde la majestuosidad de Monterrey Casanare se encuentra con la hospitalidad incomparable. Sumérgete en la belleza natural de la región y disfruta de una estancia inolvidable con todas las comodidades que ofrecemos.
                  </p>
                  <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                    {['Jacuzzi', 'Piscina', 'Bar', 'Restaurante', 'Salon de eventos', 'Zona de juegos' ].map((item, index) => <li key={index} className="mt-6 lg:mt-0">
                      <div className="flex">
                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full  drark:bg-transparent">
                          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                            </path>
                          </svg>
                        </span>
                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                          {item}
                        </span>
                      </div>
                    </li>)}
                  </ul>
                </div>
                <div className=" mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                  <div className=" space-y-4">
                    <div className="flex items-end justify-center space-x-4 lg:justify-start">
                      <Image loading='lazy' className="w-32 rounded-lg shadow-lg md:w-56" width="200" height={0} src="/Images/piscina1.jpg" alt="1" />
                      <Image loading='lazy' className="w-40 rounded-lg shadow-lg md:w-64" width="260" height={0} src="/Images/bar1.jpg" alt="2" />
                    </div>
                    <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                      <Image loading='lazy' className="w-24 rounded-lg shadow-lg md:w-40" width="170" height={0} src="/Images/juegos1.jpg" alt="3" />
                      <Image loading='lazy' className="w-32 rounded-lg shadow-lg md:w-56" width="200" height={0} src="/Images/eventos1.jpg" alt="4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DivImg data={{img:'/Images/eventos9.jpg'}}/>
        <section id='featured'>
          <Services />
        </section>
        <DivImg data={{img:'/Images/_DSC9833.jpg'}}/>
        <section id='faq'>
          <Faq data={faq} />
        </section>
        <DivImg data={{img:'/Images/capilla2.jpg'}}/>
        <section className='w-full'>
          {/* Los dos titulos siguientes son para informar a los vistantes de lo que comentan nuestros huespedes y porque elegirnos */}
          <h2 className='text-3xl font-bold text-center w-max mx-auto flex'>Experiencias Inolvidables</h2>
          <p className='text-center mb-8'>Descubre las Historias que nos Hacen Especiales</p>
          <div id='comments' className='flex  gap-8 max-w-7xl w-full overflow-hidden overflow-x-scroll p-4 mx-auto scrollbar-none'>
            {comments.map((comment, index) => <Comments data={comment} key={index} />)}
          </div>
        </section>
      </div>

    </div>
  )
}
