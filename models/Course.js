const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
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


module.exports = mongoose.model("Course", CourseSchema);
