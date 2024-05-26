import React from 'react';
import './About.css';

const About = () => (
  <section id="about">
      <div className="container">
          <div className="about">
              <div className="title">About me</div>
              <div className="description item-fade">
                <p>I am an experienced frontend developer looking for creative projects to bring them alive and make them possible.</p> 
                <p>Checkout my github with all the javascript exercises and personal projects.</p>
                <p>
                  <a href="https://github.com/AccRPA" target='_blank' title='github'>
                    <i className="bi bi-github"></i>
                  </a>
                </p>
              </div>            
          </div>
      </div>
  </section>
);

export default About;
