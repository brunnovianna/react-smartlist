import type { InputHTMLAttributes } from 'react';

import Input from "./Forms/Input";

function ItemView ({ 
    text = "",
    onCheck, 
    onStartEditing, 
    ...props }: { 
        text: string,
        onCheck: () => void,  
        onStartEditing: () => void,
    } & InputHTMLAttributes<HTMLInputElement>){
    return (
        <>
            <Input 
                type="checkbox" 
                checked={ props.checked }
                onChange={ onCheck }
                />
            <div className="w-100 flex-auto" onDoubleClick={ onStartEditing }>{ text }</div>
        </>
    )

}

export default ItemView;