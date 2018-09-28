<template>
  <div class="lease-list">
    <button class="button" @click="openLocation">地点</button>
    <button class="button" @click="openType">户型</button>
    <nest-modal title="地点" v-show="locationShow" modalBtnTxt="确定" @modalConfirm="locationConfirm" @modalClear="locationClear">
      <nest-check v-model="locationChecked" :options="locationOptions"></nest-check>
    </nest-modal>
    <nest-modal title="户型" v-show="typeShow" modalBtnTxt="立即发现惊喜房源" @modalConfirm="typeConfirm" @modalClear="typeClear">
      <nest-check v-model="typeChecked" :options="typeOptions"></nest-check>
    </nest-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        locationShow: false,
        typeShow: false,
        locationChecked: [true, false, false, false, false, false, true],
        locationOptions: [{
          label: '马卡提(Makati)',
          value: '马卡提(Makati)'
        }, {
          label: '帕赛(Pasay)',
          value: '帕赛(Pasay)'
        }, {
          label: '马尼拉市(City of Manila)',
          value: '马尼拉市(City of Manila)'
        }, {
          label: '曼达卢永(Mandaluyong)',
          value: '曼达卢永(Mandaluyong)'
        }, {
          label: '奎松(Quezon)',
          value: '奎松(Quezon)'
        }, {
          label: 'BGC(BGC, Taguig)',
          value: 'BGC(BGC, Taguig)'
        }, {
          label: '帕西市(Pasig)',
          value: '帕西市(Pasig)'
        }],
        typeChecked: [false, false, false, false],
        typeOptions: [{
          label: '一居室',
          value: '一居室'
        }, {
          label: '二居室',
          value: '二居室'
        }, {
          label: '三居室',
          value: '三居室'
        }, {
          label: '其他',
          value: '其他'
        }]
      }
    },
    methods: {
      openType() {
        this.typeShow = true;
      },
      openLocation() {
        this.locationShow = true;
      },
      locationConfirm() {
        console.log(this.locationChecked);
        this.locationShow = false;
      },
      typeConfirm() {
        console.log(this.typeChecked);
        this.typeShow = false;
      },
      locationClear () {
        this.locationChecked = this.locationChecked.map(() => {
          return false;
        })
      },
      typeClear() {
        this.typeChecked = this.typeChecked.map(() => {
          return false;
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .lease-list {

  }
</style>
