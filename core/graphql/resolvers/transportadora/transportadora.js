const resolvers = {
    Mutation : {
        eliminarTransportadora : ({transportadoraInput}) => {
            const codigo  = transportadoraInput.codigo
            console.log(codigo);
            return {
                status : "ok",
                message : "Transportadora eliminada con éxito"
            }
        }
    }
};


module.exports = resolvers

