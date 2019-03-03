import http from "@/plugins/http-address";

const state = {
  orders: "",
  orderDetails: ""
};
const getters = {
  orders: state => state.orders,
  orderDetails: state => state.orderDetails
};
const mutations = {
  setOrders(state, orders) {
    state.orders = orders;
  },
  setOrderDetails(state, orderDetails) {
    state.orderDetails = orderDetails;
  }
};
const actions = {
  addOrder({ commit }, payload) {
    const order = payload.order;
    const userid = payload.user.sub || payload.user.id;

    return new Promise((resolve, reject) => {
      http
        .post("/order", {
          userid,
          market_id: 2,
          order_service: order.service,
          order_total: order.total,
          order_payment: order.payment,
          order_note: order.note,
          order_adress: order.address
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(401);
        });
    });
  },
  deleteShopcartAfterOrder({ commit }, payload) {
    const userid = payload.user.sub || payload.user.id;

    return new Promise((resolve, reject) => {
      http
        .delete("/order", {
          data: { userid }
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  async getOrders({ commit }, payload) {
    const userid = payload.user.sub || payload.user.id;
    const res = await http.get("/order", {
      params: {
        userid
      }
    });
    commit("setOrders", res.data);
  },
  addOrderDetail({ commit }, payload) {
    const orderid = payload.orderid;
    const product = payload.product;
    const userid = payload.user.sub || payload.user.id;

    return new Promise((resolve, reject) => {
      http
        .post("/orderdetail", {
          userid,
          orderid,
          name: product.name,
          image: product.image,
          quantity: product.quantity,
          price: product.price
        })
        .then(res => {
          resolve(res);
          console.log(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  async getOrderDetails({ commit }, payload) {
    const userid = payload.user.sub || payload.user.id;
    const orderid = payload.orderid;
    const res = await http.get("/orderdetail", {
      params: {
        userid,
        orderid
      }
    });

    commit("setOrderDetails", res.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
