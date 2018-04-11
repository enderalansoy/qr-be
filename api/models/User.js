/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cdsid: {
      type: 'String',
      required: true,
    },

    password: {
      type: 'String',
      required: true,
    },

    equipments: {
      collection: 'equipment',
      via: 'user',
    }

  },

};

