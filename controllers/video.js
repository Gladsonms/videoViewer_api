import { CreateError } from "../middlewares/errorHandlingMiddleware.js";
import Video from "../modals/Video.js";
import User from "../modals/User.js";

//Add video
export const AddVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
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
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(CreateError(403, "You can update only your video"));
    }
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

export const randomVideos = async (req, res, next) => {
  try {
    const video = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const trend = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ view: -1 });
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const sub = async (req, res, next) => {
  try {
    const uservideo = await User.findById(req.user.id);
    const subscribedChannels = uservideo.SubscribedUser;
    const list = Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
