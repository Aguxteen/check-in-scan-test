import { Router } from "express";
import { registerController } from "../controllers/users/register.user.js";
import { loginController } from "../controllers/users/login.user.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
export const usersRouter = Router();
/*
url --location 'http://localhost:3001/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": string,
    "password": string
}'
RESPONSES:
{
    "message": "Login accepted",
    "token": "token"
}
{
    "error": "User not found"
}
*/
usersRouter.post("/login", loginController);

/*
curl --location 'http://localhost:3001/users/register' \
--header 'Authorization: (token from login) \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": string,
    "password": string
}'
RESPONSES:
{
    "message": "User created"
}
{
    "message": "Not authorized"
}
{
    "error": "There is already a user with this email"
}

*/
usersRouter.post("/register", authMiddleware, registerController);
