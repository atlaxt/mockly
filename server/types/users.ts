export type UserRole = 'admin' | 'user' | 'moderator'

export interface User {
  id: number
  name: string
  email: string
  avatar: string
  role: UserRole
  registeredAt: string
  phone: string
  active: boolean
  address: {
    city: string
    country: string
  }
}
