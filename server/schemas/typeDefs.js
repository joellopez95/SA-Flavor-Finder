
// const typeDefs = `
//   type Category {
//     _id: ID
//     name: String
//   }

//   type Restaurant {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//   }

//   type FoodTruck {
//     _id: ID
//     name: String
//     description: String
//     image: String
//     website: String
//     location: String
//     category: Category
//   }

//   type HiddenGem {
//     _id: ID
//     name: String
//     description: String
//     image: String
//     website: String
//     location: String
//     category: Category
//   }

//   type Restaurant {
//     _id: ID
//     name: String
//     description: String
//     image: String
//     website: String
//     location: String
//     category: Category
//   }


//   type Auth {
//     token: ID
//     user: User
//   }

//   type Query {
//     categories: [Category]
//     products: [Product]
//     users: [User]
//     foodTrucks: [FoodTruck]
//     hiddenGems: [HiddenGem]
//     restaurants: [Restaurant]
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     updateUser(_id: ID!, firstName: String, lastName: String, email: String): User
//   }
// `;

// module.exports = typeDefs;

const typeDefs = `
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
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;


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

type Query {
  categories: [Category]
  user: User
}
type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  login(email: String!, password: String!): Auth
}`;
module.exports = typeDefs;

