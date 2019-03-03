import http from "@/plugins/http-products";

const state = () => ({
  products: [],
  searchbarProducts: "",
  searchedProducts: []
});

const getters = {
  products: state => state.products,
  searchedProducts: state => state.searchedProducts,
  searchbarProducts: state => state.searchbarProducts.slice(0, 5)
};
const mutations = {
  setProducts(state, data) {
    state.products = data;
  },
  setSeachedProducts(state, data) {
    state.searchedProducts = data;
  },
  setSearchbarProducts(state, data) {
    state.searchbarProducts = data;
    if (data.length == 0) state.searchbarProducts = "";
  },
  setProduct(state, data) {
    state.product = data;
  }
};

const actions = {
  async getProductsWithCategory({ commit }, cid) {
    const res = await http.get("/products", {
      params: {
        cid
      }
    });
    commit("setProducts", res.data);
  },
  getProductsWithSearch({ commit }, searchWord) {
    return new Promise((resolve, reject) => {
      http
        .get("/search", {
          params: {
            searchWord
          }
        })
        .then(res => {
          resolve(res.data[0]);
          commit("setSeachedProducts", res.data);
          commit("setSearchbarProducts", res.data);
        })
        .catch(err => {
          reject(401);
        });
    });
  },
  getProductsForSeachbar({ commit }, searchWord) {
    return new Promise((resolve, reject) => {
      http
        .get("/search", {
          params: {
            searchWord
          }
        })
        .then(res => {
          resolve(res.data[0]);
          commit("setSearchbarProducts", res.data);
        })
        .catch(err => {
          reject(401);
        });
    });
  },
  getProductWithId({ commit }, id) {
    return new Promise((resolve, reject) => {
      http
        .get("/product", {
          params: {
            id
          }
        })
        .then(res => {
          resolve(res.data[0]);
        })
        .catch(err => {
          reject(401);
        });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
