import { CreateError } from "../middlewares/errorHandlingMiddleware";
import Comments from "../modals/Comments";
import Video from "../modals/Video.js";

//add comment
export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await Comments.save();
    res.status(200).json(savedComment);
  } catch (error) {
    next(error);
  }
};

//delete comment
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comments.findById(res.params.id);
    const video = await Video.findById(res.params.id);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comments.findByIdAndDelete(req.params.id);
      res.status(200).json("The comment deleted succefully");
    } else {
      return next(CreateError(403, "You can delete only your comment"));
    }
  } catch (error) {
    next(error);
  }
};

//get all comments
export const getComments = async (req, res, next) => {
  try {
    const comments = await Comments.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};
