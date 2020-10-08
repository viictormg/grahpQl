const { mergeTypeDefs } = require('@graphql-tools/merge');
const typeTransportadora = require('./transportadora/index');
const genericos = require('./genericos/index');


const types = [
    typeTransportadora,
    genericos   
];


module.exports = {types}
