const {gql} = require('apollo-server');


const typeDef = gql`
    type transportadora {
        nombre: String
        codigo: String
    }

    input transportadoraInput {
        nombre: String
        codigo: String
    }

    

    type Mutation {
        crearTransportadora(transportadoraInput: transportadoraInput): RespuestaGeneral
        eliminarTransportadora(transportadoraInput: transportadoraInput) : RespuestaGeneral
    }

    type Query {
        listarTransportadoras: [transportadora]
    }

`


module.exports = typeDef

