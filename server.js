const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./routes/payment");
const path = require("path");

//initialize app
const app = express();

//environment variables
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/payment/", paymentRoutes);

// static files (build of your frontend)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client", "build", "index.html"));
  });
}

//listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
