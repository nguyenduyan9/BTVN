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

    case "list/addColumn": {
      const newListColumn = JSON.parse(JSON.stringify(state.listColumn));
      newListColumn.push(action.payload);
      return { ...state, listColumn: newListColumn };
    }

    case "list/deleColumn": {
      const newListColumn = JSON.parse(JSON.stringify(state.listColumn));
      const index = newListColumn.findIndex(({ column }) => {
        column._id === action.payload;
      });

      newListColumn.splice(index, 1);
      return { ...state, listColumn: newListColumn };
    }

    default: {
      return state;
    }
  }
}
