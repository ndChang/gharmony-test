import Axios from "axios";
let apiURL;

const apiUrls = {
  development: "http://localhost:3000/users"
};
if (window.location.hostname === "localhost") {
  apiurl = apiUrls.development;
}
const api = Axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: "Bearer"
  }
});

export default api;
