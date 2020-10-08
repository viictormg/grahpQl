const {ApolloServer} = require('apollo-server');
const typeDefs = require('./types/index')
const resolvers = require('./resolvers');

const arrancarServidor = () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    return server.listen().then(({url}) => console.log(`Servidor corriendo en ${url}`))   
}


module.exports = arrancarServidor