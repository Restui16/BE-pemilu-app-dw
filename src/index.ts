import { AppDataSource } from "./data-source"
import express, { Request, Response } from "express"
import Route from "./routes"

const app = express()
const port = 5000

app.use(express.json())

app.use('/api/v1/', Route)

AppDataSource.initialize().then(async () => {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({ data: "Success get data" })
    })

    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))

}).catch(error => console.log(error))
