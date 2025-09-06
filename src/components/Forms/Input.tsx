function Input({ 
    type = "text", 
    value = "", 
    checked = false,
    className = "", 
    onChange = () => {},
    onKeyDown = () => {}
}: { 
    type?: string, 
    value?: string, 
    checked?: boolean,
    className?: string, 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}){
    return (
        <input 
            type={ type } 
            value={ value } 
            checked={ checked }
            className={ `border rounded-md px-3 ${className}` } 
            onChange={ onChange }
            onKeyDown={ onKeyDown }
        />
    )
}

export default Input;