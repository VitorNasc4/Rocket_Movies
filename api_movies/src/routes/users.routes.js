const {Router} = require("express")
const usersRouter = Router()

const UsersControllers = require("../controller/UsersControllers")
const usersControllers = new UsersControllers()

const ensureAuthenticated = require("../middleware/ensureAuthenticated")

usersRouter.post("/", usersControllers.create)
usersRouter.put("/", ensureAuthenticated, usersControllers.update)

module.exports = usersRouter