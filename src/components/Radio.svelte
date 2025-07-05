<script lang="ts">
  const { label, name = "", value, isSelected = false, onChange } = $props();
  const handleChange = (e: any) => {
    onChange(value);
  };
</script>

<div>
  <button
    class="h-8 w-8 flex items-center justify-center rounded-full cursor-pointer text-sm transition-all {isSelected
      ? `bg-pink-400 hover:bg-pink-500 text-white`
      : `bg-gray-300 hover:bg-gray-400`}
    
    "
    onclick={handleChange}
  >
    {label}
  </button>
</div>
