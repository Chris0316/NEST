<template>
  <div id="app" @touchstart>
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
        if (to.name === 'Search') {
          this.transitionName = 'slide-top';
        } else if (from.name === 'Search') {
          this.transitionName = 'slide-down';
        } else {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : (toDepth === fromDepth ? '' : 'slide-left')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/commons.scss";

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-top-enter-active,
  .slide-top-leave-active,
  .slide-down-enter-active,
  .slide-down-leave-active {
    position: absolute;
    transform: translate3d(0, 0, 0);
    transition: transform .5s;
  }

  .slide-left-enter {
    transform: translate3d(100%, 0, 0);
    z-index: 1;
  }

  .slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
    z-index: 1;
  }

  .slide-right-leave {
    transform: translate3d(0, 0, 0);
  }

  .slide-top-enter {
    transform: translate3d(0, 100%, 0);
    z-index: 1;
  }

  .slide-down-leave-active {
    transform: translate3d(0, 100%, 0);
    z-index: 1;
  }

  .slide-down-leave {
    transform: translate3d(0, 0, 0);
  }

</style>
