export interface Billboard {
    id: string
    label: string
    imageUrl: string
}

export interface Category {
    id: string
    name: string
    billboard: Billboard
}

export interface Product {
    id: string;
    category: category;
    name:string;
    price: string | number
    type: string;
    isFeatured: boolean;
    imageUrl: string
    images: Image[];
    productType: ProductType
    attributes: any
}

export interface Image {
    id:string;
    url: string;
}

export interface category {
    id: string;
    name: string;
}

export interface ProductType {
    id: string;
    name: string;
    attributes: AttributeType[];
      
}

export interface AttributeType {
    key: string;
    label: string;
  }
  
 export  interface Dimensions {
    height: number;
    width: number;
    depth: number;
  }
  
