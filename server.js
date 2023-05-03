const express  = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv  = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT

app.use(express.json())

app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/usersRoutes"))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`listening on port ${port}`);

});