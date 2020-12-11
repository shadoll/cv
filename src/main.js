// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '~/assets/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'
import CVLayout from '~/layouts/CV.vue'
import '~/plugins/vuetify.js'

export default function (Vue, { router, head, isClient, appOptions }) {
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
  appOptions.i18n.setLocaleMessage('ru-ru', require('./locales/en.json'))

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('CVLayout', CVLayout)
}
