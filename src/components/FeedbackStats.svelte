<script>
  const { totalCount, average } = $props();
</script>

<div class="flex justify-between">
  <p class="text-white text-xl font-bold">
    {totalCount}

    {#if totalCount === 1 || totalCount === 0}
      Review
    {:else}
      Reviews
    {/if}
  </p>
  <p class="text-white text-xl font-bold">
    Rating Average:
    {#if average}
      {average.toFixed(2)}
    {:else}
      0
    {/if}
  </p>
</div>
