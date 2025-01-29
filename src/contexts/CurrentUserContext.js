import { createContext } from "react";
export const CurrentUserContext = createContext({
  username: "",
  email: "",
  avatar: "",
  _id: "",
});
