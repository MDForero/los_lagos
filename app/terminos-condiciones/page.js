import Banner from '@/app/components/Banner'
export default function page() {
    return (
        <>
            <Banner title="Términos y condiciones" /> 
            <div className=" max-w-7xl mx-auto text-justify font-medium lg:p-0 px-6 space-y-4">

                <h1 className='font-bold text-3xl max-w-5xl text-center mx-auto'>POLÍTICAS GENERALES, CONSENTIMIENTO INFORMADO Y EXONERACIÓN DE RESPONSABILIDADES.</h1>

                <ol className='list-inside list-decimal space-y-4 leading-relaxed '>
                    <li className=''>
                        <h2 className='font-bold text-xl inline-block'>POLÍTICA DE DATOS PERSONALES</h2>
                        <p>En cumplimento de las disposiciones de la Ley 1581 del 2012 y su decreto reglamentario 1377 del 2013, que desarrollan el derecho de habeas data, solicitamos autorización para que el Hotel los lagos Centro vacacional D.R  S.A.S, en calidad de responsable de la información pueda recopilar, almacenar, archivar, copiar, analizar, usar y consultar los datos obtenidos con su registro autónomo y voluntario con finalidad para gestionar sus comentarios, realizar estudios de calidad mejorado así la relación comercial con nuestros clientes.</p>
                        <p>Así mismo el Hotel los lagos Centro vacacional D.R S.A.S garantiza la adopción de medidas oportunas para asegurar el tratamiento confidencial de dichos datos; en todo caso le informamos que usted puede ejercitar los derechos de acceso, cancelación, rectificación y oposición notificándolo por escrito al correo loslagoscentrovacacional@gmail.com.</p>
                        <p>Hotel los lagos centro vacacional D.R S.A.S informa las condiciones requeridas para su estadía en el hotel reconociendo y aceptando:</p>
                        <ol>
                            <li>
                                <h3>Las condiciones climáticas y ecosistémicas propias del entorno natural del hotel.</h3>
                                <p>
                                    Es de su exclusiva responsabilidad tomar las precauciones requeridas para evitar accidentes previsibles en atención a los espacios naturales que se disponen a disfrutar durante su estadía
                                </p>
                            </li>
                            <li>
                                <h3>Las condiciones requeridas para el disfrute de las experiencias ofrecidas.</h3>
                                <p>Hotel los lagos centro vacacional D.R S.A.S es un espacio abierto, campestre, y es inherente la experiencia vivencial con animales propios del entorno, por lo que es previsible que se presenten accidentes tales como picaduras de insectos, abejas, mosquitos, perros, entre otros, y nos exoneran de cualquier tipo de responsabilidad por los accidentes que puedan generarse en desarrollo de su interacción con los animales que habitan HOTEL.</p>
                                <p>Se comprometen a comunicar cualquier tipo de alergia o restricción alimenticia que tengan.</p>
                            </li>
                        </ol>

                    </li>

                    <li>
                        <h2 className='font-bold text-xl inline-block'>INFORMACIÓN DE CHECK-IN Y CHECK-OUT:</h2>
                        <dl>
                            <dt> Check in:</dt>
                            <dd>2:00 pm</dd>
                            <dt>
                                Check out:
                            </dt>
                            <dd>
                                12:00 pm
                            </dd>
                        </dl>

                    </li>
                    <li>
                        <h2 className='font-bold text-xl inline-block'>4. COMPROMISOS DE SOSTENIBILIDAD</h2>
                        <p>Se informa sobre la política de sostenibilidad y derechos y deberes que tiene para cumplir con un servicio de turismo responsable, se da a conocer lo medios de publicación y campañas que tenemos para que usted pueda mantenerse informado durante su estadía en el hotel.</p>
                        <p>Compromisos asumidos durante su estadía en el hotel.</p>
                        <ol>
                            <li>Cumplir los requisitos legales para la prevención de la explotación sexual de menores (ESCNNA), estipulado en la Ley 1336 de 2009.</li>
                            <li>Contribuir a preservar la diversidad biológica de nuestro entorno ambiental, a través de la integración paisajística, y el respeto de la flora y fauna silvestre, ya que esto está penalizado por la ley 17 de 1981 y por la Resolución Ministerial No 1367 de 2000.</li>
                            <li>Hacer uso responsable de recursos naturales, ayúdenos a preservar de manera eficiente los recursos hídricos y energéticos durante su estadía, orientados al cumplimiento de las normas 5133:2006 y la norma técnica sectorial colombiana NTS-TS 002.</li>
                            <li>Respetar la cultura, creencias ideológicas y tradiciones culturales, ya que de no hacerlo está tipificado en la ley 1185 del 2008 como un delito, denuncie ante las autoridades a quien saquee, robe, trafique o venda nuestro patrimonio cultural, rechace la compra de objetos sin la documentación adecuada sobre su origen, ayúdenos a fortalecer y preservar los recursos culturales con los que contamos en Colombia.</li>
                            <li>No al trato diferencial o discriminatorio, no juzgamos raza, inclinación sexual, creencia religiosa, Ideología política o de cualquier otra naturaleza.</li>
                            <li>Respetar y Cumplir con la política, principios y deberes de sostenibilidad comunicados por el hotel los lagos centro vacacional D.R. S.A.S.</li>
                        </ol>
                        <p>Todos los menores de edad que se hospeden en el hotel deberán estar en compañía de sus padres y presentar su registro civil de nacimiento en el momento del Check in, si por algún motivo el menor viaja en compañía de un adulto responsable, deberá presentar los permisos correspondientes autenticados.</p>
                    </li>
                </ol>
            </div>
        </>
    )
}