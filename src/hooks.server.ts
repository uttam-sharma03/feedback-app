import { connectDB } from "$db/mongo.js";

connectDB().then(() => {
  console.log("Mongodb started");
});
