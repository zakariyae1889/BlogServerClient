import React from 'react'
import {useEffect,useState} from 'react'
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Category() {
    const [category ,setCategory]=useState([])
    const {data,loading,error}= useFetch("category/");
     useEffect(()=>{
        data &&  setCategory(data);
         
     },[data]);
     const  renderArticleContent = ()=>{
        if(loading){
            return(<div>loading...</div>)
        }
        if(error){
            <Fragment>
                <h1>error</h1>
                <p>{String(error)}</p>
            </Fragment>
        }
        
        
        return(
            <>
            {
          
               category.map(categoryes=>(
                <li key={categoryes.id}>
                    <Link to={`category/${categoryes.name}`}>
                        {categoryes.name}
                    </Link>
                </li>
            ))}

              


            </>
        )
       

     }
  return (
   <>
        <div className="widget widget-category">
            <h3 className="widget-title">Category</h3>
            <ul>
              
             {renderArticleContent()}
            </ul>
        </div>
      
   </>
  )
 
}

