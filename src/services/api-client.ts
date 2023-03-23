import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f4e1faf887da427bb9043403a464b840",
  },
});
