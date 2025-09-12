import api from "./api";

import type { errorTypes, ListItem } from "../types";
import type { ResponseOK } from "../types";
import type { ResponseError } from "../types";
import { successResponse, errorResponse } from "./utils";

const getItems = async (): Promise<ResponseOK<ListItem[]> | ResponseError> => {
    try {
        const response = await api.get('/items');
        return successResponse(response.data);
    } catch (error) {
        console.log(error);
        return errorResponse(error as errorTypes);
    }
}

const getItem = async (id: number): Promise<ResponseOK<ListItem> | ResponseError> => {
    try {
        const response = await api.get(`/items/${id}`);
        return successResponse(response.data);
    } catch (error) {
        console.log(error);
        return errorResponse(error as errorTypes);
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
        const response = await api.post('/items', newItem);

        return successResponse(response.data);
    } catch (error: unknown) {
        console.log(error);
        return errorResponse(error as errorTypes);
    }
}

const updateItem = async (id: number, item: Partial<ListItem>): Promise<ResponseOK<ListItem> | ResponseError> => {
    try {
        await api.patch(`/items/${id}`, item);
        return await getItem(id);
    } catch (error: unknown) {
        return errorResponse(error as errorTypes);
    }
}

const updateItemText = async (id: number, text: string): Promise<ResponseOK<ListItem> | ResponseError> => {
    return await updateItem(id, { text });
}

const toggleItemCheck = async (id: number, checked: boolean): Promise<ResponseOK<ListItem> | ResponseError> => {
        return await updateItem(id, { checked: !checked });
}

const deleteItem = async (id: number): Promise<ResponseOK<ListItem> | ResponseError> => {
    try {
        const response = await api.delete(`/items/${ id }`);

        return successResponse(response.data);
    } catch (error: unknown) {
        console.log(error);
        return errorResponse(error as errorTypes);
    }
}

export { getItems, createNewItem, updateItem, updateItemText, toggleItemCheck, deleteItem };