import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from "sweetalert";
// const baseUrl = `http://localhost:4000`;
const baseUrl = `https://damri-mks.herokuapp.com`;
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {},
    status: "",
    token: localStorage.getItem("token") || "",
    listBus: []
  },

  mutations: {
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_request(state) {
      state.status = "loading";
    },
    auth_error(state) {
      state.status = "error";
    },
    auth_user(state, xuser) {
      state.user = xuser;
    },
    all_bus(state, bus) {
      state.listBus = bus;
    }
  },

  actions: {
    doLogin({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: baseUrl + `/api/users/signin`,
          method: "POST",
          data: user
        })
          .then(resp => {
            const token = resp.data.token;
            const xuser = resp.data.user;
            console.log(resp.xuser);
            commit("auth_user", xuser);
            commit("auth_success", token);
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            resolve(resp);
            window.location = "/";
          })
          .catch(err => {
            if (err.response.status === 400) {
              commit("auth_error");
              localStorage.removeItem("token");
              reject(err);
              swal({
                title: "Wrong Password",
                text: "Please Input password incorrect",
                icon: "error"
              });
            } else if (err.response.status === 500) {
              swal({
                title: "Notice",
                text: `Username not register`,
                icon: "error"
              });
            }
          });
      });
    },

    cekLogin({ commit }) {
      axios({
        url: baseUrl + `/api/users/`,
        method: "GET",
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(response => {
          const user = response.data;
          commit("auth_user", user);
        })
        .catch(err => {
          commit("auth_user", "");
        });
    },

    logout({ commit }) {
      console.log(`masuk`);

      return new Promise((resolve, reject) => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },

    getBus({ commit }) {
      axios({
        url: baseUrl + `/api/bus`,
        method: "get",
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(response => {
          let bus = response.data;
          commit("all_bus", bus);
        })
        .catch(err => {
          commit("all_bus", []);
        });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});
