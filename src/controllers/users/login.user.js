import validateHelper from "../../helpers/validate.helper.js";
import userSchema from "../../schemas/user.schema.js";
import userService from "../../services/users/index.js";
import jwt from "jsonwebtoken";
export const loginController = async (req, res, next) => {
  try {
    // Validate information
    await validateHelper(userSchema, req.body);
    //connect
    // Use the user service to find the userr
    const response = await userService.loginUser(req.body);

    if (response[0].password !== req.body.password)
      return res.status(401).json({ message: "Not authorized" });

    const tokenInfo = {
      id: response[0].id,
    };
    const token = jwt.sign(tokenInfo, process.env.SECRET_KEY, {
      expiresIn: process.env.TOKEN_EXPIRE,
    });
    res.status(200).json({ message: "Login accepted", token: token });
  } catch (error) {
    next(error);
  }
};
