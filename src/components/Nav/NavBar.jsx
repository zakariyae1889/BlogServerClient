import React from 'react'
import { Outlet, Link } from "react-router-dom";
function NavBar() {
  return (
    <>
        <div className="container w-50 mb-5">	
            <header id="site-header">
                <div className="row">
                    <div className="col-md-4 col-sm-5 col-xs-8">
                        <div className="logo">
                            <h1><a><b>AK</b>Press</a></h1>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-7 col-xs-4">
                        <nav className="main-nav" role="navigation">
                            <div class="navbar-header">
                                <button type="button" id="trigger-overlay" class="navbar-toggle">
                                    <span class="ion-navicon"></span>
                                </button>
                            </div>
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="cl-effect-11"><Link to={"/"} data-hover="Home">Home</Link></li>
                                    <li class="cl-effect-11"><Link to={"/blog"} data-hover="Blog">Blog</Link></li>
                                    <li class="cl-effect-11"><Link  to={"/about"} data-hover="About">About</Link></li>
                                    <li class="cl-effect-11"><Link to={"/contact"} data-hover="Contact">Contact</Link></li>
                                  
                                    
                                </ul>
                            </div>
                        </nav>
                        


                    </div>
                </div>
             </header>
        </div>
        <Outlet/>
    </>
  )
}

export default NavBar