<template>
  <div>
    <div class="top-banner"></div>
    <div class="details">
      <div class="banner-desc">房源编号：ZF180915111</div>
      <div class="details-title">Jazz residence Towoerr HDHDowoowoo...</div>
      <div class="title-tags">
        <span>公寓</span>
        <a href="javascript:;" class="link">详细地址</a>
      </div>
      <div class="main-info border-bottom">
        <div class="item">
          <div class="txt-1"><span class="bold">100,000</span> P/㎡</div>
          <div class="label">均价</div>
        </div>
        <div class="item">
          <div class="txt-2">2018年8月10日</div>
          <div class="label">开盘时间</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .top-banner {
    height: 4.84rem;
    background-color: #c0c0c0;
  }
  .details {
    padding: 0 .28rem;
  }
  .banner-desc {
    line-height: 1;
    font-size: .24rem;
    color: #b3b3b3;
    text-align: right;
    margin-top: .1rem;
  }
  .details-title {
    margin-top: .3rem;
    font-size: .4rem;
    line-height: .4rem;
    color: #333;
    word-break: break-all;
  }
  .title-tags {
    margin-top: .15rem;
    display: flex;
    justify-content: space-between;
    font-size: .24rem;
    color: #999;
    line-height: 1;
    .link {
      color: #f99c91;
    }
  }
  .main-info {
    margin-top: .6rem;
    display: flex;
    .item {
      padding-bottom: .4rem;
      flex: 1;
      text-align: center;
    }
    .bold {
      font-weight: bold;
    }
    .txt-1 {
      font-size: .32rem;
      color: #0F9183;
      line-height: .5rem;
    }
    .txt-2 {
      font-size: .28rem;
      color: #333;
      line-height: .5rem;
    }
    .label {
      margin-top: .1rem;
      color: #B3B3B3;
      font-size: .24rem;
      line-height: 1;
    }
  }
</style>
