export interface ContactInfo {
  id: string
  type: string
  value: string
  description: string
  icon: string
}

export const contactInfo: ContactInfo[] = [
  {
    id: "phone-main",
    type: "phone",
    value: "+91 9391711883",
    description: "Main Office",
    icon: "Phone",
  },
  {
    id: "phone-bookings",
    type: "phone",
    value: "+91 8765432109",
    description: "Bookings",
    icon: "Phone",
  },
  {
    id: "email",
    type: "email",
    value: "info@ttravels.com",
    description: "Online support",
    icon: "Mail",
  },
  {
    id: "address",
    type: "address",
    value: "Tirupati, Andhra Pradesh",
    description: "Main Office",
    icon: "MapPin",
  },
]

