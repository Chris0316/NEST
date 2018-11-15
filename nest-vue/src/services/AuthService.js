import axios from 'axios';

const base_api = 'http://api.ohmynest.com/api';
const api = {
  getSms: '/captchas/sms'
};

let AuthService = {
  getSms(phone, callback) {
    axios.post(base_api + api.getSms, {
      phone: phone
    }).then((res) => {
      callback(res)
    })
  },
  smsLogin() {

  }
};

export default AuthService;
