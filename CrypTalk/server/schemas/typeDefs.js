const typeDefs = `
type User {
  _id: ID
  name: String
  thoughts: [String]!
}

type Query {
  users: [User]!
  user(userId: ID!): User
}

type Mutation {
  addUser(username: String!): User
  addThought(userId: ID!, thought: String!): User
  removeUser(userId: ID!): User
  removeThought(userId: ID!, thought: String!): User
}
`;

module.exports = typeDefs;
