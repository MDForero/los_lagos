import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    const posts = await fetch('http://localhost:3000/data.json', {cache:'reload'}).then((res) => res.json())
    return posts.map((post) => ({ id: post.id }))
}

export async function generateMetadata({ params, searchParams }, parent) {
    const id = params.id
    const data = await fetch('http://localhost:3000/data.json',{cache:'reload'}).then((res) => res.json())
    const servicio = data?.find((item) => item.id === id)
    return {
        title: servicio?.title,
        keywords: servicio?.description,
        description: servicio?.description?.slice(0, 100),
    }
}


export default async function Page({ params }) {
    const data = await fetch('http://localhost:3000/data.json', {cache:'no-store'}).then((res) => res.json())
    const servicio = data?.find((item) => item.id === params.id)
    return <>
        <main className="h-[800px] w-full relative">
            <Image loading='lazy' src={servicio?.gallery[0].img} alt={servicio?.gallery[0].alt} className="w-full h-full object-cover" width={0} height={0} />
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center bg-black/30">
                <Image loading='lazy' src='/logo-dark.png' width={0} height={0} className='w-52 h-52' />
                <p className="text-white lg:text-5xl sm:text-xl font-bold capitalize"><span className="text-white font-bold capitalize">{servicio?.id.toLocaleLowerCase()}</span> | <Link href='/servicios' className="text-white hover:text-blue-lagos font-bold capitalize">Servicios</Link></p>
            </div>
        </main>
        <section id='cta'>
            <div className=" max-w-screen-xl p-4 px-4 mx-auto bg-white  sm:px-1 lg:px-8 py-26 lg:mt-20">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                        <h1 className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                            {servicio?.title}
                        </h1>
                        <h2 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 :text-3xl sm:leading-9">
                            {servicio?.subtitle}
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500 ">
                            {servicio?.description}
                        </p>
                        <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                            {servicio?.items.map((item, index) => <li key={index} className="mt-6 lg:mt-0">
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
                                <Image loading='lazy' className="w-32 rounded-lg shadow-lg md:w-56 object-cover h-80" width="200" height={200} src={servicio?.gallery[0].img} alt={servicio?.gallery[0].alt} />
                                <Image loading='lazy' className="w-36 rounded-lg shadow-lg md:w-64 object-cover h-72" width="260" height={200} src={servicio?.gallery[1].img} alt={servicio?.gallery[1].alt} />
                            </div>
                            <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                <Image loading='lazy' className="w-24 rounded-lg shadow-lg md:w-40 object-cover h-64" width="170" height={200} src={servicio?.gallery[2].img} alt={servicio?.gallery[2].alt} />
                                <Image loading='lazy' className="w-32 rounded-lg shadow-lg md:w-56 object-cover h-80" width="200" height={200} src={servicio?.gallery[3].img} alt={servicio?.gallery[3].alt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
