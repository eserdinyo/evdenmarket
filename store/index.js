import Vuex from "vuex";

import Cart from "./modules/cart";
import Discount from "./modules/discount";
import Search from "./modules/search";
import Auth from "./modules/auth";
import Header from "./modules/header";
import Address from "./modules/address";
import Order from "./modules/order";
import Products from "./modules/product";
import Market from './modules/market';

const createStore = () => {
  return new Vuex.Store({
    getters: {
      isLoggedIn(state) {
        // state => state.auth.loggedIn
        if(state.auth.loggedIn && (state.auth.user.given_name || state.auth.user.name)) {
          return true;
        }else {
          return false;
        }
      },
      loggedUser: state => state.auth.user
    },

    modules: {
      Cart,
      Discount,
      Search,
      Auth,
      Header,
      Address,
      Order,
      Products,
      Market,
    }
  });
};

export default createStore;
