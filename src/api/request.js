import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
axios.defaults.baseURL = "https://quizlet-proto-api.herokuapp.com/api/v1";

const request = (options) => {
  return axios({
    method: options.httpMethod,
    headers: {
      ...options.headers,
    },
    ...options,
  }).then((result) => result.data);
};

export default {
  GET: (options) => request({ ...options, httpMethod: "GET" }),
  POST: (options) => request({ ...options, httpMethod: "POST" }),
  DELETE: (options) => request({ ...options, httpMethod: "DELETE" }),
};
