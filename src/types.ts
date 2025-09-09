export interface ListItem {
    id: number;
    text: string;
    creationTime: Date;
    checked: boolean;
}

export interface ResponseOK<T> {
    status: 'ok';
    statusText: string;
    data: T;
}

export interface ResponseError {
    status: 'error';
    error: string | unknown;
}