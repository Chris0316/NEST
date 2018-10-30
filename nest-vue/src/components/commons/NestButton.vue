<template>
  <button class="nest-button" type="button" :class="[type, size]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "nest-button",
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'full'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nest-button {
    margin-top: .6rem;
    display: block;
    border: none;
    border-radius: .1rem;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    font-size: .3rem;
    color: #fff;
    text-align: center;
    &.default {

    }
    &.primary {
      background-color: #0f9183;
    }
    &[disabled], &.disabled {
      background-color: #d9d9d9;
    }
  }
</style>
