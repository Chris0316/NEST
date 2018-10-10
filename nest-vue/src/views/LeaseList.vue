<template>
  <div class="lease-list">
    <NestHeader></NestHeader>
    <NestListView class="list-top"></NestListView>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .lease-list {
    box-sizing: border-box;
    width: 100%;
    padding-top: 0.2rem;
    background-color: #fff;
    .list-top {
      margin-top: 0.7rem;
    }
  }
</style>
