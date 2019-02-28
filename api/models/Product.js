module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    category: {
      model: 'Category'
    },
    description: {
      type: 'string'
    },
    isDeleted: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
