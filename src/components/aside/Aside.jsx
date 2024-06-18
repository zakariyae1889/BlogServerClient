import React from 'react'
import Category from '../Home/Category'
import Recentposts from "../Home/Recentposts"

function Aside() {
  return (
    <aside className="col-md-4">
                       
        <Recentposts/>
        <Category/>
   
   </aside>
  )
}

export default Aside