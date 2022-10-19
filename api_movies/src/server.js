const express = require("express")
const app = express()

require("express-async-errors")
const AppError = require("./utils/AppError")

const migrationsRun = require("./database/sqlite/migrations")
migrationsRun()

const routes = require("./routes")
const { response } = require("express")

const cors = require("cors")

const PORT = 3333
app.use(cors())
app.use(express.json())
app.use(routes)
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }
  console.log(error)
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

