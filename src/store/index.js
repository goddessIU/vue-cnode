import Vue from 'vue';
import Vuex from 'vuex';

import home from './home';
import topic from './topic';
import author from './author';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        topic,
        author
    }
})