import http from "@/plugins/http-address";

const state = {
  addresses: [],
  openmodal: false
};
const getters = {
  addresses: state => state.addresses,
  openmodal: state => state.openmodal
};
const mutations = {
  setAddresses(state, addresses) {
    state.addresses = addresses;
  },
  openModal(state, payload) {
    state.openmodal = payload;
  }
};
const actions = {
  addAddress({ commit }, payload) {
    const address = payload.address;
    const userid = payload.user.sub || payload.user.id;

    return new Promise((resolve, reject) => {
      http
        .post("/address", {
          userid,
          address_name: address.address_name,
          firstname: address.firstname,
          lastname: address.lastname,
          phone: address.phone,
          cityID: address.city.CityID,
          cityName: address.city.CityName,
          townID: address.town.TownID,
          townName: address.town.TownName,
          neighID: address.neigh.NeighborhoodID,
          neighName: address.neigh.NeighborhoodName,
          open_address: address.open_address,
          address_desc: address.address_desc
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(401);
        });
    });
  },
  async getAddresses({ commit }, user) {
    const userid = user.sub || user.id;

    const res = await http.get(`/address?userid=${userid}`);
    commit("setAddresses", res.data);
  },
  deleteAddress({ commit }, payload) {
    const id = payload.id;
    const userid = payload.user.sub || payload.user.id;

    return new Promise((resolve, reject) => {
      http
        .delete("/address", {
          data: { id, userid }
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
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
