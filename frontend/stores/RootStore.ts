import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

class RootStore {
  counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore();
    makeAutoObservable(this);
  }
}

export default RootStore;
