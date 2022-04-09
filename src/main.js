import Vue from 'vue'
import App from './App.vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.min.css'
import * as firebase from 'firebase/app'

Vue.use(router)
Vue.use(firebase)

/* FROM you firebase website code
var firebaseConfig = {
    apiKey: ,
    authDomain: 
    projectId: 
    storageBucket: 
    messagingSenderId:
    appId: 
    measurementId:
};
*/

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



new Vue({
    router,
    render:h=>h(App)
}).mount('#app')