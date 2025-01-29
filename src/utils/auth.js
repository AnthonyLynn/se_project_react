import { baseUrl } from "./constants.js";
import { getResult } from "./api.js";

export function signup({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      avatar: avatar,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getResult);
}

export function signin({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getResult);
}

export function getUserInfo(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(getResult);
}

export function editProfile({ name, avatar }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      avatar: avatar,
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(getResult);
}
