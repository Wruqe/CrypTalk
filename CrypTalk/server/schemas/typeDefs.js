const typeDefs = `
type User {
  _id: ID
  username: String
  thoughts: [Thought]
}

type Thought {
  _id: ID
  username: String
  thoughtText: String
}

input ThoughtInput{
  thoughtText: String
  username: String
}

type Query {
  user(userId: ID!): User
  thoughts(username: String): [Thought]
  thought(thoughtId: ID!): Thought
}


type Mutation {
  addUser(username: String!): User
  addThought(userId: ID!, thought: ThoughtInput!): Thought
  removeUser(userId: ID!): User
  removeThought(userId: ID!): Thought
  updateThought(thoughtId: ID!, thought: ThoughtInput!): Thought
}
`;

module.exports = typeDefs;
