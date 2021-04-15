import { createContext, useContext } from "react";

import device from "./device";
import activity from "./activity";

export class Usesstore {
  devicestore;
  userActivitystore;
  constructor() {
    this.devicestore = new device();
    this.userActivitystore = new activity();
  }
}

export const StoreContext = createContext(new Usesstore());
export const StoreProvider = StoreContext.Provider;

const useStores = () => useContext(StoreContext);

export default useStores;
