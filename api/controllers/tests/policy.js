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
    console.log(this.req);
    console.log(sails.req);
    return exits.success(inputs)
  }
};
