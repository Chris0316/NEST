<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: ''
      }
    },
    watch: {
      $route(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "./assets/scss/commons.scss";

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    position: absolute;
    /*will-change: transform;*/
    transition: transform 500ms;
  }

  .slide-left-enter {
    position: absolute;
    transform: translate3d(100%, 0, 0);
    z-index: 2;
  }

  .slide-left-enter-active {
    z-index: 2;
  }

  .slide-left-leave {
    position: absolute;
    z-index: 1;
  }

  .slide-left-leave-active {
    transform: translate3d(0, 0, 0);
    z-index: 1;
  }

  .slide-right-enter {
    position: absolute;
    z-index: 1;
  }

  .slide-right-enter-active {
    z-index: 1;
  }

  .slide-right-leave {
    position: absolute;
    z-index: 2;
  }

  .slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
    z-index: 2;
  }

</style>
