import validateHelper from "../../helpers/validate.helper.js";
import userSchema from "../../schemas/user.schema.js";
import userService from "../../services/users/index.js";
export const registerController = async (req, res, next) => {
  try {
    // Validate information
    await validateHelper(userSchema, req.body);
    //connect
    // Use the user service to create the register
    const response = await userService.createUser(req.body);

    if (response?.affectedRows === 1) {
      res.status(200).json({ message: "User created" });
    } else {
      throw new Error({ error: "User not created", status: 500 });
    }
  } catch (error) {
    next(error);
  }
};
