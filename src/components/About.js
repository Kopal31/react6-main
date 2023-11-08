import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="full-height px-md-5 spacing">
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-8">
              <h3 className="text-brand">ABOUT</h3>
              
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <p>
                  I'm Kopal soni , a third-year Computer Science Engineering student at VIT, Bhopal.
                  Currently, my focus is on diving deep into the world of Data Structures and Algorithms (DSA), honing my problem-solving skills, and understanding the core principles that power the digital world.

                  But my journey doesn't stop there. I'm also a full-stack web developer, which means I can not only create stunning front-end interfaces but also build robust back-end systems. This versatility allows me to bring my ideas to life in the digital realm and make them accessible to users all around the globe.

                  My commitment to innovation and my dedication to staying up-to-date with the latest technologies drive me to constantly learn and grow. In a world that's constantly evolving, I'm excited to be part of the tech industry's future and to make a significant impact through my work in computer science and web development.
                  <br/>
                  Let's code and innovate together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="full-height px-md-5 spacing">
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-8">
              <h3 className="text-brand">SKILLS</h3>
              
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-4">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <div className="iconbox rounded-4">
                  <i className="las la-thumbtack"></i>
                </div>
                <h4>WEB Developement</h4>
                <p>
                I'm a full-stack web developer aiming to create beautiful, user-friendly websites. With expertise in both front-end and back-end development, I'm passionate about crafting digital experiences that engage and serve a purpose. My goal is to bring value to users through well-designed and functional web applications, making the internet a better place for all. 
                </p>
                <a href="#" className="link-custom">
                  Read more
                </a>
              </div>
            </div>
           
            <div className="col-md-4">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <div className="iconbox rounded-4">
                  <i className="las la-thumbtack"></i>
                </div>
                <h4>C++ language</h4>
                <p>
                I have honed my problem-solving skills using the C++ programming language, demonstrating proficiency in creating efficient and high-performance solutions for a wide range of programming challenges. My expertise in C++ extends to object-oriented programming, enabling me to model and address real-world problems effectively. My commitment to continuous learning and problem-solving sets me apart in the world of programming, offering a strong foundation for a successful career in software development."
                </p>
                <a href="#" className="link-custom">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
