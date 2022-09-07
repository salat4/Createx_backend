const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema(
    {
        typeofBlog: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: '',
        },
        category: {
            type: String,
            default:'',
        },
        date: {
            type: Array,
        },
        duration: {
            type: Number,
        },
        title: {
            type: String,
            default:'',
        },
        text: {
            type: String,
            default:'',
        }
    },
    { timestamps: true }

)



module.exports = mongoose.model("Blogs", BlogsSchema);
