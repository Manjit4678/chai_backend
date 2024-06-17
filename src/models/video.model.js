import mongoose,{Schema, schema} from "mongoose"

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new schema({
    videoFile:{
        type:String,//Cloudinary URL
        required:true
    },thumbnail:{
        type:string,//Cloudinary URL
        required:true
    },
    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true
    },
    duration:{
        type:string,//Cloudinary URL
        required:true
    },
    views:{
        type:Number,
        default: 0

    },
    isPublished:{
        type:Boolean,
        default:true,

    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
},
{
    timestamps:true
}

)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema)