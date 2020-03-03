import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./data/resolvers";
import { typeDefs } from "./data/schemas";
require("./data/db");
require("dotenv").config();

const app = express();
const numeroPuerto = process.env.PORT;

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
