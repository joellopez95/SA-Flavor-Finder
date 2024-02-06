const mongoose = require('mongoose');

const { Schema } = mongoose;

const hiddenGemSchema = new Schema({
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

const HiddenGem = mongoose.model('HiddenGem', hiddenGemSchema);

module.exports = HiddenGem;
