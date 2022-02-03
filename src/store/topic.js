import {getPage} from '../api/index';

const state = {
    topic: {}
};
const actions = {
    async getTopic({commit}, id, params) {
        let res = await getPage( id, params);
        commit('GETTOPIC', res);
    }
};
const mutations = {
    GETTOPIC(state, res) {
        state.topic = res;
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}