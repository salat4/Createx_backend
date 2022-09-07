const mongoose = require("mongoose");

const StydentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            default:'',
        },
        name: {
            type: String,
            default:'',
        },
        category: {
            type: String,
            default:'',
        },
        image: {
            type: String,
            default:'',
        }
    },
      { timestamps: true }




)



module.exports = mongoose.model("Stydent", StydentSchema);
