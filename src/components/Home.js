import React from "react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="text-center d-flex align-items-center min-vh-100 "
      >
        <div className="row">
          <div className="col-md-8">
            <h1 className="display-1 fw-bold">
              Hi there! I am
              <br />
              <span className="text-brand">KOPAL.</span>
            </h1>
            <h4 className="mt-3 mb-5">
              A WEB developer and Coder in C++
            </h4>
            <a href="contact" className="btn btn-brand">
              Get Connected
            </a>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="./profile.jpg"
              className="rounded-circle float-end"
              alt="profile image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
