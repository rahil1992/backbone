module.exports= {
  friendlyName: "Add New Department",
  description: 'this module will be used to authenticate user using username and password',
  inputs: {
    name: {
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
    }
  },
  fn: async (inputs,exits) => {
    let createdDepartment = await Department.create({name: inputs.name}).fetch();
    return exits.success(createdDepartment)
  }
};
