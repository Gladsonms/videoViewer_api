import User from "../modals/User.js";
import bcrypt from "bcrypt";
import { CreateError } from "../middlewares/errorHandlingMiddleware.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};

export const sigin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(CreateError(404, "User not found"));
    }
    const isCorect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorect) {
      return next(CreateError(400, "Inavlid username or password"));
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT,
      { expiresIn: "1h" }
    );
    const { password, ...userInfo } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    next(error);
  }
};
