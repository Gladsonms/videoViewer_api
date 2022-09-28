import Comments from "../modals/Comments";

export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await Comments.save();
    res.status(200).json(savedComment);
  } catch (error) {
    next(error);
  }
};
