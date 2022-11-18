<template>
  <div class="note" v-if="text">
    <div>{{ text || '' }}</div>
    <div class="time">
      <span class="remove" @click.prevent="removeNote">X</span>
      <span>{{ formattedTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    text: {
      required: true,
      default: '',
    },
    timestamp: {
      required: true,
      default: new Date().getTime(),
    },
  },
  computed: {
    formattedTime() {
      let d = new Date(this.timestamp);
      let dateString =
        ('0' + d.getDate()).slice(-2) +
        '-' +
        ('0' + (d.getMonth() + 1)).slice(-2) +
        '-' +
        d.getFullYear() +
        ' ' +
        ('0' + d.getHours()).slice(-2) +
        ':' +
        ('0' + d.getMinutes()).slice(-2);
      return dateString;
    },
    removeNote() {
      this.$store.commit('notes/remove', {
        text: this.text,
        timestamp: this.timestamp,
      });
      this.text = '';
    },
  },
};
</script>

<style lang="scss">
.note {
  display: block;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

.time {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 10px;
  font-size: 12px;

  .remove {
    transform: scale(1.1, 1);
    cursor: pointer;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
