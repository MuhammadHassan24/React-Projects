import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../redux/reducer"

function TodosList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
        <>

            <ul className=" flex flex-col justify-center items-center gap-5">
                {todos.length === 0 ? (
                    <p className="text-gray-400">No todos available.</p>
                ) : (
                    <ul className="flex flex-col justify-center items-center gap-5 w-full">
                        {todos.map((todo) => (
                            <li key={todo.id} className="flex justify-between items-center w-2/4 bg-gray-600 p-2">
                                <div className="text-black">{todo.text}</div>
                                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                            </li>
                        ))}
                    </ul>
                )}

            </ul>
        </>
    )
}

export default TodosList
