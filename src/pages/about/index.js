// src/pages/about/About.js
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Container } from "react-bootstrap";
import { meta } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Me | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Personal and Emotional About Me Section */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Hello! I'm Sreechandh,</h3>
            <p>
              Growing up in India, I was always fascinated by the myriad ways technology could connect people and solve problems. But I never imagined that curiosity would lead me halfway around the world to the United States, where I’m now pursuing my passion for computer science at Arizona State University (ASU). Moving to a new country alone was daunting. I remember landing in Arizona, my heart pounding with a mix of excitement and fear. I left behind the familiar aroma of my mother’s cooking, the chaos of Indian streets, and the comfort of speaking my native tongue, all for the dream of mastering the language of computers.
            </p>
            <p>
              The journey hasn’t been easy. I faced moments of intense homesickness, especially during festivals like Diwali, when I missed the vibrant celebrations with my family and friends. But it was during these moments of solitude that I found my true strength. I immersed myself in my studies and discovered a community of like-minded individuals who shared my passion for technology and innovation. We bonded over late-night coding sessions, brainstorming ideas, and navigating the challenges of being international students in a foreign land.
            </p>
            <p>
              I learned to embrace the unknown, to adapt, and to thrive. I applied these lessons beyond the classroom, whether it was leading a project that used machine learning to address water scarcity in remote parts of Nepal, or organizing coding workshops for underrepresented communities at ASU. I believe that my diverse background gives me a unique perspective on problem-solving and a deep empathy for others navigating unfamiliar terrain.
            </p>
            <p>
              Every line of code I write is a step closer to bridging the gap between my two worlds. I carry my culture and values with me, infusing them into every project I undertake. I believe in the power of technology not just to innovate, but to connect, empower, and bring about meaningful change.
            </p>
          </Col>
        </Row>

        {/* Fun Facts Section with Personal Touch */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">A Few Things You Might Not Know About Me</h3>
            <ul>
              <li>Back in India, I once coded an app that helped local farmers optimize their crop yields based on weather patterns—an effort close to my heart because my grandparents were farmers.</li>
              <li>I’m a self-taught tabla player and often find rhythm and patterns in music to be as soothing as a well-structured algorithm.</li>
              <li>During my first winter in Arizona, I experienced snow for the first time. My friends laughed as I ran outside in sheer wonder, reminding me that it’s okay to be amazed by the little things.</li>
              <li>Inspired by my mother’s resilience, I developed an AI tool that detects early signs of diabetes, something that has affected my family back home for generations.</li>
              <li>When I feel overwhelmed, I cook a traditional Indian meal and share it with my friends here—it's my way of staying connected to home and spreading a bit of my culture.</li>
            </ul>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Skills</h3>
            <div className="skills-grid">
              <div className="skill-card"><a href="#python-experience">Python</a></div>
              <div className="skill-card"><a href="#java-experience">Java</a></div>
              <div className="skill-card"><a href="#cpp-experience">C/C++</a></div>
              <div className="skill-card"><a href="#spark-experience">Spark</a></div>
              <div className="skill-card"><a href="#sql-experience">SQL</a></div>
              <div className="skill-card"><a href="#api-dev-experience">API Development</a></div>
              <div className="skill-card"><a href="#bash-experience">Bash</a></div>
              <div className="skill-card"><a href="#ml-experience">TensorFlow</a></div>
              <div className="skill-card"><a href="#ml-experience">PyTorch</a></div>
              <div className="skill-card"><a href="#js-experience">JavaScript</a></div>
              <div className="skill-card"><a href="#reactjs-experience">ReactJS</a></div>
              <div className="skill-card"><a href="#web-dev-experience">Web Development</a></div>
            </div>
          </Col>
        </Row>

        {/* Personal Reflection Section */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Why I Do What I Do</h3>
            <p>
              My journey from India to the USA has taught me that the best way to overcome fear is to embrace it. Each challenge is an opportunity to learn and grow, and I am grateful for the chance to push beyond my comfort zone every day. I am driven by a desire to make a difference—to use technology to solve real-world problems, to inspire others, and to build bridges between cultures and communities. This is more than just a career for me; it’s a calling, and I am excited to see where it takes me next.
            </p>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Let's Connect and Build Together</h3>
            <p>
              I’m always looking for new opportunities to collaborate, learn, and grow. If my story resonates with you, or if you’re just curious about what I’m working on next, feel free to reach out. I’d love to hear your story and explore how we can create something amazing together!
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
