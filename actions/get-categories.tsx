import axios from "axios"
import { Category } from "@/types";



const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export const getCategories = async (): Promise<Category[]>=> {
    console.log(URL)
 
    const response = await axios.get(URL)
    return  response.data
  
}



export const getCategory = async (id:string): Promise<Category>=> {
    const response = await axios.get(`${URL}/${id}`)
    return  response.data
  
}



