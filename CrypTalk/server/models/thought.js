const { Schema, model } = require('mongoose');
const reactionSchema = require("./reaction")
// Schema to create user model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get:(dateValue) => dateValue.toLocaleDateString()
    },
    username:{
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);
thoughtSchema.virtual('reactionCount').get(
  function(){
    return this.reactions.length
  }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
