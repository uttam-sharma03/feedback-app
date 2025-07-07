import { createFeedback, getAllFeedback } from "$db/models/feedback.js";
import { json, type RequestHandler } from "@sveltejs/kit";

export async function GET() {
  const feedback = await getAllFeedback();
  return json(feedback);
}

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  if (!data?.text || !data?.rating)
    return json(
      {
        message: "text or rating field is missing..",
      },
      {
        status: 400,
      },
    );

  const response = await createFeedback(data.text, data.rating);
  return json({
    _id: response._id.toString(),
    text: response.text,
    createdAt: response.createdAt,
    updatedAt: response.updatedAt,
    rating: response.rating,
  });
};
