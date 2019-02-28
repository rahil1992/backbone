module.exports= {
  friendlyName: "To Delete category from category list",
  description: 'To Delete category from category list',
  inputs: {
    id: {
      type: 'string',
      required: true
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
  fn: async (inputs,exits) => {
    Category.destroy({id: inputs.id}).then(response=>{
      return exits.success({},'Deleted Successfully')
    }).catch(error=>{
      return exits.fails(error.message)
    });
  }
};
