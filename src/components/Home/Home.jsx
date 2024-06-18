import React,{useEffect,useState} from 'react'
import { useFetch } from '../../hooks/useFetch';
import Article from './Article'
import Aside from '../aside/Aside'

export default function Home() {
  const [postRecent ,setpostRecent]=useState([])
  const {data,loading,error}= useFetch("post");
  useEffect(()=>{
    data &&  setpostRecent(data);
       
  },[data]);
  return (
    <div className="content-body">
      <div className="container">
        <div className="row">
          <Article post={postRecent} loading={loading} error={error} />
          <Aside/>
        </div>
      </div>
    </div>
  )
}
