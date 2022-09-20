import { CreateError } from "../middlewares/errorHandlingMiddleware.js";
import User from "../modals/User.js";

//upadate user
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

export const deleteUser = async (req, res, next) => {
  if (req.params.id == req.user.id) {
    try {
      let deletedUser = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(`${deletedUser.name} User have deleted succefully`);
    } catch (error) {
      next(error);
    }
  } else {
    return next(CreateError(403, "Inavlid user please login"));
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const subscribeChannel = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("subdcribtion added ");
  } catch (error) {
    next(error);
  }
};

export const unSubscribeChannel = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscribed channel");
  } catch (error) {
    next(error);
  }
};
