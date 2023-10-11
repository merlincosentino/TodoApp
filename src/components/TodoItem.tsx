import tacho from "../assets/recycle-bin-trash-can-garbage-icon-isolated-on-square-background-vector.jpg";

interface Todo {
    id: number;
    description: string;
    done: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo, onToggleTodo }) => {
    const handleToggle = () => {
        onToggleTodo(todo.id);
    };

    let todoDoneStyle = '';
    if (todo.done) {
        todoDoneStyle = 'italic text-slate-400 line-through';
    } else {
        todoDoneStyle = '';
    };

    return (
        <li>
            <div className="space-x-1 flex flex-row justify-between w-auto mx-2">
                <div className="space-x-1 align-center">
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={handleToggle}
                        className="accent-teal-500"
                    />
                    <span
                        className={`transition-all duration-100 text-xl ${todoDoneStyle} whitespace-normal break-words`}
                        // style={{ textDecoration: todo.done ? "line-through" : "none" }}
                        onClick={handleToggle}
                        aria-label="span"
                    >
                        {todo.description}
                    </span>
                </div>

                <button
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    <div className="h-6 w-6">
                        <img src={tacho} className="transition-all duration-100 object-cover object-center opacity-60 hover:opacity-100" />
                    </div>
                </button>
            </div>
        </li>
    );
};

export default TodoItem;