import db from "$db/mongo.js";
import type { FeedbackModel } from "$db/types.js";

export const userCollection = db.collection<FeedbackModel>("users");

export const orderCollection = db.collection("orders");
export const orderItemsCollection = db.collection("orderItems");
export const salesCollection = db.collection("sales");
