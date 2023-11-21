<script lang="ts">
// main.ts
import 'virtual:uno.css'
import { wordStore} from '../store/wordState';
import Honeycomb from './honeycomb.svelte';
const yMargin = 3

const correctAnswer = [
  "avenue", "aver", 
  "eave", "even", "evener", "ever",
  "maneuver", "mauve", "maven",
  "nave", "nerve", "never",
  "rave", "raven", "raver", "reaver", "revenue", "revue",
  "uneven", "unnerve",
  "vane", "veer", "veneer", "venue", "verve"]

function isAnswer(word: string) { 
  if(correctAnswer.includes(word)) return true
  else return false
}

function checkAnswer(word: string) {
  isAnswer(word.toLowerCase()) 
  ? wordStore.set("CORRECT!")
  : wordStore.set("INCORRECT")
}


</script>

<style>
</style>

<!--- HTML --->

<body class="flex flex-row w-screen h-screen bg-blue-gray items-center justify-center">

<div class="flex flex-col items-center justify-center">
    <div class="my-12">
      word is {$wordStore}
      <button on:click={()=> wordStore.set('')}>clear word</button>
      <button on:click={()=> checkAnswer($wordStore)}>submit</button>
    </div>
    <div>
      <Honeycomb/>
    </div>
</div>
</body>
