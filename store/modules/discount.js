import http from "@/plugins/http-products";

const state = () => ({
  discountProducts: []
});

const getters = {
  discountProducts: state => state.discountProducts
};
const mutations = {
  setDiscountProducts(state, data) {
    state.discountProducts = data;
  }
};

const actions = {
  async getDiscountProduct({ commit }) {
    const res = await http.get("/discount");
    commit("setDiscountProducts", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
