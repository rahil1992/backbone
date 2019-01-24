'use strict';
var _super = require('sails-swagger/dist/api/controllers/SwaggerController');

_.merge(exports,_super);
_.merge(exports,{
  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  }
});
