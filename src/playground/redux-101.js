import { createStore } from "redux";

// incrementBy değeri boş veya null gelirse default olarak 1 veriliyor
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return { count: state.count + incrementBy };
      break;
    case "DECREMENT":
      const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return { count: state.count - decrementBy };
      break;
    case "RESET":
      return { count: 0 };
      break;
    case "SET":
      const count = typeof action.count === "number" ? action.count : 0;

      return { count: count };
      break;
    default:
      return state;
      break;
  }
};

const store = createStore(countReducer);

// state her değiştiğinde otomatik olarak çalışır
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 3 }));


store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});


store.dispatch({
  type: "RESET"
});


store.dispatch({
  type: "SET",
  count: 100
});

store.dispatch(setCount());
store.dispatch(setCount({ count: 10 }));
store.dispatch(resetCount());