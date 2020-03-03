import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./data/resolvers";
import { typeDefs } from "./data/schemas";

const app = express();
const numeroPuerto = 9000;

app.get("/", (req, res) => {
  res.send("Plantilla del servidor para Netlify y GatsbyJS");
});

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(numeroPuerto, () => {
  console.log(`server: http://localhost:${numeroPuerto}`);
  console.log(
    `Apollo Server: http://localhost:${numeroPuerto}${server.graphqlPath}`
  );
});
