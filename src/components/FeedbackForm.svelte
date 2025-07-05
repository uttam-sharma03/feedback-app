<script lang="ts">
  import Button from "./Button.svelte";
  import FeedbackRatingSelect from "./FeedbackRatingSelect.svelte";

  // const {
  //   onSubmit = () => {
  //     //
  //   },
  //   ratings = [],
  //   onRatingChange,
  //   feedbackText = "",
  // } = $props();

  export let feedbackText: string = "";
  export let onSubmit: (value: any) => void;
  export let onRatingChange: (param: any) => void;
  export let ratings: any;
</script>

<div
  class="flex w-full justify-center items-center bg-white flex-col gap-3 p-5 mb-2 rounded-xl"
>
  <h1 class="text-2xl">How would you rate your service with us</h1>
  <FeedbackRatingSelect {ratings} onChange={onRatingChange} />
  <div>
    <form
      action="GET"
      onsubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onSubmit(feedbackText);
      }}
    >
      <div
        class="flex gap-3 border border-gray-300 items-center justify-center rounded-xl py-1 w-xl px-3"
      >
        <input
          type="text"
          id="feedback"
          bind:value={feedbackText}
          class="bg-gray-50 border border-none text-gray-900 text-sm focus:border-none block w-full focus:outline-none focus:ring-0 py-0 dark:text-black"
          placeholder="Tell us something that keeps you coming back.."
        />
        <Button
          label="Send"
          type="submit"
        />
      </div>
    </form>
  </div>
</div>
