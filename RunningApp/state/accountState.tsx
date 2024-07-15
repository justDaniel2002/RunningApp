import { atom } from "recoil";

export const accountState = atom({
    key: 'account', // unique ID (with respect to other atoms/selectors)
    default: undefined, // default value (aka initial value)
  });