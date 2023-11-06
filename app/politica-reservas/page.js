import Banner from '@/app/components/Banner';

export const metadata = {
    title: "Política de reservas",
    description: "Política de reservas",
    keywords: "Política de reservas",
}


export default function Page() {
    return <>
    <Banner fondo={'/Images/fondos/habitaciones.jpg'} title={'Reservas'} />
        <div className="max-w-7xl mx-auto tracking-wide font-normal leading-relaxed text-justify">

            <h1 className='text-4xl font-bold text-center mt-4'>POLÍTICA DE CANCELACIÓN DE RESERVA</h1>
            <p className=''>Somos un hotel que trabaja a diario por mejorar y brindarle la mejor atención, sabemos que pueden presentarse eventos que pueden llevarle a suspender o modificar su reserva, si es este su caso, le pedimos el favor de comunicarse con prontitud.</p> 
            <ol className="list-decimal list-inside px-4" >

                <li>La reserva quedará confirmada después de hacerse efectivo el depósito del 50% del total de la reserva. En la fecha de ingreso se debe cancelar el 50% restante.</li>
                <li>La cancelación de reserva será gratuita, si se hace en un término de 15 días antes de la fecha de ingreso.</li>
                <li>Si se cancela 14 días antes o menos de la fecha de llegada, el hotel cargará el 50% del total de la reserva.</li>
                <li>Si se cancela 1 día antes de la entrada, el hotel cargará el valor total de la estancia por concepto de No Show.</li>
                <li>En caso de reprogramación de fechas, los precios de las habitaciones serán ajustados de acuerdo con las tarifas de temporada y nuevas reservaciones.</li>
                <li>Para cualquier cambio o cancelación en su reservación confirmada, deberá enviar por escrito una solicitud al correo <a href="mailto:loslagoscentrovacacional@gmail.com">  loslagoscentrovacacional@gmail.com</a> y serán recibidas y confirmadas por nuestro equipo de reservas.</li>
                <li>Tenga en cuenta que todos los cambios solicitados después del primer correo electrónico de confirmación están sujetos a la disponibilidad del hotel.</li>
                <li>No hay reembolsos o devoluciones por salida antes de la fecha acordada. En caso de que se emite un crédito, nuestra oficina de reservas le enviará por correo electrónico su validez y restricciones.</li>
                <li>En caso de que el cliente no se presente en el hotel, se cobrará la estancia completa.</li>
                <li>La política de cancelación rige siempre y sin excepciones.</li>
            </ol>
        </div>

    </>;
}
