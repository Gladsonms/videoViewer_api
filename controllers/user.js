import { CreateError } from "../middlewares/errorHandlingMiddleware.js";
import User from "../modals/User.js";

export const update = async (req, res, next) => {
  if (req.params.id == req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(CreateError(403, "Inavlid user please login"));
  }
};
