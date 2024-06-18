import React,{useEffect,useState} from 'react'
import { useFetch } from '../../hooks/useFetch';
function Recentposts() {
    const [postRecent ,setpostRecent]=useState([])
    const {data,loading,error}= useFetch("post");
    useEffect(()=>{
        data &&  setpostRecent(data);
         
    },[data]);
    const  renderArticleContent = ()=>{
        
        if(loading){
            return(<div>loading...</div>)
        }
        if(error){
            return(
                <Fragment>
                    <h1>error</h1>
                    <p>{String(error)}</p>
                </Fragment>
            )
        }
        if(postRecent){
            return(
            <>
                <div class="widget widget-recent-posts">		
							<h3 class="widget-title">Recent Posts</h3>		
							<ul>
                                {
                                    postRecent.map(article => (
                                        <li key={article.id}>
									      <a>{article.title}</a>
								        </li>
                                    ))
                                }
								
								
							</ul>
						</div>
                
                
                
            </>
          )

        }
        
        

    }

  return (

   <>
    <div className="widget widget-recent-posts">
     
       
          {renderArticleContent()}
           
        
     </div>
      
   </>
  )
}

export default Recentposts