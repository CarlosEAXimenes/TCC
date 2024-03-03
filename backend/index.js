const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/db'); 

const typeDefs = require('./graphql/schema'); 
const resolvers = require('./graphql/resolvers'); 

const app = express();
const PORT = process.env.PORT || 4000;

// Conectar ao MongoDB
connectDB();

// Configurar o Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

// Iniciar o servidor
startApolloServer().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor GraphQL rodando em http://localhost:${PORT}${server.graphqlPath}`);
  });
});
