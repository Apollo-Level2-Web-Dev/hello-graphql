import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './db';

const typeDefs = `#graphql
    type Product {
        id: ID!
        name: String
        image: String
        description: String
        price: Float
        quantity: Int
        onStock: Boolean
        category: String
    }
  type Query {
    products: [Product]
  }
`;


const resolvers = {
    Query: {
        products: () => db.products
    },
};



const main = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

main()