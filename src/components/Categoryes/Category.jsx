import React from 'react'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

function Categorypage() {
    const [articles ,setArticles]=useState([])
    const {name}=useParams();
    const {data,loading,error}= useFetch(`category/${name}`);
    useEffect(()=>{
        data &&  setArticles(data);
         
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
        if(articles){
            return(
            <>
                {
                    articles.map(article => (
                        <article className="post post-1" key={article.id}>
                            <header className="entry-header">
                                               <h1 className="entry-title">
                                               <a>
                                                   {article.title}
                                               </a>
                                               </h1>
                                               <div className="entry-meta">
                                               <span className="post-category">
                                                   <a>{article.category_name}</a>
                                               </span>
                                               <span className="post-date">
                                                   <a>
                                                   <time
                                                       className="entry-date"
                                                       dateTime="2012-11-09T23:15:57+00:00"
                                                   >
                                                       {article.create}
                                                   </time>
                                                   </a>
                                               </span>
                                               <span className="post-author">
                                                   <a>{article.author_name}</a>
                                               </span>
                                               <span className="comments-link">
                                                   <a>4 Comments</a>
                                               </span>
                                               </div>
                            </header>
                            <div className="entry-content clearfix">
                                <p>
                                {article.content}
                                </p>
                                              
                            </div>
                        </article>
                    ))
                }
                
                
            </>
          )

        }
        
        

    }
  return (
    <div className="content-body">
        <div className="container">
            <div className="row">
          
              <main className="col-md-12">
               { renderArticleContent ()}

              </main>
            </div>
          </div>
      </div>
  )
}
export default Categorypage