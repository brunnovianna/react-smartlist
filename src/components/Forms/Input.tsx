function Input({ className = "", ...props }){

    let nodeClass = `border rounded-md px-3`;

    if (className) {
       nodeClass += ` ${className}`;
    }
    return (
        <input 
            className={ nodeClass } 
            { ...props }
        />
    )
}

export default Input;