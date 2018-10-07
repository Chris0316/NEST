<template>
  <div class="lease-list">
    <NestHeader></NestHeader>
    <NestListView class="list-top"></NestListView>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  input {
    background: none;
    outline: none;
    border: 0px;
    caret-color: #0f9183;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @mixin rowcenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lease-list {
    box-sizing: border-box;
    width: 100%;
    padding-top: 0.2rem;
    .search-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .return {
        margin-left: 0.28rem;
        width: 0.42rem;
        height: 0.32rem;
      }
      .search-box {
        position: relative;
        width: 4.14rem;
        height: 0.8rem;
      }
      .search-msg {
        box-sizing: border-box;
        padding-left: 0.64rem;
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #e8e8ea;
        border-radius: 0.1rem;
        box-shadow: 0px 0px 0.2rem rgba(176, 183, 187, 0.4);
      }
      .search-img {
        position: absolute;
        top: 0.25rem;
        left: 0.2rem;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../assets/images/search-img.png") no-repeat;
        background-size: 100% 100%;
      }
      .types {
        padding-left: 0.2rem;
        padding-top: 0.01rem;
        padding-bottom: 0.01rem;
        font-size: 0.24rem;
        color: #333333;
        border-left: 1px solid #cccccc;
      }
      .point {
        margin-left: 0.14rem;
        margin-right: 0.25rem;
        width: 0.14rem;
        height: 0.09rem;
        background: url("../assets/images/triangle.png") no-repeat;
        background-size: 100% 100%;
      }
      .typelist {
        position: absolute;
        right: 0rem;
        top: 0.8rem;
        width: 1.4rem;
        border: 1px solid #e8e8ea;
        border-radius: 0.1rem;
        box-shadow: 0px 0px 0.2rem rgba(176, 183, 187, 0.4);
        background: #ffffff;
        .typeli {
          box-sizing: border-box;
          height: 0.7rem;
          line-height: 0.7rem;
          padding-left: 0.18rem;
          color: #0f9183;
          font-size: 0.24rem;
          &:hover {
            background: #e7f4f2;
            color: #333333;
          }
        }
      }
      .search-place {
        margin-right: 0.28rem;
        display: flex;
      }
      .place-icon {
        width: 0.26rem;
        height: 0.35rem;
        background: url("../assets/images/position.png") no-repeat;
        background-size: 100% 100%;
      }
      .place-name {
        margin-left: 0.15rem;
        font-size: 0.28rem;
        color: #333333;
      }
    }
    .list-top {
      margin-top: 0.7rem;
    }
  }
</style>
