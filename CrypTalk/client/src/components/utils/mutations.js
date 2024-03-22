import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup(username: String!, $email: String!, $password: String!) {
    signup(username: $signup, email: $email, password: $password) {
      token
      user {
        _id
      } 
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!) {
    addUser(username: $username) {
      _id
      username
      thoughts
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation AddThought($userId: ID!, $thought: ThoughtInput!) {
    addThought(userId: $userId, thought: $thought) {
      _id
      username
      thoughtText
    }
  }
`;

export const REMOVE_USER = gql`
  mutation RemoveUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      username
      thoughts
    }
  }
`;

export const REMOVE_THOUGHT = gql`
  mutation RemoveThought($thoughtId: ID!) {
    removeThought(userId: $thoughtId) {
      _id
      username
      thoughtText
    }
  }
`;

export const UPDATE_THOUGHT = gql`
  mutation UpdateThought($thoughtId: ID!, $thought: ThoughtInput!) {
    updateThought(thoughtId: $thoughtId, thought: $thought) {
      _id
      username
      thoughtText
    }
  }
`;

