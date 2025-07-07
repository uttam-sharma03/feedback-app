import { feedbackCollection } from "$db/collections/feedback.js";
import type { FeedbackModel } from "$db/types.js";
import { ObjectId } from "mongodb";

export const createFeedback = async (text: string, rating: number) => {
  const now = new Date();
  const result = await feedbackCollection.insertOne({
    createdAt: now,
    rating,
    text,
  });

  return {
    _id: result.insertedId,
    text,
    rating,
    createdAt: now,
    updatedAt: now,
  };
};

export const getAllFeedback = async () => {
  const feedback = await feedbackCollection
    .aggregate([
      {
        $project: {
          _id: { $toString: "$_id" },
          text: 1,
          createdAt: 1,
          updatedAt: 1,
          rating: 1,
        },
      },
    ])
    .toArray();
  return feedback;
};

export const deleteFeedbackById = async (id: string) => {
  try {
    await feedbackCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });
    return true;
  } catch (err) {
    throw err;
  }
};

export const getFeedbackById = async (id: string) => {
  const result = await feedbackCollection.findOne({
    _id: new ObjectId(id),
  });
  return result;
};

export const updateFeedbackById = async (
  id: string,
  updateData: Partial<FeedbackModel>,
) => {
  const feedback = await feedbackCollection.findOneAndUpdate(
    {
      _id: new ObjectId(id),
    },
    {
      $set: updateData,
    },
    {
      returnDocument: "after",
    },
  );
  return feedback;
};
