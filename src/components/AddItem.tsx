import { useState } from 'react';

import Input from './Forms/Input';
import Button from './Forms/Button';

function AddItem({ onAddItem }: { onAddItem: (text: string) => void }) {
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
              <Input className="flex-1" value={ newItemText } onChange={ handleNewItemText } />
              <Button className={`p-2 rounded-md ${(!newItemText ? 'bg-gray-200' : 'bg-blue-300')}`} text="Novo item" disabled={ !newItemText } />
            </div>
          </form>
        </div>
    )
}

export default AddItem;