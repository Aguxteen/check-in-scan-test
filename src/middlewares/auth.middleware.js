import jwt from "jsonwebtoken";
export const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // check the authorization token from the headers
    if (!authorization) res.status(401).json({ message: "Not authorized" });

    let tokenInfo;
    try {
      // verify the token
      tokenInfo = jwt.verify(authorization, process.env.SECRET_KEY);
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized" });
    }
  } catch (error) {
    next(error);
  }
};
