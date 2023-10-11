interface Todo {
    id: number;
    description: string;
    done: boolean;
}

type TodoAction =
    | { type: "Add Todo"; payload: Todo }
    | { type: "Remove Todo"; payload: number }
    | { type: "Toggle Todo"; payload: number }
    | { type: "Remove All Todos" };

export const todoReducer = (initialState: Todo[] = [], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "Add Todo":
            return [...initialState, action.payload];

        case "Remove Todo":
            return initialState.filter((todo) => todo.id !== action.payload);

        case "Toggle Todo":
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }
                return todo;
            });

        case "Remove All Todos":
            return [];

        default:
            return initialState;

    }
};