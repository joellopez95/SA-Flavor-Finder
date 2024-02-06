const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type FoodTruck {
    _id: ID
    name: String
    description: String
    image: String
    website: String
    location: String
    category: Category
  }

  type HiddenGem {
    _id: ID
    name: String
    description: String
    image: String
    website: String
    location: String
    category: Category
  }

  type Restaurant {
    _id: ID
    name: String
    description: String
    image: String
    website: String
    location: String
    category: Category
  }

  type Order {
    products: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    products: [Product]
    users: [User]
    foodTrucks: [FoodTruck]
    hiddenGems: [HiddenGem]
    restaurants: [Restaurant]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(_id: ID!, firstName: String, lastName: String, email: String): User
  }
`;

module.exports = typeDefs;

