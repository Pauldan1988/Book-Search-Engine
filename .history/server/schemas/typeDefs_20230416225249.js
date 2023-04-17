const { gql } = require("apollo-server-express");

const typeDefs = gql
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int!
    savedBooks: [Book]!
  }
  type Book {
    bookId: ID!
    title: String
    authors: [String]!
    description: String
    image: String
    link: String
  }
  input BookInput {
    bookId: ID!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    user(username: String!): User
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }
;

module.exports = typeDefs;











// const { gql } = require('apollo-server-express')

// const typeDefs = gql`
//   type Book {
//     bookId: ID!
//     authors: [Author]!
//     description: String!
//     title: String!
//     image: String!
//     link: String!
//   }

//   type User {
//     _id: ID!
//     username: String!
//     email: String!
//     bookCount: Int
//     savedBooks: [Book]
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Query {
//     me: User
//   }

//   type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//     saveBook(bookData: BookInput!): User
//     removeBook(bookId: ID!): User
//   }
// `;

// module.exports = typeDefs