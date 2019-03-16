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
  getMarkets({ commit }, mid) {
    return new Promise((resolve, reject) => {
      http.get("/markets", {
        params: {
          mid
        }
      }).then(res => {
        commit("setMarkets", res.data);
        resolve(res);

      }).catch(err => {
        reject(401);
      })
    });

  },
  getMarket({ commit }, market_id) {
    return new Promise((resolve, reject) => {
      http.get("/market", {
        params: {
          market_id
        }
      }).then(res => {
        commit("setMarket", res.data);
        resolve(res);
      }).catch(err => {
        reject(401);
      })
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
