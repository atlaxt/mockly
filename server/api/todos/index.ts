import TodosJson from '../../todos.json'

export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')

  return TodosJson
})
