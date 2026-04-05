import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";

const verifyJWT = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) throw new ApiError(401, "Unauthorized");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);
  req.user = user;

  next();
};

export default verifyJWT;