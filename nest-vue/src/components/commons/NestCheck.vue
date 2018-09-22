<template>
  <div class="nest-check">
    <div class="check-column">

    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-check",
    props: {
      arrayType: {
        type: String,
        default: '2'
      },
      size: {
        type: String,
        default: 'large'
      },
      options: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .check-column {
    display: flex;
    justify-content: space-between;
  }
</style>
