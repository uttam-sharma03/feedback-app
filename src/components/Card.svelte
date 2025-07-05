<script lang="ts">
  import Icon from "@iconify/svelte";
  import EditableInput from "./EditableInput.svelte";

  export let handleClick: (params?: any) => void;
  export let onEditSave: (id: any, text: any) => void = () => {};
  export let text: string = "";
  export let rating: any;
  export let id: any;
  let isEditable: boolean = false;
  const handleSave = (value: string) => {
    console.log(text);
    onEditSave(id, value);
    isEditable = false;
  };
</script>

<div class="group bg-white px-5 py-8 pr-6 relative rounded-xl">
  <span
    class="bg-pink-400 absolute px-3 py-1 -left-3 -top-2 rounded-full border-1 border-white text-white"
    >{rating}</span
  >
  {#if !isEditable}
    <p>{text}</p>
    <div class=" absolute invisible group-hover:visible right-1 top-0.5">
      <button class="icon-button" onclick={() => handleClick(id)} type="button">
        <Icon icon="material-symbols:close-rounded" height={24} color="red" />
      </button>
      <button
        class="icon-button"
        onclick={() => {
          isEditable = true;
          //
        }}
      >
        <Icon icon="material-symbols:edit" height={24} color="red" />
      </button>
    </div>
  {:else}
    <EditableInput
      onCancel={() => {
        isEditable = false;
      }}
      defaultValue={text}
      onSave={handleSave}
    />
  {/if}
</div>

<style lang="postcss">
  @reference "tailwindcss";

  .icon-button {
    @apply h-8 p-1 w-8 text-xl transition-all cursor-pointer rounded-full text-black font-mono hover:bg-gray-300;
  }
</style>
