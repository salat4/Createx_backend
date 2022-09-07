const mongoose = require("mongoose");


const EvenetsSchema = new mongoose.Schema(
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
        }
    },
    {timestamps :true}
)


module.exports = mongoose.model("Evenets", EvenetsSchema);
