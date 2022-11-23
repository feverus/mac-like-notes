import * as I from '../../store/storeInterfaces';

export type StateType = {
    note: I.Note | undefined
};

export type ApiType = {
};

export type UseWorkSpace = () => [
    state: StateType,
    api: ApiType
];