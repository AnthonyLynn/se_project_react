import { createContext } from "react";
export const WeatherContext = createContext({
  city: "",
  type: "",
  timeOfDay: "day",
  condition: "default",
  temp: { F: 999, C: 999 },
});
