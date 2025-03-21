import express from "express";
import cors from "cors";  // Import CORS
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import helmet from "helmet";

const app = express();


// Enable CORS for your frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend requests
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow cookies if needed
  })
);

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(arcjetMiddleware)




app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default app;
