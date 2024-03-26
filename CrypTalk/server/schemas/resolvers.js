const { User, Thought } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {signToken, AuthenticationError} = require('../utils/auth')

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      try {
        return await User.findById(userId);
      } catch (error) {
        throw new Error("Failed to fetch user");
      }
    },
    thoughts: async (parent, { username }) => {
      try {
        if (username) {
          return await Thought.find({ username });
        }
        return await Thought.find({});
      } catch (error) {
        throw new Error("Failed to fetch thoughts");
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
    signup: async (parent, { username, email, password }) => {
      // try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password before saving
        const user = await User.create({ username, email, password: hashedPassword });
        const token = signToken(user); // Generate token upon successful signup
        return { token, user }; // Return token in response
      // } catch (error) {

        // throw new Error('Error during signup');
      // }
    },
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
    removeUser: async (parent, { userId }) => {
      try {
        return await User.findOneAndDelete({ _id: userId });
      } catch (error) {
        throw new Error("Failed to remove user");
      }
    },
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
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('Invalid credentials');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          throw new Error('Invalid credentials');
        }
        const token = generateToken(user); // Generate token upon successful authentication
        return { token, user }; // Return token and user in response
      } catch (error) {
        throw new Error('Error during login');
      }
    },
  },
};

module.exports = resolvers;

