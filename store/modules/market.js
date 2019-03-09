import http from "@/plugins/http-cart";

const state = {
  markets: [],
  defaultMarket: "",
};

const getters = {
  markets: state => state.markets,
  defaultMarket: state => state.defaultMarket,
};

const mutations = {
  setMarkets(state, markets) {
    state.markets = markets;
  },
  setDefaultMarket(state, payload) {
    state.defaultMarket = payload;
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
  setDefaultMarket({ commit }, payload) {
    const oauth_uid = payload.user.sub || payload.user.id;
    const default_market = payload.marketid;

    return new Promise((resolve, reject) => {
      http
        .post("/defaultmarket", {
          oauth_uid, default_market
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  async getDefaultMarket({ commit }, user) {
    const oauth_uid = user.sub || user.id;
    const res = await http.get(`/defaultmarket?oauth_uid=${oauth_uid}`);
    commit("setDefaultMarket", res.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
