<template>
  <div class="note" v-if="text">
    <div>{{ text || '' }}</div>
    <div class="time">{{ formattedTime }}</div>
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
      let d = new Date(timestamp);
      var datestring =
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
  },
};
</script>

<style>
.note {
  display: block;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 10px;
}

.time {
  padding-top: 10px;
  text-align: right;
}
</style>
