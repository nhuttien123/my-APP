import axios from "axios";
import { URL } from "./BaseUrl";

const productApi = {
  getProduct: async () => {
    return await axios.get(`${URL}/products`).then((res) => res.data);
  },
};

export default productApi;
