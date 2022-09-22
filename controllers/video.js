import { CreateError } from "../middlewares/errorHandlingMiddleware";
import Video from "../modals/Video";
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

//Upadte  Video
export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(CreateError(404, "Video not found"));
    if (req.user.id === Video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
    }
    res.status(200).json(updatedVideo);
  } catch (error) {
    next(error);
  }
};
