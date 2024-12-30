import axios from "axios";

const BaseUrl = "https://api.allorigins.win/raw?url=https://www.freetogame.com/api";


export const FetchApi = async (url) =>{
    try{
        
        const {data} = await axios.get(`${BaseUrl}${url}`)
        return data
    }
    catch(err){
        console.log("error",err)
    }
}