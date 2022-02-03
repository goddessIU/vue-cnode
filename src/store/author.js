import { getAuthor } from '../api/index';

const state = {
    author: {}
};
const actions = {
    async GetAuthor({commit}, loginname) {
        let res = await getAuthor(loginname)
        commit('GETAUTHOR', res);
    }
};
const mutations = {
    GETAUTHOR(state, res) {
        state.author = res;
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}