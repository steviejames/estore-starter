import axios from "axios"
import { Category, ProductType } from "@/types";
import queryString from "query-string";



const URL = `${process.env.NEXT_PUBLIC_API_URL}/product-types`

const getProductTypes = async (categoryId?: string): Promise<ProductType[]> => {
    const url = queryString.stringifyUrl({
        url: URL,
        query: {
            categoryId: categoryId,
        }
    })

    const response = await axios.get(url)
    return response.data

}


export default getProductTypes