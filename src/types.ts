export interface ListItem {
    id: number;
    text: string;
    creationTime: Date;
    checked: boolean;
}

export interface ResponseOK<T> {
    status: "ok";
    data: T;
}

export interface errorTypes {
    code?: string
    response?: {
        status: number
    }
}

export interface ResponseError {
    status: 'error';
    error: string;
}
