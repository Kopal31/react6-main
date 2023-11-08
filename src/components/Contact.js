import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="full-height px-md-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 pb-4" data-aos="fade-up">
              <h3 className="text-brand">CONTACT</h3>
            
            </div>

            <div className="col-md-8" data-aos="fade-up" data-aos-delay="300">
              <form action="#" className="row g-md-3 gy-3">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="form-group col-12">
                  <textarea
                    name=""
                    rows="4"
                    className="form-control"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="form-group col-12 d-grid">
                  <button type="submit" className="btn btn-brand">
                    Contact me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
