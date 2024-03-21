// Import the User model
const { User, Thought } = require('../models');

const resolvers = {
  Query: {

    // Resolver for querying a single user by ID
    user: async (parent, { userId }) => {
      try {
        return await User.findById(userId);
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
 
    thoughts: async (parent, {username}) => {
      try {
        if (username){
          return await Thought.find({username});
        }
        return await Thought.find({});
      } catch (error) {
        throw new Error("Failed to fetch Thoughts");

      }
    },

    thought: async (parent, { thoughtId }) => {
      try {
        return await Thought.findById(thoughtId);
      } catch (error) {
        throw new Error("Failed to fetch thought");
      }
    },

  },

  Mutation: {
    // Resolver for adding a new user
    addUser: async (parent, { username }) => {
      try {
        return await User.create({ username });
      } catch (error) {
        throw new Error("Failed to add user");
      }
    },

    // Resolver for adding a thought to a user
    addThought: async (parent, { userId, thought }) => {
      try {
        return await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { thoughts: thought } },
          { new: true, runValidators: true }
        );
      } catch (error) {
        throw new Error("Failed to add thought");
      }
    },

    // Resolver for removing a user
    removeUser: async (parent, { userId }) => {
      try {
        return await User.findOneAndDelete({ _id: userId });
      } catch (error) {
        throw new Error("Failed to remove user");
      }
    },

    // Resolver for removing a thought from a user
    removeThought: async (parent, { userId, thought }) => {
      try {
        return await User.findOneAndUpdate(
          { _id: userId },
          { $pull: { thoughts: thought } },
          { new: true }
        );
      } catch (error) {
        throw new Error("Failed to remove thought");
      }
    },
  },
};

module.exports = resolvers;
