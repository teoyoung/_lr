export interface ItemUID {
    uid: string;
}

export type GetGeneratedType<T extends ItemUID | ItemUID> = T;