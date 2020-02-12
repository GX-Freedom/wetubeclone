//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//user
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/editProfile";
const CHANGE_PASSWORD = "/changePassword";


//video 
const VIDEO = "/video";
const UPLOAD = "/video/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/editVideo";
const DELETE_VIDEO = "/:id/deleteVideo";


const routers = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        }
        else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    video: VIDEO,
    upload: UPLOAD,
    videoDetail: (id) => {
        if (id) {
            return `/video/${id}`;

        }
        else {
            return VIDEO_DETAIL;
        }

    },
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
}

export default routers;




// import express from "express";

// export const userRouter = express.Router();

// userRouter.get("/", (req, res) => res.send("user index"));
// userRouter.get("/edit", (req, res) => res.send("user edit"));
// userRouter.get("/password", (req, res) => res.send("user password"));


// //Model data
// //Vview hiw does the data look
// //Control function tah look for the data
