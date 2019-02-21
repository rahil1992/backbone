module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    media: {
      model: 'Media',
      required: true
    },
    category: {
      model: 'Category'
    }
  }
};
