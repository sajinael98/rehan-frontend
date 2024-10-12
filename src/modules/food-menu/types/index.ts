interface ItemSize { size: string; price: number; }
export interface Item {
    name: string;
    image: string;
    rate: number;
    desc: string;
    price: number;
    sizes: ItemSize[];
    modifiers: string[];
}