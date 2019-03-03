import http from "@/plugins/http-cities";

export const state = () => ({
  cities: [],
  towns: [],
  districts: [],
});

export const getters = {
  cities: state => state.cities,
  towns: state => state.towns,
  districts: state => state.districts
};

export const mutations = {
  setCities(state, data) {
    state.cities = data;
  },
  setTowns(state, data) {
    state.towns = data;
  },
  setDistricts(state, data) {
    state.districts = data;
  }
};

export const actions = {
  async getCities({ commit }) {
    const res = await http.get("/cities");
    commit("setCities", res.data);
  },
  async getTowns({ commit }, cityid) {
    const res = await http.get("/towns", {
      params: {
        cityid
      }
    });
    commit("setTowns", res.data);
  },
  async getNeighborhoods({ commit }, townid) {
    const res = await http.get("/districts", {
      params: {
        townid
      }
    });
    commit("setDistricts", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
