import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

import Load from './modules/load';
import cityPicker from './modules/citypicker'

export default new Vuex.Store({
    modules: {
        Load,
        cityPicker
    },
    plugins: [createLogger()]
})
