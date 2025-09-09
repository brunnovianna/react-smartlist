import { useState } from "react";

import type { ListItem } from "../types";

import Button from "./Forms/Button";
import ItemEdit from "./ItemEdit";
import ItemView from "./ItemView";

function ItemsList({ 
        items, 
        onNewText, 
        onDelete, 
        onCheckItem 
    }: { 
        items: Array<ListItem>, 
        onNewText: (id: number, text: string) => void, 
        onDelete: (id: number) => void,
        onCheckItem: (id: number, checked: boolean) => void
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

    const editItemNode = <>
        <ItemEdit 
            value={ editingText }
            onChange={ handleEditItemText }
            onKeyDown={ handleEditInputKeyPress }
        />
        <Button text="✅" onClick={ saveEditItem }/>
    </>

    const viewItemNode = ({ id, text, checked }: { id: number, text: string, checked: boolean }) => {

        return (<>
            <ItemView 
                checked={ checked }
                text={ text }
                onCheck={ () => onCheckItem(id, checked) }
                onStartEditing = { () => editItem(id) }
            />
            <Button text="🗑️" onClick={ () => onDelete(id) } />
        </>)
    }

    return (
        <div>
            {
              items.map((item) => {

                return <li key={ item.id } className="flex text-left">
                    
                    <div className="flex flex-auto gap-5">
                        {
                            editingText && editingId === item.id ?
                                editItemNode: 
                                viewItemNode(item)
                        }
                        
                    </div>
                  </li>
              })
            }
        </div>
    )
}

export default ItemsList;