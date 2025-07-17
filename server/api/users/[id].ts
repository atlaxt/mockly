import UsersJson from '../../users.json'

export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  const id = Number(event.context.params?.id)
  const todo = UsersJson.find(t => t.id === id)
  if (!todo) {
    return { error: 'Todo bulunamadı' }
  }
  return todo
})
