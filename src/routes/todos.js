import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

let todos = []

router.get('', (_req, res) => {
  return res.json(todos)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const todo = todos.find((todo) => todo.id === id)
  return res.json(todo)
})

router.post('', (req, res) => {
  const { title } = req.body
  const todo = {
    id: uuidv4(),
    title,
    completed: false
  }
  todos.push(todo)
  return res.json(todo)
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const index = todos.findIndex((todo) => todo.id === id)
  todos[index].completed = !todos[index].completed
  return res.json(todos[index])
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  todos = todos.filter((todo) => {
    return todo.id != id
  })

  return res.json(todos)
})

export default router
