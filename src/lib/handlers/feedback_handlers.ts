import { FeedbackStore } from "$lib/stores/feedback_store.js";
export const handleDeleteFeedback = async (feedbackId: number) => {
  const response = await fetch(`/api/feedback/${feedbackId}`, {
    method: "DELETE",
  });
  const result = await response.json();
  if (result) {
    FeedbackStore.update((prev) =>
      prev.filter((item) => item._id !== feedbackId),
    );
  }
};

export const handleEditSave = async (id: any, value: string) => {
  const response = await fetch(`/api/feedback/${id}`, {
    body: JSON.stringify({
      text: value,
    }),
    method: "PATCH",
  });
  const updatedFeedback = await response.json();
  FeedbackStore.update((prev) => {
    return prev.map((item) => {
      if (item?._id === id) {
        return {
          ...item,
          ...updatedFeedback,
        };
      } else return item;
    });
  });
};

export const handleFeedbackCreate = async (params: {
  value: string;
  rating: number;
}) => {
  const response = await fetch("/api/feedback/", {
    body: JSON.stringify({
      rating: params.rating,
      text: params.value,
    }),
    method: "POST",
  });
  const data = await response.json();
  FeedbackStore.update((prev) => [data, ...prev]);
};
