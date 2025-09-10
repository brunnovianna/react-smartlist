import { useEffect, useState } from 'react';

import type { ListItem, ResponseOK, ResponseError } from './types';

import { getItems, createNewItem, updateItemText, toggleItemCheck, deleteItem } from './services/items';

import Skeleton from './components/Skeleton/Skeleton';

import Header from './components/Header';
import ItemsList from './components/ItemsList';
import Button from './components/Forms/Button';
import Input from './components/Forms/Input';

import './App.css';

function App() {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [newItemText, setNewItemText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadItems = async () => {
    let items: ListItem[] = [];
    try {
      const response = await getItems();

      if (response.status === 'ok') {
        items = response.data;
      }

      return items;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(()=> {
    let canLoadItems = true;
    setIsLoading(true);

    async function startLoadingItems() {
        const items: ListItem[] = await loadItems();

        if (canLoadItems) {
          setListItems(items);
        }
        setIsLoading(false);
    }

    startLoadingItems();
    return () => {
      canLoadItems = false;
    }
  }, []);

  const createItem = async (text: string) => {
    try {
      const response: ResponseOK<ListItem> | ResponseError = await createNewItem(text);

      if (response.status === 'ok') {
        setListItems([...listItems, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const toggleChecked = async (id: number, checked: boolean) => {
    const response: ResponseOK<ListItem> | ResponseError = await toggleItemCheck(id, checked);

    if (response.status === 'ok') {
      setListItems(listItems.map((item) => {
        if (item.id === id) {
          return response.data;
        } 
        return item;
      }))
    }
  }

  const handleNewItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemText(e.target.value);
  }

  const addItem = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createItem(newItemText);
    setNewItemText('');
  }

  const remove = async (id: number) => {
    const response = await deleteItem(id);
    if (response.status === 'ok') {
      setListItems(listItems.filter((item) => item.id !== id));
    }
    
  }

  const editItemText = async (id: number, text: string) => {
    if (text) {
      const response = await updateItemText(id, text);

      if (response.status === 'ok') {
        setListItems(listItems.map((item) => {
          if (item.id === id) {
            return { ...response.data };
          }
          return item;
        }))
      }
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
          {
            isLoading ? 
              <Skeleton /> :
              <ul>
                <ItemsList items={ listItems } onCheckItem={ toggleChecked } onNewText={ editItemText } onDelete={ remove }/>
              </ul>
          }
        </div>
      </div>
    </div>
  )
}

export default App;
