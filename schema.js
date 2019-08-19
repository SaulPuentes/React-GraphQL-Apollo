import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        emails: [Email]
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
    }
    type Pedido {
        producto: String
        precio: Int 
    }
    type Email {
        email: String
    }
    """Asigna la categoría del Cliente"""
    enum TipoCliente {
        BASICO
        PREMIUM
    }
    type Query {
        getCliente(id: ID) : Cliente
    }
    input PedidoInput {
        producto: String
        precio: Int
    }
    input EmailInput {
        email: String
    }
    """Campos para los Clientes Nuevos"""
    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        edad: Int!
        tipo: TipoCliente!
        emails: [EmailInput]!
        pedidos: [PedidoInput]!
    }
    """Mutations para crear nuevos Clientes"""
    type Mutation {
        # Nombre del Resolver, Input con Datos y Valor que Retorna
        """Te permite crear Nuevos Clientes"""
        crearCliente(input: ClienteInput) : Cliente
    }
`);

export default schema;