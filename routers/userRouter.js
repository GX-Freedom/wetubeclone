import express from "express";
import routers from "../routers";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController"


export const userRoudter = express.Router();

userRoudter.get(routers.editProfile, editProfile);
userRoudter.get(routers.changePassword, changePassword);
userRoudter.get(routers.users, users);
userRoudter.get(routers.userDetail(), userDetail);

// userRoudter.get(routers.home, (req, res) => res.send("Home")); userRoudter.get(routers.join, (req, res) => res.send("Join"));
// userRoudter.get(routers.login, (req, res) => res.send("Login"));
// userRoudter.get(routers.logout, (req, res) => res.send("Logout"));
// userRoudter.get(routers.search, (req, res) => res.send("search"));

export default userRoudter;