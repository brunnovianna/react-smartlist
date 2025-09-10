import { useState } from 'react';

import Input from './Forms/Input';
import Button from './Forms/Button';

function AddItem({ onAddItem, blocked }: { onAddItem: (text: string) => void, blocked: boolean }) {
    const [newItemText, setNewItemText] = useState("");

    const handleNewItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemText(e.target.value);
    }

    const addNetItem = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewItemText("");
        onAddItem(newItemText);
    }

    return (
        <div>
          <form onSubmit={ addNetItem }>
            <div className="flex mb-5 gap-5">
              <Input className="flex-1" value={ newItemText } onChange={ handleNewItemText } disabled={ blocked } />
              <Button className={`p-2 rounded-md ${(!newItemText ? 'bg-gray-200 text-gray-400' : 'bg-blue-300')}`} text="Novo item" disabled={ !newItemText || blocked } />
            </div>
          </form>
        </div>
    )
}

export default AddItem;