'use client'
import { CheckCircle } from 'lucide-react'

interface Facility {
  label: string
  icon?: string // optional if kamu pakai icon name
  available: boolean
}

interface FacilitiesProps {
  facilities: Facility[]
}

export default function VillaFacilities({ facilities }: FacilitiesProps) {
  facilities = facilities.filter(facility => facility.available);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
      {facilities.map((f, i) => (
        <div key={i} className="flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <span className={`text-md font-semibold ${f.available ? '' : 'line-through text-gray-500'}`}>
            {f.label}
          </span>
        </div>
      ))}
    </div>
  )
}
