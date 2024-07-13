const init = [
    {
        id: 1,
        content: "T2 di hoc",
        completed : true
    },
    {
        id: 2,
        content: "T3 di choi",
        completed : false
    },
    {
        id: 3,
        content: "T4 di tham quan",
        completed : false
    }
]
const todoReducer = (state = init, action) => {
    let newState = [...state];
    console.log(action,state);
    switch (action.type) {
        case "CREATE_TODO":
            return [
                ...newState,
                {
                    id: Date.now(),
                    content: action.content,
                    completed: false
                }
            ];
        case "DELETE_TODO":
            newState = state.filter(todo => todo.id !== action.id);
            return newState;

        case "COMPLETED_TODO":
            const index = newState.findIndex(item => {
                return item.id === action.id
            });
            newState[index].completed = true;
            console.log(newState[index]);
            return newState;

        case "UNDO_TODO":
            const indexUndo = newState.findIndex(item => {
                return item.id === action.id
            });
            newState[indexUndo].completed = false;
            console.log(newState[indexUndo]);
            return newState;
            
        default:
            return state;
    }
}

export default todoReducer;