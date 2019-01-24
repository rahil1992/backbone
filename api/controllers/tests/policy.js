module.exports = {
  firendlyName: 'Policy',
  description: '',
  inputs: {},
  exits: {
    success: {
      responseType: 'ok'
    }
  },
  fn: async (inputs,exits) => {
    return exits.success("Works")
  }
}
