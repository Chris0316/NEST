<template>
  <div class="sms-code">
    <div class="header">
      <div class="back" @click="$router.go(-1);"></div>
    </div>
    <div class="content">
      <div class="title">输入验证码</div>
      <div class="title-tip">短信验证码发送失败，请点击重新获取验证码</div>
      <div class="sms-widget">
        <input type="tel" maxlength="6" autocomplete="off" v-model="smsCode"
               @input="checkSms" ref="smsInp" />
        <ul class="sms-core" @click="smsFocus">
          <li>{{ smsCode1 }}</li>
          <li>{{ smsCode2 }}</li>
          <li>{{ smsCode3 }}</li>
          <li>{{ smsCode4 }}</li>
          <li>{{ smsCode5 }}</li>
          <li>{{ smsCode6 }}</li>
        </ul>
      </div>
      <div class="sms-link">重新获取验证码</div>
    </div>
  </div>
</template>

<script>
  import Storage from '../../utils/Storage'
  import AuthService from '../../services/AuthService';

  export default {
    name: "sms-code",
    data() {
      return {
        smsCode: ''
      }
    },
    computed: {
      smsCode1 () {
        return this.smsCode.substring(0, 1);
      },
      smsCode2 () {
        return this.smsCode.substring(1, 2);
      },
      smsCode3 () {
        return this.smsCode.substring(2, 3);
      },
      smsCode4 () {
        return this.smsCode.substring(3, 4);
      },
      smsCode5 () {
        return this.smsCode.substring(4, 5);
      },
      smsCode6 () {
        return this.smsCode.substring(5, 6);
      }
    },
    mounted() {
      this.$refs.smsInp.focus();
    },
    methods: {
      checkSms() {
        let phone = Storage.getLocalStorage('nest_auth_phone'),
          key = Storage.getLocalStorage('nest_auth_key');
        if (this.smsCode.length === 6) {
          AuthService.smsLogin(phone, this.smsCode, key, (res) => {
            let token = res.meta.access_token;
            Storage.setLocalStorage('nest_access_token', token);
            this.$router.push({ name: 'AuthBaseInfo1' });
          })
        }
      },
      smsFocus() {
        this.$refs.smsInp.focus();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sms-code {
    padding: 0 .28rem;
    box-sizing: border-box;
    .header {
      height: 1.2rem;
    }
    .back {
      width: .9rem;
      height: 100%;
      background: url('../../assets/images/return-icon.png') no-repeat left center;
      background-size: .42rem .32rem;
    }
    .content {
      padding: 0 .4rem;
    }
    .title {
      margin-top: .4rem;
      line-height: 1;
      font-size: .46rem;
      font-weight: bold;
      color: #333;
    }
    .title-tip {
      margin-top: .2rem;
      font-size: .24rem;
      color: #b3b3b3;
      line-height: 1;
    }
    .sms-widget {
      margin-top: .2rem;
      position: relative;
      input[type=tel] {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .01;
        border: none;
        overflow: hidden;
        transform: scale(0);
      }
      .sms-core {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        list-style: none;
        li {
          width: .8rem;
          height: .86rem;
          line-height: .86rem;
          font-weight: bold;
          font-size: .46rem;
          color: #333;
          text-align: center;
          border-bottom: 1px solid #A7A9AA;
        }
      }
    }
    .sms-link {
      margin-top: .7rem;
      font-size: .28rem;
      color: #0f9183;
    }
  }
</style>
