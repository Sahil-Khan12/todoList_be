import express from "express";
import taskRoutes from "./routes/todo.js";
import cors from "cors";
import connectDB from "./config/dbConnection.js";

await connectDB();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use("/todo", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the To-Do List API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
