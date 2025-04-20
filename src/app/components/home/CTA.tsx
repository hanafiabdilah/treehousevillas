import { WHATSAPP_URL } from "@/app/data/constant";

export default function CTA({ className }: { className?: 'string'}) {
    return (
      <div className={className}>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Yuk, Waktunya Staycation Bareng Keluarga!
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    )
  }
  