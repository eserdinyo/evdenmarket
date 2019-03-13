import http from "@/plugins/http-cart";

const state = {
  markets: [],
  market: "",
};

const getters = {
  markets: state => state.markets,
  market: state => state.market,
};

const mutations = {
  setMarkets(state, markets) {
    state.markets = markets;
  },
  setMarket(state, market) {
    state.market = market;
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
  },
  async getMarket({ commit }, market_id) {
    const res = await http.get("/market", {
      params: {
        market_id
      }
    })

    commit("setMarket", res.data);

  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
