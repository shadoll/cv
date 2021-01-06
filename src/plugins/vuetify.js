import Vue from 'vue'
import Vuetify from 'vuetify'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    themes: {
      light: {
        primary: colors.amber.darken2,
      },
      dark: {
        primary: colors.amber.darken2,
      }
    },
  },
})
