import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
  text: { 
    type: String, 
    required: true
 },
  postedBy: { 
    type: Schema.Types.ObjectId, ref: 'User',
    required: true 
},
  project: { 
    type: Schema.Types.ObjectId, 
    ref: 'Project', 
    required: true }

}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
