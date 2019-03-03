import http from "@/plugins/http-cart";

const state = {
  markets: []
};

const getters = {
  markets: state => state.markets
};

const mutations = {
  setMarkets(state, markets) {
    state.markets = markets;
  }
};
const actions = {
  async getMarkets({ commit }, mid) {
    const res = await http.get("/markets", {
      params: {
        mid
      }
    });
    commit("setMarkets", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
