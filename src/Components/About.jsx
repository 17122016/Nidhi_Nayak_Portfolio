import React from "react";
import "./About.css"; // Import the CSS file
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "As a Web developer aiming to design and develop experiences that make people's lives easy, I am looking for a job in a dynamic company that values innovation and user-centered design.";

const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my developer experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-section">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
