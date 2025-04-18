const featuredTestimonial = {
    body: 'Saya dan keluarga menginap selama 2 malam di villa ini dan rasanya seperti di rumah sendiri. Tempatnya bersih, udara sejuk, dan fasilitasnya lengkap. Cocok banget buat istirahat dari hiruk-pikuk kota.',
    author: {
        name: 'Dian, Jakarta',
    },
}

const testimonials = [
    [
        [
            {
                body: 'Villanya nyaman dan cozy banget! Dari interior sampai suasana sekitar benar-benar bikin rileks. Plus, pelayanan dari staff-nya juga sangat ramah dan responsif.',
                author: {
                    name: 'Rico, Jakarta',
                },
            },
            {
                body: 'Suasana villanya bikin tenang dan damai. Lokasinya juga strategis, nggak terlalu jauh dari jalan raya. Saya sangat puas.',
                author: {
                    name: 'Agus, Bogor',
                },
            },
        ],
        [
            {
                body: 'Saya suka banget sama nuansa alami di sekitar villa. Banyak pepohonan dan suara alam yang bikin tenang. Tempat tidurnya juga empuk dan bersih. Recommended untuk liburan singkat!',
                author: {
                    name: 'Sinta, Jakarta',
                },
            },
        ],
    ],
    [
        [
            {
                body: 'Villanya luas, cocok buat liburan bareng teman-teman. Dapur lengkap, ada alat BBQ juga. Malam-malam bisa nongkrong sambil ngopi di teras, suasananya tenang banget.',
                author: {
                    name: 'Ilham, Bekasi',
                },
            },
        ],
        [
            {
                body: 'Awalnya saya ragu karena harganya cukup terjangkau, tapi pas sampai... wow! Tempatnya melebihi ekspektasi. Bersih, estetik, dan view-nya luar biasa.',
                author: {
                    name: 'Putri, Tanggerang',
                },
            },
            {
                body: 'Anak-anak saya senang banget main di taman villa, bahkan nggak mau pulang. Kamarnya luas, nyaman, dan wangi. Kami pasti akan balik lagi.',
                author: {
                    name: 'Taufik, Bogor',
                },
            },
        ],
    ],
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Testimoni() {
    return (
      <div className="relative isolate bg-white pb-32 pt-24">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#12b047] to-[#12b047]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#12b047] to-[#12b047] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-green-600">Testimonials</h2>
            <p className="mt-2 text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Kami tidak hanya janji kenyamanan — mereka yang membuktikannya.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8',
                    )}
                  >
                    {column.map((testimonial, i) => (
                      <figure
                        key={i}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <div>
                            <div className="font-semibold">{testimonial.author.name}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  