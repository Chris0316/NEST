<template>
  <div class="nest-check">
    <div class="check-row" v-for="n in Math.ceil(options.length / countInLine)">
      <label class="nest-checkbox" v-for="m in n * countInLine">
        <input type="checkbox" class="nest-checkbox-input"/>
        <span class="nest-checkbox-core">xxx</span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-check",
    props: {
      countInLine: {
        type: Number,
        default: 2
      },
      size: {
        type: String,
        default: 'large'
      },
      options: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .check-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .nest-checkbox {
    flex: 1;
    margin-right: .3rem;
    &.large {
      height: .6rem;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .nest-checkbox-input {
    display: none;
    &:checked {
      & + .nest-checkbox-core {
        color: #fff;
        background-color: #0f9183;
      }
    }
  }
  .nest-checkbox-core {
    display: block;
    flex: 1;
    background-color: #999;
    text-align: center;
  }
</style>
