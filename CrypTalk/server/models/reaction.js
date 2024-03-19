const { Schema, Types } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId:{
            type: Schema.Types.ObjectId,
            default:() => new Types.ObjectId()
        },
        reactionBody:{
            type: String,
            require: true,
            min_length: 1,
            max_length: 280,
        },
        username:{
            type: String,
            require: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get:(dateValue) => dateValue.toLocaleDateString()
        }
    },
    {
        toJSON:{
            getters:true
        },
        id:false,
    }
);

module.exports = reactionSchema