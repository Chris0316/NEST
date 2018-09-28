<template>
  <div class="lease-list">
    <button class="button" @click="openLocation">地点</button>
    <button class="button" @click="openHType">户型</button>
    <nest-modal title="地点" v-show="locationShow" modalConfirmTxt="确定" @modalConfirm="locationConfirm">
      <nest-check size="big" :options="locationOptions"></nest-check>
    </nest-modal>
    <!--<nest-modal title="户型" v-show="hTypeShow" modalBtnTxt="立即发现惊喜房源" @modalBtnClick="hTypeConfirm">-->
      <!--<nest-check size="big" :options="typeOptions"></nest-check>-->
    <!--</nest-modal>-->



    <!--<nest-modal :isFull="isModalFull">-->
      <!--xxx-->
    <!--</nest-modal>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isModalFull: true,
        locationShow: false,
        hTypeShow: false,
        locationOptions: [{
          label: '马卡提(Makati)',
          value: '马卡提(Makati)',
          checked: true
        }, {
          label: '帕赛(Pasay)',
          value: '帕赛(Pasay)',
          checked: false
        }, {
          label: '马尼拉市(City of Manila)',
          value: '马尼拉市(City of Manila)',
          checked: false
        }, {
          label: '曼达卢永(Mandaluyong)',
          value: '曼达卢永(Mandaluyong)',
          checked: false
        }, {
          label: '奎松(Quezon)',
          value: '奎松(Quezon)',
          checked: false
        }, {
          label: 'BGC(BGC, Taguig)',
          value: 'BGC(BGC, Taguig)',
          checked: true
        }, {
          label: '帕西市(Pasig)',
          value: '帕西市(Pasig)',
          checked: false
        }],
        typeOptions: [{
          label: '一居室',
          value: '一居室',
          checked: false
        }, {
          label: '二居室',
          value: '二居室',
          checked: false
        }, {
          label: '三居室',
          value: '三居室',
          checked: false
        }, {
          label: '其他',
          value: '其他',
          checked: false
        }]
      }
    },
    methods: {
      openHType() {
        this.hTypeShow = true;
      },
      openLocation() {
        this.locationShow = true;
      },
      locationConfirm() {
        this.locationShow = false;
      },
      hTypeConfirm() {
        this.hTypeShow = false;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .lease-list {

  }
</style>
