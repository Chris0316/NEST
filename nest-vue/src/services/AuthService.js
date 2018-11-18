import axios from '../utils/Request';

// const base_api = 'http://api.ohmynest.com/api';
const api = {
  getSms: '/captchas/sms'
};

let AuthService = {
  getSms(phone, callback) {
    axios.post(api.getSms, {
      phone: phone
    }).then((res) => {
      callback(res)
    })
  },
  smsLogin() {

  }
};

export default AuthService;
