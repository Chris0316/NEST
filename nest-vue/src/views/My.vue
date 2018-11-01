<template>
  <div class="my">
    <div class="personal-info">
      <div>
        <div class="name">阿尔萨斯</div>
        <div class="account">Arthas</div>
      </div>
      <div class="portrait"></div>
    </div>
    <div class="personal-sign arrow-right">My son. The day you were born, the very forests of Lordaeron whispered the name, Arthas.</div>
    <div class="menu-panel">
      <div class="menu-item">
        <div class="item-icon"></div>
        <div class="item-label">我的发布</div>
      </div>
      <div class="menu-item">
        <div class="item-icon"></div>
        <div class="item-label">我的帮住</div>
      </div>
      <div class="menu-item">
        <div class="item-icon"></div>
        <div class="item-label">我的资讯</div>
      </div>
    </div>
    <div class="live-ground border-bottom">
      <div class="banner"></div>
    </div>
    <div class="form-group border-bottom arrow-right">
      <div class="label">我的信息</div>
    </div>
    <div class="form-group border-bottom arrow-right">
      <div class="label">我的消息</div>
    </div>
    <div class="form-group border-bottom"></div>
    <div class="form-group border-bottom arrow-right">
      <div class="label">语言显示</div>
    </div>
    <div class="form-group border-bottom">
      <div class="label">新消息通知</div>
      <nest-switch v-model="msgSwitch"></nest-switch>
    </div>
    <div class="form-group border-bottom">
      <div class="label">加入我们</div>
      <nest-switch></nest-switch>
    </div>
    <div class="footer-links">
      <div class="links-item">
        <div class="link-icon"></div>
        <div class="link-label">给我反馈</div>
      </div>
      <div class="links-item">
        <div class="link-icon"></div>
        <div class="link-label">联系我们</div>
      </div>
      <div class="links-item">
        <div class="link-icon"></div>
        <div class="link-label">商业合作</div>
      </div>
    </div>
    <nest-nav page="my"></nest-nav>
  </div>
</template>

<script>
  export default {
    name: "My",
    data() {
      return {
        msgSwitch: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my {
    padding: .4rem .28rem 2rem;
    .personal-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .name {
      font-size: .6rem;
      font-weight: bold;
      color: #333;
      line-height: 1;
    }
    .account {
      margin-top: .17rem;
      font-size: .28rem;
      color: #333;
      line-height: 1;
    }
    .portrait {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 1.2rem;
      background-color: #e6e6e6;
      background-size: 100% 100%;
    }
    .personal-sign {
      margin-top: .4rem;
      padding-right: .78rem;
      line-height: .35rem;
      font-size: .28rem;
      color: #999;
      box-sizing: border-box;
    }
    .menu-panel {
      margin-top: .8rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 1.6rem;
      border-radius: .4rem;
      box-shadow: 1px 3px 20px 0px rgba(176,183,187,0.4);
    }
    .item-icon {
      margin: 0 auto;
      width: .6rem;
      height: .6rem;
      background-color: #e6e6e6;
      background-size: 100% 100%;
    }
    .item-label {
      margin-top: .2rem;
      font-size: .28rem;
      color: #333;
      line-height: 1;
    }
    .live-ground {
      padding: .6rem 0 .8rem;
    }
    .banner {
      height: 1rem;
      border-radius: 1rem;
      background-color: #e6e6e6;
    }
    .form-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1rem;
      .label {
        width: 1.9rem;
        font-size: .28rem;
        color: #333;
      }
    }
    .footer-links {
      margin-top: 1rem;
      display: flex;
      justify-content: space-around;
      .link-icon {
        margin: 0 auto;
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 1.1rem;
        background-color: #e6e6e6;
        background-size: 100% 100%;
      }
      .link-label {
        margin-top: .2rem;
        font-size: .28rem;
        color: #999;
      }
    }
  }
</style>
