import type { User } from '~~/server/types/users'
import UsersJson from '../../users.json'

export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')

  return UsersJson as User[]
})
