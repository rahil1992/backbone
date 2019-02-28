module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    parentCategory: {
      model: 'Category'
    },
    media: {
      model: 'Media'
    }
  }
};
