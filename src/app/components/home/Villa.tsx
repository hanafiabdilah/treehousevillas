import { villas } from "../../data/villas";
import VillaCard from "../VillaCard";
  
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
                    {villas.map((villa) => (
                        <VillaCard villa={villa} key={villa.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
  