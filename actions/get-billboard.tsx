import axios from "axios"
import { Billboard } from "@/types";



const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id:string)=> {
    const response = await fetch(`${URL}/${id}`)
    return  response.json()
}


export default getBillboard