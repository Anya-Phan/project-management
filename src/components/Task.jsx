export default function Task({
    title,
    completed,
    onDoneClick,
    onClearClick,
    index,
}) {
    return (
        <li className={"first:border-t-0 border-t-[2px] border-t-zinc-100"}>
            <div className="p-2 flex justify-between">
                <p className={`${completed ? "line-through" : ""}`}>{title}</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => onDoneClick(index)}
                        className="hover:text-blue-800 font-medium"
                    >
                        {completed ? "Undone" : "Done"}
                    </button>
                    <button
                        onClick={() => onClearClick(index)}
                        className="hover:text-blue-800 font-medium"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </li>
    );
}
