const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Book {
    bookId: String!
    authors: [Author]!
    description: String!
    title: String!
    image: String!
    link:
  }

  type User {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;