// Import the User model
const { User } = require('../models');

const resolvers = {
  Query: {
    // Resolver for querying all users
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },

    // Resolver for querying a single user by ID
    user: async (parent, { userId }) => {
      try {
        return await User.findById(userId);
      } catch (error) {
        throw new Error("Failed to fetch user");
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
