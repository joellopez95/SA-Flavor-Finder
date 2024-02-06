const mongoose = require('mongoose');

const { Schema } = mongoose;

const foodTruckSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const FoodTruck = mongoose.model('FoodTruck', foodTruckSchema);

module.exports = FoodTruck;
