import axios from "axios"
import {  Book, Product } from "@/types";
import qs from 'query-string'


interface Query {
    categoryId?: string;
    productTypeId?: string;
    isFeatured?: boolean;
    search?: string
}
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export const getProducts = async (query:Query): Promise<Book[]>=> {
   const url = qs.stringifyUrl({
    url: URL,
    query:{
        categoryId: query.categoryId,
        productTypeId: query.productTypeId,
        isFeatured: query.isFeatured,
        search: query.search,
      
    }
   })
 
    const response = await axios.get(url)
    return  response.data
  
}




export const getProduct = async (id:string): Promise<Product>=> {
    const url = `${URL}/${id}`
  
     const response = await axios.get(url)
     return  response.data
   
 }
 
 