/* eslint-disable eqeqeq */
import axios from "axios";

const productApi = {
  getProduct: async ({ name, page, sort }) => {
    try {
      if (name == null) {
        return await axios
          .get(
            `https://619b19fb27827600174453c2.mockapi.io/products?filter=&page=${page}&limit=6&sortBy=price&order=${sort}`
          )
          .then((res) => res.data);
      } else {
        return await axios
          .get(
            `https://619b19fb27827600174453c2.mockapi.io/products?filter=${name}&page=${page}&limit=6&sortBy=price&order=${sort}`
          )
          .then((res) => res.data);
      }
    } catch (error) {
      console.log(error);
    }
  },
  getProductID: async (id) => {
    return await axios
      .get(`https://619b19fb27827600174453c2.mockapi.io/products/${id}`)
      .then((res) => res.data);
  },
};

export default productApi;
