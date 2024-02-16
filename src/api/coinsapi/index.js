import axios from "../index";
const getCoinsApi = (query) => {
  return axios.get(`/assets/`);
};
export { getCoinsApi };
