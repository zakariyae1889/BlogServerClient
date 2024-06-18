import React from 'react'

function About() {
  return (
    <div className="content-body">
  <div className="container">
    <div className="row">
      <main className="col-md-12">
        <h1 className="page-title">About  AK Press</h1>
        <article className="post">
          <div className="entry-content clearfix">
            <figure className="img-responsive-center">
              <img
                className="img-responsive"
                src="img/me.jpg"
                alt="Developer Image"
              />
            </figure>
            <p>
             <h2 className='text-center'>Ak Press</h2>
              <strong>
                  is a website dedicated to providing
                  diverse and distinctive content in 
                  the field of journalism and articles.
                  We aim to offer in-depth analysis and
                  varied insights into current events 
                  across various fields with objectivity 
                  and precision
              </strong>
            </p>
           
            <div className="height-40px" />
            <h2 className="title text-center">Social</h2>
            <ul className="social">
              <li className="facebook">
                <a href="#">
                  <span className="ion-social-facebook" />
                </a>
              </li>
              <li className="twitter">
                <a href="#">
                  <span className="ion-social-twitter" />
                </a>
              </li>
              <li className="google-plus">
                <a href="#">
                  <span className="ion-social-googleplus" />
                </a>
              </li>
              <li className="tumblr">
                <a href="#">
                  <span className="ion-social-tumblr" />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  </div>
</div>

  )
}

export default About