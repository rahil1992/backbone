module.exports= {
  friendlyName: "Create New Post",
  description: 'this module will be used to authenticate user using username and password',
  inputs: {
    title: {
      type:'string',
      required: true
    },
    description: {
      type: 'string'
    },
    media: {
      type: 'string',
      required: true
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
  fn: async (inputs,exits) => {
    Post.create({
      title: inputs.title,
      description: inputs.description,
      media: inputs.media,
      category: inputs.category
    }).fetch().then(post=>{
      return exits.success(post)
    })
  }
};
