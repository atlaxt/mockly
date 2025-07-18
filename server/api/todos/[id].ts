import type { Todo } from '~~/server/types/todos'
import TodosJson from '../../todos.json'

export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  const id = Number(event.context.params?.id)
  const todo = TodosJson.find(t => t.id === id) as Todo
  if (!todo) {
    return { error: 'Todo bulunamadı' }
  }
  return todo
})
