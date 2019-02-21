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
    fd: {type: 'string'},
    size: {type: 'string'},
    type: {type: 'string'},
    filename: {type: 'string'},
    status: {type: 'string'},
    field: {type: 'string'}

    //  ╔═╗ ╔╦╗ ╔╗  ╔═╗ ╔╦╗ ╔═╗
    //  ║╣  ║║║ ╠╩╗ ║╣   ║║ ╚═╗
    //  ╚═╝ ╩ ╩ ╚═╝ ╚═╝ ═╩╝ ╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

