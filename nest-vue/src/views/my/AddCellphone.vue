<template>
  <div class="cellphone">
    <div class="header">
      <div class="back" @click="$router.go(-1);"></div>
    </div>
    <div class="title">添加手机号</div>
  </div>
</template>

<script>
  export default {
    name: "AddCellphone"
  }
</script>

<style lang="scss" scoped>
  .cellphone {
    padding: 0 .28rem;
    box-sizing: border-box;
    .header {
      position: relative;
      display: flex;
      height: 1.2rem;
      justify-content: space-between;
      align-items: center;
      .back {
        width: .9rem;
        height: 100%;
        background: url('../../assets/images/return-icon.png') no-repeat left center;
        background-size: .42rem .32rem;
      }
    }
    .title {
      margin-top: .4rem;
      font-size: .46rem;
      font-weight: bold;
      color: #333;
      line-height: 1;
    }
  }
</style>
