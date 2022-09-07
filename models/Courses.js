const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema(
    {
        profilePicture: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        typeOfCourse: {
            type: String,
            default: '',
        },
        about: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
        }
    },
    {timestamps :true}
)


module.exports = mongoose.model("Courses", CoursesSchema);
