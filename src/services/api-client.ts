import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "33dca040c9e24856ba804dc128340f01",
  },
});
