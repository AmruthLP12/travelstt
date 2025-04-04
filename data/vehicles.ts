export interface Vehicle {
  id: string
  name: string
  image: string
  rate: string
  capacity: number
  isAC: boolean
  hasToll: boolean
  transmission: string
  featured?: boolean
}

export const vehicles: Vehicle[] = [
  {
    id: "force-urbania",
    name: "Force Urbania",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 50/km",
    capacity: 17,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
  },
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 17/km",
    capacity: 5,
    isAC: true,
    hasToll: true,
    transmission: "Manual",
    featured: true,
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 22/km",
    capacity: 7,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 15/km",
    capacity: 5,
    isAC: true,
    hasToll: true,
    transmission: "Manual",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 35/km",
    capacity: 12,
    isAC: true,
    hasToll: true,
    transmission: "Manual",
  },
  {
    id: "mercedes-benz",
    name: "Mercedes Benz",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 75/km",
    capacity: 4,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
    featured: true,
  },
  {
    id: "honda-city",
    name: "Honda City",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 20/km",
    capacity: 5,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
  },
  {
    id: "mahindra-scorpio",
    name: "Mahindra Scorpio",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 25/km",
    capacity: 7,
    isAC: true,
    hasToll: true,
    transmission: "Manual",
  },
  {
    id: "luxury-bus",
    name: "Luxury Bus",
    image: "/placeholder.svg?height=300&width=400",
    rate: "Rs. 80/km",
    capacity: 45,
    isAC: true,
    hasToll: true,
    transmission: "Automatic",
  },
]

