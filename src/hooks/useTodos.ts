import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/todoReducer";

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

const init = (): Todo[] => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleTodo = (todo: Todo) => {
        const action: TodoAction = {
            type: 'Add Todo',
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteTodo = (id: number) => {
        dispatch({
            type: 'Remove Todo',
            payload: id,
        });
    };

    const handleToggleTodo = (id: number) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id,
        });
    };

    const handleDeleteAllTodos = () => {
        dispatch({
            type: 'Remove All Todos',
        });
    };

    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter((todo) => !todo.done).length,
        handleTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleDeleteAllTodos,
    };
};