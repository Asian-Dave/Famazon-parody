export interface IProduct{
    name:string,
    description:string,
    image:string,
    quantity:number,
    price:number,
    inStock:boolean
}


export class productModel{
    constructor(
        public name:string,
        public description:string,
        public image:string,
        public quantity:number,
        public price:number,
        public inStock:boolean
    ){}
}