export type Priority = 'low' | 'medium' | 'high'

export interface Todo {
  id: number
  userId: number
  title: string
  description: string
  completed: boolean
  priority: Priority
  dueDate: string
  tags: string[]
  createdAt: string
}
