import {
  deleteFeedbackById,
  getFeedbackById,
  updateFeedbackById,
} from "$db/models/feedback.js";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ request, params }) => {
  const id = params?.id || "";
  if (!id)
    return json({
      message: "Id is not provided",
    });
  const result = await getFeedbackById(id);
  if (!result)
    return json(
      {
        message: "Feedback not found",
      },
      {
        status: 404,
      },
    );
  return json({
    id: result?._id.toString(),
    text: result?.text,
    rating: result?.rating,
    createdAt: result?.createdAt,
    updatedAt: result?.updatedAt,
  });
};

export const DELETE: RequestHandler = async ({ request, params }) => {
  const id = params?.id || "";
  if (!id)
    return json({
      message: "Id is not provided",
    });
  const result = await deleteFeedbackById(id);
  if (!result)
    return json(
      {
        message: "Feedback not found",
      },
      {
        status: 404,
      },
    );
  return json(true);
};

export const PATCH: RequestHandler = async ({ params, request }) => {
  const id = params?.id || "";
  const data = await request.json();

  const updatedFeedback = await updateFeedbackById(id, data);
  return json({
    id: updatedFeedback?._id.toString(),
    text: updatedFeedback?.text,
    rating: updatedFeedback?.rating,
    createdAt: updatedFeedback?.createdAt,
    updatedAt: updatedFeedback?.updatedAt,
  });
};
