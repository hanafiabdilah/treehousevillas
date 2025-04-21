'use client'

import VillaCard from "../components/VillaCard"
import { villas } from "@/data/villas"

import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Check } from "lucide-react"
import { useState } from "react"

const sortOptions = [
    { name: 'Harga Termurah', value: 'price-low' },
    { name: 'Harga Termahal', value: 'price-high' },
]

const filters = [
    {
        id: 'harga',
        name: 'Harga',
        options: [
            { value: '0-1', label: '<1 Juta' },
            { value: '1-2', label: '1 - 2 Jutaan' },
            { value: '2-3', label: '2 - 3 Jutaan' },
            { value: '3-4', label: '3 - 4 Jutaan' },
            { value: '4-5', label: '4 - 5 Jutaan' },
            { value: '5', label: '5 Juta++' },
        ],
    },
    {
        id: 'kapasitas',
        name: 'Kapasitas',
        options: [
            { value: '10', label: '<10 Orang' },
            { value: '10-20', label: '10-20 Orang' },
            { value: '20-40', label: '20-40 Orang' },
            { value: '40-60', label: '40-60 Orang' },
            { value: '60', label: '60 Orang++' },
        ],
    },
]

export default function Villas(){
    const [selectedSort, setSelectedSort] = useState<string|null>(null)
    const [selectedFilters, setSelectedFilters] = useState<{
        [key: string]: string[]
    }>({
        harga: [],
        kapasitas: [],
    })

    const handleFilterChange = (filterId: string, value: string) => {
        setSelectedFilters((prev) => {
            const current = prev[filterId] || []
            const updated = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value]
            return { ...prev, [filterId]: updated }
        })
    }

    const handleSortChange = (value: string) => {
        setSelectedSort(value)
    }

    const getFilteredVillas = () => {
        console.log('filterrrr');

        let result = [...villas]
      
        // FILTER
        const hargaFilters = selectedFilters.harga
        const kapasitasFilters = selectedFilters.kapasitas
      
        if (hargaFilters.length > 0) {
          result = result.filter((villa) => {
            return hargaFilters.some((range) => {
              if (range === '5') return villa.prices.weekday >= 5000000
              const [min, max] = range.split('-').map(Number)
              return villa.prices.weekday >= min * 1000000 && villa.prices.weekday <= max * 1000000
            })
          })
        }
      
        if (kapasitasFilters.length > 0) {
          result = result.filter((villa) => {
            return kapasitasFilters.some((range) => {
              if (range === '60') return villa.property.capacity >= 60
              if (!range.includes('-')) return villa.property.capacity < Number(range)
              const [min, max] = range.split('-').map(Number)
              return villa.property.capacity >= min && villa.property.capacity <= max
            })
          })
        }
      
        // SORT
        if (selectedSort === 'price-low') {
          result.sort((a, b) => a.prices.weekday - b.prices.weekday)
        } else if (selectedSort === 'price-high') {
          result.sort((a, b) => b.prices.weekday - a.prices.weekday)
        }
      
        return result
      }
    
    return(
        <main className="mt-10">
            <div className="bg-white py-24 lg:py-32">
                <div className="">
                    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
                        <section aria-labelledby="filter-heading" className="">
                            <div className="flex items-center justify-between">
                                <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Urutkan
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                    {sortOptions.map((option: any) => (
                                        <MenuItem key={option.value}>
                                        <button
                                            onClick={() => handleSortChange(option.value)}
                                            className="block px-4 py-2 text-sm font-medium text-gray-900 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                        >
                                            {option.name}
                                        </button>
                                        </MenuItem>
                                    ))}
                                    </div>
                                </MenuItems>
                                </Menu>

                                <PopoverGroup className="items-baseline space-x-8">
                                {filters.map((section, sectionIdx) => (
                                    <Popover
                                    key={section.name}
                                    id={`desktop-menu-${sectionIdx}`}
                                    className="relative inline-block text-left"
                                    >
                                    <div>
                                        <PopoverButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        <span>{section.name}</span>
                                        {selectedFilters[section.id].length > 0 ? (
                                            <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                                            {selectedFilters[section.id].length}
                                            </span>
                                        ) : null}
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                        </PopoverButton>
                                    </div>

                                    <PopoverPanel
                                        transition
                                        className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <form className="space-y-4">
                                        {section.options.map((option, optionIdx) => (
                                            <div key={option.value} className="flex gap-3">
                                            <div className="flex h-5 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                <input
                                                    defaultValue={option.value}
                                                    id={`filter-${section.id}-${optionIdx}`}
                                                    name={`${section.id}[]`}
                                                    type="checkbox"
                                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    checked={selectedFilters[section.id]?.includes(option.value)}
                                                    onChange={(e) => handleFilterChange(section.id, e.target.value)}
                                                />
                                                <Check
                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                />
                                                </div>
                                            </div>
                                            <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                            >
                                                {option.label}
                                            </label>
                                            </div>
                                        ))}
                                        </form>
                                    </PopoverPanel>
                                    </Popover>
                                ))}
                                </PopoverGroup>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                        {getFilteredVillas().map((villa) => (
                            <VillaCard villa={villa} key={villa.id} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}