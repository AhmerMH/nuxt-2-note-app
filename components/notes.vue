<template>
  <div class="container">
    <div><AddNote /></div>
    <div 
      v-if="allNotes.length !== 0" 
      v-for="note in allNotes" 
      :key="note.timestamp">
      <Note 
        :text="note.text"
        :timestamp="note.timestamp" 
        
        />
    </div>

    </div>
  </div>
</template>

<script>
import AddNote from './add-note';
import Note from './note';

export default {
  name: 'Notes',
  components: {
    AddNote,
    Note
  },
  computed: {
    allNotes() {
      return this.$store.state.notes.list;
    },
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
