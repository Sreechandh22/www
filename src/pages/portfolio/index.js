import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles.css";

const projects = [
  {
    id: 1,
    title: "ClinicalBERT: AI Model for Healthcare",
    description: "Developed a model using ClinicalBERT to analyze EHR data for colon cancer risk prediction, leveraging advanced NLP techniques.",
    link: "https://github.com/Sreechandh22/ClinicalBERT"
  },
  {
    id: 2,
    title: "Groundwater Algorithm",
    description: "Built a machine learning model for groundwater level predictions using Sentinel-2 datasets, leveraging Google Earth Engine.",
    link: "https://github.com/Sreechandh22/Groundwater-Algorithm"
  },
  {
    id: 3,
    title: "SpotCheck: Skin Cancer Detection App",
    description: "Created a mobile app for early skin cancer detection using image recognition, utilizing TensorFlow Lite for on-device predictions.",
    link: "https://github.com/Sreechandh22/SPOTCHECK"
  },
  {
    id: 4,
    title: "ClipCentauri: Your Ultimate Clipboard Manager",
    description: "A feature-rich clipboard management application that allows users to store, access, and organize up to 100 clipboard items with ease. Highlights include starred items, quick access, and customizable settings.",
    link: "https://github.com/Sreechandh22/ClipCentauri"
    },
  {
    id: 5,
    title: "SafeSide: Your Personal Safety Companion",
    description: "A comprehensive safety app designed to guide individuals to safety during active shooter emergencies. Features include real-time evacuation plans, monitored updates, and an emergency button.",
    link: "https://docs.google.com/presentation/d/1EUVMYWGnS6hZUFlFK_QXBeGXTspLorB16OprJDfExcg/edit#slide=id.g2118dbc31e5_1_100"
    },
  {
    id: 6,
  title: "Securing the IoT: Harnessing AI and Quantum Computing",
  description: "A comprehensive framework for IoT security, leveraging AI for malware detection and quantum computing for unbreakable encryption. Focused on enhancing privacy and reducing cyber threats.",
  link: "https://docs.google.com/presentation/d/1ArWq_8ZB1y3Z2X0A_C3BHfnb5A5xYCX6MYRdac2vQQk/edit#slide=id.g22cb6aa3376_2_76"
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1 className="portfolio-title">My Projects</h1>
      <div className="portfolio-list">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
