<script lang="ts">
// main.ts
import 'virtual:uno.css'
import Hexagon from './hexagon.svelte';
const yMargin = 3

</script>
<style>
</style>

<!--- HTML --->

<body class="flex flex-row w-screen h-screen bg-blue-gray items-center justify-center">

<div class="flex flex-col justify-center items-center">
  <div class="flex flex-row -my-2">
    <Hexagon hexColor="orange"/>
    <Hexagon hexColor="orange"/>
  </div>
  <div class="flex flex-row -my-2">
    <Hexagon hexColor="orange"/>
    <Hexagon hexColor="yellow"/>
    <Hexagon hexColor="orange"/>
  </div>
  <div class="flex flex-row -my-2">
    <Hexagon hexColor="orange"/>
    <Hexagon hexColor="orange"/>
  </div>
</div>

</body>
