interface Size {
    id: string;
    price: number;
}

interface SizeOption {
    [key: string]: number;
}

const SIZE: Size[] = [
    {id: 'XS', price: 8000},
    {id: 'S', price: 10000},
    {id: 'M', price: 12000},
    {id: 'L', price: 14000},
    {id: 'XL', price: 15000},
]
  
const sizeOption: SizeOption  = {XS: 1, S: 5, M: 2, L: 2, XL: 4};


const totalPrice = SIZE.reduce((currPrice, size) =>
currPrice + ((sizeOption[size.id] ?? 0) * size.price), 0);