import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'

const Projects = () => {
  return (
    <div id="projects">
      <h1 className = "headexpe"> PROJECTS </h1>
      <div className = "projectcardhai">
      <ProjectCard
        imageSrc="https://imgs.search.brave.com/Pl64XtWrtzEFrNgFjbYty2HXwQUrkmLsrdIzGVDEcXs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lY29t/bWVjZWNlby5iLWNk/bi5uZXQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDgvT25s/aW5lLXNob3BwaW5n/LXdlYnNpdGVzLmpw/Zw"
        technologies={['React','HTML', 'CSS', 'JavaScript', 'NodeJS', 'MongoDB']}
        title="CartZone"
        description="CartZone facilitates online buying and selling with end-to-end user services akin to typical e-commerce platforms, enabling seamless transactions between buyers and sellers through its website interface."
      />
            <ProjectCard
        imageSrc="https://th.bing.com/th/id/OIP.cgb2oEHnmaC9H0KhZdXO7AHaEK?rs=1&pid=ImgDetMain"
        technologies={['React','HTML', 'CSS', 'JavaScript', 'NodeJS', 'MongoDB']}
        title="CeisZYC"
        description="CEISZYC is the festival website of THDC-IHET college. It enables event highlights, event participation applications, and serves other fest website functionalities."
      />
            <ProjectCard
        imageSrc="https://imgs.search.brave.com/peGCNO8N14Kmlv9-S88O7FeHINd_o0Os3HXn4EEPBEw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDA5Mjc1NTA2NDct/NDM2OTljYjE0OTE2/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4bGVI/QnNiM0psTFdabFpX/UjhOWHg4ZkdWdWZE/QjhmSHg4ZkE9PQ"
        technologies={[ 'Python', 'TensorFlow','React', 'NodeJS', 'Jupyter Notebook']}
        title="PATATO-DISEASE"
        description="Potato Disease Plant is a React project integrating convolutional layers of a deep learning model to classify potato plants as healthy or unhealthy."
      />
      </div>
    </div>
  );
};

export default Projects;
