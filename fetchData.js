import { data } from "./data.js";

export const fetchData = () => {
  return () => {
    console.log("yay you did it!");
  };
  //   return new Promise((res, rej) => {
  //     res(data);
  //   });
};
