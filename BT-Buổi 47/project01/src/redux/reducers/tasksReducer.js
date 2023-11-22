const initialValue = {
  tasks: [],
};

export default function tasksReducer(state = initialValue, action) {
  switch (action.type) {
    case "tasks/push": {
      return { ...state, tasks: action.payload };
    }
    default: {
      return state;
    }
  }
}
