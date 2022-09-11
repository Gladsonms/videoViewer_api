import jwt from "jsonwebtoken";
import { CreateError } from "../middlewares/errorHandlingMiddleware.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(CreateError(401, "You are not authenicated"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(CreateError(403, "User is invalid please login again"));
    }
    req.user = user;
    next();
  });
};
