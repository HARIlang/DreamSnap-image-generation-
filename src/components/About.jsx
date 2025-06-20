import React from "react";

const About = () => {
  return (
    <div className="container text-white mx-auto mt-10 ">
      <fieldset className="border-1 border-pink-300 p-4 rounded-xl ">
        <legend className="text-pink-500 px-4 text-xl">
          about the project
        </legend>

        <p className="my-4 ">
          This Prompt-to-Image Generator is a web application that transforms
          user-entered text prompts into images using the ClipDrop Text-to-Image
          API. Built with React JS, it provides a dynamic and responsive
          interface that is easy to use. Tailwind CSS is used for styling,
          giving the app a clean, modern, and visually appealing design.
        </p>
        <p className="my-4 ">
          To enhance user experience, the app incorporates React Skeleton
          Loader, which shows smooth loading animations while images are being
          generated. Navigation across different sections of the app is handled
          with React Router DOM, allowing seamless transitions without page
          reloads. This ensures the application is fast and efficient.
        </p>
        <p className="my-4 ">
          The tool is designed for anyone looking to quickly create AI-generated
          images for creative projects, presentations, or inspiration. By
          simplifying the process of converting text into visuals, it leverages
          advanced AI technology to bring ideas to life. This project was
          developed by S Hariharan.
        </p>
        <p className=" snap  text-center mt-10 ">created on 16th may 2025</p>
      </fieldset>
    </div>
  );
};

export default About;
