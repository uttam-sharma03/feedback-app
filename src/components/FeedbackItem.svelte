<script>
  import Card from "./Card.svelte";
  const { item, onDelete, onEditSave } = $props();
</script>

<div>
  <Card
    rating={item.rating}
    handleClick={onDelete}
    text={item.text}
    id={item._id}
    {onEditSave}
  />
</div>
