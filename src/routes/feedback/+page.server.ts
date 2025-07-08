import { getAllFeedback } from "$db/models/feedback.js";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
  const data = await getAllFeedback();

  return {
    feedback: data,
  };
};
