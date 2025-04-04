import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Homestay } from "@/data/homestays"

interface HomestayCardProps {
  homestay: Homestay
}

export default function HomestayCard({ homestay }: HomestayCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
      <div className="relative h-64 w-full">
        <Image src={homestay.image || "/placeholder.svg"} alt={homestay.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{homestay.name}</h3>

        <div className="space-y-1 mb-4">
          <p className="text-gray-700">{homestay.capacity}</p>
          <p className="text-gray-700">{homestay.meals}</p>
          <p className="text-gray-700">{homestay.refundPolicy}</p>
        </div>

        <div className="mb-4">
          <p className="text-xl font-bold text-indigo-800">{homestay.pricePerNight}</p>
          <p className="text-sm text-gray-500">
            {homestay.baseFee} + {homestay.taxes}
          </p>
        </div>

        <Button className="w-full bg-gradient-to-r from-indigo-800 to-purple-800 hover:from-indigo-900 hover:to-purple-900 text-white">
          BOOK THIS NOW
        </Button>
      </div>
    </Card>
  )
}

