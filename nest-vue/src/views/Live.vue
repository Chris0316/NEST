<template>
  <div class="live">
    <nest-scroll class="app-body">
      <div class="live-body">
        <div class="live-title">帮住</div>
        <nest-scroll event-passthrough="vertical" :scroll-x="true" class="live-modules">
          <div class="modules-wrap">
            <div class="module" @click="$router.push({ name: 'LivePublish' })">
              <div class="title">帮住</div>
              <div class="desc">给我您的需求<br>帮您淘满意的房源</div>
            </div>
            <div class="module">
              <div class="title">入门攻略</div>
              <div class="desc">帮您了解海外购置房产全流程</div>
            </div>
            <div class="module">
              <div class="title">买房攻略</div>
              <div class="desc">您的疑惑和顾虑我来消除</div>
            </div>
            <div class="module">
              <div class="title">开盘快报</div>
              <div class="desc">最新的楼盘资讯早班车，勿错过</div>
            </div>
            <div class="module">
              <div class="title">时政经济</div>
              <div class="desc">政策先知道，紧握投资形势</div>
            </div>
          </div>
        </nest-scroll>
        <div class="category-container">
          <div class="category">
            <span class="favorite"></span>
            <div class="category-text">
              “外国人”在菲律宾购置房产的政策法规深度解析
            </div>
          </div>
        </div>
        <div class="category-container">
          <div class="category">
            <span class="favorite"></span>
            <div class="category-tag hot">
              <span>购房常识</span>
            </div>
            <div class="category-text">
              菲律宾房产投资入门攻略
            </div>
          </div>
        </div>
        <div class="category-container">
          <div class="category">
            <span class="favorite"></span>
            <div class="category-tag">
              <span>购房常识</span>
            </div>
            <div class="category-text">
              菲律宾租房流程
            </div>
          </div>
          <div class="category">
            <span class="favorite"></span>
            <div class="category-tag">
              <span>投资参考</span>
            </div>
            <div class="category-text">
              华人海外房产投资“新宠”
            </div>
          </div>
        </div>
      </div>
    </nest-scroll>
    <nest-nav page="live"></nest-nav>
  </div>
</template>

<script>
  export default {
    name: "Live"
  }
</script>

<style lang="scss" scoped>
  .live {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    .app-body {
      flex: 1;
      overflow: hidden;
    }
    .live-body {
      padding: .5rem 0 1.5rem;
    }
    .live-title {
      padding: 0 .28rem;
      font-size: .6rem;
      color: #333;
      line-height: 1;
    }
    .live-modules {
      display: flex;
      margin-top: .6rem;
      overflow: hidden;
      .modules-wrap {
        display: flex;
        padding: 0 .28rem;
      }
      .module {
        flex-shrink: 0;
        padding: .2rem;
        width: 2.8rem;
        height: 2rem;
        margin-right: .1rem;
        background-color: #fafafa;
        box-sizing: border-box;
        &:last-child {
          margin-right: 0;
        }
        .title {
          font-size: .3rem;
          color: #333;
          line-height: 1;
        }
        .desc {
          margin-top: .14rem;
          font-size: .24rem;
          color: #b2b2b2;
          line-height: .3rem;
        }
      }
    }
    .category-container {
      margin-top: .6rem;
      padding: 0 .28rem;
      display: flex;
    }
    .category {
      padding: .2rem;
      margin-right: .34rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      flex: 1;
      height: 2.42rem;
      border-radius: .1rem;
      background-color: #e6e6e6;
      background-size: 100% 100%;
      box-sizing: border-box;
      .favorite {
        position: absolute;
        top: .2rem;
        right: .2rem;
        width: .36rem;
        height: .32rem;
        background: url('../assets/images/favorite-w.png') no-repeat;
        background-size: 100% 100%;
      }
      .category-text {
        font-size: .36rem;
        line-height: .4rem;
        color: #fff;
        box-sizing: border-box;
      }
      .category-tag {
        margin: 0 auto .1rem 0;
        padding: 0 .1rem;
        display: flex;
        align-items: center;
        height: .38rem;
        font-size: .2rem;
        color: #333;
        background-color: #fff;
        border-radius: .1rem;
        box-sizing: border-box;
        &.hot {
          &::before {
            content: '';
            margin-right: .1rem;
            width: .2rem;
            height: .26rem;
            background: url('../assets/images/hot.png') no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
