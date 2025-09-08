import type { InputHTMLAttributes } from 'react';
import Item from "./Item";

function ItemEdit ({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return <Item 
        { ...props }
    />
}

export default ItemEdit;