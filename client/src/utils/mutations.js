import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        password
      }
    }
  }
`;

export { ADD_USER }