import { CreateError } from "../middlewares/errorHandlingMiddleware";
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
    } else {
      return next(CreateError(403, "You can update only your video"));
    }
    res.status(200).json(updatedVideo);
  } catch (error) {
    next(error);
  }
};

//Delete Video
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(CreateError(404, "Video not found"));
    if (req.user.id === req.video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("video deleted succefully");
    } else {
      return next(CreateError(403, "You can delete only your videos"));
    }
  } catch {
    next(error);
  }
};

//get video
export const getVideos = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (video) {
      res.status(200).json(video);
    } else {
      return next(CreateError(404, "Video not found"));
    }
  } catch {
    next(error);
  }
};

//add view

export const addView = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (video) {
      const UpdatedViewCount = await Video.findByIdAndUpdate(req.params.id, {
        $inc: { views: 1 },
      });
      res.satus(200).json("view add for video");
    }
  } catch (error) {
    next(error);
  }
};
