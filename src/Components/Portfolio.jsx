import React from "react";
import image from "../images/frame.png";
import image2 from "../images/some.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "BeatWave- Generating Music from Images",
    description:
      "Using python libraries and Django framework, I created a web application that generates music from images. The application uses image processing to extract colors from the image and then uses the colors to generate music.",
    url: "https://github.com/GayathriPCh/Image-to-music-mapping-with-python-libraries",
  },
  {
    title: "SkyQuest - Night sky explorer",
    description:
      "An experimental project using just html,css and js, to create a website that includes a gallery, an event calendar and blogs about astronomy.",
    url: "https://github.com/GayathriPCh/SKYQUEST",
  },
  {
    title: "Steller society - a space-themed chat integrated music player",
    description: "A collaborative project and under development.",
    url: "https://github.com/GayathriPCh/Steller-Society",
  },
   {
    title: "EV Breeze - My first 24hr Hackathon project",
    description: "A collaborative project developed during a 24hr hackathon.",
    url: "https://github.com/GayathriPCh/EV_Breeze",
  },
   {
    title: "Kaleido - A react-based Gemini powered color exploration application",
    description: "A collaborative project developed for the Google AI hackathon",
    url: "https://github.com/GayathriPCh/Kaleido",
  },
   
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <img className="background" src={image2} alt="" />
      <h2
        style={{ textAlign: "center", color: "white", backgroundColor: "black", padding: "10px" }}
      >
        Portfolio
      </h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", padding: "10px" }}>
          <img
            src={image}
            style={{ height: "80%", width: "80%", objectFit: "cover", padding: "10px" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{
                padding: "10px",
                color: "black", // Text color
                backgroundColor: "white", // Background color
                marginBottom: "10px",
                fontFamily: "",
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "80px", fontWeight: "bold", color: "black" }}>
                  {project.title}
                </h3>
              </a>
              <p className="small" style={{ color: "black" }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
