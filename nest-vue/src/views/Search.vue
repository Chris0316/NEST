<template>
  <div class="search">
    <div class="search-wrap">
      <div class="search-box">
        <input class="search-msg" type="text">
        <div class="search-img"></div>
        <div class="search-sle">
          <div class="types">二手房</div>
          <div class="point"></div>
        </div>
        <div class="typelist">
          <div class="typeli">
            二手房
          </div>
          <div class="typeli">
            租房
          </div>
        </div>
      </div>
      <div class="cancel">
        取消
      </div>
    </div>
    <div class="no-act" style="display: none;">
      <div class="near">我的附近</div>
      <div class="near-place">jazz</div>
      <div class="search-pre">
        <div class="left">历史搜索</div>
        <div class="right">
          <img class="dele-img" src="../assets/images/dele.png" alt="">
          <div class="dele">删除历史</div>
        </div>

      </div>
      <div class="search-item">马尼拉</div>
      <div class="search-item">jazz</div>
    </div>
    <div class="act">
      <div class="search-item">马尼拉</div>
      <div class="search-item">jazz</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search"
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  input {
    background: none;
    outline: none;
    border: 0px;
    caret-color: #0f9183;
  }

  @mixin rowcenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search {
    box-sizing: border-box;
    width: 100%;
    /*overflow: hidden;*/
    padding: 0.2rem .28rem 0rem;
    .search-wrap {
      margin-bottom: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search-box {
        position: relative;
        width: 5.06rem;
        height: 0.8rem;
      }
      .search-msg {
        box-sizing: border-box;
        padding-left: 0.64rem;
        width: 100%;
        height: 100%;
        border: 1px solid #e8e8ea;
        border-radius: 0.1rem;
        box-shadow: 0px 0px 0.2rem rgba(176, 183, 187, 0.4);
      }
      .search-img {
        position: absolute;
        top: 0.28rem;
        left: 0.2rem;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../assets/images/search-img.png") no-repeat;
        background-size: 100% 100%;
      }
      .search-sle {
        @include rowcenter;
        position: absolute;
        top: 0.24rem;
        right: 0rem;
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
      .cancel {
        width: 2.1rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.28rem;
        color: #333333;
      }
    }
    .near {
      color: #b2b2b2;
      font-size: 0.28rem;
    }
    .near-place{
      margin-top: 0.8rem;
      margin-bottom: 0.8rem;
    }
    .search-pre {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 0.36rem;
      border-bottom: 1px solid #e6e6e6;
      .left {
        color: #b2b2b2;
        font-size: 0.28rem;
      }
      .right {
        display: flex;
        align-items: center;
        .dele-img {
          width: 0.3rem;
          height: 0.3rem;
        }
        .dele {
          margin-left: 0.1rem;
          color: #b2b2b2;
          font-size: 0.24rem;
        }
      }
    }
    .search-item{
      box-sizing: border-box;
      font-size: 0.28rem;
      color: #333333;
      line-height: 1rem;
      height: 1rem;
      border-bottom: 1px solid #e6e6e6;
    }
    .act{
      
    }
  }


</style>
