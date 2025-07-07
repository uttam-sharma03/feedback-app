<script lang="ts">
  import { onMount } from "svelte";
  import FeedbackList from "../../components/FeedbackList.svelte";
  import { FeedbackStore } from "$lib/stores/feedback_store.js";
  export let data;
  onMount(() => {
    FeedbackStore.set(data.feedback as any);
  });
</script>

<div
  class="h-screen w-screen bg-blue-800 flex justify-center overflow-auto p-3"
>
  <FeedbackList />
</div>
