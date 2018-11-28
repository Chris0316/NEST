<template>
  <transition name="slide">
    <div class="country" v-show="show">
      <div class="header">
        <div class="back" @click="$emit('countryClose')"></div>
      </div>
      <div class="content">
        <div class="title">{{ title }}</div>
        <nest-radio class="mt60" :options="countryOpts" v-model="selectedVal" :is-align-left="true" size="large" :count-in-row="1"></nest-radio>
      </div>
    </div>
  </transition>
</template>

<script>
  import ChinaFlag from '../../assets/images/flags/China.png';
  import JapanFlag from '../../assets/images/flags/Japan.png';
  import KoreaFlag from '../../assets/images/flags/Korea.png';
  import PhilippineFlag from '../../assets/images/flags/Philippine.png';
  import USAFlag from '../../assets/images/flags/USA.png';
  import EuropeFlag from '../../assets/images/flags/Europe.png';
  import EarthFlag from '../../assets/images/flags/Earth.png';

  export default {
    name: "Country",
    props: {
      area: String,
      type: {
        type: String,
        default: 'citizenship'
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selectedVal: '',
        countryAll: [{
          label: '中国',
          value: '1',
          area: '0086',
          icon: ChinaFlag
        }, {
          label: '菲律宾',
          value: '2',
          area: '0063',
          icon: PhilippineFlag
        }, {
          label: '日本',
          value: '3',
          area: '0081',
          icon: JapanFlag
        }, {
          label: '韩国',
          value: '4',
          area: '0082',
          icon: KoreaFlag
        }, {
          label: '美国',
          value: '5',
          area: '0001',
          icon: USAFlag
        }, {
          label: '欧洲',
          value: '6',
          area: 'Euro',
          icon: EuropeFlag
        }, {
          label: '其他',
          value: '7',
          area: 'others',
          icon: EarthFlag
        }]
      }
    },
    created() {
      if (this.area) {
        let arr = this.countryOpts.filter((item) => {
          return this.area === item.area;
        });
        this.selectedVal = arr[0].value;
      }
    },
    watch: {
      selectedVal(val) {
        let arr = this.countryOpts.filter((item) => {
          return val === item.value;
        });
        this.$emit('countrySelected', arr[0]);
      }
    },
    computed: {
      title() {
        return this.type === 'citizenship' ? '国籍' : '国家';
      },
      countryOpts() {
        if (this.type === 'citizenship') {
          return this.countryAll;
        } else if (this.type === 'number') {
          return this.countryAll.splice(0, 2);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide-enter-active,
  .slide-leave-active {
    transform: translate3d(0, 0, 0);
    transition: transform .5s;
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .country {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 .28rem;
    box-sizing: border-box;
    background-color: #fff;
    .header {
      height: 1.2rem;
    }
    .back {
      width: .9rem;
      height: 100%;
      color: #333;
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
