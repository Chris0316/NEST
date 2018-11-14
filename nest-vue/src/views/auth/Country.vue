<template>
  <div class="country">
    <div class="header">
      <div class="back" @click="$router.go(-1);"></div>
    </div>
    <div class="content">
      <div class="title">国籍</div>
      <nest-radio class="mt60" :options="countryOpts" v-model="country" :is-align-left="true" size="large" :count-in-row="1"></nest-radio>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Country",
    data() {
      return {
        country: '',
        countryOpts: [{
          label: '中国',
          value: '+86',
          icon: 'xx'
        }, {
          label: '日本',
          value: '+88',
          icon: ''
        }, {
          label: '韩国',
          value: '+87',
          icon: ''
        }, {
          label: '菲律宾',
          value: '+63',
          icon: ''
        }, {
          label: '美国',
          value: '+12',
          icon: ''
        }, {
          label: '欧洲',
          value: '+31',
          icon: ''
        }, {
          label: '其他',
          value: '+00',
          icon: ''
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .country {
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
    .mt60 {
      margin-top: .6rem;
    }
  }
</style>
