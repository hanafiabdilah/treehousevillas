import { Villa } from "@/types/villa";

export const villas: Villa[] = [
    {
        id: 1,
        name: 'Villa Palem',
        slug: 'villa-palem',
        description: 'xxx',
        imageUrl: '/villa/1.webp',
        address: 'Cisarua, Bogor',
        images: ['/villa/1.webp', '/villa/2.webp', '/villa/3.webp', '/villa/4.webp', '/villa/5.webp'],
        bookingUrl: "https://wa.me/6281226718828",
        prices: {
            weekday: 1000000,
            jumat: 3000000,
            sabtu: 3000000
        },
        property: {
            bedrooms: 3,
            bathrooms: 2,
            capacity: 6,
            beds: 4,
            floors: 2,
            garden: true,
            garage: 10,
            balcony: true,
            view: "Sawah",
            kitchen: 2,
            livingRoom: 2,
            ac: 3,
            freeExtraBed: 8,
        },
        facilities: [
            { label: "WiFi", icon: "wifi", available: true },
            { label: "Kolam Renang", icon: "pool", available: true },
            { label: "Dapur", icon: "cooking-pot", available: true },
            { label: "Parkir", icon: "car", available: true },
            { label: "Water Heater", icon: "flame", available: true, key: "waterHeater" },
            { label: "TV / Smart TV", icon: "tv", available: true, key: "tv" },
            { label: "Dispenser / Minibar", icon: "glass-water", available: true, key: "dispenser" },
            { label: "Barbeque Area", icon: "grill", available: true, key: "bbq" },
            { label: "Karaoke Set", icon: "mic", available: false, key: "karaoke" },
            { label: "Gazebo / Outdoor Area", icon: "tent-tree", available: true, key: "gazebo" },
            { label: "View Pegunungan", icon: "mountains", available: true, key: "mountainView" },
            { label: "View Sawah", icon: "rice-field", available: true, key: "riceFieldView" },
            { label: "Dekat Tempat Wisata", icon: "map-pin", available: true, key: "nearAttraction" },
            { label: "Pet Friendly", icon: "paw-print", available: false, key: "petFriendly" },
            { label: "Alat Masak Lengkap", icon: "cooking-pot", available: true, key: "fullKitchen" }
        ],
    },
];