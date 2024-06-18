import React,{Fragment} from 'react'
const Article=({post,loading,error})=> {
   
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
        if(post){
            return(
            <>
                {
                    post.map(article => (
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
        <Fragment>
            <main className="col-md-8">
            {renderArticleContent()}
            </main>
        </Fragment>
    )
  
}
export default Article