const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            default: '',
        },
        dates: {
            type: Array,
        },
        eventInfo: {
            type: String,
            default:'',
        },
        speaker: {
            type: Array,
        },
        link: {
            type: String,
            default:'',
        },
        theme: {
            type: Array,
        },
        list: {
            type: Array,  
        }
    },
    {timestamps :true}
)


module.exports = mongoose.model("Event", EventSchema);
