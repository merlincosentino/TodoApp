import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";
import logo from "../assets/istockphoto-867053758-612x612.jpg";

interface TodoAppProps { }

const TodoApp: React.FC<TodoAppProps> = () => {
    const { todos, todosCount, todosPendingCount, handleTodo, handleDeleteTodo, handleToggleTodo, handleDeleteAllTodos } = useTodos();

    const disclaimerClass = 'text-xs text-slate-400'

    let backgroundClass = '';
    if (todosCount === 0 && todosPendingCount === 0) {
        backgroundClass = 'bg-slate-100';
    } else if (todosPendingCount === 0 && todosCount >= 1) {
        backgroundClass = 'bg-teal-100';
    } else if (todosPendingCount <= todosCount / 2) {
        backgroundClass = 'bg-yellow-100';
    } else {
        backgroundClass = 'bg-red-100';
    }

    return (
        <>
            <main className="w-screen h-screen">
                <section className="flex flex-col w-screen shadow-md">
                    <div className="flex flex-row justify-center text-center m-2">
                        <div className="h-10 w-10">
                            <img src={logo} className="object-cover object-center" />
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-3xl font-bold">ToDo</h1>
                            <h1 className="text-3xl font-bold text-teal-400">App</h1>
                        </div>
                    </div>
                    <hr />
                </section>

                <section className="flex flex-col w-full h-full bg-slate-100">
                    <div className="flex flex-col w-auto h-full m-2 md:mx-10 lg:mx-20 xl:mx-24 items-center bg-white border rounded-lg p-2 shadow-md">
                        <div>
                            <TodoAdd onNewTodo={handleTodo} />
                        </div>

                        <div className={`flex flex-row w-full ${backgroundClass} space-x-2 border rounded-md m-2 px-2 py-1 justify-around shadow-inner`}>
                            <h2>Anotadas: {todosCount}</h2>
                            <h2 className="justify-self-center">-</h2>
                            <h2>Pendientes: {todosPendingCount}</h2>
                        </div>

                        <div className="px-2 w-full items-left">
                            <TodoList
                                todos={todos}
                                onDeleteTodo={handleDeleteTodo}
                                onToggleTodo={handleToggleTodo}
                            />
                        </div>

                        <div className="w-full my-4">
                            <div className="shadow-md h-1 mx-3"></div>
                            <hr className="mx-2" />
                        </div>

                        <div>
                            <button
                                onClick={handleDeleteAllTodos}
                                className="border rounded-lg bg-red-300 px-2 py-1 hover:bg-red-500 font-semibold text-white shadow-inner hover:shadow-md"
                            >
                                Limpiar lista
                            </button>
                        </div>
                        <div className="text-center mx-8 my-2 space-y-2">
                            <p className={disclaimerClass}>El espacio donde se visualizan las tareas anotadas y pendientes cambia de color dependiendo de la cantidad de tareas realizadas, en comparación con las tareas anotadas.</p>
                            <p className={disclaimerClass}>Si el número de tareas realizadas es mayor al la mitad de las tareas anotadas el fondo será rojo</p>
                            <p className={disclaimerClass}>Si el número de tareas realizadas es igual o menor a la mitad de las tareas anotadas el fondo será amarillo.</p>
                            <p className={disclaimerClass}>Cuando todas las tareas hayan sido realizadas el fondo se tornará color verde.</p>
                            <p className={disclaimerClass}>Esto fue pensado como un incentivo para tu mente, espero te sea útil.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* "flex flex-row w-full bg-slate-100 space-x-2 border rounded-md m-2 px-2 py-1 justify-around"> */}
        </>
    );
};

export default TodoApp;