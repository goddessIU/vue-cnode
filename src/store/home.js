import { getTopics, getTopicsLength, getAllTopics } from '../api/index';

const state = {
    topicContents: [],
    topicsLength: 0,
    allTopics: [],
};

const mutations = {
    GETTOPICS(state, data) {
        state.topicContents = data;
    },
    GETTOPICSLENGTH(state, data) {
        state.topicsLength = data;
    },
    GETALLTOPICS(state, data) {
        state.allTopics = data;
    },
};

const actions = {
    async GetTopics({commit}, {page, tab, limit, mdrender}) {
        let result = await getTopics({page, tab, limit, mdrender})
        let result2 = await getTopicsLength({tab, mdrender});
        commit('GETTOPICS', result);
        commit('GETTOPICSLENGTH', result2.length);
    },
    async GetAllTopics({commit}) {
        let res = await getAllTopics();
        commit('GETALLTOPICS', res);
    },
};

const getters = {
    
};

export default {
    state,
    mutations,
    actions,
    getters
}