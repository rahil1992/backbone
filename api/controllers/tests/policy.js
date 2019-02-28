module.exports = {
  firendlyName: 'Policy',
  description: '',
  inputs: {
    payload: {
      type: 'ref'
    }
  },
  exits: {
    success: {
      responseType: 'ok'
    }
  },
  fn: async (inputs,exits) => {
    return exits.success(inputs)
  }
};
