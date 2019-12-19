import axios from "axios";

const Domain = gon.BASE_URL;
const baseURL = `${Domain}/api`;

export default axios.create({
  baseURL
});
