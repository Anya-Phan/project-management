import Input from "./Input.jsx";

import { useRef } from "react";
export default function NewProject({ saveFunction, onHandleNewTask }) {
    const name = useRef();
    const desc = useRef();
    const date = useRef();

    function handleSave() {
        const title = name.current.value;
        const description = desc.current.value;
        const deadline = date.current.value;
        const tasks = [];
        if (!title || !description || !deadline) return;
        saveFunction({ title, description, deadline, tasks });
        onHandleNewTask();
    }
    return (
        <section>
            <form>
                <ul className="flex gap-3 justify-end">
                    <li>
                        <button onClick={onHandleNewTask} type="button" className="px-2 py-1 hover:text-blue-800 hover:bg-gray-100">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleSave} type="button"
                            className="px-2 py-1 hover:text-blue-800 hover:bg-gray-100"
                        >
                            Save
                        </button>
                    </li>
                </ul>
                <div className="my-6">
                    <Input title="title" type="text" ref={name}></Input>
                    <Input
                        title="Description"
                        type="text"
                        textarea
                        rows={4}
                        ref={desc}
                    ></Input>
                    <Input title="deadline" type="date" ref={date}></Input>
                </div>
            </form>
        </section>
    );
}
