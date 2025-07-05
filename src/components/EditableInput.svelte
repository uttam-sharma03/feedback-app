<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  export let defaultValue: string = "";
  let text: string = "";
  const handleChange = (e: any) => {
    text = e.target.value;
    console.log(e.target.value);
    //
  };
  export let onCancel: any = () => {};
  export let onSave: any = () => {};
  onMount(() => {
    text = defaultValue;
  });
</script>

<div>
  <textarea
    id="message"
    rows="4"
    class="block p-2.5 w-full text-[16px] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-0"
    placeholder="Write your thoughts here..."
    bind:value={text}
    on:change={handleChange}
  ></textarea>
  <div class="flex justify-end gap-2 mt-3">
    <Button
      onClick={() => {
        onSave(text);
      }}>Save</Button
    >
    <Button variant="secondary" onClick={onCancel}>Cancel</Button>
  </div>
</div>
