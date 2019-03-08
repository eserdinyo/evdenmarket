import _ from "lodash";
import http from "@/plugins/http-cart";

const state = () => ({
  totalPrice: 0,
  isCartOpen: false,
  shopcart: []
});

const getters = {
  itemCount: state =>
    state.shopcart
      .map(product => product.quantity)
      .reduce((sum, current) => sum + current, 0),
  shopcart: state => _.uniqBy(state.shopcart, "productid"),
  isCartOpen: state => state.isCartOpen,
  totalPrice: state =>
    state.shopcart
      .map(item => item.price * item.quantity)
      .reduce((sum, current) => sum + current, 0)
};

const mutations = {
  toggleCart(state, payload) {
    if (payload == false) {
      state.isCartOpen = false;
    }
    else {
      state.isCartOpen = !state.isCartOpen;
    }
  },
  toggleCartFromProfil(state) {
    state.isCartOpen = false;
  },
  setShopcart(state, shopcart) {
    state.shopcart = shopcart;
  }
};

const actions = {
  addToCart({ commit }, payload) {
    const product = payload.product;
    const userid = payload.user.sub || payload.user.id;

    return new Promise((resolve, reject) => {
      http
        .post("/shopcart", {
          changeType: product.changeType, // increase or decrease product count on cart
          userid,
          productid: product.id,
          quantity: product.quantity,
          price: product.price,
          name: product.name,
          image: product.image
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(401);
        });
    });
  },
  deleteFromShopcart({ commit }, payload) {
    const id = payload.product.id;
    const userid = payload.user.sub || payload.user.id;

    return new Promise((resolve, reject) => {
      http
        .delete("/shopcart", {
          data: { id, userid }
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getShopcart({ commit }, user) {
    const userid = user.sub || user.id;

    return new Promise((resolve, reject) => {
      http
        .get("/shopcart", {
          params: {
            userid
          }
        })
        .then(res => {
          commit("setShopcart", res.data);
          resolve(res);
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
