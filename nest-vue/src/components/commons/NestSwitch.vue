<template>
  <label class="nest-switch">
    <input type="checkbox" class="switch-actual" v-model="currentVal" @change="switchChange">
    <span class="switch-core"></span>
  </label>
</template>

<script>
  export default {
    name: "nest-switch",
    data() {
      return {
        currentVal: this.value
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      switchChange() {
        this.$emit('input', this.currentVal);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nest-switch {
    display: inline-block;
    .switch-actual {
      display: none;
      &:checked {
        & + .switch-core {
          background-color: #ADD9D5;
          &::after {
            background-color: #0f9183;
            left: 100%;
            transform: translate3d(-100%, -50%, 0);
          }
        }
      }
    }
    .switch-core {
      position: relative;
      display: block;
      width: 1rem;
      height: .5rem;
      border-radius: .5rem;
      background-color: #f2f2f2;
      transition: background-color .3s;
      &::after {
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        width: .6rem;
        height: .6rem;
        border-radius: .6rem;
        background-color: #d9d9d9;
        transition: .3s;
        transform: translate3d(0, -50%, 0);
      }
    }
  }
</style>
