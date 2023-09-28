import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import TypeDefs from "./typeDefs/index";
import Resolvers from "./resolvers/index";

dotenv.config();

const app = express();
const PORT = 5000;
const DB_URL = process.env.DB_URL;

async function startServer() {
  app.use(bodyParser.json());

  const server = new ApolloServer({
    typeDefs: TypeDefs,
    resolvers: Resolvers,
  });

  // await server.start();

  // app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    // mongoose
    //   .connect(DB_URL)
    //   .then(() => {
    //     console.log("Connection established successfully");
    //   })
    //   .catch((e) => console.log({ e }));
    console.log(`Server has started: ${PORT}`);
  });
}

startServer();
