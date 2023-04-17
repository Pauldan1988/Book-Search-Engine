import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user {
   us _id
    username
    email
    password
    bookCount
}`