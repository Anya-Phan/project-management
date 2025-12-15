import Sidebar from "./components/Sidebar.jsx";
import NoProject from "./components/NoProject.jsx";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";

import { useState } from "react";

const PROJECT_DATAS = [];
function App() {
    const [projects, setProjects] = useState(PROJECT_DATAS);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [indexActive, setIndexActive] = useState(null);

    function addProject({ title, description, deadline, tasks }) {
        setProjects((prevState) => {
            const newState = [...prevState];
            newState.push({ title, description, deadline, tasks });
            return newState;
        });
    }

    function deleteProject() {
        setProjects((prevState) => {
            const newState = [...prevState];
            newState.splice(indexActive, 1);
            if (newState.length) {
                setIndexActive(0);
            }
            return newState;
        });
    }

    let mainContent = <NoProject onClickAdd={handleClickAdd}/>;

    if (projects.length) {
        if (indexActive) {
            mainContent = (
                <Project
                    projects={projects}
                    {...projects[indexActive]}
                    onDeleteProject={deleteProject}
                    indexActive={indexActive}
                    setProjects={setProjects}
                />
            );
        } else {
            mainContent = (
                <Project
                    projects={projects}
                    {...projects[0]}
                    onDeleteProject={deleteProject}
                    indexActive={0}
                    setProjects={setProjects}
                />
            );
        }
    }

    function handleClickAdd() {
        setIsAddClicked(true);
    }

    function handleNewTask() {
        setIsAddClicked(false);
    }
    return (
        <div className="flex h-screen">
            <Sidebar
                onClickAdd={handleClickAdd}
                projects={projects}
                onClickMenu={setIndexActive}
                indexActive={indexActive}
            />
            <main className="grow max-w-3xl p-10">
                {isAddClicked ? (
                    <NewProject
                        onHandleNewTask={handleNewTask}
                        saveFunction={addProject}
                    />
                ) : (
                    mainContent
                )}
            </main>
        </div>
    );
}

export default App;
