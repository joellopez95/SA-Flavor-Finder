const { User, Category, Restaurant, FoodTruck, HiddenGem } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().populate('thoughts');
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate('thoughts');
    // },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
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
},
// addThought: async (parent, { thoughtText, thoughtAuthor }) => {
//   const thought = await Thought.create({ thoughtText, thoughtAuthor });

//   await User.findOneAndUpdate(
//     { username: thoughtAuthor },
//     { $addToSet: { thoughts: thought._id } }
//   );

//   return thought;
// },
// addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
//   return Thought.findOneAndUpdate(
//     { _id: thoughtId },
//     {
//       $addToSet: { comments: { commentText, commentAuthor } },
//     },
//     {
//       new: true,
//       runValidators: true,
//     }
//   );
// },
// removeThought: async (parent, { thoughtId }) => {
//   return Thought.findOneAndDelete({ _id: thoughtId });
// },
// removeComment: async (parent, { thoughtId, commentId }) => {
//   return Thought.findOneAndUpdate(
//     { _id: thoughtId },
//     { $pull: { comments: { _id: commentId } } },
//     { new: true }
//   );
// },
}
};
module.exports = resolvers;




