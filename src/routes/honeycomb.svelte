<script>
import Hexagon from './hexagon.svelte';
//replace with util later on
const letters = ['A', 'E', 'M', 'N', 'R', 'U', 'V']
</script>

<!--- HTML --->

    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row -my-2">
        <Hexagon hexColor="orange" hexLetter={letters[0]}/>
        <Hexagon hexColor="orange" hexLetter={letters[1]}/>
      </div>
      <div class="flex flex-row -my-2">
        <Hexagon hexColor="orange" hexLetter={letters[2]}/>
        <Hexagon hexColor="yellow" hexLetter={letters[6]}/>
        <Hexagon hexColor="orange" hexLetter={letters[3]}/>
      </div>
      <div class="flex flex-row -my-2">
        <Hexagon hexColor="orange" hexLetter={letters[4]}/>
        <Hexagon hexColor="orange" hexLetter={letters[5]}/>
      </div>
    </div>
