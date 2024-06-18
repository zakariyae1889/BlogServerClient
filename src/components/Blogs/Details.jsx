import React from 'react'
import {useEffect,useState} from 'react'
import { useFetch } from '../../hooks/useFetch';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
    const { slug } = useParams();
    const [Details, setDetails] = useState({});
    const {data,loading,error}= useFetch("article/" + slug);
    useEffect(()=>{
        data && setDetails(data);
         
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
        <Fragment>

            <article className="post post-1" key={Details.id}>
            <header className="entry-header">
            <h1 className="entry-title">
            <a>
            {Details.title}
            </a>
            </h1>
            <div className="entry-meta">
            <span className="post-category">
            <a>{Details.category_name}</a>
            </span>
            <span className="post-date">
            <a>
            <time
            className="entry-date"
            dateTime="2012-11-09T23:15:57+00:00"
            >
            {Details.create}
            </time>
            </a>
            </span>
            <span className="post-author">
            <a>{Details.author_name}</a>
            </span>
            <span className="comments-link">
            <a>4 Comments</a>
            </span>
            </div>
            </header>
            <div className="entry-content clearfix">
            <p>
            {Details.content}
            </p>
            </div>
            </article>

           
        
        </Fragment>
    )
  }
return (
    <Fragment>
        <div className="content-body">
            <div className="container">
                <div className="row">
                    <main className="col-md-12">
                        {renderArticleContent()}
                    </main>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
export default  BlogDetails