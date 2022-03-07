export default {
  namespaced: true,

  state: {
    mode: '',
    section: '',
  },

  mutations: {
    setAppMode(state, mode) {
      if (state.mode !== mode) {
        state.mode = mode;
        state.section = '';
      }
    },
    setAppSection(state, section) {
      if (state.section !== section) {
        state.section = section;
      }
    },
  },

  actions: {},

  getters: {
    isFinder(state) {
      if (state.mode === 'finder') return true;
      return false;
    },

    isCreator(state) {
      if (state.mode === 'creator') return true;
      return false;
    },

    isAuth(state) {
      if (state.mode === 'authentication') return true;
      return false;
    },

    isMyMatches(state) {
      if (state.section === 'my-matches') return true;
      return false;
    },

    isMatchOverview(state) {
      if (state.section === 'match-overview') return true;
      return false;
    },
  },
};
