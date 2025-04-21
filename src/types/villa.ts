export interface Villa {
    id: number
    name: string
    slug: string
    description: string
    imageUrl: string
    address: string
    images: string[]
    bookingUrl: string
    prices: {
        weekday: number
        jumat: number
        sabtu: number
    }
    property: Property
    facilities: Facility[]
}

export interface Property {
    bedrooms: number
    bathrooms: number
    capacity: number
    beds: number
    floors: number
    garden?: boolean
    garage?: number
    balcony?: boolean
    view?: string
    kitchen?: number
    livingRoom?: number
    ac?: number
    freeExtraBed?: number
}

export interface Facility {
    label: string
    icon: string
    available: boolean
    key?: string
}
  