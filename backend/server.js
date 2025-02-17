import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

const app = express();

const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`);
  connectDB();
  connectCloudinary();
});
