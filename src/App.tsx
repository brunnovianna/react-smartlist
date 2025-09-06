import { useState } from 'react';

import type { ListItem } from './types';

import Header from './components/Header';
import ItemsList from './components/ItemsList';
import Button from './components/Forms/Button';
import Input from './components/Forms/Input';

import './App.css';

function App() {
  const listItemsDefault: ListItem[] = [{
    id: 1,
    text: 'Leite',
    creationTime: new Date(),
    checked: true
  }, {
    id: 2,
    text: 'Pão',
    creationTime: new Date(),
    checked: false
  }];
  const [listItems, setListItems] = useState<ListItem[]>(listItemsDefault);
  const [newItemText, setNewItemText] = useState("");

  const toggleChecked = (itemId: number) => {
    setListItems(listItems.map((item) => {
      if (item.id === itemId) {
        return {...item, checked: !item.checked};
      } 
      return item;
    }))
  }

  const handleNewItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemText(e.target.value);
  }
  

  const addItem = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setListItems([...listItems, {
      id: Date.now(),
      text: newItemText,
      creationTime: new Date(),
      checked: false
    }])
    setNewItemText('');
  }

  const deleteItem = (itemId: number) => {
    setListItems(listItems.filter((item) => item.id !== itemId));
  }

  const editItemText = (id: number, text: string) => {
    if (text) {
      setListItems(listItems.map((item) => {
        if (item.id === id) {
          return {...item, text };
        }
        return item;
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8 w-full">
        <Header itemsQty={ listItems.length }/>
        <div>
          <form onSubmit={ addItem }>
            <div className="flex mb-5 gap-5">
              <Input className="flex-1" value={ newItemText } onChange={ handleNewItemText } />
              <Button className={`p-2 rounded-md ${(!newItemText ? 'bg-gray-200' : 'bg-blue-300')}`} text="Novo item" disabled={ !newItemText } />
            </div>
          </form>
        </div>
        <div className="space-y-2">
          <ul>
            <ItemsList items={ listItems } onCheckItem={ toggleChecked } onNewText={ editItemText } onDelete={ deleteItem }/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
