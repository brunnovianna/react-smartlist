import { useState } from "react";

import type { ListItem } from "../types";

import Button from "./Forms/Button";
import Input from "./Forms/Input";

function ItemsList({ 
        items, 
        onNewText, 
        onDelete, 
        onCheckItem 
    }: { 
        items: Array<ListItem>, 
        onNewText: (id: number, text: string) => void, 
        onDelete: (id: number) => void,
        onCheckItem: (id: number) => void
    }) {

    const [editingText, setEditingText] = useState('');
    const [editingId, setEditingId] = useState<number | null>(null);

    const exitEditing = () => {
        setEditingId(null);
        setEditingText("");
      }

    const editItem = (id: number) => {
        const editingItem = items.find((item) => item.id === id);
        if (editingItem) {
            setEditingId(id);
            setEditingText(editingItem.text);
        }
    }
    
    const saveEditItem = () => {
        if (editingText && editingId) {
            onNewText(editingId, editingText);
            exitEditing();
        }
    }
    const handleEditItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditingText(e.target.value);
    }

    const handleEditInputKeyPress = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
        if (key == 'Enter') {
          saveEditItem();
        }
        if (key === 'Escape') {
          exitEditing();
        }
    }

    return (
        <div>
            {
              items.map(({id, checked, text}) => {

                return <li key={ id } className="flex text-left">
                    <div className={editingText && editingId === id ? " hidden" : "flex flex-auto gap-5"}>
                        <Input type="checkbox" onChange={() => onCheckItem(id)} checked={ checked } />
                      <div className="w-100 flex-auto" onDoubleClick={() => editItem(id)}>{ text }</div>
                      <Button text="🗑️" onClick={ () => onDelete(id) } />

                    </div>
                    <div className={!editingText || editingId !== id ? "hidden" : 'flex flex-auto gap-5'}>
                        <Input value={ editingText } className='flex-auto'
                            onChange={ handleEditItemText }
                            onKeyDown={ handleEditInputKeyPress } />
                        <Button text="✅" onClick={ saveEditItem }/>
                    </div>
                  </li>
              })
            }
        </div>
    )
}

export default ItemsList;