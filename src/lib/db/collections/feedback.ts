import db from "$db/mongo.js";
import type { FeedbackModel } from "$db/types.js";

export const createCollection = () => {
  db.createCollection("feedback");
};
export const feedbackCollection = db.collection<FeedbackModel>("feedback");

