module.exports= {
  friendlyName: "To Get Category List",
  description: 'To create category',
  inputs: {
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
  fn: async (inputs,exits) => {
    Category.find().then(categories=>{
      return exits.success(categories)
    })
  }
};
