'use client'
import { Facility } from '@/types/villa';
import { CheckCircle } from 'lucide-react'

export default function VillaFacilities({ facilities }: { facilities: Facility[] }) {
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
