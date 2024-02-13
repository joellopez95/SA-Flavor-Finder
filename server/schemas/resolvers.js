const { User, Category, Restaurant, FoodTruck, HiddenGem, Thought, Recommendation} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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
      throw new AuthenticationError('Not logged in');
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
      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect email or password');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password');
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
    },
    addThought: async (_, { thoughtText, thoughtAuthor }) => {
      try {
        const newThought = await Thought.create({
          thoughtText,
          thoughtAuthor
        });
        return newThought;
      } catch (error) {
        throw new Error('Error adding thought');
      }
    },
    addRecommendation: async (_, { recommendationText}, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to add a recommendation');
      }
      try {
        const newRecommendation = await Recommendation.create({
          recommendationText,
          
        });
        return newRecommendation;
      } catch (error) {
        throw new Error('Error adding recommendation');
      }
    }
  }
};

module.exports = resolvers;
