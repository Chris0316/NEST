<template>
  <div class="nest-field">
    <span class="indicator" :class="{ 'textarea': type === 'textarea' }" v-if="hasIndicator" v-show="!hasFocused && !currentVal && !placeholder"></span>
    <input class="nest-input" :class="textAlign" v-if="type !== 'textarea'" :type="type" v-model="currentVal" :maxlength="maxLength" :placeholder="placeholder"
           @focus="hasFocused = true" @blur="hasFocused = false" @input="$emit('input', currentVal)" />
    <textarea class="nest-textarea" v-else :placeholder="placeholder" v-model="currentVal" @focus="hasFocused = true" @blur="hasFocused = false" @input="$emit('input', currentVal)"></textarea>
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
      maxLength: String,
      placeholder: String
    }
  }
</script>

<style lang="scss" scoped>
  .nest-field {
    position: relative;
    /*display: flex;*/
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
      &.textarea {
        top: .14rem;
        margin-top: 0;
      }
    }
    .nest-input {
      padding: 0;
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
    .nest-textarea {
      width: 100%;
      height: 3.4rem;
      border: none;
      padding: 0;
      resize: none;
      font-size: .28rem;
      color: #333;
      &::-webkit-input-placeholder {
        color: #b3b3b3;
      }
    }
  }
</style>
