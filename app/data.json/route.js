import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            id: 'piscina',
            title: 'Hoteles con Piscina en Monterrey Casanare: Relájate en Hotel Los Lagos',
            subtitle:'Diversión acuática para toda la familia.',
            items: ['Abierta todo el año',
                'Piscina con vistas',
                'Parque acuático para niños (tobogán)',
                'Tobogán para adultos ',
                'Jacuzzi',
                'Zona poco profunda',
                'Sillas de playa',
                'Valla alrededor de la piscina',],
            description: 'Disfruta de la exclusividad de nuestros hoteles con piscina en Monterrey Casanare, donde Hotel Los Lagos Centro Vacacional te invita a relajarte y disfrutar de vistas panorámicas. Nuestras instalaciones están diseñadas para elevar tu experiencia, asegurando que cada momento sea una escapada de lujo.',
            gallery: [
                {
                    img: '/Images/servicios/piscina/piscina1.jpg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso piscina en donde podras disfrutar de un delicioso asado en familia o con amigos.'
                },
                {
                    img: '/Images/servicios/piscina/piscina2.jpg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso piscina en donde podras disfrutar de un delicioso asado en familia o con amigos.'
                },
                {
                    img: '/Images/servicios/piscina/piscina3.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/servicios/piscina/piscina.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina5.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina6.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina7.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina8.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina9.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina10.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina11.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina12.jpg',
                    alt: 'piscina'
                },

            ]
        },
        {
            id: 'juegos',
            title: 'Zona de juegos',
            subtitle:'Entretenimiento para todas las edades.',
            items: ['Mesa de ping pong ',
                'Mesa de billar pool',
                'Mesa de billar',
                'Rana electrónica',
                'Cancha de mini tejo',
                'Cancha de futbol ',
                'Mesa de futbolito',],
            description: 'Nuestra zona de juegos es perfecta para los amantes de la diversión. Puedes desafiarte en una partida de ping pong o billar pool, disfrutar de una partida de rana electrónica, probar tus habilidades en la cancha de mini tejo o en la cancha de fútbol, o simplemente relajarte con una partida de futbolito. Tenemos opciones para todos los gustos.',
            gallery: [
                {
                    img: '/Images/servicios/juegos/juegos1.jpg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso zona de juegos en donde podras disfrutar de una partida de ping pong o billar pool, disfrutar de una partida de rana electrónica, probar tus habilidades en la cancha de mini tejo o en la cancha de fútbol, o simplemente relajarte con una partida de futbolito. Tenemos opciones para todos los gustos.'
                },
                {
                    img: '/Images/servicios/juegos/juegos2.jpg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso zona de juegos en donde podras disfrutar de una partida de ping pong o billar pool, disfrutar de una partida de rana electrónica, probar tus habilidades en la cancha de mini tejo o en la cancha de fútbol, o simplemente relajarte con una partida de futbolito. Tenemos opciones para todos los gustos.'
                },
                {
                    img: '/Images/servicios/juegos/juegos1.jpg',
                    alt: 'zona de juegos'
                },
                {
                    img: '/Images/servicios/juegos/juegos2.jpg',
                    alt: 'zona de juegos'
                },


            ]
        },
        {
            id: 'descanso',
            title: "ZONA DE DESCANSO",
            subtitle:'Relajación y tranquilidad bajo el sol.',
            items: [
                'Hamacas ',
                'Sillas de playa',
                'Zona de camping',
                'Zona de picnic',
                'Zona de fogata',
                'Zona de asados',
            ],
            description: 'Relájate y disfruta del sol en nuestras cómodas hamacas, el lugar perfecto para desconectar y recargar energías.',
            gallery: [
                {
                    img: '/Images/servicios/descanso/WhatsApp-Image-2023-12-15-at-16.06.18.jpeg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso en donde podras descansar luego de una tarde agitada en donde tenemos hamacas y chinchorros a la disposicion de nuestros visitantes.'
                },
                {
                    img: '/Images/servicios/descanso/WhatsApp Image 2023-12-15 at 16.06.18 (1).jpeg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso en donde podras descansar luego de una tarde agitada en donde tenemos hamacas y chinchorros a la disposicion de nuestros visitantes.'
                },
                {
                    img: '/Images/servicios/piscina/piscina3.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/servicios/piscina/piscina1.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina5.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina6.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina7.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina8.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina9.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina10.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina11.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina12.jpg',
                    alt: 'piscina'
                },

            ]
        },
        {
            id: 'bar',
            title: 'SERVICIO DE BAR 24 HORAS',
            subtitle:'Bebidas y snacks disponibles en todo momento.',
            items: ['Bebidas alcohólicas ',
                'Gaseosa',
                'Jugos',
                'Helados',
                'Snap ',],
            description: 'Nuestro bar está abierto las 24 horas y ofrece una amplia variedad de bebidas, desde bebidas alcohólicas hasta refrescantes gaseosas y jugos. También tenemos una selección de helados y opciones de snacks para saciar tus antojos en cualquier momento. ¡No te pierdas nuestro exclusivo cóctel "Snap"!',
            gallery: [
                {
                    img: '/Images/servicios/bar/bar1.jpg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso bar en donde podras disfrutar de una deliciosa bebida en familia o con amigos.'
                },
                {
                    img: '/Images/servicios/bar/bar2.jpg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso bar en donde podras disfrutar de una deliciosa bebida en familia o con amigos.'
                },
                {
                    img: '/Images/servicios/bar/bar3.jpg',
                    alt: 'bar'
                },
                {
                    img: '/Images/servicios/bar/bar4.jpg',
                    alt: 'bar'
                },
                {
                    img: '/Images/bar5.jpg',
                    alt: 'bar'
                },
            ]
        },
        {
            id: 'BBQ',
            title: 'Zona de BBQ',
            subtitle:'Disfruta de la parrilla de manera ecoamigable.',
            items: ['Zona libré de plástico, icopor y desechables.Sólo se permite el uso de platos, vasos y utensilios biodegradables o menaje traído por el grupo(no vidrio).',],
            description: 'En nuestra zona de BBQ, promovemos la sostenibilidad. Solo se permite el uso de platos, vasos y utensilios biodegradables o menaje traído por el grupo (no vidrio). Disfruta de una experiencia al aire libre mientras cuidamos el medio ambiente.',
            gallery: [
                {
                    img: '/Images/servicios/bbq/a600fd08-6f74-4ee8-8e3d-146c7912ef37.jpeg',
                    alt: 'En el hotel los lagos centro vacacional contamos con un grandioso BBQ para que disfrutes de un delicioso asado en familia o con amigos.'
                },
                {
                    img: '/Images/servicios/descanso/WhatsApp-Image-2023-12-15-at-16.06.18.jpeg',
                    alt: 'Probando'
                },
                {
                    img: '/Images/servicios/empresarial/IMG-20231129-WA0126.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/servicios/eventos/eventos4.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina5.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina6.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina7.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina8.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina9.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina10.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina11.jpg',
                    alt: 'piscina'
                },
                {
                    img: '/Images/piscina12.jpg',
                    alt: 'piscina'
                },

            ]
        },
        {
            id: 'restaurante',
            title: 'Restaurante',
            subtitle:'Sabores para todos los gustos.',
            items: [
                'Desayuno',
                'Almuerzo',
                'Cena',
                'Comida a la carta',
                'Comida para niños',
                'Menú para dietas especiales (bajo petición)',
                'Snack-bar',
            ],
            description: 'Nuestro restaurante ofrece una deliciosa selección de platos para satisfacer todos los paladares. Desde sabores locales hasta opciones internacionales, tenemos algo para todos los gustos. Nuestro equipo de chefs te sorprenderá con su creatividad culinaria.',
            gallery: [
                {
                    img: '/Images/servicios/restaurante/IMG-20231204-WA0038.jpg',
                    alt: 'En nuestro restaurante ofrecemos una deliciosa selección de platos para satisfacer todos los paladares. Desde sabores locales hasta opciones internacionales, tenemos algo para todos los gustos. Nuestro equipo de chefs te sorprenderá con su creatividad culinaria.'
                },
                {
                    img: '/Images/servicios/restaurante/IMG-20231204-WA0039.jpg',
                    alt: 'En nuestro restaurante ofrecemos una deliciosa selección de platos para satisfacer todos los paladares. Desde sabores locales hasta opciones internacionales, tenemos algo para todos los gustos. Nuestro equipo de chefs te sorprenderá con su creatividad culinaria.'
                },
                {
                    img: '/Images/servicios/restaurante/IMG-20231204-WA0041.jpg',
                    alt: 'En nuestro restaurante ofrecemos una deliciosa selección de platos para satisfacer todos los paladares. Desde sabores locales hasta opciones internacionales, tenemos algo para todos los gustos. Nuestro equipo de chefs te sorprenderá con su creatividad culinaria.'
                },
                {
                    img: '/Images/servicios/restaurante/IMG-20231204-WA0051.jpg',
                    alt: 'En nuestro restaurante ofrecemos una deliciosa selección de platos para satisfacer todos los paladares. Desde sabores locales hasta opciones internacionales, tenemos algo para todos los gustos. Nuestro equipo de chefs te sorprenderá con su creatividad culinaria.'
                },
              
            ]
        },
        {
            id: 'empresarial',
            title: 'Alquiler de espacios para eventos empresariales',
            subtitle:'Espacios versátiles para tus eventos.',
            items: ['Capacitaciones',
                'Ley 50',
                'Dia del trabajador ',
                'Dia de la familia ',
                'Amor y amistad ',
                'Cumpleaños ',],
                description: '¿Necesitas un espacio para tus eventos corporativos o celebraciones especiales? Tenemos la solución. Ofrecemos alquiler de espacios para capacitaciones, eventos relacionados con la Ley 50, días del trabajador, días de la familia, celebraciones de amor y amistad, cumpleaños y más. Nuestro equipo de profesionales te ayudará a organizar tu evento y a hacer que sea un éxito.',
            gallery: [
                {
                    img: '/Images/servicios/empresarial/IMG-20231129-WA0129.jpg',
                    alt: 'Contamos con un grandioso espacio para tus eventos corporativos o celebraciones especiales? Tenemos la solución. Ofrecemos alquiler de espacios para capacitaciones, eventos relacionados con la Ley 50, días del trabajador, días de la familia, celebraciones de amor y amistad, cumpleaños y más. Nuestro equipo de profesionales te ayudará a organizar tu evento y a hacer que sea un éxito.'
                },
                {
                    img: '/Images/servicios/empresarial/IMG-20231129-WA0044.jpg',
                    alt: 'Contamos con un grandioso espacio para tus eventos corporativos o celebraciones especiales? Tenemos la solución. Ofrecemos alquiler de espacios para capacitaciones, eventos relacionados con la Ley 50, días del trabajador, días de la familia, celebraciones de amor y amistad, cumpleaños y más. Nuestro equipo de profesionales te ayudará a organizar tu evento y a hacer que sea un éxito.'
                },
                {
                    img: '/Images/servicios/empresarial/IMG-20231129-WA0126.jpg',
                    alt: 'Contamos con un grandioso espacio para tus eventos corporativos o celebraciones especiales? Tenemos la solución. Ofrecemos alquiler de espacios para capacitaciones, eventos relacionados con la Ley 50, días del trabajador, días de la familia, celebraciones de amor y amistad, cumpleaños y más. Nuestro equipo de profesionales te ayudará a organizar tu evento y a hacer que sea un éxito.'
                },
                {
                    img: '/Images/servicios/empresarial/IMG-20231129-WA0099.jpg',
                    alt: 'Contamos con un grandioso espacio para tus eventos corporativos o celebraciones especiales? Tenemos la solución. Ofrecemos alquiler de espacios para capacitaciones, eventos relacionados con la Ley 50, días del trabajador, días de la familia, celebraciones de amor y amistad, cumpleaños y más. Nuestro equipo de profesionales te ayudará a organizar tu evento y a hacer que sea un éxito.'
                },
            ]
        },
        {
            id: 'eventos',
            title: 'Salón de eventos',
            subtitle:'Celebraciones inolvidables en un entorno elegante.',
            items: ['Quince años ',
                'Matrimonios ',
                'Grados',
                'Fiestas fin de año',],
            description: 'Celebra momentos importantes en nuestro salón de eventos. Ya sea para quinceañeras, bodas, graduaciones o fiestas de fin de año, nuestro salón ofrece un ambiente elegante y versátil para hacer que tu evento sea inolvidable.',
            gallery: [
                {
                    img: '/Images/servicios/eventos/eventos1.jpg',
                    alt: 'En nuestro salón de eventos. Ya sea para quinceañeras, bodas, graduaciones o fiestas de fin de año, nuestro salón ofrece un ambiente elegante y versátil para hacer que tu evento sea inolvidable.'
                },
                {
                    img: '/Images/servicios/eventos/eventos2.jpg',
                    alt: 'En nuestro salón de eventos. Ya sea para quinceañeras, bodas, graduaciones o fiestas de fin de año, nuestro salón ofrece un ambiente elegante y versátil para hacer que tu evento sea inolvidable.'
                },
                {
                    img: '/Images/servicios/eventos/eventos3.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/servicios/eventos/eventos4.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos5.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos6.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos7.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos8.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos9.jpg',
                    alt: 'eventos'
                },
                {
                    img: '/Images/eventos10.jpg',
                    alt: 'eventos'
                },
            ]
        },
        {
            id: 'capilla',
            title: 'Capilla',
            subtitle:'Un lugar para la espiritualidad.',
            items: ['Bautizos',
                'Misas especiales',
                'Matrimonios',],
                description:'Nuestra capilla está a tu disposición. Puedes realizar bautizos y misas especiales para que puedas celebrar tus momentos con tranquilidad y serenidad.',
            gallery: [
                {
                    img: '/Images/capilla1.jpg',
                    alt: 'capilla'
                },
                {
                    img: '/Images/capilla2.jpg',
                    alt: 'capilla'
                },
                {
                    img: '/Images/capilla1.jpg',
                    alt: 'capilla'
                },
                {
                    img: '/Images/capilla2.jpg',
                    alt: 'capilla'
                },
            ]
        }

    ]);
}









