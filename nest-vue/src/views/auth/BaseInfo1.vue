<template>
  <div class="base-info">
    <div class="header">
      <div class="back" @click="$router.go(-1);"></div>
    </div>
    <div class="content">
      <div class="title">基本信息设置</div>
      <div class="title-tip">设置基本信息，更智能的使用鸟巢</div>
      <div class="radio-tit">我是</div>
      <nest-radio class="radio-spacing border-bottom" v-model="userType" :options="userTypeOpts"></nest-radio>
      <div class="form-group border-bottom arrow-right">
        <div class="label">国籍</div>
        <div class="group-right"></div>
      </div>
      <div class="form-group border-bottom">
        <div class="label">姓名</div>
        <nest-field class="group-right"></nest-field>
      </div>
      <div class="form-group border-bottom">
        <div class="label">英文简称</div>
        <nest-field class="group-right"></nest-field>
      </div>
      <div class="form-tip">姓名和昵称是平台上的唯一标识，一旦设定不可修改</div>
      <nest-button class="mt90" type="primary" :disabled="true">下一步</nest-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseInfo1",
    data() {
      return {
        userType: '',
        userTypeOpts: ['用户', '房产经纪人']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .base-info {
    padding: 0 .28rem;
    box-sizing: border-box;
    .header {
      height: 1.2rem;
    }
    .back {
      width: .9rem;
      height: 100%;
      background: url('../../assets/images/return-icon.png') no-repeat left center;
      background-size: .42rem .32rem;
    }
    .content {
      padding: 0 .4rem;
    }
    .title {
      margin-top: .4rem;
      line-height: 1;
      font-size: .46rem;
      font-weight: bold;
      color: #333;
    }
    .title-tip {
      margin-top: .2rem;
      font-size: .24rem;
      color: #b3b3b3;
      line-height: 1;
    }
    .radio-tit {
      margin-top: .6rem;
      font-size: .28rem;
      color: #333;
      line-height: 1;
    }
    .radio-spacing {
      margin-top: .2rem;
      padding-bottom: .6rem;
    }
    .form-group {
      display: flex;
      align-items: center;
      height: 1rem;
    }
    .label {
      width: 1.9rem;
      font-size: .28rem;
      color: #333;
    }
    .group-right {
      flex: 1;
      font-size: .28rem;
      color: #333;
    }
    .form-tip {
      margin-top: .2rem;
      font-size: .24rem;
      color: #b3b3b3;
      line-height: 1;
    }
    .mt90 {
      margin-top: .9rem;
    }
  }
</style>
