import express from "express";
import dotenv from "dotenv";
import { usersRouter } from "./src/routes/users.router.js";
import { errorHandler } from "./src/middlewares/manage.errors.js";
import { authMiddleware } from "./src/middlewares/auth.middleware.js";
import { productsRouter } from "./src/routes/products.router.js";
import { winstonMiddleware } from "./src/middlewares/winston.middleware.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(winstonMiddleware);

// Log in and creation of users
app.use("/users", usersRouter);

// all prodcuts actions
app.use("/products", authMiddleware, productsRouter);

app.get("/", (req, res) => {
  res.status(200).json("Server running correctly");
});
app.use("/", errorHandler);

const PORT = process.env.PORT ?? 4040;
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
