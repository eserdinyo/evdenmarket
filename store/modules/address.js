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
          city: address.city,
          district: address.district,
          neighborhood: address.neighborhood,
          street: address.street,
          apt_name_no: address.apt_name_no,
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

    const res = await http.get("/address", {
      params: {
        userid
      }
    });
    commit("setAddresses", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
