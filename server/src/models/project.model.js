import {mongoose, Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v21"

const projectSchema = new Schema(
    {

        image:{
            type:String
        },

        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },

        techStack:[{
            type: String,
            require: true
        }],

        links:[{
            type:String,
            required: true
        }],
        
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

        likes: [{ 
            type: Schema.Types.ObjectId,
            ref: 'User' 
        }],

        dislikes: [{ 
            type: Schema.Types.ObjectId,
            ref: 'User' 
        }],

        rating: {
            type: Number,
            get: function () {
              if (this.likes + this.dislikes === 0) {
                return 0;
              }
              return (this.likes / (this.likes + this.dislikes)) * 100;
            },
          },

        comments: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Comment' 
        }],

        aboutTitle:{
            type:String
        },

        aboutDescription:{
            type:String,
        }

    },
    {timestamps: true}
)

projectSchema.plugin(mongooseAggregatePaginate)

export const Project = mongoose.model("Project", projectSchema)