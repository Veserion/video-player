import { DataStore } from "./index";

class RootStore {
  public dataStore: DataStore;
  constructor() {
    this.dataStore = new DataStore(
      this
    );
  }
}

export { RootStore };
