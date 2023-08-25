import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCart=email=>{

    const {iLoading,refetch,isError,data,error}=useQuery({
        queryKey:["getInformation",email],
        queryFn:async()=>{
            // const response=await axios.get(`https://mr-college-server.vercel.app/getInformation?${email}`)
            // const response=await axios.get("https://mr-college-server.vercel.app/getInformation?")
            const response=await fetch("https://mr-college-server.vercel.app/getInformation")
            return response.json();      
        }
    })
    
    return [data,iLoading,refetch];
}

export default useCart;