<script lang="ts">
  import {
    handleDeleteFeedback,
    handleEditSave,
    handleFeedbackCreate,
  } from "$lib/handlers/feedback_handlers.js";
  import { FeedbackStore } from "$lib/stores/feedback_store.js";
  import Divider from "./Divider.svelte";
  import FeedbackForm from "./FeedbackForm.svelte";
  import FeedbackItem from "./FeedbackItem.svelte";
  import FeedbackStats from "./FeedbackStats.svelte";

  let feedbackValue = "";

  let ratings: {
    label: string;
    value: string;
    isSelected: boolean;
  }[] = [
    { label: "1", value: "1", isSelected: false },
    { label: "2", value: "2", isSelected: false },
    { label: "3", value: "3", isSelected: false },
    { label: "4", value: "4", isSelected: false },
    { label: "5", value: "5", isSelected: false },
    { label: "6", value: "6", isSelected: false },
    { label: "7", value: "7", isSelected: false },
    { label: "8", value: "8", isSelected: false },
    { label: "9", value: "9", isSelected: false },
    { label: "10", value: "10", isSelected: true },
  ];

  $: totalCount = $FeedbackStore.length;
  $: average = $FeedbackStore.reduce((a, fb) => a + fb.rating, 0) / totalCount;

  const handleSubmit = async (value: string) => {
    const rating = ratings.find((item) => item.isSelected);
    handleFeedbackCreate({
      rating: Number(rating?.value) || 1,
      value: value,
    });
    feedbackValue = "";
  };
  const handleRatingChange = (value: string) => {
    ratings = ratings.map((item) => {
      if (item.value === value) {
        return {
          ...item,
          isSelected: true,
        };
      } else {
        return {
          ...item,
          isSelected: false,
        };
      }
    });
  };
</script>

<div class="flex flex-col gap-5 p-3 w-5xl">
  <FeedbackForm
    onSubmit={handleSubmit}
    {ratings}
    onRatingChange={handleRatingChange}
    bind:feedbackText={feedbackValue}
  />
  <FeedbackStats {average} {totalCount} />
  <Divider />
  {#each $FeedbackStore as fb}
    <FeedbackItem
      item={fb}
      onDelete={handleDeleteFeedback}
      onEditSave={handleEditSave}
    />
  {/each}
</div>
