const { User, Category, Restaurant, FoodTruck, HiddenGem } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const resolvers = {
  Query: {

categories: async () => {
  return await Category.find();
},
user: async (parent, args, context) => {
  if (context.user) {
    const user = await User.findById(context.user._id).populate({
      path: 'orders.products',
      populate: 'category'
    });
    user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
    return user;
  }

        return user;
      }
      throw new AuthenticationError('Not logged in');
    },
  
   },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
   
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

throw AuthenticationError;
}
},
Mutation: {
  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);

    return { token, user };
  },

  updateUser: async (parent, args, context) => {
    if (context.user) {
      return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    }

    throw AuthenticationError;
  },


login: async (parent, { email, password }) => {
  const user = await User.findOne({ email });

      return { token, user };
    },
        // Mutations for adding Restaurant, FoodTruck, and HiddenGem
    // addRestaurant: async (parent, args) => {
    //   return await Restaurant.create(args);
    // },
    // addFoodTruck: async (parent, args) => {
    //   return await FoodTruck.create(args);
    // },
    // addHiddenGem: async (parent, args) => {
    //   return await HiddenGem.create(args);
    // },

  if (!user) {
    throw AuthenticationError;

  }
  const correctPw = await user.isCorrectPassword(password);
  if (!correctPw) {
    throw AuthenticationError;
  }
  const token = signToken(user);
  return { token, user };
},
addRestaurant: async (_, { name, description, image, website, location, categoryId }) => {
  try {
    const newRestaurant = await Restaurant.create({
      name,
      description,
      image,
      website,
      location,
      category: categoryId 
    });
    return newRestaurant;
  } catch (error) {
    throw new Error('Error adding restaurant');
  }
},

addFoodTruck: async (_, { name, description, image, website, location, categoryId }) => {
  try {
    const newFoodTruck = await FoodTruck.create({
      name,
      description,
      image,
      website,
      location,
      category: categoryId 
    });
    return newFoodTruck;
  } catch (error) {
    throw new Error('Error adding food truck');
  }
},

addHiddenGem: async (_, { name, description, image, website, location, categoryId }) => {
  try {
    const newHiddenGem = await HiddenGem.create({
      name,
      description,
      image,
      website,
      location,
      category: categoryId 
    });
    return newHiddenGem;
  } catch (error) {
    throw new Error('Error adding hidden gem');
  }
}
}
};


module.exports = resolvers;


