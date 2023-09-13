// import { useReducer } from "react";

export default function reducer(state, action) {
    switch (action.type) {
      case "incremented_count": {
        return { count: state.count + 1 };
      }
      case "decremented_count": {
        return { count: state.count - 1 };
      }
      case "set_count": {
        return { count: action.value };
      }
      default: {
        // eslint-disable-next-line no-undef
        throw new error("unknown action: " + action.type);
      }
    }
  }


// export default function handleClick() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });
//     dispatch({ type: "incremented_count" });
//   }