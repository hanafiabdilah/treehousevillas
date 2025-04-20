import Link from "next/link";

export default function VillaCard({villa}: any){
    return(
        <article className="rounded-lg bg-white shadow hover:shadow-lg transition">
            <Link href={`/villas/${villa.slug}`}>
                <div className="flex items-end overflow-hidden rounded-t-lg">
                    <img src={villa.imageUrl} alt="Hotel Photo" className="aspect-video w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                </div>
                <div className="px-4 py-3">
                    <p className="text-slate-600 text-sm">{villa.address}</p>
                    <h2 className="text-slate-700 font-bold mt-1 text-xl">{villa.name}</h2>
                    <div className="mt-1 flex items-center justify-between">
                        <div>
                            <p className=" text-slate-600 text-xs font-medium">Mulai dari</p>
                            <p className="">
                                <span className="text-lg font-bold text-green-600">Rp {villa.prices.weekday.toLocaleString('id-ID')}</span>
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
            </Link>
        </article>
    )
}