import mongoose from "mongoose";






const commentSchema = new mongoose.Schema({
    body:{
        type : String,
        maxLength: 500
    },
    parentId: {
        type: String
    },
    image: {
        type: String,
        default : null
    }
},{ timestamps: true })



export default mongoose.models.comment || mongoose.model('comment',commentSchema);








