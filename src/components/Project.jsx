import Task from "./Task.jsx";
import Modal from "./Modal.jsx";
import { useRef, useState } from "react";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default function Project({
    title,
    description,
    deadline,
    tasks,
    projects,
    onDeleteProject,
    indexActive,
    setProjects,
}) {
    const date = new Date(deadline);
    const modal = useRef();
    const inputAddTask = useRef();
    function showDeleteModal() {
        modal.current.open();
    }

    function addTask(title) {
        inputAddTask.current.value = "";
        inputAddTask.current.focus();

        setProjects((prevState) => {
            const newState = structuredClone(prevState);
            const tasks = newState[indexActive].tasks;
            tasks.push({ title, completed: false });
            return newState;
        });
    }
    function updateTask(index) {
        setProjects((prevState) => {
            const newState = structuredClone(prevState);
            const tasks = newState[indexActive].tasks;
            tasks[index].completed = !tasks[index].completed;
            return newState;
        });
    }
    function deleteTask(index) {
        setProjects((prevState) => {
            const newState = structuredClone(prevState);
            const tasks = newState[indexActive].tasks;
            tasks.splice(index, 1);
            return newState;
        });
    }

    return (
        <div>
            <Modal
                ref={modal}
                projects={projects}
                onDeleteProject={onDeleteProject}
            />
            <section>
                <button
                    onClick={showDeleteModal}
                    className="px-2 py-1 flex ml-auto mb-4 hover:text-blue-800 hover:bg-gray-100"
                >
                    Delete
                </button>
                <h2 className="text-4xl font-medium uppercase">{title}</h2>
                <p className="italic my-1">{`${date.getDate()} ${
                    months[date.getMonth()]
                }, ${date.getFullYear()}`}</p>
                <p className="my-3">{description}</p>
                <div className="flex gap-4">
                    <input
                        ref={inputAddTask}
                        type="text"
                        className="bg-gray-300 p-1 flex-auto"
                    />
                    <button
                        onClick={() => addTask(inputAddTask.current.value)}
                        className="px-2 py-1 rounded-lg  hover:text-blue-800 hover:bg-gray-100 transition-colors"
                    >
                        Add task
                    </button>
                </div>

                <ul className="bg-red-100 my-8">
                    {projects[indexActive].tasks.map((task, index) => {
                        return (
                            <Task
                                {...task}
                                key={index}
                                onDoneClick={updateTask}
                                onClearClick={deleteTask}
                                index={index}
                            />
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
