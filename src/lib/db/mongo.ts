import { MongoClient } from "mongodb";
import { MONGO_DB_URI } from "$env/static/private";

const client = new MongoClient(MONGO_DB_URI);
export function connectDB(): Promise<MongoClient> {
  console.log("Starting MONGODB connection....");
  return client.connect();
}

export default client.db();
