import axios from "axios";

export const http = axios.create({
    baseURL: "https://api.rahdid.com/api"
})


export const CategoryService = {

    getCategories: async function _getCategories() {
        return await http.get("/initial").then(response=>{
            return response.data.data.categories
        })
    },
    getProvinces: async function _getProvinces() {
        return await http.get("/initial").then(response=>{
            return response.data.data.provinces
        })
    },



    getRestaurants:async function(){
        return await http.get("/subjects?category=رستوران-ایرانی").then((response)=>{
            return response.data.data
        })
    }

}












