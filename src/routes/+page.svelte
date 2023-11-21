<script lang="ts">
// main.ts
import 'virtual:uno.css'
import Hexagon from './hexagon.svelte';
const yMargin = 3

//replace with
</script>
<style>
</style>

<!--- HTML --->

<body class="flex flex-row w-screen h-screen bg-blue-gray items-center justify-center">

<div class="flex flex-col justify-center items-center">
  <div class="flex flex-row -my-2">
    <Hexagon hexColor="orange" hexLetter="C"/>
    <Hexagon hexColor="orange" hexLetter="G"/>
  </div>
  <div class="flex flex-row -my-2">
    <Hexagon hexColor="orange" hexLetter="H"/>
    <Hexagon hexColor="yellow" hexLetter="A"/>
    <Hexagon hexColor="orange" hexLetter="P"/>
  </div>
  <div class="flex flex-row -my-2">
    <Hexagon hexColor="orange" hexLetter="R"/>
    <Hexagon hexColor="orange" hexLetter="I"/>
  </div>
</div>

</body>
