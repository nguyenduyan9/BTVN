export default function rootReduce(state, action) {
  switch (action.type) {
    case "play/currentValue": {
      return { ...state, currentValue: action.payLoad - 1 };
    }
    case "play/reset": {
      return { ...state, currentValue: action.payLoad };
    }
  }
}
