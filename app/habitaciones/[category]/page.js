import Rooms from "@/app/components/Rooms";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    const data = await fetch('http://loslagosmonterrey.com/cabanas.json').then((res) => res.json())
    return data
}

async function getData(id) {
    const servicios = await fetch('http://loslagosmonterrey.com/cabanas.json', {cache:"reload"});
    const data = await servicios.json();
    return data.find((item) => item.id === id);;
}

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.category
    const data = await getData(id)
        return {
            title: data?.title,
            keywords: data?.description,
            description: data?.description?.slice(0, 100),
        }
}

export default async function Page({ params }) {
    const data = await getData(params.category)
    return <>
        <main className="h-[800px] w-full relative">
            <Image loading='lazy' src={data?.gallery[0].img} alt={data?.gallery[0].alt} width={0} height={0} className="w-full h-full object-cover"  />
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center bg-black/30">
                <Image loading='lazy' src='/logo-dark.png' width={0} height={0} className='w-52 h-52' />
                <p className="text-white lg:text-5xl sm:text-xl font-bold capitalize"><span className="text-white font-bold capitalize">{data?.title.toLocaleLowerCase()}</span> | <Link href='/habitaciones' className="text-white hover:text-blue-lagos font-bold capitalize">Habitaciones</Link></p>
            </div>
        </main>
        <div>
        <p className="text-justify max-w-5xl mx-auto text-xl px-10 pt-12">{data?.description}</p>
        </div>
        <section className='flex flex-wrap lg:gap-12 gap-4 max-w-7xl w-full mx-auto  justify-evenly mt-24'>
            {data?.rooms.map((room, index) => {
                return <Rooms key={index} data={room} />
            })}
        </section>
    </>
}

