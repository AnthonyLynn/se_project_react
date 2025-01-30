import { baseUrl } from "./constants.js";
import { request } from "./api.js";

export function signup({ name, avatar, email, password }) {
  return request(`${baseUrl}/signup`, {
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
  });
}

export function signin({ email, password }) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getUserInfo(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export function editProfile({ name, avatar }, token) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      avatar: avatar,
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
