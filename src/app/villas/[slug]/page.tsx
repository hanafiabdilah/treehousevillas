'use client' 
// app/villas/[slug]/page.tsx
import { villas } from '@/data/villas'
import { notFound, useParams } from 'next/navigation'
import VillaProperty from '@/app/components/villa/VillaProperty'
import VillaFacilities from '@/app/components/villa/VillaFacilities'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'  // Import tipe Swiper

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react'
import CTA from '@/app/components/home/CTA'

export default function VillaDetail() {
  const params = useParams();
  const villa = villas.find((v) => v.slug === params.slug)

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0);

  if (!villa) return notFound()

  return (
    <main className="mt-10">
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="">
            <Swiper
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              } as React.CSSProperties}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className=""
            >
              {villa.images.map(image => {
                return (
                  <SwiperSlide>
                    <img src={image} className="w-full h-[30vh] sm:h-[50vh] lg:h-[60vh] object-cover rounded-lg" />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={2}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              className="mt-3"

            >
              {villa.images.map((image, idx) => {
                return (
                  <SwiperSlide className="">
                    <img src={image} className={`h-[15vh] sm:h-[20vh] w-full rounded-lg object-cover transition-all border border-4 ${
          idx === activeIndex ? 'border-green-600' : 'border-transparent'
        }`} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="mx-auto max-w-2xl pb-16 pt-10 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8  lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{villa.name}</h1>
            </div>
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="">
                <h2 className="text-2xl font-semibold mb-4 text-gray-500">Harga</h2>
                <div className="space-y-2 text-lg text-gray-700">
                  <div className="flex justify-between">
                    <span>Minggu - Kamis</span>
                    <span className="font-semibold text-green-600">
                    Rp {villa.prices.weekday.toLocaleString('id-ID')}
                    </span>
                    </div>
                    <div className="flex justify-between">
                    <span>Jum'at</span>
                    <span className="font-semibold text-green-600">
                    Rp {villa.prices.jumat.toLocaleString('id-ID')}
                    </span>
                    </div>
                    <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-semibold text-green-600">
                    Rp {villa.prices.sabtu.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">*Harga per malam</p>
              </div>

              <a
                href={villa.bookingUrl}
                target="_blank"
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                Hubungi Kami
              </a>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{villa.description}</p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="mb-3 text-gray-500">Properti</h3>
                <VillaProperty property={villa.property} />
              </div>
              <div className="mt-10">
                <h3 className="mb-3 text-gray-500">Fasilitas</h3>
                <VillaFacilities facilities={villa.facilities} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t bg-green-100 border-gray-200">
        <CTA />
      </div>
    </main>
  )
}
