import NoPjImg from "../assets/no-projects.png"
export default function NoProject({onClickAdd}) {
    return <div className="flex flex-col items-center justify-center h-full">
        <img src={NoPjImg} alt="" className="w-24 object-contain h-auto"/>
        <p className="text-lg font-semibold my-5 text-center">You have no project here. Create a new project</p>
        <button onClick={onClickAdd} className="px-4 py-3 my-5 rounded-lg bg-gray-300 hover:bg-blue-800 hover:text-white transition-colors">Create a new project</button>
    </div>
}