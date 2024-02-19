import Banner from '../components/Banner'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Modal from '../components/Modal'

export const metadata = {
    title: "Galeria",
    description: "Galeria",
    keywords: "Galeria",
}



function obtenerNombresDeImagenesEnCarpeta(carpeta) {
    const nombresDeArchivos = fs.readdirSync(carpeta);
    const nombresDeImagenes = nombresDeArchivos.filter((nombreArchivo) => {
        // Filtrar solo archivos con extensiones de imágenes comunes (puedes agregar más según tus necesidades)
        const extensionesValidas = ['.jpg', '.jpeg', '.png', '.gif'];
        const extension = path.extname(nombreArchivo).toLowerCase();
        if (fs.lstatSync(carpeta + nombreArchivo).isDirectory()) {
            obtenerNombresDeImagenesEnCarpeta(carpeta + nombreArchivo+'/')
        }
        return extensionesValidas.includes(extension)
    });// Si el archivo es una carpeta, itera sobre sus contenidos

    return nombresDeImagenes.map((imagen) => (carpeta + imagen).slice((carpeta + imagen).indexOf('/Images')))
}


export default async function page() {
    const imagenesEnCarpeta = await obtenerNombresDeImagenesEnCarpeta('./public/Images/');
    return <div className=''>
        <Banner fondo='/Images/fondos/galeria.jpg' />
        <div className='max-w-screen-xl w-full mx-auto grid md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-6 grid-flow-dense gap-2'>
            {imagenesEnCarpeta.map((imagen, index) => <Modal key={index} data={imagen} />)}
        </div>
    </div>

}