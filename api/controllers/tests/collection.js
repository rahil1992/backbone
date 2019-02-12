module.exports = {
  firendlyName: 'Collection',
  description: '',
  inputs: {
    name: {type: 'string'},
    users: {type: 'ref'}
  },
  exits: {
    success: {
      responseType: 'ok'
    }
  },
  fn: async (inputs,exits) => {
    Project.create({
      name: inputs.name,
      users: inputs.users
    })
    return exits.success(inputs)
  }
};
