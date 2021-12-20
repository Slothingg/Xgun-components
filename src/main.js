// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import codemirror  from "vue-codemirror"

Vue.use(ViewUI);
Vue.use(codemirror);

//个人组件
import phone from '@/components/phone.vue'
import media from '@/components/media.vue'
import flexBox from '@/components/flexBox.vue'
import titleSub from '@/components/titleSub.vue'
import text from '@/components/text.vue'
import apiTable from '@/components/apiTable.vue'
import eventTable from '@/components/eventTable.vue'
import slotTable from '@/components/slotTable.vue'

Vue.component('phone',phone)
Vue.component('media',media)
Vue.component('flexBox',flexBox)
Vue.component('titleSub',titleSub)
Vue.component('text-sub',text)
Vue.component('apiTable',apiTable)
Vue.component('eventTable',eventTable)
Vue.component('slotTable',slotTable)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
