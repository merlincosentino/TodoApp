import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    description: string;
    done: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;