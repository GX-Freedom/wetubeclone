import { urlencoded } from "body-parser";
// import { videos } from "../db";
import { format } from "morgan";
import routers from "../routers";



// export const home = (req, res) => res.render("Home",
//     {
//         pageTitle: "Home",
//     });

export const home = (req, res) => res.render("Home",
    {
        pageTitle: "Home"
    });


export const search = (req, res) => {
    const {
        query: { term: seearchingBy }
    } = req;
    //const seearchingBy = req.query.term;
    res.render("Search",
        { pageTitle: "Search", seearchingBy, videos })
}

export const video = (req, res) => res.render("video", {
    pageTitle: "video"
});

export const getUpload = (req, res) => res.render("upload", {
    pageTitle: "upload"
});

export const postUpload = (req, res) => {

    const {
        body: {
            file,
            title,
            description
        }
    } = req;
    //To Do : Upload and save video

    res.redirect(routers.videoDetail());
}

export const videoDetail = (req, res) => res.render("videoDetail", {
    pageTitle: "videoDetail"
});

export const editVideo = (req, res) => res.render("editVideo", {
    pageTitle: "editVideo"
});

export const deleteVideo = (req, res) => res.render("DeleteVideo", {
    pageTitle: "deleteVideo"
});


// export const home = (req, res) => res.render("home", { pageTitle: "Home" });
// export const search = (req, res) =>
//   res.render("search", { pageTitle: "Search" });
// export const upload = (req, res) =>
//   res.render("upload", { pageTitle: "Upload" });
// export const videoDetail = (req, res) =>
//   res.render("videoDetail", { pageTitle: "Video Detail" });
// export const editVideo = (req, res) =>
//   res.render("editVideo", { pageTitle: "Edit Video" });
// export const deleteVideo = (req, res) =>
//   res.render("deleteVideo", { pageTitle: "Delete Video" });