const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const webSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userid: {
        type:String,
        required:true,
    },
    desc: {
        type: String,
        required: true
    },
    actDetails: [{
        actTitle: {
            type: String
        },
        actDesc: {
            type: String
        }
    }]
})

mongoose.model("Web", webSchema)