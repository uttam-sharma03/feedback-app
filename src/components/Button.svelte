<script lang="ts">
  export let label: string | undefined = undefined;
  export let onClick: any = () => {};
  export let variant: "primary" | "secondary" = "primary";
  export let type: "button" | "submit" = "button";
</script>

<button
  {type}
  on:click={onClick}
  class=" cursor-pointer text-white m-0 focus:ring-0 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2
  {variant === 'primary'
    ? 'focus:outline-none bg-blue-700 hover:bg-blue-800 dark:focus:ring-blue-800'
    : 'focus:outline-none bg-gray-400 hover:bg-gray-500 dark:focus:gray-blue-400'}
  "
>
  {#if label}
    {label}
  {:else}
    <slot />
  {/if}
</button>
