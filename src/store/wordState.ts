import { readable, writable } from "svelte/store";

const wordStore = writable("")

const correctAnswers = readable(
  Object.freeze([
  "avenue", "aver", 
  "eave", "even", "evener", "ever",
  "maneuver", "mauve", "maven",
  "nave", "nerve", "never",
  "rave", "raven", "raver", "reaver", "revenue", "revue",
  "uneven", "unnerve",
  "vane", "veer", "veneer", "venue", "verve"
]))

const userAnswers = writable([])

export {wordStore, correctAnswers, userAnswers}
