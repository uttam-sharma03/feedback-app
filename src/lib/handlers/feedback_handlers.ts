import { Feedbacks } from "$lib/stores/feedback_store.js";

export const handleDeleteFeedback = (feedbackId: number) => {
  Feedbacks.update((prev) => prev.filter((item) => item.id !== feedbackId));
};
