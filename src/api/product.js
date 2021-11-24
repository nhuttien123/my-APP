/* eslint-disable eqeqeq */
import axios from "axios";

const productApi = {
  getProduct: async ({ name, page }) => {
    try {
      if (name == undefined) {
        return await axios
          .get(
            `https://619b19fb27827600174453c2.mockapi.io/products?filter=&page=${page}&limit=6`
          )
          .then((res) => res.data);
      } else {
        return await axios
          .get(
            `https://619b19fb27827600174453c2.mockapi.io/products?filter=${name}&page=${page}&limit=6`
          )
          .then((res) => res.data);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default productApi;
