import { forwardRef } from "react";
const Input = forwardRef(function Input({ title, textarea, ...props }, ref) {
    let input = <input {...props} className="w-full bg-gray-300 p-1"  ref={ref}/>;
    if (textarea) {
        input = (
            <textarea
                {...props}
                className="w-full bg-gray-300  p-1 resize-none" ref={ref}
            ></textarea>
        );
    }
    return (
        <label className="my-5 block">
            <p className="uppercase font-semibold mb-2">{title}</p>
            {input}
        </label>
    );
});

export default Input;
