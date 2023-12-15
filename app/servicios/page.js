import Banner from '../components/Banner'
import Servicios from '../components/Servicios'


export const metadata = {
    title: "Servicios",
    description: "Servicios",
    keywords: "Servicios",
}


export default async function page (){
    const servicios = await fetch('http://localhost:3000/data.json', {cache:'reload'}).then((res) => res.json())
    return <div>
        <Banner fondo={'/Images/fondos/servicios.jpg'}/>
        <div className='flex flex-wrap lg:gap-12 gap-4 max-w-7xl w-full mx-auto  justify-evenly mt-24'>
            {servicios?.map((item, index) => <Servicios  key={index} data={item} />)}
        </div>
    </div>

}