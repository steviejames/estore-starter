import axios from "axios"
import { Category, ProductType } from "@/types";



const URL = `${process.env.NEXT_PUBLIC_API_URL}/product-types`

const getProductTypes = async (): Promise<ProductType[]>=> {
    console.log(URL)
 
    const response = await axios.get(URL)
    return  response.data
  
}


export default getProductTypes