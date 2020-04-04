export const state = {
};

export const getters = {
};

export const mutations = {
  retriveToken(state, payload) {
    state.loggedIn = true;
  },
  destroyToken(state) {
    state.token = null;
    state.user = null;
  },
};

export const actions = {
  /* logout({ state, commit }) {
    if (state.token) {
      return new Promise((resolve, reject) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        commit("destroyToken");
        resolve("OK");
      });
    }
  }, */
  /*  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      http
        .post("/login", {
          email: credentials.email,
          password: credentials.password
        })
        .then(res => {
          const token = res.data.token;
          const user = res.data.user;

          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          commit("retriveToken", token);
          resolve(res);
        })
        .catch(err => {
          reject(401);
        });
    });
  }, */
  register({ commit }, payload) {

    let oauth_uid, first_name, last_name, gender,locale;

    if(payload.provider == 'google') {
      oauth_uid = payload.user.sub;
      first_name = payload.user.given_name;
      last_name = payload.user.family_name;
      gender = payload.user.gender;
      locale = payload.user.locale;
    }else {
      oauth_uid = payload.user.id;
      first_name = payload.user.name.split(" ")[0];
      last_name = payload.user.name.split(" ")[1];
      gender = null;
      locale = null;
    }
    
    return new Promise((resolve, reject) => {
      http
        .post("register", {
          email: payload.user.email,
          first_name,
          last_name,
          gender,
          oauth_uid,
          oauth_provider: payload.provider,
          locale,
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err.response);
        });
    });
  },
  setToken({ commit }, payload) {
    if (payload.email) {
      commit("retriveToken", payload);
    }
  },
};