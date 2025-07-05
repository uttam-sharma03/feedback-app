<script>
  let name = "Uttam Sharma";
  let color = "blue";
  let showText = true;
  const toggleColor = () => {
    color = color == "red" ? "blue" : "red";
    showText = !showText;
  };
  let value=""
  
  let users = [
    { id: "1", name: "Uttam" },
    {
      id: "2",
      name: "Rahul",
    },
    {
      id: "3",
      name: "Raju",
    },
    {
      id: "4",
      name: "Naveen",
    },
    {
      id: "5",
      name: "Jaydeep",
    },
  ];

  const addNewUser=()=>{
    if(!value.trim())return
    users=[...users,{
      name:value,
      id:users.length.toString()
    }]
    value=''
  }
</script>

<div>
  <h1 style="color:{color}">Hello, {name}</h1>
  <button on:click={toggleColor}>Click here</button>

  {#if showText}
    <span
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quam
      tempore sit dolorem molestiae nulla dolor excepturi rem. Numquam beatae
      est deleniti fugiat hic distinctio saepe voluptatem nisi iste laboriosam!</span
    >
  {/if}
  {#each users as user}
    <div>
      <p>{user.name}- {user.id}</p>
    </div>
  {/each}
  <input type="text"  value={value}/>
  <button on:click={addNewUser} >Add new</button>
</div>
