<template>
  <div>
    <v-text-field
      :placeholder="placeholder"
      :input="note"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'AddNote',
  data() {
    return {
      placeholder: 'Add a note...',
      note: '',
    };
  },
};
</script>
