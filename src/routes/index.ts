import * as express from "express"
import UserController from "../controllers/UserController"
import ArticleController from "../controllers/ArticleController"
import PaslonController from "../controllers/PaslonController"
import PartaiController from "../controllers/PartaiController"
import VoterController from "../controllers/VoterController"

const Route = express.Router()

Route.post("/user", UserController.create)
Route.get("/user", UserController.find)
Route.put("/user/update/:id", UserController.update)
Route.delete("/user/delete/:id", UserController.delete)

Route.post("/article", ArticleController.create)
Route.get("/article", ArticleController.find)
Route.put("/article/update/:id", ArticleController.update)
Route.delete("/article/delete/:id", ArticleController.delete)
Route.get("/article/detail/:id", ArticleController.show)

Route.post("/paslon", PaslonController.create)
Route.get("/paslon", PaslonController.find)
Route.put("/paslon/update/:id", PaslonController.update)
Route.delete("/paslon/delete/:id", PaslonController.delete)

Route.post("/partai", PartaiController.create)
Route.get("/partai", PartaiController.find)
Route.put("/partai/update/:id", PartaiController.update)
Route.delete("/partai/delete/:id", PartaiController.delete)

Route.post("/voter", VoterController.create)
Route.get("/voter", VoterController.find)
Route.put("/voter/update/:id", VoterController.update)
Route.delete("/voter/delete/:id", VoterController.delete)

export default Route