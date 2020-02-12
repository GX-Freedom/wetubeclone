
import mongoose from "mongoose";
import bodyParser from "body-parser";

mongoose.connect(
    "mongodb://localhost:27017/we-tube",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// export const videos = [{
//     id: 123,
//     title: "Video Awesome",
//     description: "This it semthing I love",
//     views: 100,
//     videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mo4",
//     creators: {
//         id: 114,
//         name: "Jin",
//         email: "jin@young.com"
//     },
// },
// {
//     id: 442,
//     title: "Video Super",
//     description: "This it semthing I love",
//     views: 100,
//     videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mo4",
//     creators: {
//         id: 114,
//         name: "Jin",
//         email: "jin@young.com"
//     },
// },
// {
//     id: 2333,
//     title: "Video Nice",
//     description: "This it semthing I love",
//     views: 100,
//     videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mo4",
//     creators: {
//         id: 114,
//         name: "Jin",
//         email: "jin@young.com"
//     },
// },
// {
//     id: 222,
//     title: "Video Perfect",
//     description: "This it semthing I love",
//     views: 100,
//     videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mo4",
//     creators: {
//         id: 114,
//         name: "Jin",
//         email: "jin@young.com"
//     },
// },





// ]