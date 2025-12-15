export default function MenuItem({ title, isActiveItem, onClick, index }) {
    const activeClass = isActiveItem ? "text-blue-800 bg-gray-100" : "";
    return (
        <li onClick={() => onClick(index)}>
            <a
                href="#"
                className={`flex items-center px-2 py-2 text-body rounded-lg hover:text-blue-800 hover:bg-gray-100 ${activeClass}`}
            >
                <span className="ms-3">{title}</span>
            </a>
        </li>
    );
}
