import * as express from "express"
import * as path from "path"
import * as bodyParser from "body-parser"
import * as morgan from "morgan"
import * as passport from "passport"
import * as router from './router'

class App {
  public app

  constructor () {
    this.app = express()
    this.mountRoutes()
    this.app.use(passport.initialize())

    this.app.set("view engine", "html")
    this.app.use(morgan("dev"))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({"extended":"false"}))
    this.app.use(express.static(path.join(__dirname, "dist")))

  }

  private mountRoutes (): void {
    this.app.use("/", router)
    this.app.use("/", express.static(path.join(__dirname, "dist")))
    //by Default run this page
    this.app.use("/", function(req,res){
      res.send("Welcome")
    })

  }
}

export default new App().app
