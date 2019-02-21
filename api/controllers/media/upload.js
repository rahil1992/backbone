module.exports= {
  friendlyName: "Sign In",
  description: 'this module will be used to authenticate user using username and password',
  files: ['file'],
  inputs: {
    file: {
      example: '===',
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
    }
  },
  fn: async (inputs,exits) => {
    inputs.file.upload({
      dirname: '../../uploads/'
    },(error,file)=>{
      // console.log({error,file});
      if(error) return exits.fails(error);
      console.log(file[0].fd);
      console.log(file[0]);
      // return exits.success(file[0])
      Media.create({
        fd: file[0].fd,
        size: file[0].size,
        type: file[0].type,
        filename: file[0].filename,
        status: file[0].status,
        field: file[0].field
      }).fetch()
        .then(response=>{
          return exits.success(response)
        }).catch(error=>{
          return exits.fails(error);
      })
    })
  }
};
