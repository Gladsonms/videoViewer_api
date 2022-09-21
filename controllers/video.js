import Video from "../modals/Video";

//Add video
export const AddVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json({ savedVideo });
  } catch (error) {
    next(error);
  }
};
