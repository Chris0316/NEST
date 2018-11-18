import axios from '../utils/Request';

// const base_api = 'http://api.ohmynest.com/api';
const api = {
  getSms: '/captchas/sms',
  smsLogin: '/users/sms/login'
};

let AuthService = {
  getSms(phone, callback) {
    axios.post(api.getSms, {
      phone: phone
    }).then(res => {
      callback(res);
    })
  },
  smsLogin(phone, sms, key, callback) {
    axios.post(api.smsLogin, {
      phone: phone,
      code: sms,
      key: key
    }).then(res => {
      callback(res);
    })
  }
};

export default AuthService;
