const {gql} = require('apollo-server');


const typeDef = gql`
    type RespuestaGeneral {
        status: String
        message: String
    }
`

module.exports = typeDef