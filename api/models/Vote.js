module.exports = {
  attributes: {
    user: {
      model: 'User'
    },
    upvote: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};
