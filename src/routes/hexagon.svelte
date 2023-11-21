<script lang="ts">
    import { wordStore } from "../store/wordState";

  /** @type {string} */
  export let hexColor: string 
  export let hexLetter: string
</script>

<style>
</style>

<button
  class="flex items-center justify-center h-25 w-22 mx-2 cursor-pointer bg-transparent border-none"
  on:click={()=> wordStore.update(word => word + hexLetter)}
>
  <div class="fixed" >
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" >
      <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" fill={hexColor} ></polygon>
    </svg>
  </div>
  <div class="fixed z-10">
     <div class="text-4xl font-600 font-ps select-none">{hexLetter}</div>
  </div>
</button>

