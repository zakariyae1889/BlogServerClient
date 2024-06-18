import React from 'react'

function Contact() {
  return (
    <>
      <div className="content-body">
        <div className="container">
          <div className="row">
            <main className="col-md-12">
              <h1 className="page-title">Contact</h1>
              <article className="post">
                <div className="entry-content clearfix">
                  <form action="#" method="post" className="contact-form">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required=""
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required=""
                        />
                        <textarea
                          name="message"
                          rows={7}
                          placeholder="Your Message"
                          required=""
                          defaultValue={""}
                        />
                        <button className="btn-send btn-5 btn-5b ion-ios-paperplane">
                          <span>Drop Me a Line</span>
                        </button>
                      </div>
                    </div>{" "}
                    {/* row */}
                  </form>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>

    
    
    </>
  )
}

export default Contact