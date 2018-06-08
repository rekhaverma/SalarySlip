import config from "./config.js";
// API's for client side
function post(path, data) {
  return requestToAPI("POST", path, data);
}
function get(path, data) {
  return requestToAPI("GET", path, data);
}
function put(path, data) {
  return requestToAPI("PUT", path, data);
}
function _delete(path, data) {
  return requestToAPI("DELETE", path, data);
}

function requestToAPI(method, path, data) {
  let url = config.serverUrl + path;
  let options = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  // Get method don't have body.
  method === "GET" && delete options.body;

  // Fetch data from server.
  return fetch(url, options)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .catch(error => {
      return error;
    });
}
export { post, get, put, _delete };
