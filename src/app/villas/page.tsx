import VillaCard from "../components/VillaCard"
import { villas } from "../data/villas"

export default function Villas(){
    return(
        <main className="mt-10">
            <div className="bg-white py-24 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                        {villas.map((villa) => (
                            <VillaCard villa={villa} key={villa.id} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}