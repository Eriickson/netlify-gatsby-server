import { importSchema } from "graphql-import";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const typeDefsArray = fileLoader(path.join(__dirname, "./gql"));

export const typeDefs = importSchema(mergeTypes(typeDefsArray, { all: true }));
