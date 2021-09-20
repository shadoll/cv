// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { func } from './func.js'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '~/assets/styles.scss'
import '~/plugins/vuetify.js'
import DefaultLayout from '~/layouts/Default.vue'
import SimpleLayout from '~/layouts/Simple.vue'
import VueQrcode from '@chenfengyuan/vue-qrcode';


export default function (Vue, { router, head, isClient, appOptions }) {
  if (isClient) {
    const { default: Clock } = require('vue-clock2')
    Vue.component('clock', Clock);
  }

  Vue.component(VueQrcode.name, VueQrcode);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poiret+One'
  })

  const opts = {}
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);

  // i18n
  appOptions.i18n.setLocaleMessage('en-gb', require('./locales/en.json'))
  appOptions.i18n.setLocaleMessage('uk-ua', require('./locales/ua.json'))
  // appOptions.i18n.setLocaleMessage('ru-ru', require('./locales/en.json'))

  Vue.prototype.$func = func

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Simple', SimpleLayout)

}
