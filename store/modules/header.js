const state = {
  activeLogin: false,
  activeRegister: false
};

const getters = {
  activeLogin: state => state.activeLogin,
  activeRegister: state => state.activeRegister
};

const mutations = {
  setLogin(state) {
    state.activeLogin = !state.activeLogin;
  },
  setRegister(state) {
    state.activeRegister = !state.activeRegister;
  }
};

export default {
  state,
  getters,
  mutations
};
