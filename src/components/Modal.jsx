import { createPortal } from "react-dom";
import { forwardRef, useRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ onDeleteProject }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            },
        };
    });
    function handleClickBackdrop(e) {
        if (e.target === dialog.current) {
            dialog.current.close();
        }
    }
    return createPortal(
        <dialog
            ref={dialog}
            className="p-5 rounded-[40px]  bg-white z-50 backdrop:bg-black/80"
            onClick={(e) => handleClickBackdrop(e)}
        >
            <div className="flex flex-col">
                <form method="dialog">
                    <button className="rounded-[50%] w-8 h-8 bg-slate-200 hover:bg-slate-400 ml-auto block">
                        &times;
                    </button>
                </form>

                <h2 className="font-medium py-5 text-2xl">
                    Are you sure you want to delete this project?
                </h2>
                <div className="flex gap-4 self-end">
                    <form method="dialog">
                        <button className="p-2 hover:text-blue-800 hover:bg-gray-100">
                            Cancel
                        </button>
                    </form>
                    <form onSubmit={onDeleteProject} method="dialog">
                        <button className="p-2 hover:text-blue-800 hover:bg-gray-100">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </dialog>,
        document.querySelector("#modal-root")
    );
});

export default Modal;
