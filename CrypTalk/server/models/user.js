const { Schema, model } = require('mongoose');


// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true
    },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);
userSchema.virtual("friendCount").get(
  function(){
    return this.friends.length
  }
)

const User = model('user', userSchema);

module.exports = User;