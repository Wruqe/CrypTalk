import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query thoughts($username: String) {
    Thoughts(username: $username) {
      _id
      username
      thoughtText
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query thought($thoughtId: ID!) {
    Thoughts(thoughtId: $thoughtId) {
      _id
      username
      thoughtText
    }
  }
`;



export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      thoughts
    }
  }
`;

