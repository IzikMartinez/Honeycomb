<script lang="ts">
  /** @type {string} */
  export let hexColor: string 
  export let hexLetter: string
</script>

<style>
</style>

<div class="flex items-center h-27 w-27 mx-0.5">
  <div class="absolute mx-auto">
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" class="h-27 w-27">
      <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" fill={hexColor} class="cursor-pointer transform scale-110"></polygon>
    </svg>
  </div>
  <div class="absolute -ml-26 z-10">
     <div class="text-4xl font-600 font-ps">{hexLetter}</div>
  </div>
</div>

