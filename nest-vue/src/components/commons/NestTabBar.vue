<template>
  <div class="nest-tab-bar" :class="[layout, align]">
    <div class="tab-item"
         :class="{ 'on': index === value }"
         v-for="(item, index) in options"
         @click="$emit('input', index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "nest-tab-bar",
    props: {
      value: Number,
      layout: {
        type: String,
        default: 'auto'
      },
      align: {
        type: String,
        default: 'left'
      },
      options: Array
    }
  }
</script>

<style lang="scss" scoped>
  .nest-tab-bar {
    display: flex;
    align-items: center;
    font-size: .28rem;
    &.avg {
      .tab-item {
        margin-right: 0;
        text-align: center;
        flex: 1;
      }
    }
    &.right {
      justify-content: flex-end;
      .tab-item {
        margin-right: 0;
        margin-left: .45rem;
      }
    }
    .tab-item {
      margin-right: .45rem;
      color: #999;
      line-height: .68rem;
      box-sizing: border-box;
      border-bottom: .04rem solid transparent;
      &.on {
        color: #0f9183;
        border-bottom-color: #0f9183;
      }
    }
  }
</style>
