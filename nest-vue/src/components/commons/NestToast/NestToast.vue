<template>
  <transition name="toast">
    <div class="nest-toast" v-if="toastShow">
      <div class="toast-icon" :class="type" v-if="type !== 'info'"></div>
      <div class="toast-text">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "nest-toast",
    data() {
      return {
        toastShow: this.visible
      }
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      visible: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: '正在加载'
      },
      duration: {
        type: Number,
        default: 3000
      },
      callback: {
        type: Function
      }
    },
    mounted() {
      if (this.type !== 'loading')
        this.setTimer();
    },
    methods: {
      close() {
        this.toastShow = false;
        if (this.callback)
          this.callback();
        this.$emit('close');
      },
      setTimer() {
        setTimeout(() => {
          this.close();
        }, this.duration);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toast-leave-active {
    opacity: 0;
  }
  .nest-toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 0 .4rem;
    border-radius: .1rem;
    text-align: center;
    background-color: rgba(0, 0, 0, .7);
    transform: translate(-50%, -50%);
    transition: opacity .3s;
    box-sizing: border-box;
    white-space: nowrap;
    z-index: 9;
    .toast-icon {
      &.loading {
        width: .32rem;
        height: .32rem;
        background: url('../../../assets/images/delete.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .toast-text {
      height: .8rem;
      line-height: .8rem;
      color: #fff;
      font-size: .28rem;
    }
  }
</style>
