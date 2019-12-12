import "whatwg-fetch";
import { message } from "antd";

// const API_URL = "http://localhost:8000";
const API_URL = window.location.origin;

var requests = {
  get(path) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/${path}/`, {
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            let errors = `${res.status}, ${res.statusText}`;
            throw errors;
          }
        })
        .then(json => {
          resolve(json);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  post(values, path) {
    console.log(`post values is ${JSON.stringify(values)}`);
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/${path}/`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
        })
      })
        .then(function(data) {
          resolve(data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },

  put(values, id) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(values),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
        })
      })
        .then(function(data) {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  del(id) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/${id}/`, {
        method: "DELETE",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json"
          // "Cache-Control": "no-cache"
        })
      })
        .then(res => {
          if (res.ok) {
            return;
          } else {
            let errors = `${res.status}, ${res.statusText}`;
            throw errors;
          }
        })
        .then(json => resolve(json))
        .catch(result => reject(result));
    });
  }
};

export default requests;
