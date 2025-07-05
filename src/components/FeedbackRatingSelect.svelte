<script lang="ts">
  import Radio from "./Radio.svelte";

  const { ratings = [], onChange } = $props();

  const handleChange = (value: string) => {
    onChange(value);
  };
  
</script>

<div class="flex gap-2">
  {#each ratings as rate}
    <Radio
      label={rate.label}
      onChange={handleChange}
      value={rate.value}
      isSelected={rate.isSelected}
    />
  {/each}
</div>
