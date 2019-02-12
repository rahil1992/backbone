/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    username: {
      type: 'string'
    },
    password: {
      type: 'string',
      encrypt: true
    },
    name: {
      type: 'string',
    },
    contact: {
      type: 'string'
    },
    department: {
      model: 'Department'
    }



    //  ╔═╗ ╔╦╗ ╔╗  ╔═╗ ╔╦╗ ╔═╗
    //  ║╣  ║║║ ╠╩╗ ║╣   ║║ ╚═╗
    //  ╚═╝ ╩ ╩ ╚═╝ ╚═╝ ═╩╝ ╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

