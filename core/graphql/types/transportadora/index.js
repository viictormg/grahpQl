const { mergeTypeDefs } = require('@graphql-tools/merge');

const typeTransportadora = require('./transportadora');


const types = [
    typeTransportadora
];

module.exports = types;

