<template>
  <div class="add-note">
    <v-text-field
      :placeholder="placeholder"
      v-model="text"
      @keyup.enter="addNote"
    ></v-text-field>
    <v-btn color="primary" dark @click="addNote"> Add </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddNote',
  data() {
    return {
      placeholder: 'Add a note...',
      text: '',
    };
  },
  methods: {
    addNote() {
      this.$store.commit('notes/add', {
        text: this.text,
        timestamp: new Date().getTime(),
      });
      this.text = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.add-note {
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
  }
}
</style>
