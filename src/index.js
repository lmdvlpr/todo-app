import express from 'express'
import router from './routes/todos.js'

const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/todos', router)

app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`)
})
