module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    parentCategory: {
      model: 'Category'
    },
    media: {
      model: 'Media'
    }
  }
};
