/**
 * Equipment.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    equipmentName: {
      type: 'String',
      required: true,
    },

    listNumber: {
      type: 'String',
      required: true,
    },

    startOfWork: {
      type: 'String',
      columnType: 'Date',
      required: true,
    },

    endOfWork: {
      type: 'String',
      columnType: 'Date',
    },

    isOpen: {
      type: 'Boolean',
      defaultsTo: false,
    },

    user: {
      model: 'user',
    }

  },

};

