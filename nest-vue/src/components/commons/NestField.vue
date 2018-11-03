<template>
  <div class="nest-field">
    <span class="indicator" v-if="hasIndicator" v-show="!hasFocused && !currentVal && !placeholder"></span>
    <input class="nest-input" :class="textAlign" v-if="type !== 'textarea'" :type="type" v-model="currentVal" :maxlength="maxlength" :placeholder="placeholder"
           @focus="hasFocused = true" @blur="hasFocused = false" @input="$emit('input', currentVal)" />
  </div>
</template>

<script>
  export default {
    name: "nest-field",
    data() {
      return {
        currentVal: this.value,
        hasFocused: false
      }
    },
    props: {
      value: String,
      hasIndicator: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'text'
      },
      textAlign: {
        type: String,
        default: 'left'
      },
      maxlength: String,
      placeholder: String
    }
  }
</script>

<style lang="scss" scoped>
  .nest-field {
    position: relative;
    flex: 1;
    .indicator {
      position: absolute;
      content: '';
      margin-top: -.05rem;
      top: 50%;
      left: 0;
      width: .1rem;
      height: .1rem;
      border-radius: .1rem;
      background-color: #d9d9d9;
    }
    .nest-input {
      width: 100%;
      border: none;
      font-size: .28rem;
      color: #333;
      &.center {
        text-align: center;
      }
      &::-webkit-input-placeholder {
        color: #b3b3b3;
      }
    }
  }
</style>
