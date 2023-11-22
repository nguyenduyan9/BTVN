const initialValue = {
  listColumn: [],
};
export default function listReducer(state = initialValue, action) {
  switch (action.type) {
    case "list/getList": {
      const listNew = action.payload.columns.map((item) => {
        item.tasks = [];
        action.payload.tasks.forEach((task) => {
          if (item.column === task.column) {
            const { _id, content, column } = task;
            item.tasks.push({ _id, content, column });
          }
        });
        return item;
      });
      return { ...state, listColumn: listNew };
    }
    default: {
      return state;
    }
  }
}
