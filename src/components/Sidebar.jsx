import MenuItem from "./MenuItem.jsx";
export default function Sidebar({
    onClickAdd,
    projects,
    onClickMenu,
    indexActive,
}) {
    const menuIndex = indexActive ? indexActive : 0;
    return (
        <nav className="shrink-0 z-40 w-64 h-full bg-white">
            <div className="h-full px-3 py-4 overflow-y-auto rounded-r-2xl border ">
                <h2 className="text-body py-3 text-2xl font-medium uppercase">
                    Your Project
                </h2>
                <button
                    onClick={onClickAdd}
                    className="px-4 py-3 my-5 rounded-lg bg-gray-300 hover:bg-blue-800 hover:text-white transition-colors"
                >
                    + Add a project
                </button>
                <ul className="space-y-2 font-medium">
                    {projects.map((project, index) => {
                        return (
                            <MenuItem
                                title={project.title}
                                onClick={onClickMenu}
                                isActiveItem={menuIndex === index}
                                key={index}
                                index={index}
                            />
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
