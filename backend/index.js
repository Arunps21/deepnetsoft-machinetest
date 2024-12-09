const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./config/mongoConnecton")
const menuRouter = require("./routes/menuRouter")
const itemRouter = require("./routes/itemRouter")
const cookieParser = require("cookie-parser")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use("/menu",menuRouter)
app.use("/item",itemRouter)


app.listen(9000,()=>{
    console.log("Server run at http://localhost:9000")
})