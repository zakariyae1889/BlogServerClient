import React,{Fragment, useEffect,useState} from 'react'
import { useFetch } from '../../hooks/useFetch';
import Pagination from './Pagination';
import Article from './Article'
function Post() {
  const [posts, setPosts] = useState([]);
  const [currentPage,setCurrentpage]=useState(1);
  const [postPerPage]=useState(4);
  

  const {data,loading,error}= useFetch(`article/`);
  const [filterPost,setFilterPost]=useState(data);
  useEffect(()=>{
    data &&  setPosts(data);
    setFilterPost(data);
  },[data]);
  // Get Current Post
  const indexOfLastPost=currentPage * postPerPage; 
  const indexOfFirstPost=indexOfLastPost - postPerPage;
  const currentPost=posts.slice(indexOfFirstPost,indexOfLastPost);


  const paginate =(pageNumber)=> setCurrentpage(pageNumber);


  
  return (
    <Fragment>
      <div className="content-body">
        <Article posts={currentPost} loading={loading} error={error} filterpost={filterPost}/>
        <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
      
      </div>
    
    
    </Fragment>
  )
}

export default Post