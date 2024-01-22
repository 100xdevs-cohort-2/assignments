import { atom, selectorFamily } from "recoil";
import axios from "axios";

export const usernameAtom = atom({
  key: "usernameAtom",
  default: null,
});

export const userInfoSelecor = selectorFamily({
  key: "userInfoSelecor",
  get: (userID) => async () => {
    if (!userID) {
      console.log("Username value is not set !");
      return null;
    }

    try {
      const res = await axios.get(`https://api.github.com/users/${userID}`);

      return res.data;
    } catch (err) {
      console.log(err);
      throw Error;
    }
  },
});
