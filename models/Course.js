const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default:'',
        },
        text: {
            type: String,
            default:'',
        },
        about: {
            type: Array
        },
        infoBlock: {
            type: Array,
        },
        curator: {
            type: String,
        },
        link: {
            type: Array,   
        },
        lession: {
            type: Array,
        }
    },
    {timestamps :true}
)


module.exports = mongoose.model("Course", CourseSchema);
