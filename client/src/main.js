import Vue from 'vue';
import Swal from 'sweetalert2';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue';
import wysiwyg from "vue-wysiwyg";
import GAuth from 'vue-google-oauth2'
import GSignInButton from 'vue-google-signin-button'

// const gauthOption = {
//   clientId: '323874734298-vrlavakg3iqb6ig2qbp22c7ijisk1pd9.apps.googleusercontent.com'
// //   scope: 'profile email',
// //   prompt: 'select_account'
// }

// Vue.use(GAuth, gauthOption)
// Vue.use(GSignInButton)
Vue.use(wysiwyg, {
    hideModules: { "table": true, "image": true },
    maxHeight: "500px",
    forcePlainTextOnPaste: false
});
Vue.use(BootstrapVue)
// Vue.use(Swal)

new Vue(App).$mount('#app');