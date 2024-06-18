import axios from "axios";
export const fetchAPi=axios.create({
    baseURL:import.meta.env.VITE_API_URl,
    headers:{
        Authorization:"bearer " + import.meta.env.VITE_API_Token
    },
})