import api from "./api";

import type { ListItem } from "../types";
import type { ResponseOK } from "../types";
import type { ResponseError } from "../types";

const getItems = async (): Promise<ResponseOK<ListItem[]> | ResponseError> => {
    try {
        const { status, data, statusText} = await api.get('/items');

        if (status === 200) {
            return {
                status: 'ok',
                statusText,
                data
            };
        } else {
            throw new Error('Algo deu errado');
        }
        
    } catch (error) {
        console.log(error);
        return {
            status: 'error',
            error
        };
    }
}

const getItem = async (id: number): Promise<ResponseOK<ListItem> | ResponseError> => {
    try {
        const { status, data, statusText} = await api.get(`/items/${id}`);

        if (status === 200) {
            return {
                status: 'ok',
                statusText,
                data
            };
        } else {
            throw new Error('Algo deu errado');
        }
        
    } catch (error) {
        console.log(error);
        return {
            status: 'error',
            error
        };
    }
}

const createNewItem = async (text: string): Promise<ResponseOK<ListItem> | ResponseError> => {
    const newItem: ListItem = {
        id: Date.now(),
        text,
        checked: false,
        creationTime: new Date()
    }
    try {
        const { status, data, statusText } = await api.post('/items', newItem);

        if (status === 201) {
            return {
                status: 'ok',
                statusText,
                data,
            };
        } else {
            throw new Error('Nao criado');
        }
    } catch (error: unknown) {
        console.log(error);
        return {
            status: 'error',
            error
        }
    }
}

const updateItem = async (id: number, item: Partial<ListItem>): Promise<ResponseOK<ListItem> | ResponseError> => {
    try {
        const { status } = await api.patch(`/items/${id}`, item);

        if (status !== 200) {
            throw new Error('Erro ao atualizar item');
        }

        const response = await getItem(id);
        
        if (response.status !== 'ok') {
            throw new Error('Erro ao buscar item atualizado');
        }

        return {
            status: 'ok',
            statusText: response.statusText,
            data: response.data
        };
        
    } catch (error: unknown) {
        console.log(error);
        return {
            status: 'error',
            error
        }
    }
}

const updateItemText = async (id: number, text: string): Promise<ResponseOK<ListItem> | ResponseError> => {
    try {
        const updateResponse = await updateItem(id, { text });

        return updateResponse;
    } catch (error: unknown) {
        console.log(error);
        return {
            status: 'error',
            error
        }
    }
}

const toggleItemCheck = async (id: number, checked: boolean): Promise<ResponseOK<ListItem> | ResponseError> => {
    try {
        const updateResponse = await updateItem(id, { checked: !checked });

        return updateResponse;
    } catch (error: unknown) {
        console.log(error);
        return {
            status: 'error',
            error
        }
    }
}

const deleteItem = async (id: number): Promise<ResponseOK<ListItem> | ResponseError> => {
    try {
        const response = await api.delete(`/items/${ id }`);

        if (response.status !== 200) {
            throw new Error('Erro ao deletar');
        }

        return {
            status: 'ok',
            statusText: response.statusText,
            data: response.data
        };;
    } catch (error: unknown) {
        console.log(error);
        return {
            status: 'error',
            error
        }
    }
}

export { getItems, createNewItem, updateItem, updateItemText, toggleItemCheck, deleteItem };