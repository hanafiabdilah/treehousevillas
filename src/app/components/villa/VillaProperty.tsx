'use client'

import { Property } from '@/types/villa'
import { Bed,
  Hotel,
  Bath,
  Users,
  Layers,
  TreePalm,
  CarFront,
  Landmark,
  Eye,
  CookingPot,
  Sofa,
  Snowflake,
  Gift, } from 'lucide-react'

export default function VillaProperty({ property }: {property: Property}) {
  const items = [
    { icon: Bed, label: 'Kamar Tidur', value: property.bedrooms },
    { icon: Hotel, label: 'Tempat Tidur', value: property.beds },
    { icon: Bath, label: 'Kamar Mandi', value: property.bathrooms },
    { icon: Users, label: 'Kapasitas Tamu', value: property.capacity },
    { icon: Layers, label: 'Lantai', value: property.floors },
    { icon: TreePalm, label: 'Taman', value: property.garden ? 'Ada' : 'Tidak Ada' },
    { icon: CarFront, label: 'Parkir', value: `${property.garage} Mobil` },
    { icon: Landmark, label: 'Balkon', value: property.balcony ? 'Ada' : 'Tidak Ada' },
    { icon: Eye, label: 'Pemandangan', value: property.view },
    { icon: CookingPot, label: 'Dapur', value: `${property.kitchen} Ruang` },
    { icon: Sofa, label: 'Ruang Keluarga', value: `${property.livingRoom}` },
    { icon: Snowflake, label: 'AC', value: `${property.ac} Ruangan` },
    { icon: Gift, label: 'Free Extra Bed', value: property.freeExtraBed }
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map(({ icon: Icon, label, value }, i) => (
        <div key={i} className="flex items-center gap-2">
          <Icon className="w-6 h-6 text-primary" />
          <span className="text-md font-semibold">{value} {label}</span>
        </div>
      ))}
    </div>
  )
}
