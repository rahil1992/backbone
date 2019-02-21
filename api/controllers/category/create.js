module.exports= {
  friendlyName: "Create New Category",
  description: 'To create category',
  inputs: {
    name: {
      type:'string',
      required: true
    },
    parentCategory: {
      type: 'string'
    },
    media: {
      type: 'string',
      required: true
    },
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
    Category.create({
      name: inputs.name,
      parentCategory: inputs.parentCategory,
      media: inputs.media
    }).fetch().then(post=>{
      return exits.success(post)
    })
  }
};
