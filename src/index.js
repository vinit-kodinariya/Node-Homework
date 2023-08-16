const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const { connectDB } = require("./dp/dbconnection");
const config = require("./config/config");
const routes = require("./routes/v1");
const http = require("http");

// const category = require("./models/category.model");
// function  getInsert(){
//     const result = category.create({
//         category_name : "jeans",
//         category_desc : "asdfgh",
//         category_count : "123"
//     })
//     console.log(result);
// }
// getInsert()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);

app.use((req, res, next) => {
    next(new Error("Route not found!"));
});
connectDB()

const server = http.createServer(app)

server.listen(config.port, () => {
    console.log("server listning port number 8585!");
});
