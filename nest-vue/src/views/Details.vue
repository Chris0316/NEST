<template>
  <div>
    <div class="head-bar"></div>
    <div class="top-banner"></div>
    <div class="banner-desc">房源编号：ZF180915111</div>
    <div class="details-title">Jazz residence Towoerr HDHDowoowoo...</div>
    <div class="title-tags">
      <span>公寓</span>
      <a href="javascript:;" class="link">详细地址</a>
    </div>
    <div class="main-info">
      <div class="item">
        <div class="txt-1"><span class="bold">100,000</span> P/㎡</div>
        <div class="label">均价</div>
      </div>
      <div class="item">
        <div class="txt-2">2018年8月10日</div>
        <div class="label">开盘时间</div>
      </div>
    </div>
    <div class="details-module">
      <div class="module-title">基本信息</div>
      <div class="info-line">
        <div class="cell">
          <div class="label">单价:</div>
          <div class="value">100,000P/㎡</div>
        </div>
        <div class="cell">
          <div class="label">发布时间:</div>
          <div class="value">2018/9/15</div>
        </div>
      </div>
      <div class="info-line">
        <div class="cell">
          <div class="label">用途:</div>
          <div class="value">住房</div>
        </div>
        <div class="cell">
          <div class="label">电梯:</div>
          <div class="value">有</div>
        </div>
      </div>
      <div class="info-line">
        <div class="cell">
          <div class="label">楼型:</div>
          <div class="value">塔楼</div>
        </div>
        <div class="cell">
          <div class="label">楼层:</div>
          <div class="value">11层 (底层)</div>
        </div>
      </div>
      <div class="info-line">
        <div class="cell">
          <div class="label">装修:</div>
          <div class="value">精装修</div>
        </div>
        <div class="cell">
          <div class="label">主卧朝向:</div>
          <div class="value">朝南</div>
        </div>
      </div>
      <div class="info-line">
        <div class="cell">
          <div class="label">阳台:</div>
          <div class="value">有阳台</div>
        </div>
        <div class="cell">
          <div class="label">宠物:</div>
          <div class="value">可养宠物</div>
        </div>
      </div>
      <div class="info-line">
        <div class="cell">
          <div class="label">车位:</div>
          <div class="value">有 (需另议)</div>
        </div>
        <div class="cell">
          <div class="label">权属:</div>
          <div class="value">商品房</div>
        </div>
      </div>
    </div>
    <div class="details-module">
      <div class="module-title">介绍</div>
      <div class="publisher-introduce">
        <div class="portrait"></div>
        <div class="publisher-info">
          <div class="publisher-name">Govern</div>
          <div class="publisher-desc"><span class="type">经纪人</span><span>语言：汉语/英语/韩语/日语</span></div>
        </div>
        <div class="focus-btn">关注</div>
      </div>
      <div class="paragraph">
        位于普吉岛的长泰 (Choeng Thale) 地区，我们的四卧室豪华别墅距离该地区的所有主要海滩都很近，非常方便。该别墅提供多达 1100 平方米的巨大生活空间，有私人泳池，充满活力。
      </div>
      <div class="paragraph">
        这个位置非常出色，不用走太远就能到达普吉岛上一些最好的海滩。此外，您与普吉岛著名的夜生活，和岛上最好的一些餐馆只有步行的距离。来往的出租车很多，可以方便您在普吉岛周边观
      </div>
    </div>
    <div class="middle-banner"></div>
    <div class="others">
      <div class="details-module">
        <div class="module-title">周边楼盘</div>
      </div>
      <div class="scroll-wrapper">
        <div class="item">
          <div class="item-img"></div>
          <div class="item-title">Callisto Towers at Circuit Makati</div>
          <div class="item-sub">Makati, 1207 Metro Manila</div>
          <div class="item-desc"><span class="tag-main">210,000 P/㎡</span><span class="tag-sub">28.00-100.55 ㎡</span></div>
        </div>
        <div class="item">
          <div class="item-img"></div>
          <div class="item-title">Callisto Towers</div>
          <div class="item-sub">Makati, 1207 Metro Manila</div>
          <div class="item-desc"><span class="tag-main">210,000 P/㎡</span><span class="tag-sub">28.00-100.55 ㎡</span></div>
        </div>
        <div class="item">
          <div class="item-img"></div>
          <div class="item-title">Callisto Towers at Circuit Makati</div>
          <div class="item-sub">Makati, 1207 Metro Manila</div>
          <div class="item-desc"><span class="tag-main">210,000 P/㎡</span><span class="tag-sub">28.00-100</span></div>
        </div>
      </div>
    </div>
    <div class="publish">
      <div class="tips">我也要出售？</div>
      <a href="javascript:;" class="publish-btn">立即发布</a>
    </div>
    <div class="control-bar">
      <div class="controls">
        <a href="javascript:;" class="favorite"></a>
        <a href="javascript:;" class="share"></a>
      </div>
      <a href="javascript:;" class="msg-btn">短信咨询</a>
      <a href="javascript:;" class="phone-btn">电话咨询</a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .head-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 1.2rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .24), rgba(0, 0, 0, 0));
  }

  .top-banner {
    height: 4.84rem;
    background-color: #c0c0c0;
  }

  .banner-desc {
    padding: 0 .28rem;
    line-height: 1;
    font-size: .24rem;
    color: #b3b3b3;
    text-align: right;
    margin-top: .1rem;
  }

  .details-title {
    padding: 0 .28rem;
    margin-top: .3rem;
    font-size: .4rem;
    line-height: .4rem;
    color: #333;
    word-break: break-all;
  }

  .title-tags {
    padding: 0 .28rem;
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
    padding: 0 .28rem;
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

  .details-module {
    padding: 0 .28rem .6rem;
  }

  .module-title {
    position: relative;
    padding-top: .4rem;
    line-height: 1;
    color: #333;
    font-size: .32rem;
    font-weight: bold;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      border-top: 1px solid #e6e6e6;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
  }

  .info-line {
    margin-top: .35rem;
    display: flex;
    font-size: .28rem;
    line-height: 1;
    .cell {
      display: flex;
      flex: 1;
      color: #333;
    }
    .label {
      width: 1.3rem;
      color: #b2b2b2;
    }
    .value {
      flex: 1;
    }
  }

  .publisher-introduce {
    margin: .4rem 0 .26rem;
    display: flex;
    align-items: center;
    .portrait {
      margin-right: .2rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #dfdfdf;
    }
    .publisher-info {
      flex: 1;
      .publisher-name {
        font-size: .32rem;
        color: #333;
        line-height: 1;
      }
      .publisher-desc {
        margin-top: .18rem;
        font-size: .24rem;
        color: #b3b3b3;
        line-height: 1;
        .type {
          margin-right: .35rem;
        }
      }
    }
    .focus-btn {
      position: relative;
      padding-left: .48rem;
      width: 1.2rem;
      height: .54rem;
      line-height: .5rem;
      border: .02rem solid #0f9183;
      border-radius: .1rem;
      font-size: .28rem;
      color: #0f9183;
      box-sizing: border-box;
      &::before {
        position: absolute;
        top: .13rem;
        left: .15rem;
        content: "";
        width: .24rem;
        height: .24rem;
        background: url('../assets/images/icon-plus.png') no-repeat;
        background-size: 100% 100%;
      }
      &.disabled {
        padding-left: 0;
        text-align: center;
        color: #b2b2b2;
        border-color: #b2b2b2;
        &::before {
          display: none;
        }
      }
    }
  }

  .paragraph {
    font-size: .28rem;
    color: #333;
    line-height: .48rem;
  }

  .middle-banner {
    height: 4rem;
    background-color: #dcdcdc;
  }

  .others {
    position: relative;
    margin-top: .7rem;
    padding-bottom: .85rem;
  }

  .scroll-wrapper {
    padding: 0 .28rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    font-size: 0;
    .item {
      display: inline-block;
      vertical-align: top;
      width: 3.6rem;
      margin-right: .6rem;
      .item-img {
        width: 100%;
        height: 2.56rem;
        border-radius: .1rem;
        background-color: #e8e8ea;
      }
      .item-title {
        margin-top: .2rem;
        font-size: .28rem;
        font-weight: bold;
        color: #333;
        line-height: .3rem;
        white-space: initial;
      }
      .item-sub {
        margin-top: .15rem;
        color: #999;
        font-size: .24rem;
      }
      .item-desc {
        margin-top: .15rem;
      }
      .tag-main {
        margin-right: .2rem;
        font-size: .28rem;
        color: #0f9183;
        font-weight: bold;
      }
      .tag-sub {
        font-size: .22rem;
        color: #b2b2b2;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .publish {
    padding-top: .7rem;
    height: 4.85rem;
    background-color: #f2f2f2;
    .tips {
      font-size: .32rem;
      color: #333;
      text-align: center;
      line-height: 1;
    }
    .publish-btn {
      display: block;
      margin: .6rem auto 0;
      width: 3rem;
      height: .8rem;
      line-height: .72rem;
      border: .04rem solid #0f9183;
      border-radius: .1rem;
      font-size: .28rem;
      color: #0f9183;
      text-align: center;
      box-sizing: border-box;
    }
  }
  .control-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    font-size: .28rem;
    text-align: center;
    .controls {
      flex: 1;
      font-size: 0;
      text-align: left;
      line-height: 1rem;
      .favorite {
        margin: 0 .6rem 0 .65rem;
        display: inline-block;
        vertical-align: middle;
        width: .42rem;
        height: .38rem;
        background: url("../assets/images/favorite.png") no-repeat;
        background-size: 100% 100%;
      }
      .share {
        display: inline-block;
        vertical-align: middle;
        width: .38rem;
        height: .38rem;
        background: url("../assets/images/share.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .msg-btn {
      display: block;
      width: 2.4rem;
      height: 1rem;
      line-height: 1rem;
      color: #fff;
      background-color: #f99c91;
    }
    .phone-btn {
      display: block;
      width: 2.4rem;
      height: 1rem;
      line-height: 1rem;
      color: #fff;
      background-color: #0F9183;
    }
  }
</style>
