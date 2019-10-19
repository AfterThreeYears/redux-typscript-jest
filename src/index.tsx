import store from "./store";
import { addCount, subCount, asyncAdd } from "./store/counter/actions";


store.subscribe(updateCount);
store.subscribe(updateLoading);

const result = document.querySelector("#result");
const add: HTMLButtonElement | null = document.querySelector("#add");
const thunkAdd: HTMLButtonElement | null = document.querySelector("#thunkAdd");
const sub: HTMLButtonElement | null = document.querySelector("#sub");

add && add.addEventListener("click", () => {
  store.dispatch(addCount(1));
});

thunkAdd && thunkAdd.addEventListener("click", () => {
  store.dispatch(asyncAdd());
});

sub && sub.addEventListener("click", () => {
  store.dispatch(subCount(2));
});

function updateCount() {
  if (result) {
    result.innerHTML = store.getState().counter.count.toString();
  }
}

function updateLoading() {
  const loading = store.getState().counter.loading;
  if (thunkAdd) {
    thunkAdd.disabled = loading;
  }
}

updateCount();
