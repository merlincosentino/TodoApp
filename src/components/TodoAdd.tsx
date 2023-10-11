import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

interface TodoAddProps {
    onNewTodo: (newTodo: Todo) => void;
}

interface Todo {
    id: number;
    description: string;
    done: boolean;
}

const TodoAdd: React.FC<TodoAddProps> = ({ onNewTodo }) => {
    const [description, setDescription] = useState<string>('');

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo: Todo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo(newTodo);
        setDescription('');
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className="space-x-2"
        >
            <input
                className="border border-slate-300 rounded-md py-1 px-1 shadow-sm hover:border-teal-200 focus:outline-none focus:border-teal-400 focus:ring-teal-500 focus:ring-1"
                type="text"
                placeholder="¿Qué hay que hacer?"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                className="bg-teal-300 text-white font-semibold shadow-inner hover:shadow-md border rounded-lg py-1 px-2 hover:bg-teal-400"
                type="submit"
            >
                Agregar
            </button>
        </form>
    );
};

export default TodoAdd;
