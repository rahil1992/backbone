var fs = require('fs');
module.exports= {
  friendlyName: "Sign In",
  description: 'this module will be used to authenticate user using username and password',
  inputs: {
    mediaId: {
      type:'string'
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
    Media.findOne({id:inputs.mediaId})
      .then(media=>{
        let fileReadStream = fs.createReadStream(media.fd);
        // return fileReadStream.pipe(exits)
        return exits.stream(fileReadStream)
      });
    // return exits.success(inputs.mediaId)
  }
};
