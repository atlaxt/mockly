import type { Todo } from '~~/server/types/todos'
import TodosJson from '../../todos.json'

export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')

  return TodosJson as Todo[]
})
