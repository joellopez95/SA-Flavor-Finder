const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280
    },
    thoughtAuthor: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

thoughtSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
