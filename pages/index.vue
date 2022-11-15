<template>
  <div>
    <Notes />
  </div>
</template>

<script>
export default {
  components: {
    Notes: () => import('~/components/notes'),
  },
};
</script>

