module.exports = {
  friendlyName: "Create New product",
  description: 'Create New product',
  inputs: {
    limit: {
      type: 'number'
    },
    page: {
      type: 'number'
    },
    category: {
      type: 'string'
    }
  },
  exits: {
    success: {
      responseType: 'ok'
    },
    fails: {
      responseType: 'fail'
    },
    error: {
      responseType: 'error'
    },
    stream: {
      responseType: 'stream'
    }
  },
  fn: async (inputs, exits) => {
    let criteria = {
      isDeleted: false
    };
    let limit = inputs.limit || 20;
    let page = inputs.page || 0;
    let skip = limit * page;
    inputs.category ? criteria.category = inputs.category:false;
    Product.find(criteria).limit(limit).skip(skip).then(product => {
      return exits.success(product)
    }).catch(error => {
      return exits.fails(error.message, error)
    })
  }
};
