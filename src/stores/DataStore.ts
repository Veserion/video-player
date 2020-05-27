import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { action, observable } from "mobx";

export interface IItem {
  id: number;
  timestamp: number;
  duration: number;
  zone: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

export class DataStore extends SubStore {
  @observable items: IItem[] = [];
  
  constructor(rootStore: RootStore) {
    super(rootStore);
    this.syncItems();
  }

  @action syncItems = async () => {
    this.items = (await fetch("http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd").then(response => response.json())) as IItem[];
  };
}
