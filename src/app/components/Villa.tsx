const posts = [
    {
        id: 1,
        name: 'Villa Palem',
        href: '#',
        imageUrl: 'villa/1.webp',
        address: 'Cisarua, Bogor',
        startFromPrice: 'Rp. 1.000.000',
    },
    {
        id: 2,
        name: 'Villa Palem',
        href: '#',
        imageUrl: 'villa/1.webp',
        address: 'Cisarua, Bogor',
        startFromPrice: 'Rp. 1.000.000',
    },
    {
        id: 3,
        name: 'Villa Palem',
        href: '#',
        imageUrl: 'villa/1.webp',
        address: 'Cisarua, Bogor',
        startFromPrice: 'Rp. 1.000.000',
    },
    {
        id: 4,
        name: 'Villa Palem',
        href: '#',
        imageUrl: 'villa/1.webp',
        address: 'Cisarua, Bogor',
        startFromPrice: 'Rp. 1.000.000',
    },
    {
        id: 5,
        name: 'Villa Palem',
        href: '#',
        imageUrl: 'villa/1.webp',
        address: 'Cisarua, Bogor',
        startFromPrice: 'Rp. 1.000.000',
    },
    {
        id: 6,
        name: 'Villa Palem',
        href: '#',
        imageUrl: 'villa/1.webp',
        address: 'Cisarua, Bogor',
        startFromPrice: 'Rp. 1.000.000',
    },
];
  
export default function Villa() {
    return (
        <div className="bg-white py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Temukan Villa Idamanmu
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Jelajahi pilihan villa kami yang mewah, nyaman, dan siap disewa kapan saja.</p>
                </div>
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article className="rounded-lg bg-white shadow hover:shadow-lg transition" key={post.id}>
                            <a href={post.href}>
                                <div className="flex items-end overflow-hidden rounded-t-lg">
                                    <img src={post.imageUrl} alt="Hotel Photo" className="aspect-video w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                                </div>
                                <div className="px-4 py-3">
                                    <p className="text-slate-600 text-sm">{post.address}</p>
                                    <h2 className="text-slate-700 font-bold mt-1 text-xl">{post.name}</h2>
                                    <div className="mt-1 flex items-center justify-between">
                                        <div>
                                            <p className=" text-slate-600 text-xs font-medium">Mulai dari</p>
                                            <p className="">
                                                <span className="text-lg font-bold text-green-600">{post.startFromPrice}</span>
                                                <span className="text-slate-400 text-sm">/malam</span>
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            className="rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                        >
                                            Lihat Detail
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
  