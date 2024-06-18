import { useState,useEffect } from "react";
import { fetchAPi } from "./fetchapi";
export const  useFetch =(endPoint)=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const fetchDataArticle= async ()=>{
            try{
                setLoading(true);
                const response= await fetchAPi.get(endPoint);
                setData(response.data.article);
            }catch (error){
                   setError(error);
            }
            finally{
                setLoading(false);
            }
        } 
        fetchDataArticle();
        //----------------------------------------//
        const fetchDataCategory= async ()=>{
            try{
                setLoading(true);
                const response= await fetchAPi.get(endPoint);
                setData(response.data.category);
            }catch (error){
                   setError(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchDataCategory();
    },[endPoint]);
    return {data,loading,error}

}