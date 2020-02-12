import express from "express";
import routers from "../routers";
import {
    video,
    editVideo,
    deleteVideo,
    videoDetail,
    getUpload,
    postUpload
} from "../controllers/videocontroller"

const videoRouter = express.Router();

videoRouter.get(routers.video, video);
videoRouter.get(routers.upload, getUpload);
videoRouter.post(routers.upload, postUpload);

videoRouter.get(routers.editVideo, editVideo);
videoRouter.get(routers.deleteVideo, deleteVideo);
videoRouter.get(routers.videoDetail(), videoDetail);

// videoRouter.get(routers.video, (req, res) => res.send("Video")); videoRouter.get(routers.upload, (req, res) => res.send("Upload"));
// videoRouter.get(routers.editVideo, (req, res) => res.send("Edit Video"));
// videoRouter.get(routers.deleteVideo, (req, res) => res.send("Delete Video"));
// videoRouter.get(routers.videoDetail, (req, res) => res.send("videoDetail"));

export default videoRouter; 