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


export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_RESTAURANT = gql`
  mutation AddRestaurant($name: String!, $description: String!, $image: String, $website: String, $location: String, $categoryId: ID!) {
    addRestaurant(name: $name, description: $description, image: $image, website: $website, location: $location, categoryId: $categoryId) {
      _id
      name
      # Add other fields you want to retrieve after adding a restaurant
    }
  }
`;

export const ADD_FOOD_TRUCK = gql`
  mutation AddFoodTruck($name: String!, $description: String!, $image: String, $website: String, $location: String, $categoryId: ID!) {
    addFoodTruck(name: $name, description: $description, image: $image, website: $website, location: $location, categoryId: $categoryId) {
      _id
      name
      # Add other fields you want to retrieve after adding a food truck
    }
  }
`;

export const ADD_HIDDEN_GEM = gql`
  mutation AddHiddenGem($name: String!, $description: String!, $image: String, $website: String, $location: String, $categoryId: ID!) {
    addHiddenGem(name: $name, description: $description, image: $image, website: $website, location: $location, categoryId: $categoryId) {
      _id
      name
      # Add other fields you want to retrieve after adding a hidden gem
    }
  }
`;