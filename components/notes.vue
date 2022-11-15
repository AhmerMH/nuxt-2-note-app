<template>
  <div class="container">
    <div><AddNote /></div>
    <div>Display notes section</div>
  </div>
</template>

<script>
import AddNote from './add-note';

export default {
  name: 'Notes',
  components: {
    AddNote,
  },
};
</script>

<style>
container: {
  width: 100%;
  height: 98vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
</style>
