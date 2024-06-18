import React from 'react'
import { Link } from 'react-router-dom';
export default function Pagination({postPerPage,totalPosts,paginate}) {
    const pageNumber=[]; // 123
    for(let i=1;  i<= Math.ceil(totalPosts/postPerPage);i++){
        pageNumber.push(i);

    }
  return (
    <>  
       <article className="post post-1">
            <div className="entry-content clearfix">
                <div className="read-more ">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                {pageNumber.map(number=> (
                                    <li className="page-item  " key={number}>
                                        <Link className="page-link" onClick={()=>paginate(number)} >
                                            {number}
                                        </Link>
                                    </li>
                                    
                                ))}
                            </ul>
                        </nav>
                                    
                </div>
            </div>
        </article>
      
       

    </>
  )
}
