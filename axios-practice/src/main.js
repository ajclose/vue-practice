import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://vue-axios-practice.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'fafsdflk'
axios.defaults.headers.get['Accepts'] = 'Application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log({config});
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log({res});
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
