module.exports = {
  friendlyName: "Get Department List",
  description: 'this module will be used to authenticate user using username and password',
  inputs: {},
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
    let departmentList = await Department.find();
    return exits.success(departmentList)
  }
};
