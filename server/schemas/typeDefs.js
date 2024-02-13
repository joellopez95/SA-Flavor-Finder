const typeDefs = `
  type Category {
    _id: ID
    name: String
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
  
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  
  type Auth {
    token: ID
    user: User
  }
  
  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]
  }
  
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Recommendation {
    _id: ID
    text: String
    createdAt: String
    user: User
  }
  
  type Query {
    categories: [Category]
    user: User
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addRestaurant(name: String!, description: String!, image: String, website: String, location: String!, categoryId: ID!): Restaurant
    addFoodTruck(name: String!, description: String!, image: String, website: String, location: String!, categoryId: ID!): FoodTruck
    addHiddenGem(name: String!, description: String!, image: String, website: String, location: String!, categoryId: ID!): HiddenGem
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addRecommendation(recommendationText: String!): Recommendation
  }
`;
module.exports = typeDefs;


// made changes

// addThought(thoughtText: String!, thoughtAuthor: String!): Thought
// addComment(
//   thoughtId: ID!
//   commentText: String!
//   commentAuthor: String!
// ): Thought
// removeThought(thoughtId: ID!): Thought
// removeComment(thoughtId: ID!, commentId: ID!): Thought
