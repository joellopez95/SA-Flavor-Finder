const { Schema, model } = require('mongoose');

const recommendationSchema = new Schema(
  {
    recommendationText: {
      type: String,
      required: true,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const Recommendation = model('Recommendation', recommendationSchema);

module.exports = Recommendation;
