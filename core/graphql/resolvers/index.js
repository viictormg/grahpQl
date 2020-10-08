const { mergeResolvers } = require("@graphql-tools/merge");
const transportadoraResolver = require("./transportadora/transportadora");

const resolvers = [transportadoraResolver];

module.exports = resolvers;
