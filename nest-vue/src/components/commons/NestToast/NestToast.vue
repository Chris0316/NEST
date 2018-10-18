<template>
  <transition name="toast">
    <div class="toast" v-if="toastShow">
      {{ message }}
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
      visible: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: '消息提示'
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
      this.setTimer();
    },
    methods: {
      close() {
        this.toastShow = false;
        if (this.callback)
          this.callback();
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
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 0 .4rem;
    height: .8rem;
    line-height: .8rem;
    color: #fff;
    font-size: .28rem;
    border-radius: .1rem;
    text-align: center;
    background-color: rgba(0, 0, 0, .7);
    transform: translate(-50%, -50%);
    transition: opacity .3s;
    z-index: 9;
    box-sizing: border-box;
    white-space: nowrap;
  }
</style>
