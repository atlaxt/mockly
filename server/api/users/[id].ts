import type { User } from '~~/server/types/users'
import UsersJson from '../../users.json'

export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  const id = Number(event.context.params?.id)
  const user = UsersJson.find(t => t.id === id) as User
  if (!user) {
    return { error: 'Kullanıcı bulunamadı' }
  }
  return user
})
