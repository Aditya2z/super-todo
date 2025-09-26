const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}
app.use(cors(corsOptions));

//Inbuilt middlewares
app.use(express.json()); // parse json and put into req.body
app.use(express.urlencoded({ extended: false })); // handle form data
app.use(express.static(path.join(__dirname, "public"))); // handle static assets

//Third party middlewares
//cokieparser and express-session

// health check route
app.get("/", (req, res) => {
  res.json({ message: "Super-Todo API is running 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API server running at http://localhost:${PORT}`);
});
