import axios from "axios";

const userApi = {
  getUser: async (body) => {
    return await axios
      .post(
        `https://server-thelaptopworld.herokuapp.com/api/v1/tai-khoan-khach-hang/login`,
        body
      )
      .then((res) => res.data);
  },
  createUser: async (post) => {
    return await axios
      .post(
        `https://server-thelaptopworld.herokuapp.com/api/v1/tai-khoan-khach-hang`,
        post
      )
      .then((res) => res.data);
  },
};

export default userApi;
