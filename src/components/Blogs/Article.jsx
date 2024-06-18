import React,{Fragment} from 'react'
import { Link} from 'react-router-dom';
const Article=({posts,loading,error,filterpost}) => {
  const handleChange = (e)=>{
    filterpost=posts.filter(post=>post.title.toLowerCase().includes(e.target.value));
  }

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
    if(filterpost)
    {
        return(
          <>
            {
              filterpost.map(post => (
                <article className="post post-1" key={post.id}>
                          <header className="entry-header">
                              <h1 className="entry-title">
                              <span>
                                  {post.title}
                              </span>
                              </h1>
                              <div className="entry-meta">
                              <span className="post-category">
                                  <a>{post.category_name}</a>
                              </span>
                              <span className="post-date">
                                  <a>
                                  <time
                                      className="entry-date"
                                      dateTime="2012-11-09T23:15:57+00:00"
                                  >
                                      {post.create}
                                  </time>
                                  </a>
                              </span>
                              <span className="post-author">
                                  <a>{post.author_name}</a>
                              </span>
                              <span className="comments-link">
                                  <a>4 Comments</a>
                              </span>
                              </div>
                          </header>
                          <div className="entry-content clearfix">
                              <p>
                              {post.content}
                              </p>
                              <div className="read-more cl-effect-14">
                              <Link to={`${post.slug}`} className="more-link">
                                  Continue reading <span className="meta-nav">→</span>
                              </Link>
                              </div>
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
      <div className="container">
        <section className="post post-1">
                <div className="entry-header">
                  <div className="entry-title">
                    <div className="form-outline mb-4" data-mdb-input-init>
                      <label className="form-label" htmlFor="datatable-search-input">Search Article</label>
                      <input 
                        type="search" 
                        className="form-control" 
                        id="datatable-search-input"
                        onChange={handleChange()}
                      />
                    </div>
                  </div>
                </div>
        </section>
        <div className="row">
          <main className="col-md-12">
            { renderArticleContent ()}
          
          

           
          </main>
        </div>
      </div>
    </Fragment>
  )
}
export default Article