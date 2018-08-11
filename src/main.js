import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import dotenv from 'dotenv'

dotenv.config()
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
      // apiKey: "AIzaSyD0HypaPrSUiNICjiRvxFa2LpdjH326EB4",
      // authDomain: "vue-devmeetup-1a124.firebaseapp.com",
      // databaseURL: "https://vue-devmeetup-1a124.firebaseio.com",
      // projectId: "vue-devmeetup-1a124",
      // storageBucket: "vue-devmeetup-1a124.appspot.com",
      // messagingSenderId: "1051666383758"
    })
  }
})
