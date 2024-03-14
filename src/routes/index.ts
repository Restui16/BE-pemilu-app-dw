import express from "express"
import UserController from "../controllers/UserController"
import ArticleController from "../controllers/ArticleController"
import PartaiController from "../controllers/PartaiController"
import VoterController from "../controllers/VoterController"
import CandidateController from "../controllers/CandidateController"

const Route = express.Router()

Route.post("/users", UserController.create)
Route.get("/users", UserController.find)
Route.put("/users/:id", UserController.update)
Route.delete("/users/:id", UserController.delete)

Route.post("/articles", ArticleController.create)
Route.get("/articles", ArticleController.find)
Route.put("/articles/:id", ArticleController.update)
Route.delete("/articles/:id", ArticleController.delete)
Route.get("/articles/:id", ArticleController.getArticle)

Route.post("/candidates", CandidateController.create)
Route.get("/candidates", CandidateController.find)
Route.put("/candidates/:id", CandidateController.update)
Route.delete("/candidates/:id", CandidateController.delete)

Route.post("/partai", PartaiController.create)
Route.get("/partai", PartaiController.find)
Route.put("/partai/:id", PartaiController.update)
Route.delete("/partai/:id", PartaiController.delete)

Route.post("/voters", VoterController.create)
Route.get("/voters", VoterController.find)
Route.put("/voters/:id", VoterController.update)
Route.delete("/voters/:id", VoterController.delete)

export default Route